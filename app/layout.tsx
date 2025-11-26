import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ---- Load General Sans EXACT font ----
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

// ---- Metadata ----
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Made with Next.js",
};

// ---- Layout ----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
