import parse from "html-react-parser";
import AnimatedSquares from "../others/AnimatedSquares";

const data = [
  {
    id: 1,
    title: "MOBILE DEVELOPER",
    subtitle: "BANGKIT ACADEMY",
    year: "February - July 2023",
    desc: `<li>
                    Developed an AI-integrated Android app using Kotlin for
                    batik recognition, achieving prototype completion and
                    receiving certification from Bangkit Academy. Users can
                    easily identify batik types by uploading or capturing
                    images.
                  </li>
                  <li>
                    Designed a user-friendly UI/UX in Figma, drawing inspiration
                    from Pinterest and top Bangkit projects, ensuring an
                    engaging experience while educating users on batik patterns
                    and their significance.
                  </li>`,
  },
  {
    id: 2,
    title: "Graphic Designer",
    subtitle: "Epsilon 2021",
    year: "June - August 2021",
    desc: `<li>Created Instagram posts, themes, and assets, receiving positive feedback from clients and users. Developed a cohesive design theme for consistent branding in every post and designed reusable assets for team members, ensuring all posts were completed on schedule.</li>`,
  },
  {
    id: 3,
    title: "Graphic Designer",
    subtitle: "Dinamika 2020",
    year: "September 2020 - June 2021",
    desc: `<li>Developed a new logo based on event values, contributing five proposals with the selected logo still in use since 2020.</li>
<li >Designed engaging Instagram posts for event recaps and announcements, enhancing audience awareness of updates.</li>`,
  },
];

export default function OtherSection() {
  return (
    <div className="w-screen px-3 md:px-10 lg:mt-10">
      <div className="w-full relative">
        <h2 className="uppercase text-[9vw] tracking-tighter leading-none w-full ">
          <span className="text-dark-blue outline-text">Other</span>{" "}
          <span className="text-orange outline-text">Experience</span>
        </h2>
        <div className="absolute top-0 right-0 aspect-square rotate-90 w-5 lg:w-10">
          <AnimatedSquares />
        </div>
      </div>
      <div className="mt-3 lg:mt-10">
        {data.map((item) => (
          <div key={item.id} className="w-full mb-5">
            <div className="flex items-start gap-2 lg:gap-5">
              <span className="font-righteous text-[3vw] lg:text-[1.5vw] text-dark-blue tracking-tighter uppercase">
                0{item.id}.
              </span>
              <div>
                <div className="w-full flex flex-col lg:flex-row items-start gap-2 lg:gap-5">
                  <p className="text-[5vw] lg:text-[3vw] text-nowrap font-righteous leading-none text-orange tracking-tighter uppercase outline-text">
                    {item.title}
                  </p>
                  <div className="flex items-start gap-2 lg:gap-5">
                    <span className="font-righteous text-[3vw] lg:text-[1.5vw] text-dark-blue tracking-tighter">
                      at
                    </span>
                    <p className="text-[5vw] lg:text-[3vw] font-righteous outline-text text-dark-blue leading-none tracking-tighter uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-[3.75vw] lg:text-[1.5vw] italic text-nowrap leading-none">
                    {item.year}
                  </p>
                </div>
                <div className="mt-5">
                  <ul className="list-disc ml-3 text-[3.75vw] lg:text-[1.25vw] text-justify">
                    {parse(item.desc ?? "")}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-dark-blue mt-5"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
