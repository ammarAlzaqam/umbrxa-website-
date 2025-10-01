import {
  Wallpaper as WebsiteDesign,
  ChartNoAxesCombined as BusinessStrategyIcon,
  Gem as BrandStrategyIcon,
  MonitorSmartphone as UiUxDesignIcon,
  type LucideIcon,
  ChartNoAxesCombined,
  Signature,
  Fingerprint,
  HeartHandshake,
} from "lucide-react";

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    Icon: ChartNoAxesCombined,
    title: "Brand Strategy",
    description: "Research, audience, competitors → unique positioning",
  },
  {
    Icon: Fingerprint,
    title: "Visual Identity",
    description: "Logos → full systems, lasting impression",
  },
  {
    Icon: HeartHandshake,
    title: "Customer Experience",
    description: "Journey mapping → clarity, consistency, emotion",
  },
];
