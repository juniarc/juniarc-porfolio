"use client";

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

  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
  }, []);
  return (
    <div className="flex justify-between gap-10">
      <div ref={imageContainerRef} className="w-1/2">
        <div className="flex justify-between">
          <p className="tracking-widest">{year}</p>
          <SpinningPlus />

          <p className="tracking-widest uppercase">{role}</p>
        </div>
        <div className="w-full aspect-[1.5/1] ">
          <Image
            src={image}
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            alt={`${title} image`}
          />
        </div>
      </div>
      <div ref={textContainerRef} className="w-1/2 mt-[1rem]">
        <div className="w-full flex flex-col items-start">
          <Link
            onClick={() => {
              setIsNavigate(true);
              setStartAnimation(false);
            }}
            href="/works/arva"
            className="font-righteous text-9xl text-orange tracking-tighter outline-text uppercase"
          >
            {title},
          </Link>
          <p className="font-righteous text-[2.5rem] uppercase">{subtitle}</p>
        </div>
        <div className="flex flex-col items-end mt-5">
          <p className="w-3/4">{description}</p>
          <div className="w-3/4 mt-10 text-[2.5rem] flex items-center gap-5">
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
}
