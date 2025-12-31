import {
  Layers,
  ShoppingBag,
  Globe,
  Box,
  Rocket,
  Palette,
  Settings,
  Shield,
  Code,
  Share2,
  MessageSquare,
  Zap,
  CreditCard,
  BarChart,
  Truck,
  Search,
  LayoutDashboard,
  Image as ImageIcon,
  Shapes,
  MousePointer,
  Users,
} from "lucide-react";
import {
  ServiceBenefit,
  ServiceCategoryData,
  ServiceCategory,
  ServiceProcessStep,
} from "@/types/service";
import Routes from "@/constants/routes";

const integrationBenefits: ServiceBenefit[] = [
  { key: "clean-maintainable-code", icon: Code },
  { key: "optimized-performance", icon: Zap },
  { key: "responsive-design", icon: Layers },
  { key: "smooth-animations", icon: Rocket },
];

const integrationProcessList: ServiceProcessStep[] = [
  { key: "mockup-analysis" },
  { key: "technical-architecture" },
  { key: "component-development" },
  { key: "responsive-integration" },
  { key: "optimization" },
  { key: "testing-validation" },
];

const integrationCategory: ServiceCategoryData = {
  id: ServiceCategory.INTEGRATION,
  icon: Layers,
  benefits: integrationBenefits,
  processList: integrationProcessList,
  subServices: [
    {
      id: "shopify",
      route: Routes.service.integration.shopify,
      icon: ShoppingBag,
      features: [
        { key: "custom-design", icon: Palette },
        { key: "conversion-optimization", icon: Rocket },
        { key: "enhanced-security", icon: Shield },
        { key: "advanced-integrations", icon: Settings },
      ],
      benefits: [
        { key: "secure-payments", icon: CreditCard },
        { key: "international-by-default", icon: Globe },
        { key: "powerful-analytics", icon: BarChart },
        { key: "simplified-logistics", icon: Truck },
      ],
      faqItems: [
        { key: "creation-timeline" },
        { key: "migration" },
        { key: "customization-types" },
        { key: "post-launch-support" },
        { key: "security" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "seo", icon: Search },
        { key: "digital-marketing", icon: Share2 },
        { key: "training", icon: MessageSquare },
      ],
    },
    {
      id: "wordpress",
      route: Routes.service.integration.wordpress,
      icon: Globe,
      features: [
        { key: "custom-themes", icon: Palette },
        { key: "optimized-performance", icon: Rocket },
        { key: "enhanced-security", icon: Shield },
        { key: "simplified-administration", icon: Settings },
      ],
      benefits: [
        { key: "intuitive-administration", icon: LayoutDashboard },
        { key: "seo-optimized", icon: Search },
        { key: "powerful-extensions", icon: Box },
        { key: "maximum-performance", icon: Zap },
      ],
      faqItems: [
        { key: "creation-timeline" },
        { key: "migration" },
        { key: "maintenance-updates" },
        { key: "mobile-optimization" },
        { key: "security-approach" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "custom-development", icon: Code },
        { key: "digital-marketing", icon: Share2 },
        { key: "wordpress-training", icon: MessageSquare },
      ],
    },
    {
      id: "webflow",
      route: Routes.service.integration.webflow,
      icon: Box,
      features: [
        { key: "advanced-visual-design", icon: Palette },
        { key: "optimal-performance", icon: Rocket },
        { key: "rich-interactions", icon: MousePointer },
        { key: "integrated-cms", icon: Settings },
      ],
      benefits: [
        { key: "visual-development", icon: LayoutDashboard },
        { key: "native-seo", icon: Search },
        { key: "responsive-by-default", icon: Layers },
        { key: "optimized-hosting", icon: Zap },
      ],
      faqItems: [
        { key: "creation-timeline" },
        { key: "self-update" },
        { key: "ecommerce" },
        { key: "animations-interactions" },
        { key: "seo-quality" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "custom-integrations", icon: Code },
        { key: "digital-strategy", icon: Share2 },
        { key: "webflow-training", icon: MessageSquare },
      ],
    },
    {
      id: "squarespace",
      route: Routes.service.integration.squarespace,
      icon: Layers,
      features: [
        { key: "minimalist-design", icon: Palette },
        { key: "smooth-experience", icon: Rocket },
        { key: "content-management", icon: LayoutDashboard },
        { key: "media-integration", icon: ImageIcon },
      ],
      benefits: [
        { key: "professional-templates", icon: Shapes },
        { key: "integrated-ecommerce", icon: ShoppingBag },
        { key: "optimal-performance", icon: Zap },
        { key: "integrated-marketing", icon: Share2 },
      ],
      faqItems: [
        { key: "creation-timeline" },
        { key: "product-sales" },
        { key: "content-updates" },
        { key: "seo-optimization" },
        { key: "maintenance-service" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "advanced-customization", icon: Code },
        { key: "content-strategy", icon: Share2 },
        { key: "user-training", icon: MessageSquare },
      ],
    },
    {
      id: "prestashop",
      route: Routes.service.integration.prestashop,
      icon: ShoppingBag,
      features: [
        { key: "custom-design", icon: Palette },
        { key: "advanced-management", icon: LayoutDashboard },
        { key: "optimized-performance", icon: Rocket },
        { key: "enhanced-security", icon: Shield },
      ],
      benefits: [
        { key: "complete-management", icon: ShoppingBag },
        { key: "multi-store", icon: Globe },
        { key: "integrated-logistics", icon: Truck },
        { key: "detailed-analytics", icon: BarChart },
      ],
      faqItems: [
        { key: "creation-timeline" },
        { key: "migration" },
        { key: "large-catalogs" },
        { key: "custom-development" },
        { key: "maintenance-updates" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "custom-modules", icon: Code },
        { key: "digital-marketing", icon: Share2 },
        { key: "prestashop-training", icon: MessageSquare },
      ],
    },
    {
      id: "strapi",
      route: Routes.service.integration.strapi,
      icon: Box,
      features: [
        { key: "custom-api", icon: Code },
        { key: "flexible-administration", icon: LayoutDashboard },
        { key: "optimal-performance", icon: Rocket },
        { key: "advanced-security", icon: Shield },
      ],
      benefits: [
        { key: "100-javascript", icon: Code },
        { key: "flexible-models", icon: Box },
        { key: "role-management", icon: Users },
        { key: "advanced-workflows", icon: Settings },
      ],
      faqItems: [
        { key: "setup-timeline" },
        { key: "multilingual" },
        { key: "content-migration" },
        { key: "deployment-hosting" },
        { key: "custom-plugins" },
      ],
      testimonials: [],
      complementaryServices: [
        { key: "frontend-development", icon: Globe },
        { key: "integrations", icon: Share2 },
        { key: "strapi-training", icon: MessageSquare },
      ],
    },
  ],
};

export default integrationCategory;
