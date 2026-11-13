import type { Metadata } from "next";

import { LeadSection } from "@/components/lead-section";
import { listPrice } from "@/lib/site-config";

const title = "Request a quote";
const description = `Request a Mirflow quote. ${listPrice.label}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/quote" },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: "/quote" },
};

export default function QuotePage() {
  return (
    <LeadSection
      id="quote"
      headingId="quote-heading"
      source="quote"
      heading="Request a quote"
      lede="Tell us about your business and the digital work you want off your plate. We’ll review what you have and talk through a plan."
    />
  );
}
