export type Industry = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  heroStat: { value: string; label: string };
  painPoints: string[];
  recommendedServices: string[];
  stats: { value: string; label: string }[];
};

export const industries: Industry[] = [
  {
    slug: "med-spas",
    name: "Med Spas",
    icon: "Sparkles",
    summary:
      "Med spas lose a majority of inbound calls to voicemail during treatments. Mirflow answers every call, books consultations, and follows up on quotes automatically.",
    heroStat: { value: "31%", label: "more consultations booked" },
    painPoints: [
      "Front desk can't answer the phone while assisting clients",
      "High-value consultation requests go cold overnight",
      "Membership and package renewals are tracked manually in spreadsheets",
    ],
    recommendedServices: ["ai-receptionists", "appointment-booking", "sms-automation", "review-automation"],
    stats: [
      { value: "24/7", label: "call and message coverage" },
      { value: "2.1x", label: "increase in booked consults" },
      { value: "$0", label: "added front-desk headcount" },
    ],
  },
  {
    slug: "dentists",
    name: "Dentists",
    icon: "Stethoscope",
    summary:
      "Mirflow fills last-minute cancellations, confirms appointments, and handles insurance intake questions so hygienists and front-desk staff stay focused on patients.",
    heroStat: { value: "18%", label: "fewer no-shows" },
    painPoints: [
      "Cancellations create empty chair time with no rebooking system",
      "Insurance verification calls consume hours of staff time weekly",
      "New patient inquiries after hours go unanswered",
    ],
    recommendedServices: ["ai-receptionists", "appointment-booking", "document-processing", "sms-automation"],
    stats: [
      { value: "18%", label: "reduction in no-shows" },
      { value: "9 hrs", label: "staff time saved weekly" },
      { value: "94%", label: "of after-hours inquiries answered" },
    ],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    icon: "Scale",
    summary:
      "Mirflow pre-qualifies intake calls, drafts client-ready document summaries, and automates conflict checks — giving associates back billable hours.",
    heroStat: { value: "12 hrs", label: "saved per attorney weekly" },
    painPoints: [
      "Intake calls consume paralegal time on unqualified leads",
      "Document review and discovery is slow and manual",
      "Client status updates require repetitive manual emails",
    ],
    recommendedServices: ["lead-qualification", "document-processing", "rag-systems", "email-automation"],
    stats: [
      { value: "40%", label: "faster intake qualification" },
      { value: "12 hrs", label: "billable time recovered weekly" },
      { value: "3x", label: "faster document review" },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC",
    icon: "Wind",
    summary:
      "Mirflow answers every emergency call, dispatches the right technician, and follows up on quotes — turning missed calls into booked jobs.",
    heroStat: { value: "27%", label: "more jobs booked per month" },
    painPoints: [
      "Emergency calls after hours go to voicemail and competitors",
      "Dispatch relies on manual phone tag between office and techs",
      "Quotes sent via text or email are rarely followed up on",
    ],
    recommendedServices: ["ai-receptionists", "voice-ai", "appointment-booking", "sms-automation"],
    stats: [
      { value: "24/7", label: "emergency call coverage" },
      { value: "27%", label: "increase in booked jobs" },
      { value: "63%", label: "of quotes followed up automatically" },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    icon: "Droplets",
    summary:
      "Plumbing emergencies happen at 2am. Mirflow's voice AI triages urgency, books the job, and texts the customer a confirmation before a human ever wakes up.",
    heroStat: { value: "35%", label: "more after-hours jobs captured" },
    painPoints: [
      "After-hours emergencies are the highest-margin jobs and hardest to catch",
      "Office staff spend hours a day on routine scheduling calls",
      "No consistent process for requesting reviews after a job",
    ],
    recommendedServices: ["voice-ai", "appointment-booking", "review-automation", "invoice-automation"],
    stats: [
      { value: "35%", label: "more after-hours jobs booked" },
      { value: "4.8★", label: "average review rating post-automation" },
      { value: "$180K", label: "average annual revenue recovered" },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    icon: "Home",
    summary:
      "Mirflow qualifies storm-damage leads, schedules inspections, and automates the proposal-to-signature process for roofing sales teams.",
    heroStat: { value: "2.4x", label: "more inspections booked" },
    painPoints: [
      "Storm season floods the phone lines with unqualified leads",
      "Proposals take days to generate and send",
      "Sales reps spend more time on admin than in the field",
    ],
    recommendedServices: ["lead-qualification", "appointment-booking", "proposal-generation", "crm-automation"],
    stats: [
      { value: "2.4x", label: "increase in booked inspections" },
      { value: "68%", label: "faster proposal turnaround" },
      { value: "31%", label: "higher close rate" },
    ],
  },
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    icon: "Sparkle",
    summary:
      "Mirflow handles quote requests, recurring booking changes, and crew reminders automatically, freeing owners from constant scheduling texts.",
    heroStat: { value: "22%", label: "more recurring clients retained" },
    painPoints: [
      "Owners field scheduling texts around the clock",
      "Quote requests via web forms go unanswered for hours",
      "Recurring clients churn without a retention follow-up process",
    ],
    recommendedServices: ["ai-chatbots", "appointment-booking", "sms-automation", "review-automation"],
    stats: [
      { value: "22%", label: "improvement in client retention" },
      { value: "5 min", label: "average quote response time" },
      { value: "15 hrs", label: "owner time saved weekly" },
    ],
  },
  {
    slug: "auto-detailers",
    name: "Auto Detailers",
    icon: "Car",
    summary:
      "Mirflow books mobile detailing appointments by text, upsells packages automatically, and requests reviews after every job.",
    heroStat: { value: "29%", label: "increase in package upsells" },
    painPoints: [
      "Booking happens across Instagram DMs, texts, and calls with no system",
      "No consistent upsell process for premium packages",
      "Reviews are rarely requested, hurting local search ranking",
    ],
    recommendedServices: ["sms-automation", "appointment-booking", "ai-chatbots", "review-automation"],
    stats: [
      { value: "29%", label: "more premium package upsells" },
      { value: "3.1x", label: "increase in Google reviews" },
      { value: "40%", label: "less time spent on scheduling" },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    summary:
      "Mirflow responds to listing inquiries in seconds, qualifies buyer intent, and keeps nurture sequences running long after a showing.",
    heroStat: { value: "5x", label: "faster lead response time" },
    painPoints: [
      "Listing inquiries need a response within minutes or leads go cold",
      "Agents can't manually nurture every lead in their pipeline",
      "Showing feedback and follow-up is inconsistent",
    ],
    recommendedServices: ["ai-chatbots", "lead-qualification", "crm-automation", "outbound-ai"],
    stats: [
      { value: "5x", label: "faster inquiry response" },
      { value: "34%", label: "more qualified showings booked" },
      { value: "3.2x", label: "increase in nurture engagement" },
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    summary:
      "Mirflow automates bid intake, subcontractor scheduling, and daily reporting, keeping projects on track without added project-management overhead.",
    heroStat: { value: "31%", label: "reduction in admin hours" },
    painPoints: [
      "Bid requests and RFPs arrive across email, phone, and portals",
      "Subcontractor scheduling changes require constant phone coordination",
      "Daily site reports are inconsistent or skipped entirely",
    ],
    recommendedServices: ["document-processing", "workflow-automation", "reporting", "crm-automation"],
    stats: [
      { value: "31%", label: "fewer admin hours per project" },
      { value: "2x", label: "faster bid turnaround" },
      { value: "99%", label: "on-time daily reporting" },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: "ShieldCheck",
    summary:
      "Mirflow pre-qualifies quote requests, automates policy document processing, and handles renewal outreach so agents focus on closing coverage.",
    heroStat: { value: "44%", label: "faster quote turnaround" },
    painPoints: [
      "Quote intake requires manually re-keying data from PDFs and forms",
      "Renewal outreach is inconsistent, leading to preventable churn",
      "Claims status inquiries flood the phone lines",
    ],
    recommendedServices: ["document-processing", "lead-qualification", "outbound-ai", "customer-support-ai"],
    stats: [
      { value: "44%", label: "faster quote turnaround" },
      { value: "19%", label: "reduction in policy churn" },
      { value: "60%", label: "fewer inbound status calls" },
    ],
  },
  {
    slug: "financial-advisors",
    name: "Financial Advisors",
    icon: "TrendingUp",
    summary:
      "Mirflow automates meeting prep, note-taking, and client onboarding paperwork so advisors spend their time on planning, not admin.",
    heroStat: { value: "10 hrs", label: "saved per advisor weekly" },
    painPoints: [
      "Meeting notes and follow-up tasks are captured manually or forgotten",
      "Client onboarding paperwork takes days to process",
      "Portfolio reporting requires manual data aggregation",
    ],
    recommendedServices: ["meeting-notes", "document-processing", "reporting", "crm-automation"],
    stats: [
      { value: "10 hrs", label: "saved per advisor weekly" },
      { value: "3x", label: "faster client onboarding" },
      { value: "100%", label: "of meetings auto-summarized" },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "UtensilsCrossed",
    summary:
      "Mirflow handles reservation calls, waitlist texts, and catering inquiries so host stands stay focused on the guests in front of them.",
    heroStat: { value: "38%", label: "fewer missed reservation calls" },
    painPoints: [
      "Phone lines are unmanageable during peak service",
      "Catering and private event inquiries get lost in the shuffle",
      "No automated review requests after a great visit",
    ],
    recommendedServices: ["voice-ai", "appointment-booking", "sms-automation", "review-automation"],
    stats: [
      { value: "38%", label: "fewer missed calls during peak" },
      { value: "26%", label: "increase in catering inquiries booked" },
      { value: "2.8x", label: "more reviews collected" },
    ],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    icon: "ShoppingCart",
    summary:
      "Mirflow resolves order-status questions instantly, recovers abandoned carts, and automates returns — reducing support volume while lifting conversion.",
    heroStat: { value: "21%", label: "cart recovery lift" },
    painPoints: [
      "Support tickets are dominated by repetitive order-status questions",
      "Abandoned carts are only followed up with generic email blasts",
      "Returns and exchanges require manual agent handling",
    ],
    recommendedServices: ["ai-chatbots", "email-automation", "customer-support-ai", "analytics"],
    stats: [
      { value: "21%", label: "abandoned cart recovery lift" },
      { value: "68%", label: "of tickets resolved without a human" },
      { value: "2.1x", label: "faster returns processing" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    summary:
      "Mirflow automates patient intake, appointment reminders, and clinical documentation support — always with a human-in-the-loop for compliance.",
    heroStat: { value: "45%", label: "less administrative burden" },
    painPoints: [
      "Front-office staff are overwhelmed with scheduling and intake calls",
      "Clinical documentation eats into time with patients",
      "No-shows create costly gaps in provider schedules",
    ],
    recommendedServices: ["ai-receptionists", "document-processing", "appointment-booking", "rag-systems"],
    stats: [
      { value: "45%", label: "reduction in admin burden" },
      { value: "22%", label: "fewer no-shows" },
      { value: "100%", label: "of calls answered, day or night" },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    summary:
      "Mirflow automates proposal generation, client reporting, and internal knowledge search for consultancies and agencies scaling delivery.",
    heroStat: { value: "3x", label: "faster proposal delivery" },
    painPoints: [
      "Proposals and SOWs are rebuilt from scratch for every client",
      "Institutional knowledge is scattered across drives and inboxes",
      "Client reporting takes hours to compile each month",
    ],
    recommendedServices: ["proposal-generation", "internal-knowledge-bases", "reporting", "workflow-automation"],
    stats: [
      { value: "3x", label: "faster proposal turnaround" },
      { value: "50%", label: "less time spent searching for information" },
      { value: "12 hrs", label: "saved per month on reporting" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    summary:
      "Mirflow connects shop-floor data to automated reporting and forecasting, and uses computer vision for quality inspection at scale.",
    heroStat: { value: "17%", label: "reduction in defect escape rate" },
    painPoints: [
      "Quality inspection relies on manual spot checks",
      "Demand forecasting is built on outdated spreadsheets",
      "Maintenance and downtime reporting is inconsistent across shifts",
    ],
    recommendedServices: ["computer-vision", "forecasting", "reporting", "business-intelligence"],
    stats: [
      { value: "17%", label: "lower defect escape rate" },
      { value: "23%", label: "more accurate demand forecasts" },
      { value: "9 hrs", label: "saved weekly on shift reporting" },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "Truck",
    summary:
      "Mirflow automates load-status communication, document processing for bills of lading, and exception handling across carriers and dispatchers.",
    heroStat: { value: "33%", label: "fewer manual status calls" },
    painPoints: [
      "Dispatchers spend hours a day on status update calls",
      "Bills of lading and customs paperwork are processed manually",
      "Exceptions and delays aren't surfaced until customers complain",
    ],
    recommendedServices: ["document-processing", "workflow-automation", "customer-support-ai", "analytics"],
    stats: [
      { value: "33%", label: "fewer manual status calls" },
      { value: "4x", label: "faster document processing" },
      { value: "26%", label: "improvement in on-time exception handling" },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
