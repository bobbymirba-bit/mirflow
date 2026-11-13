/**
 * Mirflow packages.
 *
 * `status` is the approval state of the *amount*, and it is the thing to keep
 * honest:
 *
 *   "approved" — Bobby has published this price. Today that is only the AI
 *                Front Desk offer, which already reads $2,000 setup + $500/month
 *                in src/lib/site-config.ts and renders on /ai-receptionist.
 *   "draft"    — proposed by this branch, NOT confirmed. Rendered with a visible
 *                draft badge and excluded from structured data.
 *
 * Nothing here can cause a charge on its own. A package is only purchasable
 * when its Stripe Price IDs are present in the environment AND the live Stripe
 * amounts match the figures below — see src/lib/checkout-config.ts.
 *
 * Package ids are stable and map to env var names:
 *   STRIPE_<ID>_SETUP_PRICE_ID / STRIPE_<ID>_MONTHLY_PRICE_ID
 */

export type PackageStatus = "approved" | "draft";

export type ServicePackage = {
  id: string;
  envKey: string;
  name: string;
  status: PackageStatus;
  summary: string;
  setupCents: number;
  monthlyCents: number;
  includes: string[];
  note?: string;
  featured?: boolean;
};

export const servicePackages: ServicePackage[] = [
  {
    id: "front-desk",
    envKey: "FRONT_DESK",
    name: "AI Front Desk",
    status: "approved",
    summary:
      "The voice receptionist on its own. Answers calls around your hours, handles routine questions, and routes booking requests and callbacks to your team.",
    setupCents: 200_000,
    monthlyCents: 50_000,
    includes: [
      "AI voice receptionist configured to your hours, services, and routing rules",
      "Call handling for routine questions, booking requests, and callbacks",
      "Message and booking details delivered to your team",
      "Script and answer tuning as your business changes",
      "Ongoing monitoring and support",
    ],
    note: "If the front desk is still failing to handle real customer questions after 14 live days under the agreed checks, we refund the setup fee.",
  },
  {
    id: "presence",
    envKey: "PRESENCE",
    name: "Presence",
    status: "draft",
    summary:
      "Get the basics right: a site people trust, found in local search, with a social channel that doesn't go quiet.",
    setupCents: 250_000,
    monthlyCents: 90_000,
    includes: [
      "Website design, build, or redesign",
      "Local SEO and Google Business Profile setup",
      "One managed social channel, posted on an agreed schedule",
      "Contact and inquiry routing to your inbox",
      "Monthly report on traffic, search visibility, and inquiries",
    ],
  },
  {
    id: "growth",
    envKey: "GROWTH",
    name: "Growth",
    status: "draft",
    summary:
      "Everything in Presence, plus the outbound work: LinkedIn, paid ads with AI creative, and email and SMS follow-up.",
    setupCents: 400_000,
    monthlyCents: 180_000,
    includes: [
      "Everything in Presence",
      "Up to three managed social channels",
      "LinkedIn management and outreach",
      "Paid ads management with AI-generated ad creative and testing",
      "Email and SMS marketing, including follow-up sequences",
      "Monthly report across channels, campaigns, and leads",
    ],
    featured: true,
  },
  {
    id: "full-service",
    envKey: "FULL_SERVICE",
    name: "Full Service",
    status: "draft",
    summary:
      "The whole digital side handled, including the AI voice receptionist and the workflows behind it.",
    setupCents: 600_000,
    monthlyCents: 320_000,
    includes: [
      "Everything in Growth",
      "AI voice receptionist included",
      "AI workflows connecting your forms, inbox, calendar, and CRM",
      "Ongoing SEO program beyond local search",
      "Priority turnaround on requests",
      "Monthly working session on what to do next",
    ],
  },
];

/** Applies to every package. These are billed by the vendor, not by Mirflow. */
export const exclusions = [
  ["Ad spend", "Paid directly to Google, Meta, LinkedIn, or whichever platform you advertise on. We manage the campaigns; the media budget is yours and stays in your own accounts."],
  ["Telephony and messaging usage", "Phone numbers, call minutes, SMS volume, and carrier registration fees (including 10DLC) are billed by the provider at cost."],
  ["AI model and voice usage above the agreed volume", "Normal usage is covered by the retainer. Volumes well beyond what we scoped together are passed through at cost, and we tell you before that happens."],
  ["Third-party software", "Domains, hosting beyond what we provide, CRM and email platform subscriptions, scheduling tools, stock media, and font licenses."],
  ["Custom software development", "Work outside the agreed scope — bespoke applications, deep integrations with in-house systems — is quoted separately."],
  ["Photo and video production", "On-site shoots, talent, and location costs. AI-generated ad creative is included where the package lists it."],
] as const;

export function formatUsd(cents: number): string {
  return `$${(cents / 100).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}
