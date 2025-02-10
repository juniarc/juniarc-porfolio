import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/ui/global/Header";
import SmoothScrolling from "@/providers/SmoothScrolling";
import FlickeringGrid from "@/ui/global/FlickeringGrid";
import { TransitionProvider } from "@/hooks/TransitionContext";

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
        className={`${robotoMono.variable} ${righteous.variable} antialiased max-h-fit overflow-hidden`}
      >
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full opacity-10 pointer-events-none"
          squareSize={48}
          gridGap={0}
          maxOpacity={0.5}
          flickerChance={0.5}
        />
        <TransitionProvider>
          <Header />
          <SmoothScrolling>{children}</SmoothScrolling>
        </TransitionProvider>
      </body>
    </html>
  );
}
