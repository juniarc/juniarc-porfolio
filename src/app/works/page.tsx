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
        <section className="grid grid-cols-2 gap-x-10 gap-y-20 px-10 mt-10">
          {workItemData.map((item, index) => (
            <WorkItem key={index} {...item} number={`${item.id}`} />
          ))}
          {/* <WorkItem
            year="2024"
            role="Full - stack developer"
            number="01."
            title="Arva"
          />
          <WorkItem
            year="2024"
            role="FRONT - END DEVELOPER"
            number="02."
            title="Disscusify"
          />
          <WorkItem
            year="2024"
            role="FRONT - END DEVELOPER"
            number="03."
            title="Restofinder"
          /> */}
        </section>
      </main>
      <Footer />
    </GSAPProvider>
  );
}
