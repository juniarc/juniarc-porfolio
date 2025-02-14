"use client";

import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";
import { useGSAPContext } from "@/providers/gsapContext";
import parse from "html-react-parser";
import { useRef } from "react";

export default function TextContent({
  heading,
  desc,
}: {
  heading: string | undefined;
  desc: string | undefined;
}) {
  const { gsap, useGSAP } = useGSAPContext();
  const { deviceType } = useScreenSizeContext();

  const wrapperText = useRef<HTMLDivElement>(null);

  const delay = 2.5;
  useGSAP(
    () => {
      if (deviceType !== "desktop") {
        gsap.from(wrapperText.current, {
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
          delay: delay,
        });
      }
    },
    { dependencies: [deviceType], revertOnUpdate: true }
  );
  if (heading && desc) {
    return (
      <div ref={wrapperText} className="px-10 md:px-20 lg:px-52 my-10">
        <h2 className="text-[4.7vw] text-center lg:text-start lg:text-[2.6vw] mb-5 capitalize">
          {heading}
        </h2>
        <div className="text-content text-[3vw] lg:text-[1.5vw] text-justify indent-8 flex flex-col gap-3">
          {parse(desc ?? "")}
        </div>
      </div>
    );
  }
}
