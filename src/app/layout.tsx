import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Footer, Header } from "@/components/site-chrome";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const title = `${siteConfig.name}: ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [
    "all-in-one digital agency",
    "website redesign",
    "social media management",
    "email marketing automation",
    "local SEO",
    "AI voice agent",
    "AI receptionist",
    "business automation",
  ],
  authors: [{ name: siteConfig.legalName }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: siteConfig.url, title, description: siteConfig.description, siteName: siteConfig.name },
  twitter: { card: "summary_large_image", title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f3efe7", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#org`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phoneSchema,
      description: siteConfig.description,
      sameAs: [siteConfig.instagramUrl],
    },
    {
      "@type": "Service",
      name: "All-in-one digital partner for business owners",
      provider: { "@id": `${siteConfig.url}/#org` },
      description: siteConfig.description,
      offers: [
        {
          "@type": "Offer",
          name: "Setup",
          price: String(siteConfig.pricing.setupFee),
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Monthly retainer",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(siteConfig.pricing.monthlyRetainer),
            priceCurrency: "USD",
            unitCode: "MON",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
