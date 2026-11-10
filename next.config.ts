import type { NextConfig } from "next";

/**
 * Legacy routes for previous offers.
 * permanent: true  -> 308 (gone for good)
 * permanent: false -> 307 (may come back: pricing, faq, contact, checkout, case studies, blog)
 */
const gone = [
  "/about",
  "/ai-assessment",
  "/ai-readiness",
  "/assessment",
  "/book-a-call",
  "/quote",
  "/roi-calculator",
  "/industries",
  "/industries/:path*",
  "/solutions",
  "/solutions/:path*",
  "/resources",
  "/resources/:path*",
  "/testimonials",
];

const mayReturn: [string, string][] = [
  ["/pricing", "/#pricing"],
  ["/services/:path+", "/services"],
  ["/faq", "/support-agent#faq"],
  ["/contact", "/#walkthrough"],
  ["/checkout", "/"],
  ["/checkout/:path*", "/"],
  ["/case-studies", "/"],
  ["/case-studies/:path*", "/"],
  ["/blog", "/"],
  ["/blog/:path*", "/"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...gone.map((source) => ({ source, destination: "/", permanent: true })),
      ...mayReturn.map(([source, destination]) => ({ source, destination, permanent: false })),
    ];
  },
};

export default nextConfig;
