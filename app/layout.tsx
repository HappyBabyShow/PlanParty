import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HappyBaby - AI-Powered Kids Party Planning Platform",
  description: "Plan perfect children's parties in Portugal & Spain with AI recommendations, curated vendors, budget tracking, and timeline management. Multilingual support for families.",
  keywords: "kids party planning, children events, Portugal, Spain, AI recommendations, party vendors, budget planner, event timeline, multilingual, family celebrations",
  authors: [{ name: "HappyBaby Team" }],
  openGraph: {
    title: "HappyBaby - AI-Powered Kids Party Planning",
    description: "Simplify children's party planning with AI-driven recommendations and local vendor marketplace in Portugal & Spain.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_PT", "es_ES", "ru_RU", "uk_UA"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
