export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Managed front desk for med spas",
  description:
    "Mirflow manages after-hours and overflow calls, missed-call text follow-up, and consult handoffs for Southern California med spas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  email: "bobby@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  phoneSchema: "+1-949-422-8674",
  instagramHandle: "@mirflow.ai",
  instagramUrl: "https://www.instagram.com/mirflow.ai/",
  founded: "2026",
  offerName: "Front Desk Launch",
  walkthroughEmail: "mailto:bobby@mirflow.online?subject=Med%20spa%20front%20desk%20walkthrough",
  pricing: {
    setupFee: 2000,
    monthlyRetainer: 500,
  },
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Demo videos", href: "/#demos" },
  { label: "Offer & pricing", href: "/#pricing" },
  { label: "Meet Bobby", href: "/#founder" },
];
