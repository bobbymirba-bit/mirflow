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

// Only verified, named customer results (with written permission) belong here.
// Intentionally empty until founding-client case studies are published.
export const caseStudies: CaseStudy[] = [];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
