"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/../../public/logo/logo.svg";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTransitionContext } from "@/hooks/TransitionContext";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const lenis = useLenis();
  const pathname = usePathname();

  const { setIsNavigate, startAnimation, setStartAnimation } =
    useTransitionContext();
  const [isNavOpen, setNavOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const [isComplete, setComplete] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  useGSAP(
    () => {
      if (startAnimation) {
        gsap.from(headerRef.current, {
          yPercent: -100,
          duration: 1.5,
          delay: 2.5,
          pointerEvents: "none",
          ease: "power4.out",
          onComplete: () => setComplete(true),
        });
      }
    },
    { dependencies: [startAnimation] }
  );

  const handleBurgerBtn = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-screen z-50 pointer-events-auto"
    >
      <div className="relative">
        <div
          className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-100 ease-in ${
            !isNavOpen &&
            (isHidden
              ? "-translate-y-full"
              : `translate-y-0 ${lastScrollY !== 0 && "bg-background"}`)
          }`}
        >
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <button
            onClick={handleBurgerBtn}
            className={`border-[0.2px] p-2 rounded z-50 ${isNavOpen ? "border-background" : "border-foreground"} `}
          >
            <div className="group grid justify-items-center gap-[3px]">
              <span
                className={`h-[1px] w-4 rounded-full transition  ${
                  isNavOpen
                    ? "rotate-45 translate-y-1 bg-background"
                    : "bg-foreground"
                }`}
              ></span>
              <span
                className={`h-[1px] w-4 rounded-full transition ${
                  isNavOpen ? "scale-x-0 bg-background" : "bg-foreground"
                }`}
              ></span>
              <span
                className={`h-[1px] w-4 rounded-full transition  ${
                  isNavOpen
                    ? "-rotate-45 -translate-y-1 bg-background"
                    : "bg-foreground"
                }`}
              ></span>
            </div>
          </button>
        </div>
        {isComplete && (
          <nav
            className={` bg-dark-blue absolute top-0 left-0 w-full h-screen transition-transform duration-300 z-40 overflow-hidden ${
              isNavOpen ? "none translate-y-0" : "block translate-y-full"
            }`}
          >
            <div className="w-full h-full relative">
              <div className="pt-40 flex flex-col gap-20 items-center">
                <ul className="text-center flex flex-col gap-3">
                  {["/", "/works", "/about"].map((href, index) => {
                    const text =
                      href === "/" ? "INDEX" : href.slice(1).toUpperCase();
                    return (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            setIsNavigate(true);
                            setStartAnimation(false);
                            setNavOpen(false);
                          }}
                          href={href}
                          className={`link-text font-righteous text-[10vw] leading-none ${pathname === href ? "active text-orange" : "text-background"}`}
                        >
                          {text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <ul className="flex items-center gap-5 text-background">
                  <li>
                    <Link
                      href="https://linkedin.com/in/cahyajuniar"
                      target="_blank"
                    >
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
              <div className="absolute bottom-0 left-0 ">
                <span className="text-background text-center w-full font-righteous text-[27vw] leading-none tracking-tighter">
                  JUNIAR<span className="text-orange">C</span>
                </span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
