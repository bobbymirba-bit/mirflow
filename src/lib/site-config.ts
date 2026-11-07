export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Your entire digital presence, handled.",
  description:
    "Mirflow is the all-in-one digital partner and operational growth engine for business owners: web design & remodels, omnichannel social media, email marketing, SEO, AI workflows, and 24/7 AI voice agents — so you can run your business while tracking it in real time from your pocket.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  email: "bobby@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  phoneSchema: "+1-949-422-8674",
  instagramHandle: "@mirflow.ai",
  instagramUrl: "https://www.instagram.com/mirflow.ai/",
  founded: "2026",
  pricing: {
    setupFee: 2997,
    monthlyRetainer: 500,
  },
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#process" },
  { label: "Pocket Command", href: "/#pocket-command" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Pricing / Audit", href: "/#audit" },
];
