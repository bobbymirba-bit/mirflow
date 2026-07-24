export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  industrySlug: string;
  logoInitial: string;
  summary: string;
  problem: string;
  solution: string;
  workflow: { title: string; description: string }[];
  metrics: { value: string; label: string }[];
  quote: { text: string; author: string; role: string };
  servicesUsed: string[];
  timeframe: string;
};

// Illustrative examples built from typical outcomes across the industries Cadence serves.
// Replace with verified customer data and named logos as case studies are published.
export const caseStudies: CaseStudy[] = [
  {
    slug: "coastline-hvac",
    client: "Coastline HVAC & Air",
    industry: "HVAC",
    industrySlug: "hvac",
    logoInitial: "C",
    summary:
      "A 22-technician HVAC company was losing an estimated $40K a month in after-hours emergency calls before deploying Cadence Voice AI.",
    problem:
      "Coastline's office closed at 5pm, but nearly a third of service requests came in after hours. Calls routed to a generic answering service that couldn't triage urgency, book jobs, or dispatch technicians — costing the business high-margin emergency work to competitors.",
    solution:
      "Cadence deployed a Voice AI agent trained on Coastline's service catalog, pricing, and dispatch rules. The agent now answers every call, triages urgency, books directly into the scheduling system, and texts a confirmation before transferring only true emergencies to the on-call technician.",
    workflow: [
      { title: "Answer", description: "Voice AI answers every inbound call within one second, 24/7." },
      { title: "Triage", description: "The agent determines urgency and service type from natural conversation." },
      { title: "Book", description: "Non-emergency jobs are booked directly into the next available slot." },
      { title: "Dispatch", description: "True emergencies are routed live to the on-call technician." },
    ],
    metrics: [
      { value: "27%", label: "increase in booked jobs" },
      { value: "$38K", label: "monthly revenue recovered" },
      { value: "100%", label: "of after-hours calls answered" },
    ],
    quote: {
      text: "We were paying for an answering service that just took messages. Now every call turns into either a booked job or a dispatched emergency — automatically.",
      author: "Illustrative example",
      role: "Operations Director, Coastline HVAC & Air",
    },
    servicesUsed: ["voice-ai", "appointment-booking", "sms-automation"],
    timeframe: "Live within 3 weeks of engagement start",
  },
  {
    slug: "harborview-dental",
    client: "Harborview Dental Group",
    industry: "Dentists",
    industrySlug: "dentists",
    logoInitial: "H",
    summary:
      "A four-location dental group reduced no-shows and recovered thousands of hours of front-desk time with automated scheduling and reminders.",
    problem:
      "Front-desk staff across four locations spent hours daily on scheduling calls, insurance verification questions, and manual reminder calls — while still carrying a persistent no-show rate that left chairs empty.",
    solution:
      "Cadence deployed an AI receptionist across all locations to handle scheduling, rescheduling, and FAQ calls, paired with an automated SMS reminder sequence tuned to reduce no-shows without feeling impersonal.",
    workflow: [
      { title: "Answer", description: "The receptionist handles scheduling and FAQ calls at every location." },
      { title: "Confirm", description: "New bookings trigger an instant text confirmation." },
      { title: "Remind", description: "A tuned reminder sequence runs 48 and 4 hours before each visit." },
      { title: "Recover", description: "Cancellations trigger automatic outreach to the waitlist." },
    ],
    metrics: [
      { value: "18%", label: "reduction in no-shows" },
      { value: "9 hrs", label: "front-desk time saved weekly, per location" },
      { value: "94%", label: "of after-hours inquiries answered same-day" },
    ],
    quote: {
      text: "Our team stopped playing phone tag and started actually helping the patients standing in front of them.",
      author: "Illustrative example",
      role: "Practice Manager, Harborview Dental Group",
    },
    servicesUsed: ["ai-receptionists", "appointment-booking", "sms-automation"],
    timeframe: "Rolled out across 4 locations in 6 weeks",
  },
  {
    slug: "meridian-law-partners",
    client: "Meridian Law Partners",
    industry: "Law Firms",
    industrySlug: "law-firms",
    logoInitial: "M",
    summary:
      "A mid-size litigation firm cut document review time by two-thirds and recovered 12+ billable hours per attorney each week.",
    problem:
      "Associates were spending significant billable time on manual discovery document review and client intake calls that frequently turned out to be outside the firm's practice areas.",
    solution:
      "Cadence built a document processing pipeline to extract and flag key terms across discovery documents, plus a lead qualification system for intake calls that pre-screens fit before a paralegal is involved.",
    workflow: [
      { title: "Intake", description: "Inbound inquiries are qualified against practice-area and case criteria." },
      { title: "Route", description: "Qualified leads are scheduled directly with an attorney." },
      { title: "Extract", description: "Discovery documents are processed and key clauses flagged." },
      { title: "Review", description: "Associates review flagged content instead of full documents." },
    ],
    metrics: [
      { value: "3x", label: "faster document review" },
      { value: "12 hrs", label: "billable time recovered weekly per attorney" },
      { value: "40%", label: "faster intake qualification" },
    ],
    quote: {
      text: "We reclaimed time that was previously invisible — buried in intake calls and document review that never should have taken as long as it did.",
      author: "Illustrative example",
      role: "Managing Partner, Meridian Law Partners",
    },
    servicesUsed: ["lead-qualification", "document-processing", "rag-systems"],
    timeframe: "First results within 60 days",
  },
  {
    slug: "northfield-realty",
    client: "Northfield Realty Group",
    industry: "Real Estate",
    industrySlug: "real-estate",
    logoInitial: "N",
    summary:
      "A 40-agent brokerage increased qualified showings by a third after automating lead response and nurture.",
    problem:
      "Listing inquiries from portals and the website were only reaching agents hours later, by which point many buyers had already engaged a competing agent who responded faster.",
    solution:
      "Cadence deployed an AI chatbot and lead qualification system that responds to every inquiry within seconds, qualifies buyer intent and timeline, and hands warm leads directly to the right agent with full context.",
    workflow: [
      { title: "Respond", description: "Every listing inquiry receives a response within seconds." },
      { title: "Qualify", description: "Budget, timeline, and financing status are captured conversationally." },
      { title: "Route", description: "Qualified buyers are matched to the listing agent instantly." },
      { title: "Nurture", description: "Not-yet-ready leads enter an automated long-term nurture sequence." },
    ],
    metrics: [
      { value: "5x", label: "faster inquiry response time" },
      { value: "34%", label: "more qualified showings booked" },
      { value: "3.2x", label: "increase in nurture engagement" },
    ],
    quote: {
      text: "Speed to lead used to depend on which agent happened to check their phone first. Now it's instant, every time.",
      author: "Illustrative example",
      role: "Broker/Owner, Northfield Realty Group",
    },
    servicesUsed: ["ai-chatbots", "lead-qualification", "crm-automation"],
    timeframe: "Deployed in 4 weeks across the full agent team",
  },
  {
    slug: "veyra-commerce",
    client: "Veyra Commerce",
    industry: "Ecommerce",
    industrySlug: "ecommerce",
    logoInitial: "V",
    summary:
      "A DTC apparel brand deflected two-thirds of support volume and lifted cart recovery by over a fifth.",
    problem:
      "Support volume scaled faster than the team could hire, with order-status questions alone consuming most of the queue, while abandoned-cart recovery relied on generic, low-performing email blasts.",
    solution:
      "Cadence deployed a support AI trained on order data and policies to resolve common tickets instantly, alongside a personalized, behavior-triggered cart recovery sequence across email and SMS.",
    workflow: [
      { title: "Classify", description: "Incoming tickets are categorized by intent automatically." },
      { title: "Resolve", description: "Order-status and policy questions are answered instantly." },
      { title: "Recover", description: "Abandoned carts trigger a personalized, timed recovery sequence." },
      { title: "Escalate", description: "Complex tickets are routed to agents with full order context." },
    ],
    metrics: [
      { value: "68%", label: "of tickets resolved without a human" },
      { value: "21%", label: "lift in abandoned cart recovery" },
      { value: "2.1x", label: "faster returns processing" },
    ],
    quote: {
      text: "We stopped hiring to keep up with ticket volume and started actually getting ahead of it.",
      author: "Illustrative example",
      role: "Head of Customer Experience, Veyra Commerce",
    },
    servicesUsed: ["customer-support-ai", "email-automation", "ai-chatbots"],
    timeframe: "Fully live within 5 weeks",
  },
  {
    slug: "ironclad-manufacturing",
    client: "Ironclad Manufacturing Co.",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    logoInitial: "I",
    summary:
      "A precision parts manufacturer reduced defect escape rate by 17% using automated visual inspection.",
    problem:
      "Manual spot-checks couldn't keep pace with production line speed, and inconsistent inspection standards between shifts let defects reach customers more often than leadership wanted.",
    solution:
      "Cadence built a computer vision system that inspects parts in real time on the line, flagging defects instantly and logging quality data for trend analysis across shifts.",
    workflow: [
      { title: "Capture", description: "Line cameras feed real-time images into the vision system." },
      { title: "Detect", description: "Defects are identified against a trained quality standard." },
      { title: "Alert", description: "Flagged parts are pulled and operators notified immediately." },
      { title: "Analyze", description: "Quality trends are tracked automatically across shifts and lines." },
    ],
    metrics: [
      { value: "17%", label: "reduction in defect escape rate" },
      { value: "24/7", label: "consistent inspection standard" },
      { value: "9 hrs", label: "saved weekly on manual quality reporting" },
    ],
    quote: {
      text: "The system doesn't get tired on the night shift. It applies the same standard every single time.",
      author: "Illustrative example",
      role: "VP of Quality, Ironclad Manufacturing Co.",
    },
    servicesUsed: ["computer-vision", "reporting", "business-intelligence"],
    timeframe: "Piloted on one line in 8 weeks, expanded in 90 days",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
