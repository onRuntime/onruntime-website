import { LucideIcon } from "lucide-react";

export enum ServiceCategory {
  DESIGN = "design",
  INTEGRATION = "integration",
  FRONTEND = "frontend",
  BACKEND = "backend",
}

export interface ServiceTestimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
  services?: string[];
}

export interface SubService {
  id: string;
  name: string;
  description: string;
  route: string;
  icon?: LucideIcon;

  features?: ServiceFeature[];
  benefits?: ServiceFeature[];
  testimonials?: ServiceTestimonial[];
  faqItems?: ServiceFAQItem[];
  complementaryServices?: ServiceFeature[];
  heroTitle?: string;
  heroDescription?: string;
}

export interface ServiceCategoryData {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];

  benefits?: ServiceBenefit[];
  processList?: ServiceProcessStep[];
}