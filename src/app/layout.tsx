import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
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
  title: {
    default: "Iron Hide Performance Horse Sales",
    template: "%s | Iron Hide Performance Horse Sales",
  },
  description:
    "The most transparent horse sales in America. Cutting horses, reining horses, cow horses, team penning & sorting horses for sale. Deal rooms with full video, pedigree, and vet records.",
  keywords: [
    "cutting horses for sale",
    "reining horses for sale",
    "cow horse for sale",
    "team penning horse",
    "team sorting horse",
    "NCHA horse",
    "NRHA horse",
    "NRCHA horse",
    "performance horse sales",
    "horse sales Texas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
