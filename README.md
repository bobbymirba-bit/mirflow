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
| `NEXT_PUBLIC_CALENDLY_URL`       | Booking link used by every "Book a call" CTA (`src/lib/site-config.ts`)                          | `https://calendly.com/mirflow/intro-call`     |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`  | Google Analytics measurement ID. When set, GA loads only after a visitor accepts the cookie banner (`src/components/analytics.tsx`) | Analytics is disabled entirely                   |

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
