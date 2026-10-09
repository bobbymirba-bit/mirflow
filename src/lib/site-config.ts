export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "AI operating systems for growing companies",
  description:
    "Mirflow helps finance-heavy and operations-driven companies decide what to build, train their teams to use AI well, and install systems that create measurable improvement.",
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

export const primaryNav: NavGroup[] = [
  {
    label: "What we do",
    href: "/services",
    columns: [
      {
        heading: "Build the right thing",
        items: [
          { label: "AI opportunity mapping", href: "/services" },
          { label: "Workflow implementation", href: "/services" },
          { label: "Internal AI tools", href: "/services" },
        ],
      },
      {
        heading: "Make it stick",
        items: [
          { label: "Team workshops", href: "/services" },
          { label: "AI governance", href: "/services" },
          { label: "Embedded advisory", href: "/services" },
        ],
      },
      {
        heading: "Start with clarity",
        items: [
          { label: "AI Readiness & Risk Review", href: "/quote" },
          { label: "Build, buy or skip", href: "/case-studies" },
        ],
      },
    ],
    featured: {
      label: "See the operating model",
      href: "/services",
      description: "A practical path from scattered experiments to useful systems.",
    },
  },
  {
    label: "For teams",
    href: "/industries",
    columns: [
      {
        heading: "Finance & operations",
        items: [
          { label: "Finance teams", href: "/industries/financial-advisors" },
          { label: "Accounting & tax firms", href: "/industries/professional-services" },
          { label: "Operations teams", href: "/industries/logistics" },
        ],
      },
      {
        heading: "What they need",
        items: [
          { label: "Safer AI adoption", href: "/services" },
          { label: "A first workflow", href: "/quote" },
          { label: "A senior owner", href: "/services" },
        ],
      },
    ],
    featured: {
      label: "Find your starting point",
      href: "/industries",
      description: "The right first step depends on the workflow, the risk, and the team.",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        heading: "Think before you build",
        items: [
          { label: "AI readiness", href: "/resources" },
          { label: "AI governance", href: "/resources" },
          { label: "Workflow examples", href: "/case-studies" },
        ],
      },
      {
        heading: "For the buying group",
        items: [
          { label: "CFOs & controllers", href: "/industries/financial-advisors" },
          { label: "COOs & operators", href: "/industries/logistics" },
          { label: "IT & compliance", href: "/resources" },
        ],
      },
      {
        heading: "Stay close to the work",
        items: [
          { label: "The Mirflow memo", href: "/blog" },
          { label: "About Mirflow", href: "/about" },
        ],
      },
    ],
    featured: {
      label: "Read the field notes",
      href: "/resources",
      description: "Practical notes on adoption, risk, and useful systems.",
    },
  },
];

export const secondaryNav: NavItem[] = [
  { label: "How it works", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/quote" },
];

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "AI Readiness & Risk Review", href: "/quote" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Product: [
    { label: "How it works", href: "/services" },
    { label: "Teams", href: "/industries" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { label: "Resource Hub", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "ROI Calculator", href: "/resources#roi-calculator" },
    { label: "AI Readiness Quiz", href: "/resources#readiness-quiz" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
  
