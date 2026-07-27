export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceSuffix: string;
  description: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  setupFee?: string;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    id: "founding",
    name: "Founding",
    price: "$199",
    priceSuffix: "/mo",
    setupFee: "$500 one-time setup",
    description: "Launch pricing for our first three service-business partners.",
    cta: "Purchase subscription",
    ctaHref: "/checkout?plan=founding",
    featured: true,
    features: [
      "One lead source and one core workflow",
      "Instant SMS and email follow-up",
      "Lead qualification and calendar booking",
      "CRM or spreadsheet updates",
      "Monitoring for up to 250 leads / month",
      "90-day initial commitment",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$349",
    priceSuffix: "/mo",
    setupFee: "$1,000 one-time setup",
    description: "For businesses ready to automate a larger lead-conversion workflow.",
    cta: "Purchase subscription",
    ctaHref: "/checkout?plan=growth",
    features: [
      "Up to two lead sources",
      "SMS and email nurture sequences",
      "Custom qualification logic",
      "Calendar and CRM integrations",
      "Monitoring for up to 750 leads / month",
      "Monthly performance summary",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "For voice AI, multiple workflows, complex integrations or higher volume.",
    cta: "Request a custom quote",
    ctaHref: "/quote",
    features: [
      "AI receptionists and voice agents",
      "Multiple connected workflows",
      "Custom applications and integrations",
      "Higher conversation and lead volume",
      "Tailored implementation plan",
      "Ongoing optimization options",
    ],
  },
];

export type ComparisonRow = {
  feature: string;
  cadence: string | boolean;
  hiring: string | boolean;
  pointSolutions: string | boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Time to live", cadence: "2–6 weeks", hiring: "2–4 months to hire + train", pointSolutions: "Days, but narrow scope" },
  { feature: "Coverage", cadence: "24/7/365", hiring: "Business hours only", pointSolutions: "Varies by tool" },
  { feature: "Handles multiple workflows", cadence: true, hiring: "Limited by headcount", pointSolutions: false },
  { feature: "Custom to your business", cadence: true, hiring: true, pointSolutions: false },
  { feature: "Scales without added cost", cadence: true, hiring: false, pointSolutions: "Per-seat pricing" },
  { feature: "Ongoing optimization", cadence: true, hiring: "Depends on tenure", pointSolutions: false },
  { feature: "Starting monthly cost", cadence: "$199", hiring: "$4,000–$8,000+ per hire", pointSolutions: "$500–$3,000 per tool" },
];
