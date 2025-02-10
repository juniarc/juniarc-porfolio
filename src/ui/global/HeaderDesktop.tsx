"use client";

import Link from "next/link";
import Logo from "@/../../public/logo/logo.svg";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransitionContext } from "@/hooks/TransitionContext";
import { useMountedContext } from "@/hooks/MountContex";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const { setIsNavigate, startAnimation, setStartAnimation } =
    useTransitionContext();
  const { isMounted } = useMountedContext();

  const pathname = usePathname();

  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLAnchorElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const centerBgRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLUListElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      const activateScrollTrigger = async () => {
        const ScrollTrigger = (await import("gsap/ScrollTrigger"))
          .ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const delay = 4;

        const tl = gsap.timeline();
        if (startAnimation) {
          tl.to(centerRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            delay: delay,
          })
            .to(
              leftRef.current,
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                delay: delay,
              },
              0
            )
            .to(
              rightRef.current,
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                delay: delay,
              },
              0
            );

          ScrollTrigger.create({
            trigger: "header",
            start: "center top",
            endTrigger: document.documentElement,
            end: () => `+=${document.documentElement.scrollHeight}`,
            scrub: true,
            onEnter: () => {
              if (centerBgRef.current) {
                centerBgRef.current.classList.add("blur-effect");
              }

              if (linkRef.current) {
                linkRef.current.classList.add("text-white");
                linkRef.current.classList.add("moved");
              }

              const activeLinks = linkRef.current?.querySelectorAll("a");
              activeLinks?.forEach((link) => {
                link.classList.add("moved");
              });
            },
            onLeaveBack: () => {
              if (centerBgRef.current) {
                centerBgRef.current.classList.remove("blur-effect");
              }

              if (linkRef.current) {
                linkRef.current.classList.remove("text-white");
                linkRef.current.classList.remove("moved");
              }

              const activeLinks = linkRef.current?.querySelectorAll("a");
              activeLinks?.forEach((link) => {
                link.classList.remove("moved");
              });
            },
          });
        }
      };
      if (isMounted) activateScrollTrigger();
    },
    { dependencies: [pathname, startAnimation, isMounted] }
  );

  if (!isMounted) return;
  return (
    <header>
      <div ref={headerRef} className="flex items-center justify-between p-10">
        <Link ref={leftRef} href="/" className="opacity-0 -translate-y-full">
          <Image src={Logo} alt="logo" />
        </Link>
        <div
          ref={centerRef}
          className="fixed left-1/2 -translate-x-1/2 mt-6 top-0 opacity-0 -translate-y-full z-50"
        >
          <div className="relative py-4">
            <div
              ref={centerBgRef}
              className="absolute w-full h-full rounded-full -top-1/2 translate-y-1/2 transition-all duration-500"
            ></div>
            <div className="px-10">
              <ul ref={linkRef} className="flex items-center gap-5">
                {["/", "/works", "/about"].map((href, index) => {
                  const text =
                    href === "/" ? "INDEX" : href.slice(1).toUpperCase();
                  return (
                    <li key={index}>
                      <Link
                        onClick={() => {
                          setIsNavigate(true);
                          setStartAnimation(false);
                        }}
                        href={href}
                        className={`link-text ${pathname === href ? "active" : ""}`}
                      >
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div ref={rightRef} className="opacity-0 -translate-y-full">
          <ul className="flex items-center gap-5">
            <li>
              <Link href="https://linkedin.com/in/cahyajuniar" target="_blank">
                <FaLinkedin className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/juniarc" target="_blank">
                <FaGithub className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
