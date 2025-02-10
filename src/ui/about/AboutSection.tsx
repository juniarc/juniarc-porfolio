"use client";

import Image from "next/image";
import MyImage from "@/../public/images/me.webp";
import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";
import AnimatedSquares from "../others/AnimatedSquares";

export default function AboutSection() {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();

  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const circleHeight = textRef.current?.clientHeight ?? 0;
      const maxWidthCircle = circleHeight * 4;

      const delay = 2.5;

      gsap.fromTo(
        wrapperRef.current,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 2,
          ease: "power4.out",
          delay: delay,
        }
      );

      gsap.to(circleRef.current, {
        width: "2em",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: `+=${maxWidthCircle}px`,
          scrub: true,
        },
      });

      gsap.to(imgRef.current, {
        yPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { dependencies: [textRef.current?.clientHeight] }
  );
  return (
    <div ref={containerRef} className="relative">
      <div
        ref={wrapperRef}
        className="flex items-start justify-between gap-10 mt-10 "
      >
        <div ref={imgRef} className="w-[45%] ">
          <Image
            src={MyImage}
            className="w-full h-3/5 object-cover object-bottom"
            alt="About Me Photo"
          />
          <div className=" mt-10 w-10 aspect-square rotate-90">
            <AnimatedSquares />
          </div>
        </div>
        <div ref={textWrapperRef} className="w-[55%]">
          <div>
            <h2 className="uppercase text-[9vw] tracking-tighter leading-none w-full">
              <span className="inline-block w-full">A Bit</span>
              <span
                ref={textRef}
                className="flex items-center justify-center text-center"
              >
                AB
                <div
                  ref={circleRef}
                  style={{ width: ".5em", height: ".5em" }}
                  className="outline outline-[.15em]  mr-[.13em] ml-[.17em] outline-dark-blue rounded-full"
                ></div>
                UT
              </span>
              <span className="text-orange inline-block w-full text-right">
                Myself
              </span>
            </h2>
          </div>
          <div className="w-full px-20 mt-10">
            <p className="text-justify text-lg">
              I am a engineering physics fresh graduate from Universitas Gadjah
              Mada with certifications in Expert React Development and
              Full-Stack Software Engineering, where I built an e-commerce
              platform as a capstone project. Starting my programming journey in
              2023 through Bangkit Academy, I now focus on front-end development
              with expertise in Next.js, React.js, TypeScript, GSAP, and tools
              like Figma, Flask, and MySQL. My projects include Arva
              (agriculture e-commerce), Restofinder, Disscusify (forum website),
              and a personal portfolio. I am passionate about building
              high-performance websites with excellent user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
