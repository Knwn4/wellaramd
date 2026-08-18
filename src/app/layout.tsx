import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

/* Neo-grotesque for headlines + body (clean, editorial, high-clarity) */
const grotesk = Geist({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Mono for eyebrows, labels, and data — the small-caps detail layer */
const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Serif reserved for the wordmark only */
const serif = Fraunces({
  variable: "--font-serif-mark",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WellaraMD — Women's Hormone & Longevity Medicine",
  description:
    "Physician-guided hormone, metabolic, and longevity care built for women. Perimenopause through menopause and beyond. Feel like yourself again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${mono.variable} ${serif.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
