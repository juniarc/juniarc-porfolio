import { GSAPProvider } from "@/providers/gsapContext";
import Footer from "@/ui/global/Footer";
import Title from "@/ui/works/Title";
import WorkItem from "@/ui/works/WorkItem";
import { workItemData } from "@/data/data";

export default function Works() {
  return (
    <GSAPProvider>
      <main className="max-w-screen overflow-hidden relative mb-10">
        <section className="px-10 pt-10">
          <Title />
        </section>
        <section className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-10 lg:gap-y-20 px-3 lg:px-10 mt-10">
          {workItemData.map((item, index) => (
            <WorkItem key={index} {...item} number={`${item.id}`} />
          ))}
        </section>
      </main>
      <Footer />
    </GSAPProvider>
  );
}
