"use client";

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
import { workItemData } from "@/data/data";
import { useMountedContext } from "@/hooks/MountContex";

export default function Works() {
  const { isMounted } = useMountedContext();

  if (!isMounted) return;
  return (
    <div>
      <Title />
      <div className="mt-10">
        <Arva
          id={workItemData[0].id}
          year={workItemData[0].year}
          role={workItemData[0].role}
          title={workItemData[0].title}
          subtitle={workItemData[0].subtitle}
          description={workItemData[0].description}
          image={workItemData[0].image}
          yPercent={workItemData[0].yPercent}
          startTrigger={workItemData[0].startTrigger}
          position={workItemData[0].position}
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
              id={workItemData[1].id}
              year={workItemData[1].year}
              role={workItemData[1].role}
              title={workItemData[1].title}
              subtitle={workItemData[1].subtitle}
              description={workItemData[1].description}
              tools={<BiLogoReact />}
              image={workItemData[1].image}
              yPercent={workItemData[1].yPercent}
              startTrigger={workItemData[1].startTrigger}
              position={workItemData[1].position}
            />
          </div>
          <div className="w-1/2">
            <WorkItem
              id={workItemData[2].id}
              year={workItemData[2].year}
              role={workItemData[2].role}
              title={workItemData[2].title}
              subtitle={workItemData[2].subtitle}
              description={workItemData[2].description}
              tools={
                <>
                  <AiFillHtml5 /> <BiLogoCss3 /> <BiLogoJavascript />
                </>
              }
              image={workItemData[2].image}
              yPercent={workItemData[2].yPercent}
              startTrigger={workItemData[2].startTrigger}
              position={workItemData[2].position}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
