"use client";

import Link from "next/link";
import SpinningPlus from "../others/SpinningPlus";
import { useRef } from "react";
import { useGSAPContext } from "@/providers/gsapContext";
import { useTransitionContext } from "@/hooks/TransitionContext";
import Image from "next/image";

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

  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (startAnimation) {
      gsap.from(wrapperRef.current, {
        opacity: 0,
        duration: 2.5,
        ease: "power3.inOut",
        delay: 1.5,
      });
    }
  }, [startAnimation]);
  return (
    <div ref={wrapperRef}>
      <div className="flex justify-between">
        <p className="tracking-widest">{year}</p>
        <SpinningPlus />
        <p className="tracking-widest uppercase">{role}</p>
      </div>
      <div className="w-full aspect-[1.5/1] ml-auto">
        <Image
          src={`${image}`}
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-full object-cover object-top"
          alt={`${title} Image`}
        />
      </div>
      <div className="flex gap-5">
        <span className="font-righteous text-[2rem] text-dark-blue tracking-tighter uppercase">
          0{number}.
        </span>
        <Link
          href={`/works/${title}`}
          onClick={() => {
            setIsNavigate(true);
            setStartAnimation(false);
          }}
          className="font-righteous text-[4rem] leading-none text-orange tracking-tighter outline-text uppercase"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
