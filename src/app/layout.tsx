import type { Metadata, Viewport } from "next";
import { Inter_Tight, Italiana } from "next/font/google";
import "./globals.css";

const display = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const text = Inter_Tight({ weight: ["300", "400"], subsets: ["latin"], variable: "--font-text", display: "swap" });

export const metadata: Metadata = {
  title: "Adelle — clínica estética",
  description: "Dermatologia e estética em escala humana. Diagnóstico preciso e resultado que não se anuncia.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
