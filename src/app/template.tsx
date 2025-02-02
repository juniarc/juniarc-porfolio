import PixelTranisiton from "@/ui/others/PixelTransition";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PixelTranisiton />
      <div>{children}</div>
    </>
  );
}
