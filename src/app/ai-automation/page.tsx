import { CapabilityPage } from "@/components/capability-page";
import { getCapability } from "@/data/capabilities";
import { pageMetadata } from "@/lib/metadata";

const capability = getCapability("ai-automation");

export const metadata = pageMetadata({
  title: capability.metaTitle,
  description: capability.metaDescription,
  path: "/ai-automation",
});

export default function Page() {
  return <CapabilityPage capability={capability} />;
}
