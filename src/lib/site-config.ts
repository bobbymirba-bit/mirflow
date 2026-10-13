export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "AI front desk for med spas and cosmetic dental practices",
  description:
    "Mirflow answers every call and text for med spas and cosmetic dental practices across Southern California: an AI front desk with missed-call text-back, a review engine, and patient reactivation, set up and managed for you.",
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
  
