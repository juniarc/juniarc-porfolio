import { GSAPProvider } from "@/providers/gsapContext";
import Footer from "@/ui/global/Footer";
import About from "@/ui/home/about/About";
import HeroText from "@/ui/home/hero/HeroText";
import InfiniteText from "@/ui/home/hero/InfiniteText";
import Works from "@/ui/home/work/Works";

export default function Home() {
  return (
    <GSAPProvider>
      <main className="max-w-screen min-h-screen overflow-hidden mb-10">
        <section className="h-[65vh] flex flex-col justify-end items-center max-w-[100vw] overflow-x-hidden">
          <HeroText />
          <InfiniteText border="border-y border-dark-blue" />
        </section>
        <section className="w-screen">
          <About />
        </section>
        <section className="work-section lg:mt-10 p-3 lg:p-10 relative">
          <Works />
        </section>
      </main>
      <Footer />
    </GSAPProvider>
  );
}
