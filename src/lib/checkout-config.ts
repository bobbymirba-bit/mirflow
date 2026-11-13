import { servicePackages, type ServicePackage } from "@/data/pricing";

/**
 * Server-side allowlist for Stripe Checkout. Never import from a Client
 * Component — everything here reads server-only environment variables.
 *
 * Two independent gates stand between a visitor and a charge:
 *
 *   1. Configuration. A package is only offered for purchase when
 *      STRIPE_SECRET_KEY plus both of its Price IDs are set in the
 *      environment. An unset variable means no button, no session, no charge —
 *      so a price Bobby has not created in Stripe cannot be bought.
 *   2. Amount verification. Before a Checkout Session is created we fetch each
 *      Price from Stripe and require it to match the figures published on
 *      /pricing exactly (amount, currency, one-time vs recurring, interval).
 *      A mismatch refuses the session. The browser never supplies an amount,
 *      only a package id, so the charge can never differ from what the page
 *      showed.
 */

export type PriceIds = { setup: string; monthly: string };

const STRIPE_API = "https://api.stripe.com/v1";

export function stripeSecret(): string | null {
  return process.env.STRIPE_SECRET_KEY?.trim() || null;
}

/** Stripe test keys are prefixed sk_test_; anything else is treated as live. */
export function isTestMode(): boolean {
  return stripeSecret()?.startsWith("sk_test_") ?? false;
}

export function findPackage(id: unknown): ServicePackage | null {
  if (typeof id !== "string") return null;
  return servicePackages.find((pkg) => pkg.id === id) ?? null;
}

/** Price IDs for a package, or null when either variable is unset. */
export function priceIdsFor(pkg: ServicePackage): PriceIds | null {
  const setup = process.env[`STRIPE_${pkg.envKey}_SETUP_PRICE_ID`]?.trim();
  const monthly = process.env[`STRIPE_${pkg.envKey}_MONTHLY_PRICE_ID`]?.trim();
  if (!setup || !monthly) return null;
  return { setup, monthly };
}

/**
 * Which packages may show a purchase button. Deliberately env-only, with no
 * network call, so rendering /pricing stays fast; the amounts are still
 * verified against Stripe before any session is created.
 */
export function purchasablePackageIds(): Set<string> {
  if (!stripeSecret()) return new Set();
  return new Set(servicePackages.filter((pkg) => priceIdsFor(pkg)).map((pkg) => pkg.id));
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
 * Confirms the configured Stripe Prices still match what /pricing publishes.
 * The reason string is for server logs only — callers return a generic message
 * to the browser so Stripe configuration details are not leaked.
 */
export async function verifyPackagePrices(pkg: ServicePackage): Promise<VerifyResult> {
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

  const setupProblem = describe(setup, pkg.setupCents, false);
  if (setupProblem) return { ok: false, reason: `setup price: ${setupProblem}` };

  const monthlyProblem = describe(monthly, pkg.monthlyCents, true);
  if (monthlyProblem) return { ok: false, reason: `monthly price: ${monthlyProblem}` };

  return { ok: true, priceIds };
}
