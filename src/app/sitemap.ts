import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/ai-receptionist`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/support-agent`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
