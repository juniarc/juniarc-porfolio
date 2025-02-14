"use client";

import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";
import { useGSAPContext } from "@/providers/gsapContext";
import AnimatedSquares from "@/ui/others/AnimatedSquares";
import { useRef } from "react";

export default function Title() {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();
  const { deviceType } = useScreenSizeContext();

  const circleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(circleRef.current, {
        width: "5em",
        ease: "power1",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      });
    },
    {
      dependencies: [titleRef.current?.clientHeight, deviceType],
      revertOnUpdate: true,
    }
  );
  return (
    <div>
      <div className="w-full relative">
        <h2
          ref={titleRef}
          className="text-[10vw] tracking-tighter flex leading-none"
        >
          W
          <div
            ref={circleRef}
            style={{ width: "1em" }}
            className="outline outline-offset-[-.25em] outline-[.15em] mx-[-.05em] outline-dark-blue rounded-full h-[1em] w-[1em]"
          ></div>
          RK
        </h2>
        <div className="absolute right-0 top-0 w-5 lg:w-10 aspect-square rotate-90">
          <AnimatedSquares />
        </div>
      </div>
    </div>
  );
}
