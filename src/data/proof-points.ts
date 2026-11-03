export type ProofPoint = {
  stat: string;
  body: string;
};

/**
 * Aggregate, industry-level numbers — not claims about specific named clients.
 * Keep it this way until there are real, documented case studies to publish.
 */
export const proofPoints: ProofPoint[] = [
  { stat: "9x", body: "higher conversion replying to a lead within 5 minutes vs. the typical 30-minute window" },
  { stat: "3–6 hrs", body: "average small-business reply time to a new inbound lead without automation" },
  { stat: "12–18%", body: "typical lead-to-customer rate with no follow-up system in place" },
  { stat: "15–25%", body: "of local-service revenue lost to no-shows that a timely reminder could prevent" },
];
