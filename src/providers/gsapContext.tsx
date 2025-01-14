"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createContext, useContext } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

interface GSAPContextProps {
  gsap: typeof gsap;
  useGSAP: typeof useGSAP;
  ScrollTrigger: typeof ScrollTrigger;
}
const GSAPContext = createContext<GSAPContextProps | null>(null);

export const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GSAPContext.Provider value={{ gsap, ScrollTrigger, useGSAP }}>
      {children}
    </GSAPContext.Provider>
  );
};

export const useGSAPContext = () => {
  const context = useContext(GSAPContext);
  if (!context) {
    throw new Error("useGSAPContext must be used within a GSAPProvider");
  }
  return context;
};
