"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";
import Image from "next/image";
import { useTransitionContext } from "@/hooks/TransitionContext";

export default function FirstImage({
  image,
  title,
}: {
  image: string | undefined;
  title: string | undefined;
}) {
  const { useGSAP, gsap, ScrollTrigger } = useGSAPContext();
  const { startAnimation } = useTransitionContext();

  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const delay = 2.5;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (startAnimation) {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: delay,
        }
      );

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        translateY: 100,
      });
    }
  }, [startAnimation]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[16/9] overflow-hidden relative"
    >
      <div ref={imageRef} className="w-full h-full">
        <Image
          src={`${image}`}
          quality={100}
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
          alt={`${title} Image`}
        />
      </div>
    </div>
  );
}
