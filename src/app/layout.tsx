import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "@/providers/SmoothScrolling";
import FlickeringGrid from "@/ui/global/FlickeringGrid";
import { TransitionProvider } from "@/hooks/TransitionContext";
import { ScreenSizeProvider } from "@/hooks/ScreeSizeContext";
import { MountProvider } from "@/hooks/MountContex";
import HeaderWrapper from "@/ui/global/HeaderWrapper";

const righteous = localFont({
  src: "../../public/fonts/Righteous-Regular.ttf",
  variable: "--font-righteous",
});

const robotoMono = localFont({
  src: "../../public/fonts/RobotoMono-Regular.ttf",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Juniarc",
  description: "Juniarc's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoMono.variable} ${righteous.variable} antialiased max-h-fit`}
      >
        <MountProvider>
          <ScreenSizeProvider>
            <TransitionProvider>
              <FlickeringGrid
                className="z-0 absolute inset-0 size-full opacity-10 pointer-events-none"
                squareSize={48}
                gridGap={0}
                maxOpacity={0.5}
                flickerChance={0.5}
              />
              <HeaderWrapper />
              <SmoothScrolling>{children}</SmoothScrolling>
            </TransitionProvider>
          </ScreenSizeProvider>
        </MountProvider>
      </body>
    </html>
  );
}
