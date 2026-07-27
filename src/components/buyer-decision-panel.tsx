import Link from "next/link";
import { ArrowRight, Check, Clock3, FileSearch, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const paths = [
  {
    icon: ShoppingCart,
    eyebrow: "Standard launch",
    title: "Purchase a focused system",
    description:
      "Best when you need one lead source connected to instant follow-up, qualification, booking, and CRM updates.",
    details: ["From $199/month", "$500 setup", "24-hour target after access"],
    label: "View plans",
    href: "/pricing",
  },
  {
    icon: FileSearch,
    eyebrow: "Custom scope",
    title: "Describe your exact workflow",
    description:
      "Best for voice AI, multiple locations, unusual business rules, higher volume, or several connected systems.",
    details: ["Detailed intake", "Tailored architecture", "Fixed quote before kickoff"],
    label: "Get a custom quote",
    href: "/quote",
  },
  {
    icon: Clock3,
    eyebrow: "Evaluate first",
    title: "Model the opportunity",
    description:
      "Use our planning tools and modeled scenarios to estimate time saved, response coverage, and possible payback.",
    details: ["No invented customer claims", "Transparent assumptions", "Replace with verified data later"],
    label: "Explore resources",
    href: "/resources",
  },
];

export function BuyerDecisionPanel({ context }: { context: string }) {
  return (
    <section className="border-b border-border">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Choose your next step</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Turn {context} into a scoped system—not another sales call
          </h2>
          <p className="mt-4 text-muted-foreground">
            See the package, requirements, and price path before sharing your information.
            A call is optional, not the only way forward.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {paths.map((path) => (
            <article key={path.title} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
              <path.icon className="h-6 w-6 text-primary" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{path.eyebrow}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{path.description}</p>
              <ul className="mt-5 space-y-2">
                {path.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
              <Button asChild variant={path.href === "/quote" ? "gradient" : "outline"} className="mt-7 w-full">
                <Link href={path.href}>{path.label}<ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
