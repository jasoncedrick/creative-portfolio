import type { MetadataRoute } from "next";
import { deepDives } from "@/lib/deep-dives";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jasoncedrickportfolio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...Object.keys(deepDives).map((slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
