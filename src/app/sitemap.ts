import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

// Indexable pages. Terms and Telehealth Consent are intentionally noindex
// (still templates pending final legal review), and /start is a paid LP (noindex),
// so they're excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wellaramd.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...ARTICLES.map((a) => ({
      url: `${base}/resources/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
