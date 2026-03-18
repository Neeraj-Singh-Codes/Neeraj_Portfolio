'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CursorBall from "./components/cursorBall";
import { lenis } from "./lib/lenis";
import { useEffect } from "react";

const generalSans = localFont({
  src: [
    {
      path: "../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { useEffect(() => {
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
{
  return (
    <html lang="en" className={generalSans.variable}>
      <body className="antialiased">
        <CursorBall />
        {children}</body>
    </html>
  );
}
}