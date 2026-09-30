export type Industry = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  painPoints: string[];
  recommendedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "med-spas",
    name: "Med Spas",
    icon: "Sparkles",
    summary:
      "Med spas lose a majority of inbound calls to voicemail during treatments. Mirflow answers every call, books consultations, and follows up on quotes automatically.",
    painPoints: [
      "Front desk can't answer the phone while assisting clients",
      "High-value consultation requests go cold overnight",
      "Membership and package renewals are tracked manually in spreadsheets",
    ],
    recommendedServices: ["ai-receptionists", "appointment-booking", "sms-automation", "review-automation"],
  },
  {
    slug: "dentists",
    name: "Dentists",
    icon: "Stethoscope",
    summary:
      "Mirflow fills last-minute cancellations, confirms appointments, and handles insurance intake questions so hygienists and front-desk staff stay focused on patients.",
    painPoints: [
      "Cancellations create empty chair time with no rebooking system",
      "Insurance verification calls consume hours of staff time weekly",
      "New patient inquiries after hours go unanswered",
    ],
    recommendedServices: ["ai-receptionists", "appointment-booking", "document-processing", "sms-automation"],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    icon: "Scale",
    summary:
      "Mirflow pre-qualifies intake calls, drafts client-ready document summaries, and automates conflict checks — giving associates back billable hours.",
    painPoints: [
      "Intake calls consume paralegal time on unqualified leads",
      "Document review and discovery is slow and manual",
      "Client status updates require repetitive manual emails",
    ],
    recommendedServices: ["lead-qualification", "document-processing", "rag-systems", "email-automation"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: "Wind",
    summary:
      "Mirflow answers every emergency call, dispatches the right technician, and follows up on quotes — turning missed calls into booked jobs.",
    painPoints: [
      "Emergency calls after hours go to voicemail and competitors",
      "Dispatch relies on manual phone tag between office and techs",
      "Quotes sent via text or email are rarely followed up on",
    ],
    recommendedServices: ["ai-receptionists", "voice-ai", "appointment-booking", "sms-automation"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    icon: "Droplets",
    summary:
      "Plumbing emergencies happen at 2am. Mirflow's voice AI triages urgency, books the job, and texts the customer a confirmation before a human ever wakes up.",
    painPoints: [
      "After-hours emergencies are the highest-margin jobs and hardest to catch",
      "Office staff spend hours a day on routine scheduling calls",
      "No consistent process for requesting reviews after a job",
    ],
    recommendedServices: ["voice-ai", "appointment-booking", "review-automation", "invoice-automation"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    icon: "Home",
    summary:
      "Mirflow qualifies storm-damage leads, schedules inspections, and automates the proposal-to-signature process for roofing sales teams.",
    painPoints: [
      "Storm season floods the phone lines with unqualified leads",
      "Proposals take days to generate and send",
      "Sales reps spend more time on admin than in the field",
    ],
    recommendedServices: ["lead-qualification", "appointment-booking", "proposal-generation", "crm-automation"],
  },
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    icon: "Sparkle",
    summary:
      "Mirflow handles quote requests, recurring booking changes, and crew reminders automatically, freeing owners from constant scheduling texts.",
    painPoints: [
      "Owners field scheduling texts around the clock",
      "Quote requests via web forms go unanswered for hours",
      "Recurring clients churn without a retention follow-up process",
    ],
    recommendedServices: ["ai-chatbots", "appointment-booking", "sms-automation", "review-automation"],
  },
  {
    slug: "auto-detailers",
    name: "Auto Detailers",
    icon: "Car",
    summary:
      "Mirflow books mobile detailing appointments by text, upsells packages automatically, and requests reviews after every job.",
    painPoints: [
      "Booking happens across Instagram DMs, texts, and calls with no system",
      "No consistent upsell process for premium packages",
      "Reviews are rarely requested, hurting local search ranking",
    ],
    recommendedServices: ["sms-automation", "appointment-booking", "ai-chatbots", "review-automation"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    summary:
      "Mirflow responds to listing inquiries in seconds, qualifies buyer intent, and keeps nurture sequences running long after a showing.",
    painPoints: [
      "Listing inquiries need a response within minutes or leads go cold",
      "Agents can't manually nurture every lead in their pipeline",
      "Showing feedback and follow-up is inconsistent",
    ],
    recommendedServices: ["ai-chatbots", "lead-qualification", "crm-automation", "outbound-ai"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    summary:
      "Mirflow automates bid intake, subcontractor scheduling, and daily reporting, keeping projects on track without added project-management overhead.",
    painPoints: [
      "Bid requests and RFPs arrive across email, phone, and portals",
      "Subcontractor scheduling changes require constant phone coordination",
      "Daily site reports are inconsistent or skipped entirely",
    ],
    recommendedServices: ["document-processing", "workflow-automation", "reporting", "crm-automation"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: "ShieldCheck",
    summary:
      "Mirflow pre-qualifies quote requests, automates policy document processing, and handles renewal outreach so agents focus on closing coverage.",
    painPoints: [
      "Quote intake requires manually re-keying data from PDFs and forms",
      "Renewal outreach is inconsistent, leading to preventable churn",
      "Claims status inquiries flood the phone lines",
    ],
    recommendedServices: ["document-processing", "lead-qualification", "outbound-ai", "customer-support-ai"],
  },
  {
    slug: "financial-advisors",
    name: "Financial Advisors",
    icon: "TrendingUp",
    summary:
      "Mirflow automates meeting prep, note-taking, and client onboarding paperwork so advisors spend their time on planning, not admin.",
    painPoints: [
      "Meeting notes and follow-up tasks are captured manually or forgotten",
      "Client onboarding paperwork takes days to process",
      "Portfolio reporting requires manual data aggregation",
    ],
    recommendedServices: ["meeting-notes", "document-processing", "reporting", "crm-automation"],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "UtensilsCrossed",
    summary:
      "Mirflow handles reservation calls, waitlist texts, and catering inquiries so host stands stay focused on the guests in front of them.",
    painPoints: [
      "Phone lines are unmanageable during peak service",
      "Catering and private event inquiries get lost in the shuffle",
      "No automated review requests after a great visit",
    ],
    recommendedServices: ["voice-ai", "appointment-booking", "sms-automation", "review-automation"],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    icon: "ShoppingCart",
    summary:
      "Mirflow resolves order-status questions instantly, recovers abandoned carts, and automates returns — reducing support volume while lifting conversion.",
    painPoints: [
      "Support tickets are dominated by repetitive order-status questions",
      "Abandoned carts are only followed up with generic email blasts",
      "Returns and exchanges require manual agent handling",
    ],
    recommendedServices: ["ai-chatbots", "email-automation", "customer-support-ai", "analytics"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    summary:
      "Mirflow automates patient intake, appointment reminders, and clinical documentation support — always with a human-in-the-loop for compliance.",
    painPoints: [
      "Front-office staff are overwhelmed with scheduling and intake calls",
      "Clinical documentation eats into time with patients",
      "No-shows create costly gaps in provider schedules",
    ],
    recommendedServices: ["ai-receptionists", "document-processing", "appointment-booking", "rag-systems"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    summary:
      "Mirflow automates proposal generation, client reporting, and internal knowledge search for consultancies and agencies scaling delivery.",
    painPoints: [
      "Proposals and SOWs are rebuilt from scratch for every client",
      "Institutional knowledge is scattered across drives and inboxes",
      "Client reporting takes hours to compile each month",
    ],
    recommendedServices: ["proposal-generation", "internal-knowledge-bases", "reporting", "workflow-automation"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    summary:
      "Mirflow connects shop-floor data to automated reporting and forecasting, and uses computer vision for quality inspection at scale.",
    painPoints: [
      "Quality inspection relies on manual spot checks",
      "Demand forecasting is built on outdated spreadsheets",
      "Maintenance and downtime reporting is inconsistent across shifts",
    ],
    recommendedServices: ["computer-vision", "forecasting", "reporting", "business-intelligence"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    summary:
      "Mirflow automates load-status communication, document processing for bills of lading, and exception handling across carriers and dispatchers.",
    painPoints: [
      "Dispatchers spend hours a day on status update calls",
      "Bills of lading and customs paperwork are processed manually",
      "Exceptions and delays aren't surfaced until customers complain",
    ],
    recommendedServices: ["document-processing", "workflow-automation", "customer-support-ai", "analytics"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
