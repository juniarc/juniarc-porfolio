"use client";

import { useTransitionContext } from "@/hooks/TransitionContext";
import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";

export default function Title() {
  const { useGSAP, gsap } = useGSAPContext();
  const { startAnimation } = useTransitionContext();

  const title = "About Me";

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
    <div className="w-full px-10">
      <h1
        ref={titleRef}
        className="text-[20vw] leading-[15vw] tracking-tighter flex overflow-hidden justify-center uppercase whitespace-pre"
      >
        {title.split("").map((char, index, array) => (
          <span
            key={index}
            className={`inline-block opacity-100 translate-y-full ${array.length - 2 <= index && "text-orange"}`}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
