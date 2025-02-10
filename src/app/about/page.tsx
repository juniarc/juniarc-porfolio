import { GSAPProvider } from "@/providers/gsapContext";
import Title from "@/ui/about/Title";
import InfiniteText from "@/ui/about/InfiniteText";
import AboutSection from "@/ui/about/AboutSection";
import Footer from "@/ui/global/Footer";
import EducationSection from "@/ui/about/EducationSection";
import OtherSection from "@/ui/about/OtherSection";

export default function About() {
  return (
    <GSAPProvider>
      <main className="max-w-screen overflow-hidden relative mb-10">
        <section className=" flex flex-col justify-end items-center">
          <Title />
          <InfiniteText />
        </section>
        <section className="px-10">
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
