export type ComparisonRow = {
  dimension: string;
  inHouse: string;
  freelancers: string;
  mirflow: string;
};

export const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Cost structure",
    inHouse: "Payroll, benefits, and training overhead for every new hire",
    freelancers: "Multiple invoices, multiple rates, scope creep on each one",
    mirflow: "One flat setup fee, then one flat monthly retainer",
  },
  {
    dimension: "Coordination",
    inHouse: "You're the one syncing departments",
    freelancers: "Siloed communication, conflicting strategies",
    mirflow: "One unified digital presence, one point of contact",
  },
  {
    dimension: "Coverage",
    inHouse: "Business hours only, unless you staff nights and weekends",
    freelancers: "Whatever hours each freelancer keeps",
    mirflow: "24/7 AI coverage on calls, leads, and follow-up",
  },
  {
    dimension: "Handoff",
    inHouse: "Manual reporting, usually after you ask for it",
    freelancers: "Depends on who you ask and when",
    mirflow: "Automated handoff — leads, calls, and performance land in your pocket",
  },
];
