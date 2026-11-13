/**
 * Mirflow packages.
 *
 * `listPrice` is the only amount this file is allowed to publish, and it is the
 * thing to keep honest:
 *
 *   { setupCents, monthlyCents } — Bobby's settled list price. Safe to render.
 *   null                         — no settled amount. The page shows the scope
 *                                  and "Book a call for pricing", and renders
 *                                  no figure at all. Never put a proposal here.
 *
 * Proposed-but-unsettled amounts live in docs/pricing-proposal.md, not in code.
 *
 * Publishing an amount is NOT approval to charge it. A package can only be
 * bought online when it is in the APPROVED_PACKAGES constant in
 * src/lib/checkout-config.ts (empty today, so nothing is purchasable), its
 * Stripe Price IDs are in the environment, AND the live Stripe amounts match
 * the figures below.
 *
 * Package ids are stable and map to env var names:
 *   STRIPE_<ENV_KEY>_SETUP_PRICE_ID / STRIPE_<ENV_KEY>_MONTHLY_PRICE_ID
 */

export type ListPrice = { setupCents: number; monthlyCents: number };

export type ServicePackage = {
  id: string;
  envKey: string;
  name: string;
  summary: string;
  /** Settled list price, or null when the amount is not published yet. */
  listPrice: ListPrice | null;
  includes: string[];
  note?: string;
};

export const servicePackages: ServicePackage[] = [
  {
    id: "all-in-one",
    envKey: "ALL_IN_ONE",
    name: "All-in-one digital partner",
    summary:
      "The whole digital side handled: the website people land on, the channels that bring them in, the follow-up that keeps them warm, and the voice agent that answers when you can't.",
    listPrice: { setupCents: 299_700, monthlyCents: 149_700 },
    includes: [
      "Website design, build, or redesign",
      "Local SEO and Google Business Profile setup, then an ongoing SEO program",
      "Managed social channels, posted on an agreed schedule",
      "LinkedIn management and outreach",
      "Paid ads management with AI-generated ad creative and testing",
      "Email and SMS marketing, including follow-up sequences",
      "AI voice receptionist configured to your hours, services, and routing rules",
      "AI workflows connecting your forms, inbox, calendar, and CRM",
      "Contact and inquiry routing to your inbox",
      "Monthly report across channels, campaigns, and leads",
    ],
    note: "Scope is agreed before anything starts. If you only want part of this, we price the smaller scope on a call rather than publishing a tier for it.",
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
