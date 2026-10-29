import parse from "html-react-parser";
import AnimatedSquares from "../others/AnimatedSquares";

const data = [
  {
    id: 1,
    title: "IT Trainee",
    subtitle: "PT. Midas Daya Teknologi",
    year: "April - September 2025",
    desc: `<li>
                    Trained hands-on in Oracle SQL, PL/SQL, Java and FLEXCUBE across the Loans, Trade Finance and Limits & Facilities modules.
                  </li>
                  <li>
                    Built OBIEE business reports by writing SQL queries and implementing report layouts from functional requirements.
                  </li>`,
  },
  {
    id: 2,
    title: "Junior IT Technical Consultant",
    subtitle: "PT. Midas Daya Teknologi",
    year: "October 2025 - October 2026",
    desc: `<li>Reduced the bank’s maximum end-of-day batch processing time from 10 hours to under 4 by investigating and fixing critical performance issues.</li>
    <li>Served as PIC for a FLEXCUBE patchset upgrade, coordinating the client, internal teams and Oracle through planning, impact analysis, customization, deployment and validation.</li>
    <li>Develop Java and PL/SQL fixes for production data and application issues, and build OBIEE business reports from functional requirements, working in sprint-based cycles.`,
  },
];

export default function WorkSection() {
  return (
    <div className="w-screen mt-10 px-3 md:px-10 lg:mt-10">
      <div className="w-full relative">
        <h2 className="uppercase text-[9vw] tracking-tighter leading-none w-full ">
          <span className="text-dark-blue outline-text">Work</span>{" "}
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
