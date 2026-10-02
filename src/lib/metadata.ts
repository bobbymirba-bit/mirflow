import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

/**
 * Builds consistent page metadata: title, description, canonical URL, and
 * Open Graph / Twitter fields. Nested objects like `openGraph` are replaced
 * (not merged) per segment, so every page sets them in full here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: path,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
