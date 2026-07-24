import { icons, type LucideProps, HelpCircle } from "lucide-react";

export type IconName = keyof typeof icons;

export function Icon({
  name,
  ...props
}: LucideProps & { name: string }) {
  const LucideIcon = icons[name as IconName] ?? HelpCircle;
  return <LucideIcon {...props} />;
}
