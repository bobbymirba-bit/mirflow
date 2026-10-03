import { CapabilityPage } from "@/components/capability-page";
import { getCapability } from "@/data/capabilities";
import { pageMetadata } from "@/lib/metadata";

const capability = getCapability("ai-product-leadership");

export const metadata = pageMetadata({
  title: capability.metaTitle,
  description: capability.metaDescription,
  path: "/ai-product-leadership",
});

export default function Page() {
  return <CapabilityPage capability={capability} />;
}
