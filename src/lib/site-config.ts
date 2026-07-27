export const siteConfig = {
  name: "Mirflow",
  legalName: "Mirflow AI",
  tagline: "Practical AI automation for Southern California businesses",
  description:
    "Mirflow helps Southern California home-service and appointment-based businesses capture more leads, book more work, and give their teams time back with practical AI automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirflow-bmir-agency.vercel.app",
  ogImage: "/opengraph-image",
  email: "hello@mirflow.ai",
  supportEmail: "support@mirflow.ai",
  phone: "+1 (415) 555-0148",
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
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "Conversational & Voice AI",
        items: [
          { label: "AI Chatbots", href: "/services/ai-chatbots" },
          { label: "Voice AI", href: "/services/voice-ai" },
          { label: "AI Receptionists", href: "/services/ai-receptionists" },
          { label: "Inbound Sales AI", href: "/services/inbound-sales-ai" },
        ],
      },
      {
        heading: "Sales & Revenue",
        items: [
          { label: "Outbound AI", href: "/services/outbound-ai" },
          { label: "Lead Qualification", href: "/services/lead-qualification" },
          { label: "Appointment Booking", href: "/services/appointment-booking" },
          { label: "CRM Automation", href: "/services/crm-automation" },
        ],
      },
      {
        heading: "Support & Operations",
        items: [
          { label: "Customer Support AI", href: "/services/customer-support-ai" },
          { label: "Document Processing", href: "/services/document-processing" },
          { label: "Workflow Automation", href: "/services/workflow-automation" },
          { label: "AI Employees", href: "/services/ai-employees" },
        ],
      },
    ],
    featured: {
      label: "Explore automation options",
      href: "/services",
      description: "Explore the workflows we can tailor to your business.",
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        heading: "By outcome",
        items: [
          { label: "AI Front Desk", href: "/solutions/ai-front-desk" },
          { label: "Revenue Engine", href: "/solutions/revenue-engine" },
          { label: "Support Autopilot", href: "/solutions/support-autopilot" },
        ],
      },
      {
        heading: "By function",
        items: [
          { label: "Back-Office Automation", href: "/solutions/back-office-automation" },
          { label: "Knowledge & RAG Systems", href: "/solutions/knowledge-rag" },
          { label: "Multi-Agent Operations", href: "/solutions/multi-agent-operations" },
        ],
      },
    ],
    featured: {
      label: "Explore all solutions",
      href: "/solutions",
      description: "Packaged automation systems built around business outcomes.",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        heading: "Local & home services",
        items: [
          { label: "HVAC", href: "/industries/hvac" },
          { label: "Plumbing", href: "/industries/plumbing" },
          { label: "Roofing", href: "/industries/roofing" },
          { label: "Cleaning Companies", href: "/industries/cleaning-companies" },
        ],
      },
      {
        heading: "Healthcare & wellness",
        items: [
          { label: "Med Spas", href: "/industries/med-spas" },
          { label: "Dentists", href: "/industries/dentists" },
          { label: "Healthcare", href: "/industries/healthcare" },
        ],
      },
      {
        heading: "Professional & finance",
        items: [
          { label: "Law Firms", href: "/industries/law-firms" },
          { label: "Financial Advisors", href: "/industries/financial-advisors" },
          { label: "Real Estate", href: "/industries/real-estate" },
        ],
      },
    ],
    featured: {
      label: "View all industries",
      href: "/industries",
      description: "Start with our focused industry playbooks.",
    },
  },
];

export const secondaryNav: NavItem[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Product: [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
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
  
