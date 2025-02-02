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

  useGSAP(() => {
    if (startAnimation) {
      gsap.from(wrapperRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        delay: delay,
      });
    }
  }, [startAnimation]);

  return (
    <div
      ref={wrapperRef}
      className="w-full flex items-center justify-between relative mt-5"
    >
      <div className="flex gap-10">
        <p className="tracking-widest">{year}</p>
        <SpinningPlus />
        <p className="uppercase tracking-widest">{role}</p>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <SpinningPlus />
      </div>
      <div>
        <p className="uppercase tracking-widest">{institution}</p>
      </div>
    </div>
  );
}
