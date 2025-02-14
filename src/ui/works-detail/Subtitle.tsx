"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import SpinningPlus from "../others/SpinningPlus";
import { useRef } from "react";
import { useTransitionContext } from "@/hooks/TransitionContext";

interface SubTitleType {
  year: string | undefined;
  role: string | undefined;
  institution: string | undefined;
}

export default function SubTitle({ year, role, institution }: SubTitleType) {
  const { useGSAP, gsap } = useGSAPContext();
  const { startAnimation } = useTransitionContext();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const delay = 2;

  useGSAP(
    () => {
      if (startAnimation) {
        gsap.from(wrapperRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "power3.inOut",
          delay: delay,
        });
      }
    },
    { dependencies: [startAnimation], revertOnUpdate: true }
  );

  return (
    <div
      ref={wrapperRef}
      className="w-full flex flex-col lg:flex-row items-center justify-between relative mt-10 lg:mt-5 gap-3 lg:gap-5"
    >
      <div className="flex items-center gap-3 lg:gap-10">
        <p className="tracking-widest text-[3.5vw] lg:text-[1vw]">{year}</p>
        <SpinningPlus className="text-[3.5vw] lg:text-[1vw]" />
        <p className="uppercase tracking-widest text-[3.5vw] lg:text-[1vw] text-nowrap">
          {role}
        </p>
      </div>
      <div className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
        <SpinningPlus className="text-[3.5vw] lg:text-[1vw]" />
      </div>
      <div>
        <p className="uppercase tracking-widest text-[3.5vw] lg:text-[1vw] lg:text-start text-center">
          {institution}
        </p>
      </div>
    </div>
  );
}
