"use client";

import { useRef } from "react";
import { useGSAPContext } from "@/providers/gsapContext";
import { useTransitionContext } from "@/hooks/TransitionContext";

export default function HeroText() {
  const { gsap, useGSAP } = useGSAPContext();
  const { startAnimation } = useTransitionContext();

  const text = "JUNIARC";
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const chars = textRef.current?.querySelectorAll("span");

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
    <div className="w-full px-10">
      <h1
        ref={textRef}
        className="text-[25.4vw] leading-[20vw] tracking-tighter flex overflow-hidden"
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block opacity-100 translate-y-full ${index === text.length - 1 && "text-orange"}`}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
