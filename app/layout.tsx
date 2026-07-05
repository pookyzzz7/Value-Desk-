import type { Metadata } from "next";
import { Gloock, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const display = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Value Desk — Pronostics Professionnels Tennis",
  description:
    "Value Desk : pronostics professionnels sur le tennis. Analyses data-driven pour détecter les value bets sur les marchés ATP et Challenger. Rejoignez notre canal Telegram.",
  openGraph: {
    title: "Value Desk — Pronostics Professionnels Tennis",
    description:
      "Pronostics professionnels sur le tennis. Analyses data-driven pour détecter les value bets sur les marchés ATP et Challenger.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
