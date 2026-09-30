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
    ].map((slug) => ({
      source: `/case-studies/${slug}`,
      destination: "/case-studies",
      permanent: false,
    }));
  },
};

export default nextConfig;
