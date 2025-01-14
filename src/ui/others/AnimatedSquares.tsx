"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";

export default function AnimatedSquares({ color }: { color?: string }) {
  const { gsap, useGSAP } = useGSAPContext();

  const firstSquareRef = useRef<HTMLDivElement>(null);
  const secondSquareRef = useRef<HTMLDivElement>(null);
  const thirdSquareRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    tl.from(firstSquareRef.current, {
      xPercent: -100,
      duration: 0.5,
    }).to(firstSquareRef.current, {
      xPercent: 0,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });

    tl.from(
      secondSquareRef.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      0.5
    ).to(secondSquareRef.current, {
      yPercent: 100,
      duration: 0.5,
    });

    tl.from(
      thirdSquareRef.current,
      {
        xPercent: 100,
        duration: 0.5,
      },
      1
    ).to(thirdSquareRef.current, {
      xPercent: 0,
      opacity: 0,
      duration: 0.25,
    });
  }, []);
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        ref={firstSquareRef}
        className={`${color ? color : "bg-dark-blue"} w-1/2 h-1/2 absolute top-0 left-0 `}
      ></div>
      <div className="w-1/2 h-1/2  absolute top-0 right-0 overflow-hidden">
        <div
          ref={secondSquareRef}
          className={`${color ? color : "bg-dark-blue"} w-full h-full opacity-50 `}
        ></div>
      </div>
      <div
        ref={thirdSquareRef}
        className={`${color ? color : "bg-dark-blue"} w-1/2 h-1/2 absolute bottom-0 right-0`}
      ></div>
    </div>
  );
}
