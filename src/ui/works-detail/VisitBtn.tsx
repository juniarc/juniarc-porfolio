"use client";

import { useTransitionContext } from "@/hooks/TransitionContext";
import { useGSAPContext } from "@/providers/gsapContext";
import Link from "next/link";
import { useRef } from "react";

export default function VisitBtn({ link }: { link: string | undefined }) {
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
      className="w-full flex items-center justify-center mt-10"
    >
      <Link href={`${link}`} target="_blank" className="btn">
        VISIT WEBSITE
      </Link>
    </div>
  );
}
