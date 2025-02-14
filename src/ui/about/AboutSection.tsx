"use client";

import Image from "next/image";
import MyImage from "@/../public/images/me.webp";
import { useGSAPContext } from "@/providers/gsapContext";
import { useRef } from "react";
import AnimatedSquares from "../others/AnimatedSquares";
import { useMountedContext } from "@/hooks/MountContex";
import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";

export default function AboutSection() {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();
  const { isMounted } = useMountedContext();
  const { deviceType } = useScreenSizeContext();

  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgContentRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const delay = 2.5;

    gsap.from(wrapperRef.current, {
      yPercent: 100,
      duration: 2,
      ease: "power4.out",
      delay: delay,
      onStart: () => ScrollTrigger.refresh(),
    });
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(circleRef.current, {
        width: "2em",
        ease: "none",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 90%",
          end: `bottom top`,
          scrub: true,
        },
      });

      if (deviceType !== "desktop") {
        gsap.to(imgContentRef.current, {
          yPercent: 20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      } else {
        gsap.to(circleRef.current, {
          width: "2em",
          ease: "none",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 90%",
            end: `top top`,
            scrub: true,
          },
        });
      }
    },
    {
      dependencies: [textRef.current?.clientHeight, deviceType],
      revertOnUpdate: true,
    }
  );

  if (!isMounted) return;
  return (
    <div ref={containerRef} className="relative">
      <div
        ref={wrapperRef}
        className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-3 lg:gap-10 mt-5 lg:mt-10 "
      >
        <div ref={imgRef} className="w-full lg:w-[45%] overflow-hidden">
          <Image
            ref={imgContentRef}
            src={MyImage}
            className="w-full h-3/5 object-cover object-bottom"
            alt="About Me Photo"
            priority
          />
          <div className="hidden lg:block mt-10 w-10 aspect-square rotate-90">
            <AnimatedSquares />
          </div>
        </div>
        <div ref={textWrapperRef} className="w-full lg:w-[55%]">
          <div className="flex flex-col items-center">
            <h2 className="uppercase text-[9vw] tracking-tighter leading-none w-1/2 lg:w-full">
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
          <div className="w-full px-10 lg:px-20 mt-3 lg:mt-10">
            <p className="text-justify text-[3.75vw] lg:text-[1.25vw]">
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
