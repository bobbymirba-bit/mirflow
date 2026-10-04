import { Square } from "lucide-react";

import { PrintButton } from "@/components/print-button";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Family scam checklist",
  description:
    "A free, printable family checklist for voice-clone calls, deepfakes, and fake AI apps, with what to do before, during, and after a suspicious call.",
  path: "/checklist",
});

const sections = [
  {
    heading: "Set up now",
    items: [
      "Choose a family safe word together, in person or on a call. Never post it online.",
      "Save real numbers for family members, your bank, and your doctor in your phone.",
      "Turn on two-step verification for email and banking.",
      "Turn on your phone's spam call filtering.",
      "Agree on one person everyone calls to double-check anything strange.",
    ],
  },
  {
    heading: "When a call, text, or video asks for money",
    items: [
      "Slow down. Real emergencies can wait two minutes.",
      "Ask for the safe word.",
      "Hang up and call back on a number you already have.",
      "Never pay with gift cards, crypto, wire transfers, or cash handed to a courier.",
      "Don't trust caller ID. It can be faked.",
    ],
  },
  {
    heading: "Before you trust a video or photo",
    items: [
      "Ask what it wants you to do, such as send money, invest, or click.",
      "Check the person's official website or account directly.",
      "Treat celebrity investment or giveaway videos as fake until proven otherwise.",
    ],
  },
  {
    heading: "Using AI apps",
    items: [
      "Download apps only from links on the company's official website.",
      "Never type passwords, card numbers, or Social Security numbers into an AI chat.",
      "Check the app's privacy settings for chat history and data use.",
      "Never let anyone take remote control of your device.",
    ],
  },
  {
    heading: "If something already happened",
    items: [
      "Call your bank or card company using the number on the back of your card.",
      "Change any passwords you shared, starting with email.",
      "Report it at ReportFraud.ftc.gov and ic3.gov.",
      "Tell your family so they can watch for the same scam.",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <section aria-labelledby="checklist-heading" className="border-b border-border">
      <div className="container-page py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Free from {siteConfig.name}
          </p>
          <h1
            id="checklist-heading"
            className="mt-4 text-balance font-display text-[40px] font-normal leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl"
          >
            The family scam checklist
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
            Print it, stick it by the phone, and go through it with your family.
          </p>
          <div className="mt-6">
            <PrintButton />
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.heading} className="break-inside-avoid">
                <h2 className="border-b-2 border-foreground pb-2 font-display text-2xl font-normal text-foreground sm:text-3xl">
                  {section.heading}
                </h2>
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-lg leading-relaxed text-foreground">
                      <Square className="mt-1.5 h-5 w-5 shrink-0 text-foreground/60" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-border pt-6 text-base text-muted-foreground">
            Our family safe word is: ______________________ (keep this copy private)
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            {siteConfig.name}: {siteConfig.tagline} · {siteConfig.url.replace("https://", "")} ·
            General education, not legal or financial advice.
          </p>
        </div>
      </div>
    </section>
  );
}
