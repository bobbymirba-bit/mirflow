export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Your all-in-one digital partner",
  description:
    "Mirflow is your all-in-one digital partner. We manage websites, social media, LinkedIn outreach, ads, email and SMS marketing, SEO, AI workflows, and voice agents so you can focus on your business.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  email: "bobby@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  voiceAgentPhone: "(949) 328-5051",
  voiceAgentTel: "+19493285051",
  phoneSchema: "+1-949-422-8674",
  instagramHandle: "@mirflow.ai",
  instagramUrl: "https://www.instagram.com/mirflow.ai/",
  founded: "2026",
};

/** All-in-one package. This is the list price and the post-cohort rate. */
export const listPrice = {
  name: "All-in-one package",
  label: "$2,997 setup + $1,497/month",
} as const;

/** AI receptionist and missed-call text-back for the first three med spas. */
export const foundingOffer = {
  who: "First three med spas",
  label: "$497 setup + $500/month",
  term: "The first 30 days are committed. After that, the plan is month to month and you can cancel with 14 days’ notice. A founding client agrees to a case study and a recorded testimonial interview within 60 days of go-live.",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "AI Front Desk", href: "/ai-receptionist" },
  { label: "AI Support", href: "/support-agent" },
];
