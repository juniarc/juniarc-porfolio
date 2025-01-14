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
  const [textTopPadding, setTextTopPadding] = useState(0);

  useEffect(() => {
    const titleWidth = titleContainerRef.current?.clientWidth ?? 0;
    setTextIndent(titleWidth);

    const textHeight = 60 + 5; // for 2.5rem text
    const titleHeight = titleContainerRef.current?.clientHeight ?? 0;
    setTextTopPadding(titleHeight - textHeight);

    const firstWord = document.querySelector(".word") as HTMLDivElement;
    if (firstWord) {
      firstWord.style.paddingLeft = `${textIndent}px`;
    }
  }, [titleContainerRef, textRef, textIndent]);

  useGSAP(() => {
    const sectionHeight = sectionRef.current?.clientHeight ?? 0;
    const scrollDuration = sectionHeight / 1.35;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollDuration}px`,
      scrub: true,
      pin: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollDuration}px`,
        scrub: true,
      },
    });

    if (textRef.current) {
      const splitedText = new SplitType(textRef.current, {
        types: "words,chars",
      });

      tl.from(titleRef.current, {
        yPercent: 100,
        ease: "power4.out",
        duration: 3,
        delay: 1.5,
      })
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
  }, [sectionRef.current?.clientHeight]);
  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[80vw] h-[60vh]">
          <div ref={titleContainerRef} className="overflow-hidden w-fit pr-8">
            <h2 ref={titleRef} className="text-9xl tracking-tighter">
              about me
            </h2>
          </div>
          <p
            ref={textRef}
            style={{
              paddingTop: `${textTopPadding}px`,
            }}
            className="absolute top-0 left-0 text-white text-[2.5rem] opacity-100"
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
