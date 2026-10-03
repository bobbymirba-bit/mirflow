export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Safe, practical AI for finance and operations",
  description:
    "Mirflow helps finance-heavy and operations-driven businesses safely deploy AI that automates work, protects sensitive data, and improves tax and business operations.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  ogImage: "/opengraph-image",
  email: "hello@mirflow.online",
  supportEmail: "support@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  phoneSchema: "+1-949-422-8674",
  address: "Southern California · Working with teams remotely",
  region: "CA",
  country: "US",
  founded: "2026",
  social: {
    linkedin: "https://www.linkedin.com/company/mirflow",
  },
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/mirflow/intro-call",
  /** Primary conversion path used by every "Book an AI Assessment" CTA. */
  assessmentHref: "/ai-assessment",
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

export const primaryNav: NavGroup[] = [
  {
    label: "Capabilities",
    href: "/#capabilities",
    columns: [
      {
        heading: "What we do",
        items: [
          {
            label: "AI Strategy",
            href: "/ai-strategy",
            description: "Readiness, roadmaps, copilots, and implementation leadership.",
          },
          {
            label: "AI Automation",
            href: "/ai-automation",
            description: "Agents and workflows for finance and operations.",
          },
          {
            label: "AI Security",
            href: "/ai-security",
            description: "Governance, privacy, access control, and AI risk.",
          },
          {
            label: "AI Tax",
            href: "/ai-tax",
            description: "Document processing and tax workflow automation.",
          },
          {
            label: "AI Product Leadership",
            href: "/ai-product-leadership",
            description: "Fractional CPO support for AI products.",
          },
        ],
      },
    ],
    featured: {
      label: "Not sure where to start?",
      href: "/ai-assessment",
      description: "Book an AI Assessment.",
    },
  },
];

export const secondaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Capabilities: [
    { label: "AI Strategy", href: "/ai-strategy" },
    { label: "AI Automation", href: "/ai-automation" },
    { label: "AI Security", href: "/ai-security" },
    { label: "AI Tax", href: "/ai-tax" },
    { label: "AI Product Leadership", href: "/ai-product-leadership" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Book an AI Assessment", href: "/ai-assessment" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
