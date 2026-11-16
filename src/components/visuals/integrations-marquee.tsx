import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const rowA = [
  "QuickBooks",
  "Xero",
  "NetSuite",
  "Gmail",
  "Outlook",
  "Slack",
  "Microsoft Teams",
  "HubSpot",
  "Salesforce",
  "Notion",
];
const rowB = [
  "Google Drive",
  "SharePoint",
  "Google Sheets",
  "Excel",
  "Twilio",
  "Stripe",
  "Zapier",
  "Make",
  "Airtable",
  "Google Calendar",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className={cn("flex w-max gap-3", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-foreground/85"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#22d3ee,#a855f7)] shadow-[0_0_8px_rgba(34,211,238,.8)]" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsMarquee() {
  return (
    <section className="border-y border-white/5 bg-[#070910]/60 py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="brand" className="mx-auto">
            Built around your stack
          </Badge>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Works with the tools you already run.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No rip-and-replace. Mirflow systems connect to approved sources and write back to your system of record, so
            your team keeps working where they already work.
          </p>
        </Reveal>
      </div>
      <div className="mt-10 space-y-3">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
