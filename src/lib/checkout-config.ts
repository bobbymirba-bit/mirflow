import "server-only";

import { servicePackages, type ServicePackage } from "@/data/pricing";

/**
 * Server-side gating for Stripe Checkout. Never import from a Client
 * Component — everything here reads server-only environment variables, and the
 * `server-only` import above turns an accidental client import into a build
 * error rather than a leak.
 *
 * FOUR independent gates stand between a visitor and a charge. All four must
 * pass, and the first one is a code constant that no environment can override:
 *
 *   1. Purchase approval. The package id must appear in APPROVED_PACKAGES
 *      below. That list is empty, so nothing is purchasable on any
 *      environment — preview, production, test keys, live keys, no exception.
 *      Setting env vars is not enough; approving a price means editing this
 *      file, in a commit, on purpose.
 *   2. A published amount. The package must have a settled `listPrice`. A
 *      package whose amount is still "book a call" has nothing to charge.
 *   3. Configuration. STRIPE_SECRET_KEY plus both of the package's Price IDs
 *      must be set in the environment.
 *   4. Amount verification. Before a Checkout Session is created we fetch each
 *      Price from Stripe and require it to match the figures published on
 *      /pricing exactly (amount, currency, one-time vs recurring, interval).
 *      A mismatch refuses the session. The browser never supplies an amount,
 *      only a package id, so the charge can never differ from what the page
 *      showed.
 */

/**
 * Package ids Bobby has approved for online purchase.
 *
 * EMPTY ON PURPOSE. Do not add an id here without Bobby's explicit sign-off on
 * the amount, and only once the matching Stripe Prices exist at exactly the
 * figures /pricing publishes. No Stripe Prices exist for the current list
 * price, so this stays empty.
 */
export const APPROVED_PACKAGES: readonly string[] = [];

export type PriceIds = { setup: string; monthly: string };

const STRIPE_API = "https://api.stripe.com/v1";

export function stripeSecret(): string | null {
  return process.env.STRIPE_SECRET_KEY?.trim() || null;
}

/** Stripe test keys are prefixed sk_test_; anything else is treated as live. */
export function isTestMode(): boolean {
  return stripeSecret()?.startsWith("sk_test_") ?? false;
}

/** True when a live (non-test) Stripe key is configured. */
export function isLiveKeyConfigured(): boolean {
  const secret = stripeSecret();
  return secret !== null && !secret.startsWith("sk_test_");
}

export function findPackage(id: unknown): ServicePackage | null {
  if (typeof id !== "string") return null;
  return servicePackages.find((pkg) => pkg.id === id) ?? null;
}

/** Gate 1 + 2: approved by hand in code, and with an amount to charge. */
export function isApprovedForPurchase(pkg: ServicePackage): boolean {
  return APPROVED_PACKAGES.includes(pkg.id) && pkg.listPrice !== null;
}

/** Price IDs for a package, or null when either variable is unset. */
export function priceIdsFor(pkg: ServicePackage): PriceIds | null {
  const setup = process.env[`STRIPE_${pkg.envKey}_SETUP_PRICE_ID`]?.trim();
  const monthly = process.env[`STRIPE_${pkg.envKey}_MONTHLY_PRICE_ID`]?.trim();
  if (!setup || !monthly) return null;
  return { setup, monthly };
}

/**
 * Which packages may show a purchase button. Deliberately env-only beyond the
 * code allowlist, with no network call, so rendering /pricing stays fast; the
 * amounts are still verified against Stripe before any session is created.
 *
 * While APPROVED_PACKAGES is empty this always returns an empty set, so every
 * package on /pricing renders a "Book a call" button instead.
 */
export function purchasablePackageIds(): Set<string> {
  if (!stripeSecret()) return new Set();
  return new Set(
    servicePackages
      .filter((pkg) => isApprovedForPurchase(pkg) && priceIdsFor(pkg))
      .map((pkg) => pkg.id)
  );
}

type StripePrice = {
  active?: boolean;
  currency?: string;
  type?: string;
  unit_amount?: number | null;
  recurring?: { interval?: string; interval_count?: number } | null;
};

async function fetchPrice(id: string, secret: string): Promise<StripePrice | null> {
  const response = await fetch(`${STRIPE_API}/prices/${encodeURIComponent(id)}`, {
    headers: { Authorization: `Bearer ${secret}` },
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) return null;
  return (await response.json()) as StripePrice;
}

function describe(price: StripePrice | null, expectedCents: number, recurring: boolean): string | null {
  if (!price) return "price not found in this Stripe account";
  if (price.active === false) return "price is archived in Stripe";
  if (price.currency !== "usd") return `price currency is ${price.currency}, expected usd`;
  if (price.unit_amount !== expectedCents) {
    return `Stripe amount ${price.unit_amount} does not match the published amount ${expectedCents}`;
  }
  if (recurring) {
    if (price.type !== "recurring") return "price is not recurring";
    if (price.recurring?.interval !== "month" || (price.recurring.interval_count ?? 1) !== 1) {
      return "price does not recur monthly";
    }
  } else if (price.type !== "one_time") {
    return "setup price is not a one-time price";
  }
  return null;
}

export type VerifyResult =
  | { ok: true; priceIds: PriceIds }
  | { ok: false; reason: string };

/**
 * Runs all four gates: approval, a published amount, configuration, and then a
 * live check that the configured Stripe Prices still match what /pricing
 * publishes. The reason string is for server logs only — callers return a
 * generic message to the browser so Stripe configuration details are not
 * leaked.
 */
export async function verifyPackagePrices(pkg: ServicePackage): Promise<VerifyResult> {
  if (!APPROVED_PACKAGES.includes(pkg.id)) {
    return { ok: false, reason: `"${pkg.id}" is not in APPROVED_PACKAGES` };
  }

  const listPrice = pkg.listPrice;
  if (!listPrice) {
    return { ok: false, reason: `"${pkg.id}" has no published amount to charge` };
  }

  const secret = stripeSecret();
  if (!secret) return { ok: false, reason: "STRIPE_SECRET_KEY is not set" };

  const priceIds = priceIdsFor(pkg);
  if (!priceIds) {
    return { ok: false, reason: `Price IDs for "${pkg.id}" are not configured` };
  }

  const [setup, monthly] = await Promise.all([
    fetchPrice(priceIds.setup, secret),
    fetchPrice(priceIds.monthly, secret),
  ]);

  const setupProblem = describe(setup, listPrice.setupCents, false);
  if (setupProblem) return { ok: false, reason: `setup price: ${setupProblem}` };

  const monthlyProblem = describe(monthly, listPrice.monthlyCents, true);
  if (monthlyProblem) return { ok: false, reason: `monthly price: ${monthlyProblem}` };

  return { ok: true, priceIds };
}
