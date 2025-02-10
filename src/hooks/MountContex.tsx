"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";

export const MountContext = createContext({ isMounted: false });

export const MountProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setIsMounted(true);
  }, []);

  return (
    <MountContext.Provider value={{ isMounted: isMounted }}>
      {children}
    </MountContext.Provider>
  );
};

export const useMountedContext = () => {
  const context = useContext(MountContext);
  if (!context) {
    throw new Error("useMountedContext must be used within a MountProvider");
  }
  return context;
};
