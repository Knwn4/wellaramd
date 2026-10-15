import type { MetadataRoute } from "next";

// Indexable pages. Terms and Telehealth Consent are intentionally noindex
// (still templates pending final legal review), so they're excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wellaramd.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
