"use client";

import { useRef } from "react";
import SpinningPlus from "../others/SpinningPlus";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import AnimatedSquares from "../others/AnimatedSquares";

export default function Footer() {
  const text = "JUNIARC";
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <footer className="h-screen w-screen max-w-[100vw] p-3 md:p-10 text-background flex flex-col justify-between relative">
      <div className="bg-dark-blue absolute top-0 left-0 w-full h-screen -z-10"></div>
      <div className="w-full relative">
        <h2 className="text-[10vw] lg:text-9xl tracking-tighter flex leading-none text-background">
          C
          <div className="outline outline-offset-[-.25em] outline-[.15em] mx-[-.05em] outline-orange rounded-full h-[1em] w-[5em]"></div>
          NTACT
        </h2>
        <div className="absolute right-0 top-1/2 aspect-square">
          <SpinningPlus color="text-orange" className="text-lg md:text-2xl" />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-40">
        <div>
          <SpinningPlus
            color="text-orange"
            className="text-lg md:text-2xl lg:text-[2vw]"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div>
            <p className="underline tracking-[0.1em] text-center lg:text-end lg:text-[2vw]">
              cahyajuniarsyam@gmail.com
            </p>
            <p className="underline tracking-[0.1em] text-center lg:text-end lg:text-[2vw]">
              +6282216578067
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  href="https://linkedin.com/in/cahyajuniar"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl md:text-4xl lg:text-[4vw]" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/juniarc" target="_blank">
                  <FaGithub className="text-2xl md:text-4xl lg:text-[4vw]" />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/juniarc_" target="_blank">
                  <FaInstagram className="text-2xl md:text-4xl lg:text-[4vw]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-5 md:w-10 lg:w-[2vw] aspect-square rotate-180">
          <AnimatedSquares color="bg-background" />
        </div>
      </div>
      <div>
        <h1
          ref={textRef}
          className="text-[24vw] leading-[18vw] lg:text-[25.4vw] lg:leading-[20vw] tracking-tighter flex items-center justify-center overflow-hidden"
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block opacity-100 ${index === text.length - 1 && "text-orange"}`}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="w-full text-sm lg:text-lg text-center mt-5">
          <span className="text-2xl">&#169;</span> 2024 JUNIARC
        </p>
      </div>
    </footer>
  );
}
