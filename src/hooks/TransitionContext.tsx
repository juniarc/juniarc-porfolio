"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface TransitionContextProps {
  isNavigate: boolean;
  setIsNavigate: React.Dispatch<React.SetStateAction<boolean>>;
  startAnimation: boolean;
  setStartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransitionContext = createContext<TransitionContextProps | null>(null);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavigate, setIsNavigate] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <TransitionContext.Provider
      value={{ isNavigate, setIsNavigate, startAnimation, setStartAnimation }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }
  return context;
}
