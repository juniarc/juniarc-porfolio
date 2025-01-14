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
    <footer className="h-screen w-full px-10 py-5 text-background flex flex-col justify-between relative">
      <div className="bg-dark-blue absolute top-0 left-0 w-full h-screen -z-10"></div>
      <div className="w-full relative">
        <h2 className="text-9xl tracking-tighter flex leading-none text-background">
          C
          <div className="outline outline-offset-[-35px] outline-[17px] ml-[-10px] mr-[-17px] outline-orange rounded-full h-[1em] w-[5em]"></div>
          NTACT
        </h2>
        <div className="absolute right-0 top-1/2 aspect-square">
          <SpinningPlus color="text-orange" className="text-2xl" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-40">
        <div>
          <SpinningPlus color="text-orange" className="text-2xl" />
        </div>
        <div className="flex items-center gap-10">
          <div>
            <p className="underline tracking-[0.1em] text-end">
              cahyajuniarsyam@gmail.com
            </p>
            <p className="underline tracking-[0.1em] text-end">
              +6282216578067
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <Link href="/">
                  <FaLinkedin className="text-4xl" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaGithub className="text-4xl" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaInstagram className="text-4xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-10 aspect-square rotate-180">
          <AnimatedSquares color="bg-background" />
        </div>
      </div>
      <div>
        <h1
          ref={textRef}
          className="text-[25.4vw] leading-[20vw] tracking-tighter flex overflow-hidden"
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
        <p className="w-full text-center mt-5">
          <span className="text-2xl">&#169;</span> 2024 JUNIARC
        </p>
      </div>
    </footer>
  );
}
