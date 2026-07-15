import type { Metadata } from "next";
import { Anybody, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ForgeLedger — Verifiable Manufacturing",
  description:
    "A blockchain-secured management network for tamper-proof, multi-printer manufacturing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${anybody.variable} ${dmSans.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
