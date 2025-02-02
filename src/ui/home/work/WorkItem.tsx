"use client";

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

  const itemRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  }, []);
  return (
    <div ref={itemRef} className={`flex flex-col w-3/4 ${position}`}>
      <div className="w-full">
        <div className="flex justify-between">
          <p className="tracking-widest">{year}</p>
          <SpinningPlus />
          <p className="tracking-widest uppercase">{role}</p>
        </div>
        <div className="w-full aspect-[1.5/1] ml-auto">
          <Image
            src={image}
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            alt={`${title} image`}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col items-start">
          <Link
            href={`/works/${title}`}
            onClick={() => {
              setIsNavigate(true);
              setStartAnimation(false);
            }}
            className="font-righteous text-[4rem] text-orange tracking-tighter outline-text uppercase"
          >
            {title},
          </Link>
          <p className="font-righteous text-[1.5rem] mt-[-1rem] uppercase">
            {subtitle}
          </p>
        </div>
        <div className="mt-5">
          <p className="capitalize">{description}</p>
          <div className="mt-10 text-[2.5rem] flex items-center gap-5">
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
}
