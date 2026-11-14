# Pricing — what is published, what is held back

Internal review note. Not linked from the site and not part of any page. This is
the one place amounts that are **not** published may be written down.

Last updated: 2026-11-13.

## Rule

`src/data/pricing.ts` may only contain an amount Bobby has settled. Anything
proposed, in negotiation, or awaiting a decision lives here instead. A package
with no settled amount renders scope plus "Book a call for pricing" and shows no
figure at all.

Publishing an amount is **not** approval to charge it. See "What is gated" below.

## Published on /pricing

| Package | Setup | Monthly | Label on the page |
| --- | --- | --- | --- |
| All-in-one digital partner | $2,997 | $1,497/mo | "List price" |

Settled by Bobby on 2026-11-13 as the all-in-one list price. The page states
plainly that it is a list price and not a quote.

## Settled but deliberately NOT published

**Founding rate — first 3 clients: $497 setup + $500/mo.**

Real and settled, but kept off the site for now: the founding offer ships
separately with its own copy, and there is no founding strip or `/founding` page
in this branch. It is recorded here so the number is not lost, and so nobody
re-derives it from the list price.

If a discount off the list price is sold, it is applied as a Stripe coupon on an
approved package rather than as a second published figure. `/api/checkout` keeps
`allow_promotion_codes` on for that reason — worth confirming before the first
approved package goes live.

## Superseded — do not reuse

| Amount | Where it came from | Status |
| --- | --- | --- |
| $2,000 setup + $500/mo, "AI front desk" / "AI Support Agent" | Live site, `/ai-receptionist`, `siteConfig.frontDeskOffer`, `src/data/faq.ts` | **Superseded.** Removed from all copy and config in this branch. |
| $2,997 setup + $500/mo, AI front desk | Set internally 2026-11-06 | **Superseded** by the 2026-11-13 brief. Was never on the site. |
| $2,500 / $900/mo (Presence) | Proposed by this branch | **Withdrawn.** Invented, never approved. Removed. |
| $4,000 / $1,800/mo (Growth) | Proposed by this branch | **Withdrawn.** Invented, never approved. Removed. |
| $6,000 / $3,200/mo (Full Service) | Proposed by this branch | **Withdrawn.** Invented, never approved. Removed. |

The earlier conflict between the $2,000 + $500/mo figure on the live site and the
$2,997 + $500/mo figure set internally on 2026-11-06 is **closed**: the
2026-11-13 brief supersedes both. Neither is labelled "confirmed" anywhere, and
the standalone front-desk price is gone rather than relabelled.

### Stripe Prices that must not be treated as approved

`price_1UR2fP3jsrzFI2G0buH1Smus` and `price_1UR2gS3jsrzFI2G09g3Wj6Uf` belong to
the superseded $2,000 + $500/mo offer. They are not referenced anywhere in the
code and must not be added to any approved-package mapping.

No Stripe Prices exist for $497, $2,997, or $1,497/mo, and none should be created
until Bobby asks.

## What is gated

Nothing on the site can be bought. Four gates, all of which must pass:

1. `APPROVED_PACKAGES` in `src/lib/checkout-config.ts` — **empty**. A code
   constant, so no environment variable can make a package purchasable.
2. The package must have a settled `listPrice`.
3. `STRIPE_SECRET_KEY` plus both of the package's Price IDs must be set.
4. The live Stripe amounts must match the published figures exactly.

Because gate 1 is empty, `/pricing` renders a "Book a call" button for every
package and `POST /api/checkout` answers 503 for every request.

`/api/checkout` also refuses when a live (non-`sk_test_`) Stripe key is
configured on a non-production deployment. Previews must use test keys.

## Open questions for Bobby

- Is `https://calendly.com/bobbymirba/30min` the right event for every "Book a
  call" button? It responds (HTTP 200, "30 Minute Meeting - bobby mir") and is
  now the site-wide default, overridable with `NEXT_PUBLIC_CALENDLY_URL`.
- Do the published exclusions in `src/data/pricing.ts` match how you actually
  bill — ad spend, telephony/SMS and 10DLC, AI usage above the agreed volume,
  third-party software, custom development, and production shoots?
- Should the 14-day front-desk refund guarantee, currently stated on
  `/ai-receptionist`, also apply to the all-in-one package? It is not repeated
  on `/pricing` because extending it would change its scope.
- When the founding offer ships, should `/pricing` show it, or should it live on
  its own page?
