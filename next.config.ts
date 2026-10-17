import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Illustrative case-study pages were removed; send old links to the index.
      ...[
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
      })),
      // The finance and operations era of the site now lives on one quiet
      // consulting page. Send the old assessment, services, and solutions
      // URLs there instead of letting them 404.
      { source: "/quote", destination: "/consulting", permanent: false },
      { source: "/ai-assessment", destination: "/consulting", permanent: false },
      { source: "/services", destination: "/consulting", permanent: false },
      { source: "/services/:slug", destination: "/consulting", permanent: false },
      { source: "/solutions", destination: "/consulting", permanent: false },
      { source: "/solutions/:slug", destination: "/consulting", permanent: false },
      // Industries are now a single page for med spas and cosmetic dentistry.
      { source: "/industries/:slug", destination: "/industries", permanent: false },
    ];
  },
};

export default nextConfig;
