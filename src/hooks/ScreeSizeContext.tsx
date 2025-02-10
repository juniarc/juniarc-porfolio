"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ScreenSizeContext = createContext<{
  deviceType: "mobile" | "tablet" | "desktop" | null;
}>({ deviceType: "mobile" });

export const ScreenSizeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deviceType, setDeviceType] = useState<
    "mobile" | "tablet" | "desktop" | null
  >(null);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setDeviceType("mobile");
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceType]);

  return (
    <ScreenSizeContext.Provider value={{ deviceType }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSizeContext = () => {
  const contex = useContext(ScreenSizeContext);

  if (!contex) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }

  return contex;
};
