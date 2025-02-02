"use client";

import { useTransitionContext } from "@/hooks/TransitionContext";
import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";

export default function Title() {
  const { useGSAP, gsap } = useGSAPContext();
  const { startAnimation } = useTransitionContext();
  const title = "WORK";
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const chars = titleRef.current?.querySelectorAll("span");

    if (chars && startAnimation) {
      gsap.to(chars, {
        translateY: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        delay: 1,
      });
    }
  }, [startAnimation]);

  return (
    <div className="w-full">
      <h1
        ref={titleRef}
        className="text-[15vw] leading-[13vw] tracking-tighter flex flex-wrap overflow-hidden justify-center"
      >
        {title.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block opacity-100 translate-y-full ${index === title.length - 1 && "text-orange"}`}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
