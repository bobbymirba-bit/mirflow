import { Ban, ShieldCheck } from "lucide-react";

import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { neverAsk, plans, sessionSteps, sessionTypes } from "@/data/safety";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Book a 1:1 AI safety session",
  description:
    "Book a one-on-one video session to secure your phone, set up AI tools safely, or build a family scam plan. You stay in control of your device the whole time.",
  path: "/book-a-call",
});

const session = plans.find((plan) => plan.id === "session");

export default function BookASessionPage() {
  return (
    <>
      <PageHero
        eyebrow="1:1 help"
        title="Patient, one-on-one help by video"
        description={
          <p>
            Choose a topic, pick a time, and we&apos;ll work through it together at your pace.
            {session ? ` Sessions are ${session.price}.` : null} You can book for yourself or a
            parent, and join together.
          </p>
        }
      >
        <a
          href="#schedule"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-8 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-foreground"
        >
          Choose a time
        </a>
      </PageHero>

      <section aria-labelledby="topics-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <h2 id="topics-heading" className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            Pick a topic
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {sessionTypes.map((type) => (
              <li key={type.title} className="border border-border bg-card p-6">
                <Icon name={type.icon} className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl text-foreground">{type.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{type.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-heading" className="border-b border-border">
        <div className="container-page py-16 sm:py-20">
          <h2 id="how-heading" className="font-display text-3xl font-normal text-foreground sm:text-4xl">
            How it works
          </h2>
          <ProcessSteps steps={sessionSteps} className="mt-8" />
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="border-b border-border bg-secondary/50">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 id="safety-heading" className="flex items-center gap-3 font-display text-3xl font-normal text-foreground sm:text-4xl">
              <ShieldCheck className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
              How we keep sessions safe
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">
              Scammers often pose as tech support and ask to take over your screen. We do the
              opposite: you share your screen if you choose to, you make every click, and you can
              end the call at any time.
            </p>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <Ban className="h-5 w-5 text-destructive" aria-hidden="true" />
              We will never ask for
            </h3>
            <ul className="mt-4 space-y-2.5">
              {neverAsk.map((item) => (
                <li key={item} className="flex gap-2.5 text-base text-foreground/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="schedule" aria-labelledby="schedule-heading" className="scroll-mt-20 border-b border-border">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 id="schedule-heading" className="font-display text-3xl font-normal text-foreground sm:text-4xl">
              Choose a time
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Sessions are by video, so you can join from anywhere in the U.S. If the calendar
              doesn&apos;t load, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-foreground underline underline-offset-4">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <div className="min-h-[720px] overflow-hidden border border-border bg-card">
            <iframe
              src={`${siteConfig.calendlyUrl}?hide_gdpr_banner=1&hide_event_type_details=1`}
              title="Book a 1:1 session with Mirflow"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
