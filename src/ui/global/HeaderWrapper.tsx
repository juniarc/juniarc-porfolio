"use client";
import Header from "./Header";
import HeaderDesktop from "./HeaderDesktop";
import { useScreenSizeContext } from "@/hooks/ScreeSizeContext";
import { useMountedContext } from "@/hooks/MountContex";

export default function HeaderWrapper() {
  const { deviceType } = useScreenSizeContext();
  const { isMounted } = useMountedContext();

  if (!isMounted) return;
  if (deviceType !== "desktop") return <Header />;
  return <HeaderDesktop />;
}
