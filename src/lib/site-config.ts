export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Digital agency for owner-led businesses",
  description:
    "Mirflow manages websites, social media, LinkedIn outreach, paid ads, AI ad creative, and AI receptionists so business owners can focus on running their companies.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  email: "bobby@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  phoneSchema: "+1-949-422-8674",
  instagramHandle: "@mirflow.ai",
  instagramUrl: "https://www.instagram.com/mirflow.ai/",
  founded: "2026",
  contactEmail: "mailto:bobby@mirflow.online?subject=Mirflow%20strategy%20call",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "How we work", href: "/#pricing" },
  { label: "Hear a demo", href: "/#demos" },
];
