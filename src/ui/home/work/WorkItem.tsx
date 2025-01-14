"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import SpinningPlus from "@/ui/others/SpinningPlus";
import React, { useRef } from "react";

interface WorkItemType {
  year: number;
  position: string;
  title: string;
  subTitle: string;
  description: string;
  tools: React.ReactNode;
  role: string;
  yPercent: number;
  startTrigger: string;
}

export default function WorkItem({
  year,
  position,
  title,
  subTitle,
  description,
  tools,
  role,
  yPercent,
  startTrigger,
}: WorkItemType) {
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

          <p className="tracking-widest">{role}</p>
        </div>
        <div className="w-full aspect-[1.5/1] bg-slate-400 ml-auto"></div>
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col items-start">
          <h3 className="text-[4rem] text-orange tracking-tighter">{title},</h3>
          <p className="font-righteous text-[1.5rem] mt-[-1rem]">{subTitle}</p>
        </div>
        <div className="mt-5">
          <p>{description}</p>
          <div className="mt-10 text-[2.5rem] flex items-center gap-5">
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
}
