import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#030014] text-gray-200 overflow-x-hidden antialiased selection:bg-purple-500/30 selection:text-white",
          inter.className
        )}
      >
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-md focus:bg-purple-600 focus:text-white"
        >
          Skip to content
        </a>
        <StarsCanvas />
        <Navbar />
        <div className="pt-[64px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
