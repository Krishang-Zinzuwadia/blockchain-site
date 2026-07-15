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
  metadataBase: new URL("https://blockchain-site.krishang.dev"),
  title: {
    default: "Rubyx | Verifiable Manufacturing",
    template: "%s | Rubyx",
  },
  description:
    "Rubyx is a blockchain-secured control plane for 3D-printer fleets, protecting design IP, authorizing every job, and proving every physical run.",
  applicationName: "Rubyx",
  keywords: [
    "Rubyx",
    "3D printing",
    "additive manufacturing",
    "blockchain",
    "manufacturing security",
    "design IP protection",
  ],
  authors: [{ name: "Rubyx" }],
  creator: "Rubyx",
  publisher: "Rubyx",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Rubyx",
    title: "Rubyx | The Trust Layer for 3D Printing",
    description:
      "Protect design IP, authorize every print, and prove every physical run with a shared, tamper-evident manufacturing record.",
    images: [
      {
        url: "/rubyx-share.png?v=2",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Rubyx: The Trust Layer for 3D Printing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubyx | The Trust Layer for 3D Printing",
    description:
      "Protect design IP, authorize every print, and prove every physical run with a shared, tamper-evident manufacturing record.",
    images: ["/rubyx-share.png?v=2"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
