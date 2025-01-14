import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/ui/global/Header";
import SmoothScrolling from "@/providers/SmoothScrolling";
import FlickeringGrid from "@/ui/global/FlickeringGrid";

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
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${righteous.variable} antialiased overflow-hidden`}
      >
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full opacity-10"
          squareSize={48}
          gridGap={0}
          maxOpacity={0.5}
          flickerChance={0.5}
        />
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
