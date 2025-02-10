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
    <div className="w-screen px-10 mt-10">
      <div className="w-full relative">
        <h2 className="uppercase text-[9vw] tracking-tighter leading-none w-full">
          <span className="outline-text text-dark-blue">My</span>{" "}
          <span className="text-orange outline-text">Education</span>
        </h2>
        <div className="absolute top-0 right-0 aspect-square w-10 ">
          <AnimatedSquares />
        </div>
      </div>
      <div className="mt-10">
        {data.map((item) => (
          <div key={item.id} className="w-full mb-5">
            <div className="w-full flex gap-5">
              <div className="w-3/5 flex gap-5">
                <span className="font-righteous text-xl text-dark-blue tracking-tighter uppercase">
                  0{item.id}.
                </span>
                <div>
                  <p className="text-[2.5rem] font-righteous leading-none outline-text text-orange tracking-tighter uppercase">
                    {item.title}
                  </p>
                  <div className="w-full flex items-start gap-5 mt-3">
                    <span className="font-righteous text-xl text-dark-blue tracking-tighter">
                      at
                    </span>
                    <p className="text-[2.5rem] font-righteous outline-text text-dark-blue leading-none tracking-tighter uppercase">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-lg italic mt-3 leading-none">
                    {item.year}
                  </p>
                </div>
              </div>
              <div className="w-2/5 text-justify">{parse(item.desc ?? "")}</div>
            </div>
            <div className="w-full h-[1px] bg-dark-blue mt-5"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
