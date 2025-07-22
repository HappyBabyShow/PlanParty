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
  title: "HAPPYBABYSHOW - Plan Perfect Kids' Parties in Portugal & Spain",
  description: "AI-powered event planning platform for children's parties. Find vendors, manage budgets, and create unforgettable celebrations in Portugal and Spain.",
  keywords: "children's party planning, kids events, Portugal, Spain, event planning, party vendors, birthday parties",
  openGraph: {
    title: "HAPPYBABYSHOW - Plan Perfect Kids' Parties",
    description: "AI-powered event planning platform for children's parties in Portugal and Spain",
    type: "website",
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
