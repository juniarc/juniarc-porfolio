import AnimatedSquares from "../others/AnimatedSquares";
import parse from "html-react-parser";

const data = [
  {
    id: 1,
    title: "FULL - STACK SOFTWARE ENGINEER",
    subtitle: "REVOU",
    year: "June 2024 - December 2024",
    desc: "Achieved a perfect grade of 150.00/150.00 in the Full Stack Software Engineering program. Developed various web applications, culminating in a final project: Arva, an agriculture e-commerce platform featuring.",
  },
  {
    id: 2,
    title: "BACHELOR OF ENGINEERING PHYSICS",
    subtitle: "Universitas Gadjah Mada",
    year: "August 2019 - January 2024",
    desc: `
    <p>Graduated with a<strong> GPA</strong> of<strong> 3.42/4.00</strong>. My undergraduate thesis, titled "Optimization of In Situ Esterification of <em>Calophyllum inophyllum</em> Seed Using Methanol and n-Hexane with Sulfuric Acid Catalyst" focused on enhancing biofuel production techniques.</p>`,
  },
];

export default function EducationSection() {
  return (
    <div className="w-screen mt-10 px-3 md:px-10 lg:mt-10">
      <div className="w-full relative">
        <h2 className="uppercase text-[9vw] tracking-tighter leading-none w-full">
          <span className="outline-text text-dark-blue">My</span>{" "}
          <span className="text-orange outline-text">Education</span>
        </h2>
        <div className="absolute top-0 right-0 aspect-square w-5 lg:w-10 ">
          <AnimatedSquares />
        </div>
      </div>
      <div className="mt-3 lg:mt-10">
        {data.map((item) => (
          <div key={item.id} className="w-full mb-5">
            <div className="w-full flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-3/5 flex gap-2 lg:gap-5">
                <span className="font-righteous text-[3vw] lg:text-[1.5vw] text-dark-blue tracking-tighter uppercase">
                  0{item.id}.
                </span>
                <div className="flex flex-col justify-start">
                  <p className="text-[5vw] lg:text-[3vw] font-righteous leading-none outline-text text-orange tracking-tighter uppercase">
                    {item.title}
                  </p>
                  <div className="w-full flex items-start gap-2 lg:gap-5 mt-1 lg:mt-3">
                    <span className="font-righteous text-[3vw] lg:text-[1.5vw] text-dark-blue tracking-tighter">
                      at
                    </span>
                    <p className="text-[5vw] lg:text-[3vw] font-righteous outline-text text-dark-blue leading-none tracking-tighter uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-[3.75vw] lg:text-[1.5vw] italic mt-2 lg:mt-3 leading-none">
                    {item.year}
                  </p>
                </div>
              </div>
              <div className="lg:w-2/5 text-[3.75vw] lg:text-[1.25vw] text-justify ml-[3vw] pl-2">
                {parse(item.desc ?? "")}
              </div>
            </div>
            <div className="w-full h-[1px] bg-dark-blue mt-3 lg:mt-5"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
