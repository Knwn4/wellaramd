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
  metadataBase: new URL("https://wellaramd.com"),
  title: {
    default: "WellaraMD — Weight, Metabolic & Longevity Medicine for Women",
    template: "%s — WellaraMD",
  },
  description:
    "Weight, metabolic, and longevity care built for women. Reviewed by licensed, US-based providers and delivered to your door.",
  keywords: [
    "weight loss telehealth",
    "GLP-1",
    "semaglutide",
    "tirzepatide",
    "metabolic health",
    "longevity medicine",
    "peptide therapy",
    "women's health",
    "telehealth",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://wellaramd.com",
    siteName: "WellaraMD",
    title: "WellaraMD — Weight, Metabolic & Longevity Medicine for Women",
    description:
      "Weight, metabolic, and longevity care built for women. Reviewed by licensed, US-based providers and delivered to your door.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WellaraMD — Weight, Metabolic & Longevity Medicine for Women",
    description:
      "Weight, metabolic, and longevity care built for women, reviewed by licensed providers.",
  },
  // To verify in Google Search Console, add the code here:
  // verification: { google: "<token>" },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wellaramd.com/#org",
      name: "WellaraMD",
      legalName: "WellaraMD LLC",
      url: "https://wellaramd.com",
      logo: "https://wellaramd.com/icon.png",
      image: "https://wellaramd.com/opengraph-image.png",
      description:
        "WellaraMD connects patients with independent, licensed US providers and pharmacies for weight, metabolic, and longevity care via telehealth.",
      email: "support@wellaramd.com",
      telephone: "+1-866-667-5276",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1081 N Tustin Ave, Ste 115, PMB #4026",
        addressLocality: "Anaheim",
        addressRegion: "CA",
        postalCode: "92807",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-866-667-5276",
        email: "support@wellaramd.com",
        contactType: "customer support",
        areaServed: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://wellaramd.com/#website",
      url: "https://wellaramd.com",
      name: "WellaraMD",
      inLanguage: "en-US",
      publisher: { "@id": "https://wellaramd.com/#org" },
    },
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
      className={`${grotesk.variable} ${mono.variable} ${serif.variable} antialiased`}
    >
      <body className="min-h-screen bg-ivory text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
