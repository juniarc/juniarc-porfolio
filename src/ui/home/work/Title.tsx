"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import AnimatedSquares from "@/ui/others/AnimatedSquares";
import { useRef } from "react";

export default function Title() {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();

  const circleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleHeight = titleRef.current?.clientHeight ?? 0;
    const maxWidthCircle = titleHeight * 4;

    gsap.to(circleRef.current, {
      width: "5em",
      ease: "none",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: `+=${maxWidthCircle}px`,
        scrub: 1,
      },
    });
  }, [titleRef.current?.clientHeight]);
  return (
    <div>
      <div className="w-full relative">
        <h2
          ref={titleRef}
          className="text-9xl tracking-tighter flex leading-none"
        >
          W
          <div
            ref={circleRef}
            style={{ width: "1em" }}
            className="outline outline-offset-[-35px] outline-[17px] ml-[-10px] mr-[-17px] outline-dark-blue rounded-full h-[1em]"
          ></div>
          RK
        </h2>
        <div className="absolute right-0 top-0 w-10 aspect-square rotate-90">
          <AnimatedSquares />
        </div>
      </div>
    </div>
  );
}
