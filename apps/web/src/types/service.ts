import { LucideIcon } from "lucide-react";

export enum ServiceCategory {
  DESIGN = "design",
  INTEGRATION = "integration",
  FRONTEND = "frontend",
  BACKEND = "backend",
}

export interface ServiceTestimonial {
  key: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export interface ServiceFAQItem {
  key: string;
}

export interface ServiceFeature {
  key: string;
  icon: LucideIcon;
}

export interface ServiceBenefit {
  key: string;
  icon: LucideIcon;
}

export interface ServiceProcessStep {
  key: string;
  serviceKeys?: string[];
}

export interface SubService {
  id: string;
  route: string;
  icon?: LucideIcon;

  features?: ServiceFeature[];
  benefits?: ServiceFeature[];
  testimonials?: ServiceTestimonial[];
  faqItems?: ServiceFAQItem[];
  complementaryServices?: ServiceFeature[];
}

export interface ServiceCategoryData {
  id: ServiceCategory;
  icon: LucideIcon;
  subServices: SubService[];

  benefits?: ServiceBenefit[];
  processList?: ServiceProcessStep[];
}
