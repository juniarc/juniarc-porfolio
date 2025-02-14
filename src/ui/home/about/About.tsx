"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";
import AboutText from "./AboutText";
import { useTransitionContext } from "@/hooks/TransitionContext";
import { useMountedContext } from "@/hooks/MountContex";
import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";

export default function About() {
  const { useGSAP, gsap } = useGSAPContext();
  const { isMounted } = useMountedContext();
  const { deviceType } = useScreenSizeContext();
  const { startAnimation } = useTransitionContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const delay = 2.5;

      if (isMounted) {
        if (startAnimation) {
          gsap.to(aboutRef.current, {
            translateY: 0,
            duration: 0.95,
            delay: delay,
            ease: "power3.out",
          });
        }
      }
    },
    { dependencies: [isMounted, startAnimation] }
  );

  useGSAP(
    () => {
      if (isMounted) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            endTrigger: containerRef.current,
            end: "top top",
            scrub: true,
          },
        });
        tl.to(aboutRef.current, {
          width: "400vw",
        });
      }
    },
    {
      dependencies: [isMounted, deviceType],
      revertOnUpdate: true,
    }
  );

  if (!isMounted) return;
  return (
    <div
      ref={containerRef}
      className="w-full h-[401vh] relative mt-10 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full flex justify-center">
        <div
          ref={aboutRef}
          className="flex-none w-[200vw] lg:w-1/2 h-full relative rounded-t-full bg-orange inset-0 -z-50 translate-y-1/2"
        ></div>
      </div>
      <AboutText sectionRef={containerRef} />
    </div>
  );
}
