import { LucideIcon } from "lucide-react";

export enum Tag {
  FEATURED = "featured",
  OPEN_SOURCE = "open-source",
}

export interface Technology {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
}

export interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export interface Project {
  id: string;
  name: string;
  tags: Tag[];
  shortDescription: string;
  description: string;
  longDescription: string; // Description détaillée du projet
  iconUrl: string;
  showcaseUrl: string;
  
  // Informations détaillées
  website?: string; // URL du projet
  repository?: string; // URL du repo GitHub
  startDate: string; // Date de début du projet
  status: "active" | "completed" | "archived";
  
  // Sections riches
  features: Feature[];
  technologies: Technology[];
  metrics: Metric[];
  
  // Équipe et témoignages
  team: TeamMember[];
  testimonials?: Testimonial[];
  
  // Galerie
  screenshots: Array<{
    url: string;
    caption: string;
  }>;
  
  // Processus et documentation
  challenges: string[]; // Défis rencontrés et solutions
  learnings: string[]; // Apprentissages clés
  futurePlans?: string[]; // Plans futurs pour le projet
  
  // Articles et ressources liés
  resources?: Array<{
    type: "article" | "video" | "documentation";
    title: string;
    url: string;
  }>;
}