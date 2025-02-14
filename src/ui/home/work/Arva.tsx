"use client";

import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";
import { useTransitionContext } from "@/hooks/TransitionContext";
import { useGSAPContext } from "@/providers/gsapContext";
import { WorkItemType } from "@/types/types";
import SpinningPlus from "@/ui/others/SpinningPlus";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ArvaType extends WorkItemType {
  tools: React.ReactNode;
}

export default function Arva({
  year,
  role,
  title,
  subtitle,
  description,
  image,
  tools,
}: ArvaType) {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();
  const { setIsNavigate, setStartAnimation } = useTransitionContext();
  const { deviceType } = useScreenSizeContext();

  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (deviceType === "desktop") {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 30%",
            scrub: true,
          },
        });

        tl.to(imageContainerRef.current, {
          yPercent: 5,
        });
        tl.to(textContainerRef.current, {
          yPercent: -5,
        });
      } else {
        gsap.to(imageRef.current, {
          yPercent: 10,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 10%",
            scrub: true,
            end: "bottom top",
          },
        });
      }
    },
    { dependencies: [deviceType], revertOnUpdate: true }
  );
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-10">
      <div ref={imageContainerRef} className="w-full lg:w-1/2">
        <div className="flex items-center justify-between">
          <p className="tracking-widest text-[3.5vw] lg:text-[1vw]">{year}</p>
          <SpinningPlus className="text-[3.5vw] lg:text-[1vw]" />
          <p className="tracking-widest uppercase text-[3.5vw] lg:text-[1vw]">
            {role}
          </p>
        </div>
        <div className="w-full aspect-square lg:aspect-[1.5/1] overflow-hidden">
          <Image
            ref={imageRef}
            src={image}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover object-center"
            alt={`${title} image`}
          />
        </div>
      </div>
      <div ref={textContainerRef} className="w-full lg:w-1/2 mt-[1rem]">
        <div className="w-full flex flex-col items-start">
          <Link
            onClick={() => {
              setIsNavigate(true);
              setStartAnimation(false);
            }}
            href="/works/arva"
            className="font-righteous text-[10vw] leading-none text-orange tracking-tighter outline-text uppercase"
          >
            {title},
          </Link>
          <p className="font-righteous text-[5vw] lg:text-[3vw] uppercase">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end mt-3 lg:mt-5">
          <p className="lg:w-3/4 text-[3.5vw] lg:text-[1.25vw] text-justify">
            {description}
          </p>
          <div className="lg:w-3/4 mt-5 text-[7vw] lg:text-[3vw] flex items-center gap-5">
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
}
