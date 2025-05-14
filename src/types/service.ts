import { LucideIcon } from "lucide-react";

// Catégories de services principales
export enum ServiceCategory {
  DESIGN = "design",
  INTEGRATION = "integration",
  FRONTEND = "frontend",
  BACKEND = "backend",
}

// Pour les témoignages
export interface ServiceTestimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

// Pour les FAQs
export interface ServiceFAQItem {
  question: string;
  answer: string;
}

// Pour les fonctionnalités/features
export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Pour les avantages
export interface ServiceBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Pour les étapes du processus
export interface ServiceProcessStep {
  title: string;
  description: string;
  services?: string[];
}

// Sous-services spécifiques
export interface SubService {
  id: string;
  name: string;
  description: string;
  route: string;
  icon?: LucideIcon;
  
  // Contenu détaillé pour la page du sous-service
  features?: ServiceFeature[];
  benefits?: ServiceFeature[];
  testimonials?: ServiceTestimonial[];
  faqItems?: ServiceFAQItem[];
  complementaryServices?: ServiceFeature[];
  heroTitle?: string;
  heroDescription?: string;
}

// Catégorie de service principale
export interface ServiceCategoryData {
  id: ServiceCategory;
  name: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
  
  // Contenu pour la page de catégorie
  benefits?: ServiceBenefit[];
  processList?: ServiceProcessStep[];
}