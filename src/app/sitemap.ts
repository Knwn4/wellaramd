import type { MetadataRoute } from "next";

// Homepage only. Legal pages are intentionally noindex (set in their metadata),
// so they're excluded from the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wellaramd.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
