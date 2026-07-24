export type Solution = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  outcomes: string[];
  includedServices: string[];
  idealFor: string[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-front-desk",
    name: "AI Front Desk",
    icon: "Headset",
    tagline: "Never miss another call, text, or booking request.",
    description:
      "A complete front-of-house system that answers phones, chats, and texts, books appointments, and keeps your calendar full — built for businesses where every missed call is lost revenue.",
    outcomes: [
      "100% call and message coverage, day or night",
      "Fewer no-shows through automated confirmations and reminders",
      "Faster booking with zero back-and-forth",
    ],
    includedServices: ["ai-receptionists", "voice-ai", "appointment-booking", "sms-automation"],
    idealFor: ["med-spas", "dentists", "hvac", "plumbing", "restaurants"],
  },
  {
    slug: "revenue-engine",
    name: "Revenue Engine",
    icon: "TrendingUp",
    tagline: "Fill your pipeline and convert it, automatically.",
    description:
      "An end-to-end system covering outbound prospecting, inbound qualification, and CRM hygiene — designed to give sales teams more qualified conversations without adding reps.",
    outcomes: [
      "More meetings booked per rep without added headcount",
      "Higher close rate from better-qualified pipeline",
      "Cleaner CRM data for accurate forecasting",
    ],
    includedServices: ["outbound-ai", "lead-qualification", "inbound-sales-ai", "crm-automation"],
    idealFor: ["real-estate", "insurance", "roofing", "financial-advisors"],
  },
  {
    slug: "support-autopilot",
    name: "Support Autopilot",
    icon: "LifeBuoy",
    tagline: "Resolve most tickets before a human ever sees them.",
    description:
      "A layered support system that answers chat and email instantly using your knowledge base, escalates intelligently, and turns satisfied customers into public reviews.",
    outcomes: [
      "Majority of tickets resolved without human involvement",
      "Faster response time across every channel",
      "Steady growth in public reviews and ratings",
    ],
    includedServices: ["customer-support-ai", "ai-chatbots", "internal-knowledge-bases", "review-automation"],
    idealFor: ["ecommerce", "healthcare", "logistics", "insurance"],
  },
  {
    slug: "back-office-automation",
    name: "Back-Office Automation",
    icon: "Receipt",
    tagline: "Run finance and admin without the manual grind.",
    description:
      "A connected system for document intake, invoicing, bookkeeping, and reporting that keeps your back office accurate and current without a growing admin headcount.",
    outcomes: [
      "Faster invoicing and shorter days-sales-outstanding",
      "Continuously reconciled books, always audit-ready",
      "Recurring reports generated automatically on schedule",
    ],
    includedServices: ["invoice-automation", "bookkeeping-automation", "document-processing", "reporting"],
    idealFor: ["construction", "professional-services", "manufacturing", "logistics"],
  },
  {
    slug: "knowledge-rag",
    name: "Knowledge & RAG Systems",
    icon: "BookOpen",
    tagline: "Ground every AI answer in your own verified data.",
    description:
      "A retrieval infrastructure and knowledge layer that powers accurate, citable AI answers across your support, internal tools, and customer-facing products.",
    outcomes: [
      "Answers grounded in your verified source documents",
      "Consistent accuracy across support and internal use cases",
      "A reusable knowledge layer for every future AI project",
    ],
    includedServices: ["rag-systems", "vector-databases", "internal-knowledge-bases", "custom-gpts"],
    idealFor: ["law-firms", "healthcare", "financial-advisors", "professional-services"],
  },
  {
    slug: "multi-agent-operations",
    name: "Multi-Agent Operations",
    icon: "Network",
    tagline: "Coordinated AI agents that run entire processes.",
    description:
      "An orchestration layer of specialized agents that plan, execute, and validate complex multi-step operations end-to-end, with human oversight built in at every checkpoint.",
    outcomes: [
      "Complex processes completed end-to-end without manual handoffs",
      "Broader task coverage than rules-based automation alone",
      "Built-in validation checkpoints for accuracy and control",
    ],
    includedServices: ["agentic-ai", "multi-agent-systems", "workflow-automation", "custom-ai-applications"],
    idealFor: ["manufacturing", "logistics", "professional-services", "law-firms"],
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
