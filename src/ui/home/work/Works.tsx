import { AiFillHtml5 } from "react-icons/ai";
import Arva from "./Arva";
import Title from "./Title";
import WorkItem from "./WorkItem";
import {
  BiLogoCss3,
  BiLogoFlask,
  BiLogoJavascript,
  BiLogoReact,
} from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export default function Works() {
  return (
    <div>
      <Title />
      <div className="mt-10">
        <Arva
          tools={
            <>
              <RiNextjsFill />
              <RiTailwindCssFill />
              <BiLogoFlask />
              <SiMysql />
            </>
          }
        />
        <div className="relative mt-28 flex justify-between gap-10">
          <div className="w-1/2">
            <WorkItem
              year={2024}
              position="mt-[30%] ml-auto"
              role="FRONT - END DEVELOPER"
              title="DISCUSSIFY"
              subTitle="DISCUSSION FORUM WEBSITE"
              description="Desc"
              tools={<BiLogoReact />}
              yPercent={-15}
              startTrigger="top top"
            />
          </div>
          <div className="w-1/2">
            <WorkItem
              year={2024}
              position="ml-auto"
              role="FRONT - END DEVELOPER"
              title="RESTOFINDER"
              subTitle="RESTAURANT FOUNDER WEBSITE"
              description="Desc"
              tools={
                <>
                  <AiFillHtml5 /> <BiLogoCss3 /> <BiLogoJavascript />
                </>
              }
              yPercent={-15}
              startTrigger="top 30%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
