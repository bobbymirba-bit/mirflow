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
  contactEmail: "mailto:bobby@mirflow.online?subject=Mirflow%20free%20digital%20audit",
};

export const frontDeskOffer = {
  name: "AI Front Desk",
  price: "$2,000 setup + $500/month",
  refund: "If the front desk is still failing to handle real customer questions after 14 live days under the agreed checks, we refund the setup fee.",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Front Desk", href: "/ai-receptionist" },
  { label: "AI Support", href: "/support-agent" },
];
