export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Your all-in-one digital team",
  description:
    "Mirflow is your all-in-one digital team. We manage your website, social media, LinkedIn outreach, ads, and AI workflows so you can focus on running your business.",
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
  contactEmail: "mailto:bobby@mirflow.online?subject=Mirflow%20strategy%20call",
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "AI Receptionist", href: "/ai-receptionist" },
  { label: "AI Support", href: "/support-agent" },
];
