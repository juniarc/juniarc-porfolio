"use client";

import { Fragment, useRef } from "react";
import SpinningPlus from "@/ui/others/SpinningPlus";
import { useGSAPContext } from "@/providers/gsapContext";
import { useTransitionContext } from "@/hooks/TransitionContext";

export default function InfiniteText() {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();
  const { startAnimation } = useTransitionContext();

  const text = "FRONT-END WEB DEVELOPER";
  const firstGroupRef = useRef<HTMLSpanElement>(null);
  const secondGroupRef = useRef<HTMLSpanElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const delay = 1.6;

  let xPercent = -100;
  let direction = 1;
  let animationFrameId: number | null = null;

  const animation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    } else if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(firstGroupRef.current, {
      xPercent: xPercent,
    });
    gsap.set(secondGroupRef.current, {
      xPercent: xPercent,
    });

    xPercent += 0.03 * direction;

    animationFrameId = requestAnimationFrame(animation);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    if (startAnimation) {
      tl.fromTo(
        wrapper.current,
        {
          translateY: 100,
          opacity: 0,
        },
        {
          translateY: 0,
          opacity: 0.05,
          duration: 0.5,
          ease: "power4.out",
          delay: delay,
        }
      ).to(
        wrapper.current,
        {
          opacity: 1,
          duration: 1,
          ease: "sine.inOut",
        },
        0.3 + delay
      );

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-100px",
      });
      animationFrameId = requestAnimationFrame(animation);
    }

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, [startAnimation]);

  return (
    <div className="mt-5">
      <div
        ref={wrapper}
        className="border-y border-dark-blue py-3 translate-y-full opacity-0"
      >
        <div ref={slider} className="flex items-center relative">
          <span
            ref={firstGroupRef}
            className="flex items-center gap-8 flex-nowrap pr-8"
          >
            {Array(4)
              .fill(text)
              .map((text, index) => (
                <Fragment key={index}>
                  <span className="text-lg tracking-widest text-nowrap ">
                    {text}
                  </span>
                  <SpinningPlus />
                </Fragment>
              ))}
          </span>
          <span
            ref={secondGroupRef}
            className="flex items-center gap-8 flex-nowrap absolute left-full pr-8"
          >
            {Array(4)
              .fill(text)
              .map((text, index) => (
                <Fragment key={index}>
                  <span className="text-lg tracking-widest text-nowrap ">
                    {text}
                  </span>
                  <SpinningPlus />
                </Fragment>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
}
