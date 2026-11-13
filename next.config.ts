import type { NextConfig } from "next";

/**
 * Legacy routes for previous offers.
 * permanent: true  -> 308 (gone for good)
 * permanent: false -> 307 (may come back: faq, contact, case studies, blog)
 */
const gone = [
  "/about",
  "/ai-assessment",
  "/ai-readiness",
  "/assessment",
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
  ["/book-a-call", "/pricing#book"],
  ["/services/:path+", "/services"],
  ["/faq", "/support-agent#faq"],
  ["/contact", "/#walkthrough"],
  ["/checkout", "/pricing"],
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
