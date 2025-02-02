import { GSAPProvider } from "@/providers/gsapContext";
import Footer from "@/ui/global/Footer";
import FirstImage from "@/ui/works-detail/FirstImage";
import ImageSection from "@/ui/works-detail/ImageSection";
import SubTitle from "@/ui/works-detail/Subtitle";
import TextContent from "@/ui/works-detail/TextContent";
import Title from "@/ui/works-detail/Title";
import VisitBtn from "@/ui/works-detail/VisitBtn";
import { detailWorkData } from "@/data/data";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const urlName = (await params).name.toLowerCase();
  const data = detailWorkData.find((item) => item.title === urlName);

  return (
    <GSAPProvider>
      <main className="max-w-screen max-h-max overflow-hidden relative">
        <section className="px-10 pt-10">
          <Title title={data?.title} />
          <SubTitle
            role={data?.role}
            year={data?.year}
            institution={data?.institusion}
          />
          <VisitBtn link={data?.link} />
        </section>
        <section className="mt-24">
          <FirstImage image={data?.image1} title={data?.title} />
          <TextContent desc={data?.desc1} heading={data?.heading1} />
          <ImageSection image={data?.image2} title={data?.title} />
          {data?.desc2 && (
            <>
              <TextContent desc={data?.desc2} heading={data?.heading2} />
              <ImageSection image={data?.image3} title={data?.title} />
              <TextContent desc={data?.desc3} heading={data?.heading3} />
              <ImageSection image={data?.image4} title={data?.title} />
              <TextContent desc={data?.desc4} heading={data?.heading4} />
            </>
          )}
        </section>
      </main>
      <Footer />
    </GSAPProvider>
  );
}
