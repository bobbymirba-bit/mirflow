import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Illustrative case-study pages were removed; send old links to the index.
  async redirects() {
    return [
      "coastline-hvac",
      "harborview-dental",
      "meridian-law-partners",
      "northfield-realty",
      "veyra-commerce",
      "ironclad-manufacturing",
    ]
      .map((slug) => ({
        source: `/case-studies/${slug}`,
        destination: "/case-studies",
        permanent: false,
      }))
      .concat([
        // The booking flow now lives on the AI Assessment page.
        { source: "/book-a-call", destination: "/ai-assessment", permanent: true },
      ]);
  },
};

export default nextConfig;
