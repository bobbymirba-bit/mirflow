export type ServiceItem = {
  title: string;
  description: string;
};

export type ServicePillar = {
  id: string;
  letter: "A" | "B" | "C";
  title: string;
  summary: string;
  items: ServiceItem[];
};

export const servicePillars: ServicePillar[] = [
  {
    id: "architecture",
    letter: "A",
    title: "Digital Architecture & Conversion",
    summary: "Your site and funnel, built to actually convert instead of just existing.",
    items: [
      {
        title: "Custom Website Redesign & Modernization",
        description: "High-speed, mobile-first, high-conversion UX — rebuilt around what makes a visitor book, not just browse.",
      },
      {
        title: "Technical & Local SEO",
        description: "Google Maps optimization, local authority building, and schema markup, so you show up where buyers are already looking.",
      },
      {
        title: "Hosting, Maintenance & Funnel Optimization",
        description: "Full hosting and ongoing upkeep, with continuous tuning of the path from click to booked customer.",
      },
    ],
  },
  {
    id: "reach",
    letter: "B",
    title: "Omnichannel Reach & Retention",
    summary: "Every channel your customers actually use, run as one coordinated system.",
    items: [
      {
        title: "Complete Social Media Management",
        description: "Instagram, TikTok, LinkedIn, Facebook, YouTube Shorts, and X — planned, produced, and posted as one strategy, not six disconnected ones.",
      },
      {
        title: "Email & SMS Marketing Automation",
        description: "Retention flows, abandoned-cart recovery, and nurture sequences that keep working after the first visit.",
      },
      {
        title: "Targeted Ad Funnels & Retargeting",
        description: "Paid campaigns built to bring warm leads back, not just spend budget.",
      },
    ],
  },
  {
    id: "automation",
    letter: "C",
    title: "Next-Gen AI & Automation",
    summary: "The parts of the business that never clock out.",
    items: [
      {
        title: "24/7 AI Voice Agents",
        description: "Inbound calls answered, callers qualified, and appointments booked around the clock — even when your team is closed or slammed.",
      },
      {
        title: "Custom Business Automations",
        description: "CRM synchronization and lead routing via Zapier, Make, or direct webhooks, so a lead never sits in an inbox unassigned.",
      },
      {
        title: "Intelligent Knowledge-Base Chatbots",
        description: "Internal and client-facing chatbots that answer from your own documentation — accurate, and able to say \"I don't know\" instead of guessing.",
      },
    ],
  },
];
