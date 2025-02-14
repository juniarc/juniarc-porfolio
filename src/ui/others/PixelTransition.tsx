"use client";

import { useEffect, useRef } from "react";
import { useTransitionContext } from "@/hooks/TransitionContext";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";

export default function PixelTranisiton() {
  const { deviceType } = useScreenSizeContext();
  const lenis = useLenis();
  const { isNavigate, setIsNavigate, setStartAnimation } =
    useTransitionContext();
  const squareSize = deviceType === "desktop" ? 48 : 24;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const setupCanvas = (
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ) => {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  };

  const drawAndClearGrid = async (
    ctx: CanvasRenderingContext2D,
    cols: number,
    rows: number
  ) => {
    const drawSquare = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, squareSize, squareSize);
    };

    const clearSquare = (x: number, y: number) => {
      ctx.clearRect(x, y, squareSize, squareSize);
    };

    const animateSquares = async (
      action: (x: number, y: number) => void,
      delay: number,
      callback: () => void
    ) => {
      const queue: { x: number; y: number; time: number }[] = [];

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * squareSize;
          const y = j * squareSize;
          const randomDelay = Math.random() * delay;

          queue.push({ x, y, time: performance.now() + randomDelay });
        }
      }

      const step = () => {
        const now = performance.now();

        queue.forEach(({ x, y, time }, index) => {
          if (time <= now) {
            action(x, y);
            queue.splice(index, 1);
          }
        });

        if (queue.length > 0) {
          requestAnimationFrame(step);
        } else {
          callback();
        }
      };

      requestAnimationFrame(step);
    };

    animateSquares(
      (x, y) => drawSquare(x, y, "rgba(38, 50, 83, 1)"),
      300,
      () => {
        setTimeout(() => {
          animateSquares(clearSquare, 300, () => {});
        }, 300);
      }
    );
    setStartAnimation(true);
  };

  const pathname = usePathname();
  useEffect(() => {
    if (isNavigate) {
      const container = containerRef.current;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cols = Math.floor(canvas.clientWidth / squareSize);
      const rows = Math.floor(canvas.clientHeight / squareSize);

      setupCanvas(
        canvas,
        container?.clientWidth ?? 0,
        container?.clientHeight ?? 0
      );

      drawAndClearGrid(ctx, cols, rows);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      setIsNavigate(false);
    }
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
    >
      <canvas
        ref={canvasRef}
        style={{ width: "110vw", height: "110vh" }}
      ></canvas>
    </div>
  );
}
