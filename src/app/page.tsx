import Link from "next/link";
import { ArrowRight, Ban, Check, Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { ChecklistSignup } from "@/components/checklist-signup";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProcessSteps } from "@/components/process-steps";
import { guides } from "@/data/guides";
import { faqs } from "@/data/faq";
import { neverAsk, plans, sessionSteps, sessionTypes, threats } from "@/data/safety";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata = {
  ...pageMetadata({
    title: "AI safety for real people",
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: `${siteConfig.name}: ${siteConfig.tagline}` },
};

const homeFaqs = faqs.filter((faq) => faq.featured);

const eyebrow = "text-sm font-semibold uppercase tracking-[0.14em] text-primary";
const h2 = "mt-4 text-balance font-display text-[34px] font-normal leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section id="checklist" aria-labelledby="hero-heading" className="scroll-mt-20 border-b border-border">
        <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="min-w-0">
            <p className={eyebrow}>{siteConfig.name}: {siteConfig.tagline}</p>
            <h1
              id="hero-heading"
              className="mt-5 text-balance font-display text-[44px] font-normal leading-[1] tracking-[-0.035em] text-foreground sm:text-7xl"
            >
              Use AI safely. Don&apos;t get fooled by it.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Plain-English help for you and your family with voice-clone calls, deepfakes,
              fake AI apps, and using AI tools without giving away your personal information.
            </p>
          </div>

          <div className="border border-border bg-card p-6 shadow-[0_24px_60px_-34px_rgba(23,23,19,0.35)] sm:p-8">
            <h2 className="font-display text-3xl font-normal tracking-[-0.02em] text-foreground">
              Get the free family scam checklist
            </h2>
            <ul className="mt-5 space-y-2.5 text-base text-foreground/85">
              {[
                "Set up a family safe word",
                "What to do when a call asks for money",
                "How to check a video before you trust it",
                "Phone and AI app settings worth changing",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <ChecklistSignup source="home-hero" stacked className="mt-7" />
          </div>
        </div>
      </section>

      {/* 2. Three common threats */}
      <section aria-labelledby="threats-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className={eyebrow}>Know the tricks</p>
            <h2 id="threats-heading" className={h2}>
              Three AI scams to know about
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              AI makes old scams cheaper and more convincing. The good news: a few simple
              habits stop most of them.
            </p>
          </div>
          <ul className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
            {threats.map((threat) => (
              <li key={threat.slug} className="flex flex-col bg-background p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                  <Icon name={threat.icon} className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-[28px] font-normal leading-tight text-foreground">
                  {threat.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">{threat.what}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  Warning signs
                </p>
                <ul className="mt-3 space-y-2">
                  {threat.warningSigns.map((sign) => (
                    <li key={sign} className="flex gap-2.5 text-base text-foreground/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {sign}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-5 text-base leading-relaxed text-foreground">
                  <strong className="font-semibold">What to do: </strong>
                  {threat.whatToDo}
                </p>
                <Link
                  href={`/guides/${threat.guideSlug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Read the guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Free guides */}
      <section aria-labelledby="guides-heading" className="border-b border-border bg-secondary/50">
        <div className="container-page py-16 sm:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className={eyebrow}>Free guides</p>
              <h2 id="guides-heading" className={h2}>
                Short, plain-English guides
              </h2>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              See all guides
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:p-7"
                >
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    {guide.readingMinutes} minute read
                  </span>
                  <span className="mt-3 font-display text-2xl leading-tight text-foreground group-hover:text-primary">
                    {guide.title}
                  </span>
                  <span className="mt-2 text-base leading-relaxed text-muted-foreground">{guide.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. How a session works */}
      <section aria-labelledby="sessions-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className={eyebrow}>1:1 help</p>
            <h2 id="sessions-heading" className={h2}>
              How a session works
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Patient, one-on-one help by video. You stay in control of your device the
              whole time.
            </p>
          </div>
          <ProcessSteps steps={sessionSteps} className="mt-12" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {sessionTypes.map((type) => (
              <li key={type.title} className="border border-border bg-card p-6">
                <Icon name={type.icon} className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl text-foreground">{type.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{type.description}</p>
              </li>
            ))}
          </ul>
          <Button asChild variant="gradient" size="lg" className="mt-10 w-full sm:w-auto">
            <Link href={siteConfig.bookingHref}>
              Book a 1:1 session
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 5. Pricing */}
      <section id="pricing" aria-labelledby="pricing-heading" className="scroll-mt-20 border-b border-border bg-secondary/50">
        <div className="container-page py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className={eyebrow}>Pricing</p>
            <h2 id="pricing-heading" className={h2}>
              Simple prices. Guides are always free.
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <li
                key={plan.id}
                className={cn(
                  "flex flex-col border bg-card p-6 sm:p-8",
                  plan.featured ? "border-primary" : "border-border"
                )}
              >
                <h3 className="font-display text-2xl text-foreground">{plan.name}</h3>
                <p className="mt-4">
                  <span className="font-display text-5xl text-foreground">{plan.price}</span>{" "}
                  <span className="text-base text-muted-foreground">{plan.priceSuffix}</span>
                </p>
                <p className="mt-3 text-base text-muted-foreground">{plan.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-base text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.featured ? "gradient" : "outline"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-muted-foreground">
            Membership and family plans open soon. Need help for a small office of 5 to 15
            people?{" "}
            <Link href="/contact?interest=small-office" className="font-medium text-foreground underline underline-offset-4">
              Tell us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 6. About */}
      <section aria-labelledby="about-heading" className="border-b border-border">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className={eyebrow}>About</p>
            <h2 id="about-heading" className={h2}>
              Who&apos;s behind Mirflow
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              Mirflow was started by {siteConfig.founder} in Newport Beach, California, to give
              everyday people straight answers about AI: how to use it, and how to avoid being
              fooled by it.
            </p>
            <p>
              We&apos;re new, and we&apos;ll be honest about that. You won&apos;t find invented
              reviews or inflated numbers here. What you will find is careful, practical advice
              and help that respects your privacy.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              More about Mirflow
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ, including what we will never ask for */}
      <section aria-labelledby="faq-heading" className="border-b border-border">
        <div className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className={eyebrow}>Questions</p>
            <h2 id="faq-heading" className={h2}>
              Common questions
            </h2>
            <div className="mt-8 border-2 border-foreground bg-card p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Ban className="h-5 w-5 text-destructive" aria-hidden="true" />
                What we will never ask for
              </h3>
              <ul className="mt-4 space-y-2.5">
                {neverAsk.map((item) => (
                  <li key={item} className="flex gap-2.5 text-base text-foreground/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                If someone claiming to be Mirflow asks for any of these, it isn&apos;t us.
              </p>
            </div>
          </div>
          <div>
            <FaqAccordion faqs={homeFaqs} />
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
            >
              All questions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Email signup */}
      <section aria-labelledby="signup-heading" className="bg-foreground text-background">
        <div className="container-page grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal">Stay a step ahead</p>
            <h2
              id="signup-heading"
              className="mt-4 text-balance font-display text-[34px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-5xl"
            >
              Get the checklist and plain-English scam alerts.
            </h2>
          </div>
          <ChecklistSignup source="home-footer" tone="dark" />
        </div>
      </section>
    </>
  );
}
