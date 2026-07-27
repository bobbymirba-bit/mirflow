import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowVisualizer } from "@/components/workflow-visualizer";
import { ServiceCard } from "@/components/cards/service-card";
import { IndustryCard } from "@/components/cards/industry-card";
import { RoiCalculator } from "@/components/calculators/roi-calculator";
import { ComparisonTable } from "@/components/comparison-table";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaSection } from "@/components/cta-section";
import { MobileHome } from "@/components/mobile-home";

import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { comparisonRows } from "@/data/pricing";
import { faqs } from "@/data/faq";

const heroStats = [
  { value: "24/7", label: "Lead coverage" },
  { value: "24 hrs", label: "Standard launch target" },
  { value: "SoCal", label: "Local focus" },
  { value: "1", label: "Clear first workflow" },
];

const capabilities = [
  {
    icon: "MessageSquare",
    title: "Conversational & Voice AI",
    description:
      "Chat and voice agents that answer instantly, in your brand voice, trained on your product and policies.",
    tone: "sm:bg-[#c77e6b]",
  },
  {
    icon: "TrendingUp",
    title: "Sales & Revenue",
    description:
      "Qualify inbound leads, run outbound sequences, and book meetings straight into your calendar.",
    tone: "sm:bg-[#8da9b5]",
  },
  {
    icon: "Headset",
    title: "Customer Experience",
    description:
      "Deflect repetitive tickets, resolve common issues, and route complex cases to the right person.",
    tone: "sm:bg-[#d5b18e]",
  },
  {
    icon: "FileText",
    title: "Documents & Knowledge",
    description:
      "Extract, summarize, and route information from contracts, invoices, and internal documents.",
    tone: "sm:bg-[#98a18c]",
  },
  {
    icon: "Workflow",
    title: "Workflow Automation",
    description:
      "Connect your CRM, calendar, and internal tools so work moves without anyone touching a keyboard.",
    tone: "sm:bg-[#ddd4c8]",
  },
  {
    icon: "Cpu",
    title: "Advanced AI Systems",
    description:
      "Custom multi-agent systems and applications for businesses whose workflows don't fit off-the-shelf tools.",
    tone: "sm:bg-[#b79c91]",
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

const featuredServices = services.filter((service) =>
  featuredServiceSlugs.includes(service.slug),
);

const featuredIndustrySlugs = ["hvac", "plumbing", "med-spas", "dentists"];

const featuredIndustries = industries.filter((industry) =>
  featuredIndustrySlugs.includes(industry.slug),
);

const homeFaqs = faqs.slice(0, 6);

export default function Home() {
  return (
    <>
      <MobileHome />
      <div className="hidden sm:block">
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden border-b border-border sm:min-h-[820px]">
        <Image
          src="/mirflow-editorial-hero.jpg"
          alt="A business owner working in a calm, modern Southern California studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="container-page relative flex min-h-[620px] items-end pb-12 pt-28 sm:min-h-[820px] sm:items-center sm:py-20">
          <div className="w-full min-w-0 max-w-3xl text-white">
            <p className="border-b border-white/50 pb-3 text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.24em]">
              Mirflow — Southern California
            </p>
            <h1 className="mt-6 max-w-[340px] text-balance font-display text-[46px] font-normal leading-[0.94] tracking-[-0.045em] sm:mt-8 sm:max-w-none sm:text-7xl lg:text-[92px]">
              The business runs. You move forward.
            </h1>
            <p className="mt-5 max-w-[330px] text-pretty text-[15px] leading-relaxed text-white/80 sm:mt-7 sm:max-w-xl sm:text-xl">
              Quiet, capable AI systems that answer every lead, arrange the next step,
              and keep your operation moving—without adding more admin.
            </p>
            <div className="mt-7 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:gap-3">
              <Button asChild variant="gradient" size="lg" className="w-full sm:w-auto">
                <Link href="/quote">Design my workflow<ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-white/60 text-white hover:bg-white hover:text-black sm:w-auto">
                <Link href="/pricing">Plans from $199</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-8 hidden text-right text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 lg:block">
          Respond · Qualify · Book · Follow up
        </div>
      </section>

      <section className="border-b border-border bg-[#171713] text-[#f3efe7]">
        <div className="grid grid-cols-2 gap-px bg-white/20 sm:container-page sm:grid-cols-4 lg:px-8">
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="bg-[#171713] px-5 py-6 sm:px-6 sm:py-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">0{index + 1}</p>
              <p className="mt-3 font-display text-3xl sm:mt-5 sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="container-page py-16 sm:py-32">
        <SectionHeading
          eyebrow="Capabilities"
          title="A composed operating system for the work that never stops"
          description="We begin with the bottlenecks that cost local businesses the most: missed calls, slow lead response, manual booking, and repetitive follow-up."
        />
        <RevealGroup className="mt-10 grid gap-px border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <RevealItem
              key={capability.title}
              className={`${capability.tone} ${index >= 3 ? "hidden sm:block" : ""} min-h-0 bg-[#f3efe7] p-5 text-[#171713] sm:min-h-[320px] sm:p-8`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold">0{index + 1}</span>
                <Icon name={capability.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-10 font-display text-[26px] font-normal leading-none sm:mt-20 sm:text-3xl">
                {capability.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-black/65 sm:mt-6">
                {capability.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Interactive workflow demo */}
      <section className="border-y border-border bg-secondary/20 py-16 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From audit to live system, without the guesswork"
            description="Every Mirflow engagement follows the same disciplined process — built for speed without cutting corners on reliability."
          />
          <div className="mt-10 sm:mt-14">
            <WorkflowVisualizer steps={workflowSteps} />
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="container-page py-16 sm:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Popular automation services"
          description="Start with one high-impact workflow, prove the result, then expand from there."
        />
        <RevealGroup className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <RevealItem key={service.slug} className={index >= 3 ? "hidden sm:block" : ""}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg" className="w-full px-4 text-xs sm:w-auto sm:px-8 sm:text-base">
            <Link href="/services">
              Explore automation options
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Industries */}
      <section className="hidden border-y border-border bg-secondary/20 py-20 sm:block sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Built around how your industry actually works"
            description="Our first playbooks are built for Southern California businesses where every missed inquiry or empty appointment has a cost."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredIndustries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IndustryCard industry={industry} />
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg" className="w-full px-4 text-xs sm:w-auto sm:px-8 sm:text-base">
              <Link href="/industries">
                See industry playbooks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI calculator */}
      <section id="roi-calculator" className="container-page py-16 sm:py-28">
        <SectionHeading
          eyebrow="ROI calculator"
          title="See what missed calls are costing you"
          description="Adjust the sliders to estimate the revenue Mirflow could recover for your business every month."
        />
        <div className="mt-10 sm:mt-14">
          <RoiCalculator />
        </div>
      </section>

      {/* Comparison */}
      <section className="hidden container-page py-20 sm:block sm:py-28">
        <SectionHeading
          eyebrow="Why Mirflow"
          title="Compare your options"
          description="Mirflow combines the coverage of a full-time hire with the speed of software — without the per-seat cost of point solutions."
        />
        <div className="mt-14">
          <ComparisonTable rows={comparisonRows} />
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-secondary/20 py-16 sm:py-28">
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
      </div>
    </>
  );
}
    
