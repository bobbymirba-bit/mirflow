export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceSuffix: string;
  description: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    id: "launch",
    name: "Launch",
    price: "$1,500",
    priceSuffix: "/mo",
    description: "For single-location businesses ready to automate their first workflow.",
    cta: "Book a call",
    ctaHref: "/book-a-call",
    features: [
      "One automation workflow (e.g. voice, chat, or booking)",
      "Up to 1,000 conversations / month",
      "CRM and calendar integration",
      "Standard analytics dashboard",
      "Email support, 2 business day response",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "$4,500",
    priceSuffix: "/mo",
    description: "For growing teams automating multiple functions across the business.",
    cta: "Book a call",
    ctaHref: "/book-a-call",
    featured: true,
    features: [
      "Up to 4 automation workflows",
      "Up to 10,000 conversations / month",
      "Full CRM, calendar, and system integrations",
      "Custom-trained knowledge base (RAG)",
      "Priority support, same business day response",
      "Monthly performance review with your automation lead",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "For multi-location or complex organizations needing custom AI systems.",
    cta: "Talk to sales",
    ctaHref: "/book-a-call",
    features: [
      "Unlimited automation workflows",
      "Unlimited conversations and volume",
      "Custom AI applications and multi-agent systems",
      "Dedicated infrastructure and SLA",
      "Dedicated solutions engineer and account team",
      "Quarterly business reviews and roadmap planning",
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
  { feature: "Typical monthly cost", cadence: "$1,500–$4,500", hiring: "$4,000–$8,000+ per hire", pointSolutions: "$500–$3,000 per tool" },
];
