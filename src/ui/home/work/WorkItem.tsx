"use client";

import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";
import { useTransitionContext } from "@/hooks/TransitionContext";
import { useGSAPContext } from "@/providers/gsapContext";
import { WorkItemType } from "@/types/types";
import SpinningPlus from "@/ui/others/SpinningPlus";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

interface WorkItem extends WorkItemType {
  tools: React.ReactNode;
}

export default function WorkItem({
  year,
  role,
  title,
  image,
  subtitle,
  description,
  tools,
  yPercent,
  position,
  startTrigger,
}: WorkItem) {
  const { setIsNavigate, setStartAnimation } = useTransitionContext();
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();
  const { deviceType } = useScreenSizeContext();

  const itemRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (deviceType === "desktop") {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".works__image-container",
            start: startTrigger,
            end: "bottom top",
            scrub: true,
          },
        });
        tl.to(itemRef.current, {
          yPercent: yPercent,
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
    <div
      ref={itemRef}
      className={`flex flex-col lg:w-3/4 mt-10 lg:mt-0 ${position}`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="tracking-widest text-[3.5vw] lg:text-[1vw]">{year}</p>
          <SpinningPlus className="text-[3.5vw] lg:text-[1vw]" />
          <p className="tracking-widest uppercase text-[3.5vw] lg:text-[1vw]">
            {role}
          </p>
        </div>
        <div className="w-full aspect-square lg:aspect-[1.5/1] ml-auto overflow-hidden">
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
      <div className="w-full mt-3 lg:mt-0">
        <div className="w-full flex flex-col items-start">
          <Link
            href={`/works/${title}`}
            onClick={() => {
              setIsNavigate(true);
              setStartAnimation(false);
            }}
            className="font-righteous text-[10vw] leading-none lg:text-[5vw] text-orange tracking-tighter outline-text uppercase"
          >
            {title},
          </Link>
          <p className="font-righteous text-[5vw] lg:text-[2vw] mt-[-1vw] lg:mt-0 uppercase">
            {subtitle}
          </p>
        </div>
        <div className="mt-3 lg:mt-5">
          <p className="capitalize text-[3.5vw] lg:text-[1.25vw] text-justify">
            {description}
          </p>
          <div className="mt-5 text-[7vw] lg:text-[3vw] flex items-center gap-5">
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
}
