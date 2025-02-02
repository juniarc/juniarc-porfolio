"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";
import AboutText from "./AboutText";
import { useTransitionContext } from "@/hooks/TransitionContext";

export default function About() {
  const { useGSAP, ScrollTrigger, gsap } = useGSAPContext();
  const { startAnimation } = useTransitionContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const delay = 2.5;

    if (startAnimation) {
      gsap.to(aboutRef.current, {
        translateY: 0,
        duration: 0.95,
        delay: delay,
        ease: "power3.out",
      });
    }

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
  }, [startAnimation]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[401vh] relative mt-10 overflow-hidden"
    >
      <div
        ref={aboutRef}
        className="w-1/2 h-full absolute left-1/2 -translate-x-1/2 rounded-t-full bg-orange inset-0 -z-50 translate-y-1/2"
      ></div>
      <AboutText sectionRef={containerRef} />
    </div>
  );
}
