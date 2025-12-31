import {
  Palette,
  PenTool,
  LayoutTemplate,
  Smartphone,
  FileCode,
  Lightbulb,
  Target,
  Users,
  Zap,
  Eye,
  Share2,
  Layers,
  Image as ImageIcon,
  Compass,
  Brush,
  FileImage,
  MousePointer,
  Search,
  BarChart,
  MessageSquare,
  ListChecks,
  LayoutGrid,
  FileText,
  Globe,
  Heart,
} from "lucide-react";
import {
  ServiceBenefit,
  ServiceCategoryData,
  ServiceCategory,
  ServiceProcessStep,
} from "@/types/service";
import Routes from "@/constants/routes";

const designBenefits: ServiceBenefit[] = [
  { key: "user-centered-design", icon: Users },
  { key: "creative-innovation", icon: Lightbulb },
  { key: "iterative-prototyping", icon: Zap },
  { key: "business-objectives", icon: Target },
];

const designProcessList: ServiceProcessStep[] = [
  { key: "needs-analysis" },
  { key: "research-moodboard" },
  { key: "wireframes" },
  { key: "interface-design" },
  { key: "prototyping" },
  { key: "development" },
];

const designCategory: ServiceCategoryData = {
  id: ServiceCategory.DESIGN,
  icon: Palette,
  benefits: designBenefits,
  processList: designProcessList,
  subServices: [
    {
      id: "moodboard",
      route: Routes.service.design.moodboard,
      icon: PenTool,
      features: [
        { key: "creative-direction", icon: Compass },
        { key: "color-palette", icon: Palette },
        { key: "visual-style", icon: ImageIcon },
        { key: "targeted-inspiration", icon: Target },
      ],
      benefits: [
        { key: "clear-direction", icon: Lightbulb },
        { key: "visual-communication", icon: Share2 },
        { key: "consistency", icon: Eye },
        { key: "creative-expertise", icon: Brush },
      ],
      faqItems: [
        { key: "what-is-moodboard" },
        { key: "creation-process" },
        { key: "moodboard-elements" },
        { key: "moodboard-usage" },
        { key: "creation-timeline" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "brand-guidelines", icon: FileImage },
        { key: "style-guide", icon: Layers },
        { key: "artistic-direction", icon: PenTool },
      ],
    },
    {
      id: "wireframes",
      route: Routes.service.design.wireframes,
      icon: LayoutTemplate,
      features: [
        { key: "ux-architecture", icon: LayoutTemplate },
        { key: "user-journey", icon: Users },
        { key: "visual-hierarchy", icon: Layers },
        { key: "interactions", icon: MousePointer },
      ],
      benefits: [
        { key: "responsive-design", icon: Smartphone },
        { key: "rapid-prototyping", icon: Zap },
        { key: "collaboration", icon: Share2 },
        { key: "early-validation", icon: Eye },
      ],
      faqItems: [
        { key: "what-is-wireframe" },
        { key: "creation-process" },
        { key: "deliverables" },
        { key: "responsive-handling" },
        { key: "creation-timeline" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "ux-audit", icon: ListChecks },
        { key: "prototyping", icon: LayoutGrid },
        { key: "ux-documentation", icon: FileText },
      ],
    },
    {
      id: "ui",
      route: Routes.service.design.ui,
      icon: Smartphone,
      features: [
        { key: "modern-design", icon: PenTool },
        { key: "design-system", icon: Layers },
        { key: "responsive-design", icon: Smartphone },
        { key: "animations-micro-interactions", icon: Zap },
      ],
      benefits: [
        { key: "visual-identity", icon: Palette },
        { key: "user-experience", icon: Eye },
        { key: "design-system", icon: Layers },
        { key: "accessibility", icon: Users },
      ],
      faqItems: [
        { key: "ui-design-process" },
        { key: "tools-deliverables" },
        { key: "responsive-handling" },
        { key: "design-consistency" },
        { key: "developer-handoff" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "design-system", icon: LayoutGrid },
        { key: "prototyping", icon: MousePointer },
        { key: "development", icon: FileCode },
      ],
    },
    {
      id: "branding",
      route: Routes.service.design.branding,
      icon: Palette,
      features: [
        { key: "visual-identity", icon: Palette },
        { key: "brand-values", icon: Heart },
        { key: "brand-guidelines", icon: FileText },
        { key: "design-system", icon: PenTool },
      ],
      benefits: [
        { key: "recognition", icon: Target },
        { key: "consistency", icon: LayoutTemplate },
        { key: "trust", icon: Users },
        { key: "reach", icon: Globe },
      ],
      faqItems: [
        { key: "complete-identity" },
        { key: "creation-process" },
        { key: "deliverables" },
        { key: "uniqueness" },
        { key: "transition" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "marketing-kit", icon: MessageSquare },
        { key: "social-media", icon: Share2 },
        { key: "print-materials", icon: FileImage },
      ],
    },
    {
      id: "audit",
      route: Routes.service.design.audit,
      icon: FileCode,
      features: [
        { key: "heuristic-analysis", icon: Search },
        { key: "user-testing", icon: Users },
        { key: "analytics", icon: BarChart },
        { key: "accessibility", icon: Eye },
      ],
      benefits: [
        { key: "conversion", icon: Target },
        { key: "performance", icon: Zap },
        { key: "satisfaction", icon: BarChart },
        { key: "journeys", icon: MousePointer },
      ],
      faqItems: [
        { key: "complete-audit" },
        { key: "audit-process" },
        { key: "deliverables" },
        { key: "measuring-impact" },
        { key: "post-audit-support" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "user-testing", icon: Users },
        { key: "advanced-analytics", icon: BarChart },
        { key: "ux-training", icon: MessageSquare },
      ],
    },
  ],
};

export default designCategory;
