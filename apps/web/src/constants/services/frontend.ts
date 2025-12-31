import {
  Code,
  GitBranch,
  Shield,
  Layout,
  Zap,
  Smartphone,
  Monitor,
  Globe,
  Database,
  Download,
  Gauge,
  LineChart,
  Cloud,
  Share2,
  MessageSquare,
  Tablet,
  PenTool,
  Wifi,
  Bell,
  WifiOff,
  Search,
  Layers,
  Lock,
} from "lucide-react";
import {
  ServiceBenefit,
  ServiceCategoryData,
  ServiceCategory,
  ServiceProcessStep,
} from "@/types/service";
import Routes from "@/constants/routes";

const frontendBenefits: ServiceBenefit[] = [
  { key: "scalable-architecture", icon: Code },
  { key: "optimal-performance", icon: Gauge },
  { key: "maintainable-code", icon: GitBranch },
  { key: "enhanced-security", icon: Shield },
];

const frontendProcessList: ServiceProcessStep[] = [
  { key: "technical-architecture" },
  { key: "project-setup" },
  { key: "feature-development" },
  { key: "state-management" },
  { key: "testing-quality" },
  { key: "optimization-monitoring" },
];

const frontendCategory: ServiceCategoryData = {
  id: ServiceCategory.FRONTEND,
  icon: Code,
  benefits: frontendBenefits,
  processList: frontendProcessList,
  subServices: [
    {
      id: "web",
      route: Routes.service.frontend.web,
      icon: Globe,
      features: [
        { key: "react-nextjs", icon: Code },
        { key: "responsive-design", icon: Layout },
        { key: "web-performance", icon: Zap },
        { key: "modern-ui-ux", icon: PenTool },
      ],
      benefits: [
        { key: "reactive-apps", icon: Monitor },
        { key: "mobile-first", icon: Smartphone },
        { key: "optimal-performance", icon: Zap },
        { key: "seo-optimized", icon: Globe },
      ],
      faqItems: [
        { key: "technologies" },
        { key: "performance" },
        { key: "seo" },
        { key: "browser-compatibility" },
        { key: "maintenance" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "ui-ux-design", icon: PenTool },
        { key: "api-integration", icon: Share2 },
        { key: "internationalization", icon: Globe },
      ],
    },
    {
      id: "mobile",
      route: Routes.service.frontend.mobile,
      icon: Smartphone,
      features: [
        { key: "react-native-expo", icon: Code },
        { key: "native-design", icon: Layout },
        { key: "native-performance", icon: Zap },
        { key: "mobile-ui-ux", icon: PenTool },
      ],
      benefits: [
        { key: "multi-platform", icon: Smartphone },
        { key: "tablet-support", icon: Tablet },
        { key: "optimal-performance", icon: Gauge },
        { key: "native-experience", icon: Layers },
      ],
      faqItems: [
        { key: "why-react-native" },
        { key: "performance" },
        { key: "store-publishing" },
        { key: "updates" },
        { key: "post-launch-support" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "store-publishing", icon: Share2 },
        { key: "backend-integration", icon: Share2 },
        { key: "react-native-training", icon: MessageSquare },
      ],
    },
    {
      id: "desktop",
      route: Routes.service.frontend.desktop,
      icon: Monitor,
      features: [
        { key: "electron-react", icon: Code },
        { key: "multiplatform", icon: Monitor },
        { key: "native-performance", icon: Zap },
        { key: "system-integration", icon: Layers },
      ],
      benefits: [
        { key: "windows-macos", icon: Monitor },
        { key: "system-access", icon: Layers },
        { key: "offline-mode", icon: Download },
        { key: "local-data", icon: Database },
      ],
      faqItems: [
        { key: "why-electron" },
        { key: "security" },
        { key: "auto-update" },
        { key: "distribution" },
        { key: "post-launch-support" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "telemetry", icon: LineChart },
        { key: "distribution", icon: Share2 },
        { key: "cloud-sync", icon: Cloud },
      ],
    },
    {
      id: "pwa",
      route: Routes.service.frontend.pwa,
      icon: Globe,
      features: [
        { key: "native-installation", icon: Download },
        { key: "offline-mode", icon: WifiOff },
        { key: "optimal-performance", icon: Zap },
        { key: "push-notifications", icon: Bell },
      ],
      benefits: [
        { key: "multi-platform", icon: Smartphone },
        { key: "always-updated", icon: Download },
        { key: "lightweight", icon: Cloud },
        { key: "native-performance", icon: Zap },
      ],
      faqItems: [
        { key: "what-is-pwa" },
        { key: "vs-native" },
        { key: "offline" },
        { key: "browser-compatibility" },
        { key: "post-launch-support" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "advanced-analytics", icon: LineChart },
        { key: "seo-optimized", icon: Search },
        { key: "enhanced-security", icon: Shield },
      ],
    },
  ],
};

export default frontendCategory;
