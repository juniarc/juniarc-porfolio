"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;

  maxOpacity?: number;
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    const toRGBA = (color: string) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 0, 0,";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  }, [color]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const cols = Math.floor(width / (squareSize + gridGap));
      const rows = Math.floor(height / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      const hovered = new Uint8Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares, hovered, dpr };
    },
    [squareSize, gridGap, maxOpacity]
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number
    ) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = `${memoizedColor}${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap) * dpr,
            j * (squareSize + gridGap) * dpr,
            squareSize * dpr,
            squareSize * dpr
          );
        }
      }
    },
    [memoizedColor, squareSize, gridGap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: ReturnType<typeof setupCanvas>;

    const updateCanvasSize = () => {
      const newWidth = width || container.clientWidth;
      const newHeight = height || container.clientHeight;
      setCanvasSize({ width: newWidth, height: newHeight });
      gridParams = setupCanvas(canvas, newWidth, newHeight);
    };

    updateCanvasSize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const col = Math.floor(mouseX / (squareSize + gridGap));
      const row = Math.floor(mouseY / (squareSize + gridGap));

      const { rows, squares, hovered, dpr } = gridParams;
      const squareSizeWithGap = squareSize + gridGap;

      const index = col * rows + row;

      if (index >= 0 && index < squares.length) {
        if (!hovered[index]) {
          hovered[index] = 1; // Mark square as hovered

          const opacity = squares[index];
          const newOpacity = opacity < maxOpacity / 2 ? maxOpacity : 0;
          squares[index] = newOpacity;

          const x = col * squareSizeWithGap * dpr;
          const y = row * squareSizeWithGap * dpr;

          ctx.clearRect(x, y, squareSize * dpr, squareSize * dpr);
          ctx.fillStyle = `${memoizedColor}${newOpacity})`;
          ctx.fillRect(x, y, squareSize * dpr, squareSize * dpr);
        }
      }
    };

    let lastTime = 0;
    const animate = (time: number) => {
      if (!isInView) return;

      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      updateSquares(gridParams.squares, deltaTime);
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    intersectionObserver.observe(canvas);

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleMouseMoveBound = handleMouseMove.bind(null);

    canvas.addEventListener("mousemove", handleMouseMoveBound);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMoveBound);
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

  useGSAP(async () => {
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const delay = 3.5;

    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      delay: delay,
    });
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      endTrigger: "footer",
      end: "top top",
      pin: true,
      scrub: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none opacity-100"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  );
};

export default FlickeringGrid;
