import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { profile } from "@/data/portfolio";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description = `${profile.tagline} Portfolio of Jassim Mohammed, AI/ML Engineer and Software Developer.`;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://jassim-portfolio-gamma.vercel.app"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-void text-ink font-body">
        <SmoothScrollProvider>
          <ScrollProgress />
          <div className="grain-overlay" aria-hidden="true" />
          <Cursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
