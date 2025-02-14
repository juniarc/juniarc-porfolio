import { useGSAPContext } from "@/providers/gsapContext";
import AnimatedSquares from "@/ui/others/AnimatedSquares";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

export default function AboutText({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { gsap, ScrollTrigger, useGSAP } = useGSAPContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);

  const [textIndent, setTextIndent] = useState(0);

  useEffect(() => {
    const updateTextIndent = () => {
      if (!titleContainerRef.current) return;

      const titleWidth = titleContainerRef.current.clientWidth;
      setTextIndent(titleWidth);
    };

    updateTextIndent();
    window.addEventListener("resize", updateTextIndent);

    return () => {
      window.removeEventListener("resize", updateTextIndent);
    };
  }, [sectionRef.current?.clientHeight, sectionRef.current?.clientWidth]);

  useEffect(() => {
    const firstWord = document.querySelector(".word") as HTMLDivElement;
    if (firstWord) {
      firstWord.style.paddingLeft = `${textIndent}px`;
    }
  }, [textIndent]);

  useGSAP(
    () => {
      const sectionHeight = sectionRef.current?.clientHeight ?? 0;
      const scrollDuration = sectionHeight / 1.35;

      gsap.registerPlugin(ScrollTrigger);

      if (sectionHeight !== 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${scrollDuration}px`,
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });

        if (textRef.current) {
          const splitedText = new SplitType(textRef.current, {
            types: "words,chars",
          });

          tl.fromTo(
            titleRef.current,
            {
              yPercent: 100,
            },
            {
              yPercent: 0,
              ease: "power4.out",
              duration: 3,
              delay: 1.5,
            }
          )
            .from(textRef.current, {
              opacity: 0,
              ease: "power4.out",
              duration: 3,
            })
            .fromTo(
              splitedText.chars,
              {
                filter: "blur(4px)",
              },
              {
                filter: "blur(0px)",
                stagger: 0.1,
                duration: 1,
              },
              6
            );
        }

        tl.from(
          squareRef.current,
          {
            opacity: 0,
            duration: 3,
            ease: "power4.out",
          },
          1.5
        );
      }
    },
    { dependencies: [sectionRef.current?.clientHeight], revertOnUpdate: true }
  );
  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
    >
      <div className="flex items-center justify-center h-full">
        <div className="relative w-full px-10 lg:px-0 lg:w-[80vw]">
          <div
            ref={titleContainerRef}
            className="overflow-hidden absolute w-fit pr-3 md:pr-8"
          >
            <h2
              ref={titleRef}
              className="text-[10vw] leading-none lg:text-[7vw] tracking-tighter relative"
            >
              about me
            </h2>
          </div>
          <p
            ref={textRef}
            className="h-full text-white text-[5vw] pt-[2.5vw] lg:text-[2.5vw] lg:pt-[2.5vw] opacity-100"
          >
            Hi, I’m Cahya Juniar Syam, a passionate and self-motivated Front-End
            Web Developer. I specialize in crafting responsive and visually
            appealing web applications, blending creativity with functionality.
          </p>
        </div>
      </div>
      <div
        ref={squareRef}
        className="absolute top-10 left-10 w-10 h-10 opacity-100"
      >
        <AnimatedSquares />
      </div>
    </div>
  );
}
