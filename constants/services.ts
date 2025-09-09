import {
  Wallpaper as WebsiteDesign,
  ChartNoAxesCombined as BusinessStrategyIcon,
  Gem as BrandStrategyIcon,
  MonitorSmartphone as UiUxDesignIcon,
  type LucideIcon,
} from "lucide-react";

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    Icon: WebsiteDesign,
    title: "Website Design",
    description: "Create modern, responsive websites that attract visitors.",
  },
  {
    Icon: BusinessStrategyIcon,
    title: "Business Strategy",
    description: "Develop smart strategies to grow your online presence.",
  },
  {
    Icon: BrandStrategyIcon,
    title: "Brand Strategy",
    description: "Build a unique identity that strengthens your brand.",
  },
  {
    Icon: UiUxDesignIcon,
    title: "UI/UX Design",
    description:
      "Design clean, user-friendly interfaces for better experience.",
  },
];
