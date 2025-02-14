"use client";

import { GSAPProvider } from "@/providers/gsapContext";
import Title from "@/ui/about/Title";
import InfiniteText from "@/ui/home/hero/InfiniteText";
import AboutSection from "@/ui/about/AboutSection";
import Footer from "@/ui/global/Footer";
import EducationSection from "@/ui/about/EducationSection";
import OtherSection from "@/ui/about/OtherSection";
import { useMountedContext } from "@/hooks/MountContex";

export default function About() {
  const { isMounted } = useMountedContext();
  if (!isMounted) return;
  return (
    <GSAPProvider>
      <main className="max-w-screen overflow-hidden relative mb-10">
        <section className="flex flex-col justify-end items-center px-3 lg:px-10 pt-10">
          <Title />
          <InfiniteText />
        </section>
        <section className="px-3 md:px-10">
          <AboutSection />
        </section>
        <section>
          <EducationSection />
        </section>
        <section>
          <OtherSection />
        </section>
      </main>
      <Footer />
    </GSAPProvider>
  );
}
