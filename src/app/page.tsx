import Link from "next/link";
import { ArrowRight, Play, Shield, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { LogoMarquee } from "@/components/logo-marquee";
import { StatsBar } from "@/components/stats-bar";
import { WorkflowVisualizer } from "@/components/workflow-visualizer";
import { ServiceCard } from "@/components/cards/service-card";
import { IndustryCard } from "@/components/cards/industry-card";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { RoiCalculator } from "@/components/calculators/roi-calculator";
import { ComparisonTable } from "@/components/comparison-table";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";

import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { testimonials, videoTestimonials } from "@/data/testimonials";
import { comparisonRows } from "@/data/pricing";
import { faqs } from "@/data/faq";

const heroStats = [
  { value: "24/7", label: "Always-on coverage" },
  { value: "44+", label: "Automation services" },
  { value: "18", label: "Industries served" },
  { value: "2–6 wks", label: "To first system live" },
];

const capabilities = [
  {
    icon: "MessageSquare",
    title: "Conversational & Voice AI",
    description:
      "Chat and voice agents that answer instantly, in your brand voice, trained on your product and policies.",
  },
  {
    icon: "TrendingUp",
    title: "Sales & Revenue",
    description:
      "Qualify inbound leads, run outbound sequences, and book meetings straight into your calendar.",
  },
  {
    icon: "Headset",
    title: "Customer Experience",
    description:
      "Deflect repetitive tickets, resolve common issues, and route complex cases to the right person.",
  },
  {
    icon: "FileText",
    title: "Documents & Knowledge",
    description:
      "Extract, summarize, and route information from contracts, invoices, and internal documents.",
  },
  {
    icon: "Workflow",
    title: "Workflow Automation",
    description:
      "Connect your CRM, calendar, and internal tools so work moves without anyone touching a keyboard.",
  },
  {
    icon: "Cpu",
    title: "Advanced AI Systems",
    description:
      "Custom multi-agent systems and applications for businesses whose workflows don't fit off-the-shelf tools.",
  },
];

const workflowSteps = [
  {
    title: "Discover",
    description:
      "We audit your current workflows and identify the highest-leverage automation opportunity — the one with the clearest ROI.",
  },
  {
    title: "Design",
    description:
      "We map the system architecture around your existing tools: CRM, calendar, phone system, and knowledge base.",
  },
  {
    title: "Build",
    description:
      "We train and configure the AI system on your business — your pricing, your policies, your tone of voice.",
  },
  {
    title: "Launch",
    description:
      "The system goes live with human oversight and guardrails, handling real conversations from day one.",
  },
  {
    title: "Optimize",
    description:
      "We continuously tune the system using real conversation data, so performance compounds every month.",
  },
];

const featuredServiceSlugs = [
  "ai-chatbots",
  "voice-ai",
  "ai-receptionists",
  "lead-qualification",
  "customer-support-ai",
  "workflow-automation",
];

const featuredIndustrySlugs = ["med-spas", "hvac", "law-firms", "real-estate"];

const featuredCaseStudySlugs = ["coastline-hvac", "harborview-dental", "veyra-commerce"];

const featuredServices = featuredServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

const featuredIndustries = featuredIndustrySlugs
  .map((slug) => industries.find((industry) => industry.slug === slug))
  .filter((industry): industry is (typeof industries)[number] => Boolean(industry));

const featuredCaseStudies = featuredCaseStudySlugs
  .map((slug) => caseStudies.find((study) => study.slug === slug))
  .filter((study): study is (typeof caseStudies)[number] => Boolean(study));

const featuredTestimonials = testimonials.filter((t) => t.featured);

const homeFaqs = faqs.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid bg-radial-glow noise-overlay relative overflow-hidden border-b border-border">
        <div className="container-page relative py-24 sm:py-32 lg:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="brand" className="mx-auto">
              <Zap className="h-3 w-3" />
              Now onboarding for Q3 2026
            </Badge>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              The AI operating layer for <span className="text-gradient">revenue teams</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Cadence designs, builds, and operates AI automation systems that qualify leads,
              answer customers, and run back-office work around the clock — so your team scales
              without adding headcount.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="lg">
                <Link href="/book-a-call">
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">See case studies</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto mt-16 max-w-4xl">
            <StatsBar stats={heroStats} />
          </Reveal>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border py-12">
        <div className="container-page">
          <p className="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Trusted by growing teams across 18 industries
          </p>
          <div className="mt-6">
            <LogoMarquee />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title="One partner. Every automation surface."
          description="Cadence covers the full stack of AI automation — from the first customer touchpoint to the back-office system that closes the loop."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <RevealItem
              key={capability.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={capability.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Interactive workflow demo */}
      <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From audit to live system, without the guesswork"
            description="Every Cadence engagement follows the same disciplined process — built for speed without cutting corners on reliability."
          />
          <div className="mt-14">
            <WorkflowVisualizer steps={workflowSteps} />
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Popular automation services"
          description="A sample of the 44+ services Cadence deploys across conversational AI, sales, support, and operations."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Built around how your industry actually works"
            description="Cadence ships with pre-built playbooks for 18+ verticals, so your system reflects the way your business already operates."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIndustries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IndustryCard industry={industry} />
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/industries">
                View all industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="In their words"
          title="See Cadence in action"
          description="Short walkthroughs of how teams use Cadence day to day. Example content shown for illustration — replace with real customer recordings at launch."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
          {videoTestimonials.map((video) => (
            <RevealItem key={video.id}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="bg-grid relative flex aspect-video items-center justify-center bg-secondary/60">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-background/80 px-2 py-1 font-mono text-[11px] text-foreground backdrop-blur">
                    {video.duration}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-foreground">{video.thumbnailLabel}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {video.name} · {video.role}, {video.company}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Case studies */}
      <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Case studies"
            title="Illustrative results across industries"
            description="These examples model typical outcomes based on the workflows Cadence automates. They are illustrative, not verified customer results."
          />
          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                View all case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI calculator */}
      <section id="roi-calculator" className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="ROI calculator"
          title="See what missed calls are costing you"
          description="Adjust the sliders to estimate the revenue Cadence could recover for your business every month."
        />
        <div className="mt-14">
          <RoiCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="What teams say about working with Cadence"
            description="Example testimonial content shown for layout purposes — replace with verified customer quotes before launch."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <RevealItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Comparison */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why Cadence"
          title="Compare your options"
          description="Cadence combines the coverage of a full-time hire with the speed of software — without the per-seat cost of point solutions."
        />
        <div className="mt-14">
          <ComparisonTable rows={comparisonRows} />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-secondary/20 py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Common questions"
              description="Have a different question? Reach out and we'll get back to you within one business day."
              className="lg:sticky lg:top-28 lg:self-start"
            />
            <Reveal>
              <FaqAccordion faqs={homeFaqs} />
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>
                  See our full{" "}
                  <Link href="/faq" className="font-medium text-foreground underline underline-offset-4">
                    FAQ page
                  </Link>{" "}
                  for pricing, security, and implementation details.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection />
    </>
  );
}
