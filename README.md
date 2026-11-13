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

Create a `.env.local` file (all variables are optional — the site works without them, using sensible defaults):

| Variable                        | Purpose                                                                                       | Default when unset                              |
| -------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_BOOKING_URL` | Public https link for the “Book a 15-minute call” button. Hidden when unset. | Button hidden |
| `RESEND_API_KEY` | Server-only Resend API key for the lead form | Form returns 503 |
| `CONTACT_FROM_EMAIL` | Verified sender, `Mirflow <leads@mirflow.online>` | Falls back to that sender |
| `STRIPE_SECRET_KEY` | Unused. Checkout is retired. | Checkout stays disabled |
| `STRIPE_FOUNDING_MONTHLY_PRICE_ID` | Unused. The Founding tier is not offered. | Checkout stays disabled |
| `STRIPE_FOUNDING_SETUP_PRICE_ID` | Unused. The Founding tier is not offered. | Checkout stays disabled |
| `STRIPE_GROWTH_MONTHLY_PRICE_ID` | Unused. The Growth tier is not offered. | Checkout stays disabled |
| `STRIPE_GROWTH_SETUP_PRICE_ID` | Unused. The Growth tier is not offered. | Checkout stays disabled |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for the retired Stripe webhook (`src/app/api/stripe-webhook/route.ts`) | Webhook returns 503 and ignores events |

## Price

The only public price is **$2,997 one-time setup + $500/mo retainer, month-to-month** (`listPrice` in `src/lib/site-config.ts`). Checkout is retired. `/api/checkout` stays inert unless `CHECKOUT_ENABLED=true`, and even then it does not create a payment.

## Lead form

`src/app/api/audit-request/route.ts` validates the audit form and emails the lead to bobby@mirflow.online through Resend. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (`Mirflow <leads@mirflow.online>`) in the host. The route returns 503 when the API key is missing and 502 when delivery fails. It does not log the submission. Page views use `@vercel/analytics`. There is no ad pixel.

## Content

All page copy/data lives in typed data files under `src/data/` (`services.ts`, `solutions.ts`, `industries.ts`, `case-studies.ts`, `blog.ts`, `testimonials.ts`, `pricing.ts`, `faq.ts`, `logos.ts`). Update these files to change site content — page components render from them, including `generateStaticParams` for the dynamic `[slug]` routes under `services/`, `solutions/`, `industries/`, `case-studies/`, and `blog/`.

Brand/nav/SEO defaults live in `src/lib/site-config.ts`.

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` — generated `sitemap.xml` / `robots.txt`
- `src/app/opengraph-image.tsx` — generated OG image
- `src/components/json-ld.tsx` — structured data (`Organization` on every page, `FAQPage` on `/faq`, `Article` on blog posts)

## Deployment

The project deploys cleanly to any Next.js-compatible host (Vercel, Netlify, etc.):

1. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_BOOKING_URL` (only if there is a real booking link) in the hosting platform's dashboard.
2. Deploy from the `main` branch — `npm run build` is the build command, and the app is a standard Next.js server (no special output mode configured).
3. Point the production domain's DNS at the host. Production deploys come from `main`. Preview deploys come from pull requests.

### Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard — it detects Next.js automatically.
