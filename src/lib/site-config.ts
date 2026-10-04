export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "AI safety for real people",
  description:
    "Mirflow helps everyday people use AI safely and avoid being fooled by it, with plain-English guides on voice-clone scams, deepfakes, and fake AI apps, plus one-on-one help for you and your family.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow.online",
  ogImage: "/opengraph-image",
  email: "hello@mirflow.online",
  supportEmail: "support@mirflow.online",
  phone: "(949) 422-8674",
  phoneTel: "+19494228674",
  phoneSchema: "+1-949-422-8674",
  address: "Based in Newport Beach, California · Helping people nationwide by video",
  region: "CA",
  country: "US",
  founded: "2026",
  founder: "Bobby M.",
  social: {
    linkedin: "https://www.linkedin.com/company/mirflow",
  },
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/mirflow/intro-call",
  /** The free lead magnet every primary CTA points to. */
  checklistHref: "/#checklist",
  bookingHref: "/book-a-call",
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

export const primaryNav: NavItem[] = [
  { label: "Guides", href: "/guides" },
  { label: "1:1 Help", href: "/book-a-call" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = {
  "Free help": [
    { label: "Family scam checklist", href: "/checklist" },
    { label: "Guides", href: "/guides" },
    { label: "FAQ", href: "/faq" },
  ],
  "Get help": [
    { label: "Book a 1:1 session", href: "/book-a-call" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
