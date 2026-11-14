# Mirflow AI — Marketing Website

Production website for **Mirflow AI** — "The AI operating layer for revenue teams." Built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS v4 (`@theme` in `src/app/globals.css`)
- **Components:** Hand-built shadcn/ui-style components on Radix UI primitives + `class-variance-authority`
- **Motion:** Framer Motion (`src/components/motion/reveal.tsx`)
- **Forms:** react-hook-form + zod
- **Charts:** Recharts (ROI calculator)
- **Theming:** next-themes (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`     | Start the local dev server (Turbopack)    |
| `npm run build`   | Production build                          |
| `npm run start`   | Serve the production build                |
| `npm run lint`    | Run ESLint                                |

Before deploying, verify the build is clean:

```bash
npx tsc --noEmit
npx eslint .
npx next build
```

## Environment Variables

Create a `.env.local` file. Every variable is optional — the site builds and runs
without any of them, and each unset variable degrades to a safe default rather
than breaking a page. See `.env.example` for the full list.

| Variable | Purpose | When unset |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for metadata and the sitemap | `https://mirflow.online` |
| `NEXT_PUBLIC_CALENDLY_URL` | Overrides the booking link. Must be `https:`. Calendly URLs are also embedded inline on `/pricing` | The checked default in `src/lib/booking.ts` (`https://calendly.com/bobbymirba/30min`) is used site-wide |
| `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` | Email delivery for form submissions and paid-order notifications | Log-only; visitors still get a success response |
| `STRIPE_SECRET_KEY` | Server-only Stripe key. An `sk_test_` key puts `/pricing` in test mode and shows a test-mode banner. **Preview and development must use `sk_test_` keys** — a live key on a non-production deployment makes `/api/checkout` refuse | Checkout is off; every package button books a call |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for `/api/stripe-webhook` | Webhook returns 503 and ignores events |
| `STRIPE_<PACKAGE>_SETUP_PRICE_ID` | One-time Stripe Price for a package's setup fee | That package cannot be bought online |
| `STRIPE_<PACKAGE>_MONTHLY_PRICE_ID` | Recurring monthly Stripe Price for a package | That package cannot be bought online |

`<PACKAGE>` is the `envKey` from `src/data/pricing.ts`: `ALL_IN_ONE`.

## Pricing and Checkout

Package copy and amounts live in [`src/data/pricing.ts`](src/data/pricing.ts) and
render on [`/pricing`](src/app/pricing/page.tsx). A package's `listPrice` is
either a settled amount Bobby has published, or `null` — in which case the page
shows the scope and "Book a call for pricing" and renders no figure at all.
Proposed-but-unsettled amounts belong in
[`docs/pricing-proposal.md`](docs/pricing-proposal.md), never in code.

**Nothing on the site is purchasable today.** Publishing an amount is not
approval to charge it.

### Four gates stand between a visitor and a charge

1. **Purchase approval, in code.** The package id must be listed in
   `APPROVED_PACKAGES` in [`src/lib/checkout-config.ts`](src/lib/checkout-config.ts).
   That constant is **empty**, so no package is purchasable on any environment —
   preview or production, test keys or live. Approving a price means editing
   that file in a commit, on purpose. No environment variable can override it.
2. **A published amount.** The package must have a settled `listPrice`.
3. **Configuration.** `STRIPE_SECRET_KEY` and *both* of that package's Price IDs
   must be set.
4. **Amount verification.** Before creating a Checkout Session,
   [`verifyPackagePrices`](src/lib/checkout-config.ts) fetches each Price from
   Stripe and requires an exact match on amount, currency, one-time vs
   recurring, and monthly interval. A mismatch refuses the session and logs why.

`/api/checkout` additionally refuses outright when a live (non-`sk_test_`) key is
configured on a non-production deployment, and rate-limits attempts per IP
(best-effort, per instance).

The browser posts a package id and nothing else to
[`/api/checkout`](src/app/api/checkout/route.ts) — amounts are never
client-supplied, so the charge can never differ from what `/pricing` displayed.

### When money moves

The one-time setup Price and the recurring monthly Price go on the same
`mode: subscription` session, so **the setup fee and the first month are charged
together on the first invoice, at checkout**. Only the monthly price renews after
that. `/checkout/success` reads the session back from Stripe rather than trusting
the redirect, and distinguishes paid, still-processing, and unconfirmable orders.

### Enabling a package

Only once Bobby has signed off the amount:

1. Create the two Prices in the [Stripe Dashboard](https://dashboard.stripe.com/products)
   — one-time for setup, recurring monthly for the retainer — with amounts that
   match `src/data/pricing.ts` exactly.
2. Set the matching `STRIPE_*_PRICE_ID` variables.
3. Add the package id to `APPROVED_PACKAGES` in `src/lib/checkout-config.ts`.
4. Test with Stripe **test mode** keys and card `4242 4242 4242 4242` before
   switching the production environment to live keys. Previews must never hold
   a live key.

## Stripe Webhook

[`/api/stripe-webhook`](src/app/api/stripe-webhook/route.ts) verifies Stripe's
signature by hand (HMAC-SHA256 over `${timestamp}.${payload}`, 5-minute tolerance
in both directions, and every `v1=` signature is checked so secret rotation
works). Subscribe the endpoint to `checkout.session.completed`,
`checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`,
`invoice.payment_failed`, `customer.subscription.updated`, and
`customer.subscription.deleted`.

**This endpoint is not ready for live payments.** Two limitations are open, and
both are documented in detail at the top of the route file:

- **Deduplication is in-memory**, so it only holds within one warm instance. On
  serverless that means retries landing on a cold or different instance *will*
  be processed again — in-memory dedup is insufficient here. Fixing it needs a
  shared store with an atomic insert-if-absent on the Stripe event id: a
  free-tier Postgres table (Neon, Supabase) keyed on `event_id`, a
  Redis-compatible store with `SET NX`, Vercel Edge Config, or Stripe itself as
  the record of what has already been fulfilled.
- **Fulfillment is a notification, not provisioning.** A paid event emails the
  team so onboarding can start by hand. Explicitly missing, all still manual:
  an onboarding email to the customer, a reliable notification to Bobby, a CRM
  record, a kickoff booking link, and account/channel provisioning. A logged
  event is not a completed onboarding.

When Resend *is* configured and the notification fails, the route answers **500**
so Stripe retries rather than treating a lost order as delivered. With Resend
unconfigured the endpoint is deliberately log-only and accepts the event.

## Contact Form

`src/app/api/contact/route.ts` validates and currently **logs** submissions server-side (`console.log`) instead of sending them anywhere. Before going live, wire it up to a real provider — e.g. [Resend](https://resend.com), Postmark, or a CRM webhook (HubSpot, Salesforce) — using an API key stored as an environment variable/secret, never committed to the repo.

## Content

All page copy/data lives in typed data files under `src/data/` (`services.ts`, `solutions.ts`, `industries.ts`, `case-studies.ts`, `blog.ts`, `testimonials.ts`, `pricing.ts`, `faq.ts`, `logos.ts`). Update these files to change site content — page components render from them, including `generateStaticParams` for the dynamic `[slug]` routes under `services/`, `solutions/`, `industries/`, `case-studies/`, and `blog/`.

Brand/nav/SEO defaults live in `src/lib/site-config.ts`.

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` — generated `sitemap.xml` / `robots.txt`
- `src/app/opengraph-image.tsx` — generated OG image
- `src/components/json-ld.tsx` — structured data (`Organization` on every page, `FAQPage` on `/faq`, `Article` on blog posts)

## Deployment

The project deploys cleanly to any Next.js-compatible host (Vercel, Netlify, etc.):

1. Set the environment variables above in the hosting platform's dashboard (if you want Calendly/GA overrides).
2. Deploy from the `main` branch — `npm run build` is the build command, and the app is a standard Next.js server (no special output mode configured).
3. Point the production domain's DNS at the host, then update `NEXT_PUBLIC_CALENDLY_URL`/`siteConfig.url` if the domain differs from what's hardcoded in `src/lib/site-config.ts`.

### Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard — it detects Next.js automatically.
