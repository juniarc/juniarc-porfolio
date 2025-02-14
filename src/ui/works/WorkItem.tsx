"use client";

import Link from "next/link";
import SpinningPlus from "../others/SpinningPlus";
import { useRef } from "react";
import { useGSAPContext } from "@/providers/gsapContext";
import { useTransitionContext } from "@/hooks/TransitionContext";
import Image from "next/image";
import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";

interface WorkItemType {
  year: string;
  number: string;
  title: string;
  role: string;
  image: string;
}
export default function WorkItem({
  year,
  number,
  title,
  role,
  image,
}: WorkItemType) {
  const { gsap, useGSAP } = useGSAPContext();
  const { setIsNavigate, setStartAnimation, startAnimation } =
    useTransitionContext();
  const { deviceType } = useScreenSizeContext();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (startAnimation) {
        gsap.from(wrapperRef.current, {
          opacity: 0,
          duration: 2.5,
          ease: "power3.inOut",
          delay: 1.5,
        });
      }

      if (deviceType !== "desktop") {
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          yPercent: 10,
        });
      }
    },
    { dependencies: [startAnimation, deviceType], revertOnUpdate: true }
  );
  return (
    <div ref={wrapperRef}>
      <div className="flex justify-between items-center">
        <p className="tracking-widest text-[3.5vw] lg:text-[1vw]">{year}</p>
        <SpinningPlus className="text-[3.5vw] lg:text-[1vw]" />
        <p className="tracking-widest uppercase text-[3.5vw] lg:text-[1vw]">
          {role}
        </p>
      </div>
      <div className="w-full aspect-[1.5/1] ml-auto overflow-hidden">
        <Image
          ref={imageRef}
          src={`${image}`}
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-full object-cover object-top"
          alt={`${title} Image`}
        />
      </div>
      <div className="flex gap-1 lg:gap-5">
        <span className="font-righteous text-[4vw] lg:text-[2.5vw] leading-none mt-3 text-dark-blue tracking-tighter uppercase">
          0{number}.
        </span>
        <Link
          href={`/works/${title}`}
          onClick={() => {
            setIsNavigate(true);
            setStartAnimation(false);
          }}
          className="font-righteous text-[10vw] lg:text-[5vw] leading-none text-orange tracking-tighter outline-text uppercase"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
