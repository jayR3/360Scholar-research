import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://research.360scholar.org",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
