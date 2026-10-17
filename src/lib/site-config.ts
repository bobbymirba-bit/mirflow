export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "AI support agent trained on your own help pages",
  description:
    "Mirflow builds an AI support agent trained only on your published help pages. It answers the customer questions your team gets asked twice, in your words, around the clock, hands anything it cannot answer to a human, and proves its value in a monthly report.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  ogImage: "/og.jpg",
  email: "bobby@mirflow.online",
  supportEmail: "support@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  phoneSchema: "+1-949-422-8674",
  address: "Serving Southern California",
  founded: "2026",
  social: {
    twitter: "https://twitter.com/mirflow",
    linkedin: "https://www.linkedin.com/company/mirflow",
    github: "https://github.com/bobbymirba-bit/mirflow",
    youtube: "https://youtube.com/@mirflow",
  },
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/mirflow/intro-call",
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  columns: {
    heading: string;
    items: NavItem[];
  }[];
  featured?: NavItem & { badge?: string };
};

export const mainNav: NavItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Founding Clients", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Mirflow: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "Founding Clients", href: "/case-studies" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Consulting", href: "/consulting" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
  
