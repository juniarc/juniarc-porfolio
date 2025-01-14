"use client";

import { FaPlus } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAPContext } from "@/providers/gsapContext";

export default function SpinningPlus({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  const { gsap, useGSAP } = useGSAPContext();

  const plusRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".spinning-plus",
      {
        rotation: 0,
      },
      {
        rotation: 360,
        repeat: -1,
        duration: 5,
        ease: "none",
      }
    );
  });

  return (
    <div ref={plusRef}>
      <FaPlus
        className={`spinning-plus ${className ?? "text-xl"} ${color ? color : "text-dark-blue"}`}
      />
    </div>
  );
}
