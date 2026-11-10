import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { SiteAssistant } from "@/components/site-assistant";
import { Footer, Header } from "@/components/site-chrome";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const title = `${siteConfig.name}: ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["digital agency", "website design", "LinkedIn outreach", "AI ad creative", "AI receptionist"],
  authors: [{ name: siteConfig.legalName }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: siteConfig.url, title, description: siteConfig.description, siteName: siteConfig.name },
  twitter: { card: "summary_large_image", title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f4f8ff", width: "device-width", initialScale: 1 };

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
      name: "Managed digital marketing and AI automation",
      url: `${siteConfig.url}/services`,
      provider: { "@id": `${siteConfig.url}/#org` },
      description: siteConfig.description,
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
        <SiteAssistant />
      </body>
    </html>
  );
}
