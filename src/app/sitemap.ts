import type { MetadataRoute } from "next";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = NAV_ITEMS.map((item) => ({
    url: `${SITE.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "daily" : "weekly",
    priority: item.href === "/" ? 1.0 : 0.8,
  })) as MetadataRoute.Sitemap;

  return [
    ...staticPages,
    {
      url: `${SITE.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
