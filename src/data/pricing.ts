export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceSuffix: string;
  description: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  setupFee?: string;
  features: string[];
};

// Tier ids "founding" and "growth" map to Stripe price env vars in /api/checkout.
// Keep those ids stable. Growth's $997 setup + $399/mo needs new Stripe Prices
// (STRIPE_GROWTH_SETUP_PRICE_ID / STRIPE_GROWTH_MONTHLY_PRICE_ID) before checkout matches this page.
// The pilot has no Stripe checkout; it books through /book-a-call.
export const pricingTiers: PricingTier[] = [
  {
    id: "pilot",
    name: "Pilot",
    price: "$197",
    priceSuffix: " one-time",
    setupFee: "Credited toward Starter or Growth setup",
    description:
      "Seven days of missed-call text-back on your real line, so you can see what you've been missing before you commit to anything.",
    cta: "Book the pilot",
    ctaHref: "/book-a-call",
    features: [
      "Call capture live within 24 hours",
      "Missed callers get a text back within a minute",
      "Text-back starts once carrier approval clears (10DLC, usually 2–7 business days)",
      "Your 7 days start when texts go live, not before",
      "Email alert with the caller's number and time for every missed call",
      "End-of-pilot recap: missed calls, replies, and what they were worth to you",
      "$197 credited toward setup if you continue",
    ],
  },
  {
    id: "founding",
    name: "Starter",
    price: "$199",
    priceSuffix: "/mo",
    setupFee: "$497 one-time setup",
    description:
      "An AI receptionist for the hours you're closed, plus text-back for the calls you can't get to during the day.",
    cta: "Start with Starter",
    ctaHref: "/checkout?plan=founding",
    featured: true,
    badge: "Where most businesses start",
    features: [
      "After-hours AI receptionist on your existing number",
      "Missed-call text-back during business hours",
      "A short summary of every call, sent by text or email",
      "Urgent calls flagged to your cell",
      "Answers trained on your services, hours, and service area",
      "Month-to-month. Cancel anytime.",
      "$197 pilot credited toward setup",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$399",
    priceSuffix: "/mo",
    setupFee: "$997 one-time setup",
    description:
      "Every call answered around the clock, booked straight onto your calendar, with follow-up and reviews handled for you.",
    cta: "Start with Growth",
    ctaHref: "/checkout?plan=growth",
    features: [
      "Everything in Starter",
      "24/7 answering, including overflow when your line is busy",
      "Books appointments directly on your calendar",
      "Follow-up texts for quotes and callers who didn't book",
      "Review requests after completed jobs or visits",
      "Monthly call report and script tuning",
      "Month-to-month. Cancel anytime.",
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
  { feature: "Time to live", cadence: "Within 24 hours for standard setup", hiring: "2–4 months to hire + train", pointSolutions: "Days, but narrow scope" },
  { feature: "Coverage", cadence: "24/7/365", hiring: "Business hours only", pointSolutions: "Varies by tool" },
  { feature: "Handles multiple workflows", cadence: true, hiring: "Limited by headcount", pointSolutions: false },
  { feature: "Custom to your business", cadence: true, hiring: true, pointSolutions: false },
  { feature: "Scales without added cost", cadence: true, hiring: false, pointSolutions: "Per-seat pricing" },
  { feature: "Ongoing optimization", cadence: true, hiring: "Depends on tenure", pointSolutions: false },
  { feature: "Starting monthly cost", cadence: "$199", hiring: "$4,000–$8,000+ per hire", pointSolutions: "$500–$3,000 per tool" },
];
