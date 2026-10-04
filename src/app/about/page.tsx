import Link from "next/link";
import { ArrowRight, Eye, HeartHandshake, Lock, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "About Mirflow",
  description:
    "Mirflow helps everyday people use AI safely and avoid being fooled by it. Honest, plain-English help, with no invented reviews or inflated claims.",
  path: "/about",
});

const promises = [
  {
    icon: MessageCircle,
    title: "Plain English",
    description: "No jargon and no talking down. If something isn't clear, that's our job to fix.",
  },
  {
    icon: Lock,
    title: "Your privacy first",
    description: "We never ask for passwords, never take control of your device, and keep what you share private.",
  },
  {
    icon: Eye,
    title: "Honest about what we know",
    description: "We tell you what's certain, what isn't, and when you should talk to your bank, a lawyer, or the police instead.",
  },
  {
    icon: HeartHandshake,
    title: "Patient help",
    description: "Sessions go at your pace. Bring a family member if that helps.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Straight answers about AI, for everyone"
        description={
          <p>
            Mirflow helps everyday people use AI safely and avoid being fooled by it. We were
            started by {siteConfig.founder} in Newport Beach, California, and help people across
            the U.S. by video.
          </p>
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href={siteConfig.checklistHref}>
              Get the free checklist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={siteConfig.bookingHref}>Book a 1:1 session</Link>
          </Button>
        </div>
      </PageHero>

      <section aria-labelledby="why-heading" className="border-b border-border">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 id="why-heading" className="font-display text-[34px] font-normal leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            Why Mirflow exists
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              AI tools can be genuinely useful. The same technology also makes it cheap to copy a
              voice, fake a video, or build a convincing fake app. Most people haven&apos;t had
              anyone explain either side clearly.
            </p>
            <p>
              Mirflow is here to do that: free guides anyone can read, and personal help for
              people who want someone to walk through it with them.
            </p>
            <p>
              We&apos;re a new company, and we&apos;d rather earn trust than claim it. You won&apos;t
              see made-up reviews or statistics here. When we have real stories to share, we&apos;ll
              share them with permission.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="promises-heading" className="border-b border-border bg-secondary/50">
        <div className="container-page py-16 sm:py-20">
          <h2 id="promises-heading" className="font-display text-[34px] font-normal leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            What you can expect
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {promises.map((promise) => (
              <li key={promise.title} className="border border-border bg-card p-6 sm:p-8">
                <promise.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl text-foreground">{promise.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{promise.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
