"use client";

import { useGSAPContext } from "@/providers/gsapContext";
import SpinningPlus from "@/ui/others/SpinningPlus";

export default function Arva({ tools }: { tools: React.ReactNode }) {
  const { gsap, useGSAP, ScrollTrigger } = useGSAPContext();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".works__image-container",
        start: "top 30%",
        scrub: true,
        markers: true,
      },
    });

    tl.to(".works__image-container", {
      yPercent: 5,
    });
    tl.to("works__text-container", {
      yPercent: -5,
    });
  }, []);
  return (
    <div className="flex justify-between gap-10">
      <div className="works__image-container w-1/2">
        <div className="flex justify-between">
          <p className="tracking-widest">2024</p>
          <SpinningPlus />

          <p className="tracking-widest">FULL - STACK DEVELOPER</p>
        </div>
        <div className="w-full aspect-[1.5/1] bg-slate-400"></div>
      </div>
      <div className="works__text-container w-1/2 mt-[1rem]">
        <div className="w-full flex flex-col items-start">
          <h3 className="text-9xl text-orange tracking-tighter">ARVA,</h3>
          <p className="font-righteous text-[2.5rem]">AGRICULTURE E-COMMERCE</p>
        </div>
        <div className="flex flex-col items-end mt-5">
          <p className="w-3/4">
            A platform that connects local producers and artisans with consumers
            in their community, promoting sustainable consumption, supporting
            local economies, and reducing carbon footprints associated with
            long-distance shipping.
          </p>
          <div className="w-3/4 mt-10 text-[2.5rem] flex items-center gap-5">
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
}
