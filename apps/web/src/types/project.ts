import { LucideIcon } from "lucide-react";
import TeamMembers from "@/constants/team-members";

export enum Tag {
  FEATURED = "featured",
  OPEN_SOURCE = "open-source",
  CUSTOMER = "customer",
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

export interface ProjectTeamMember {
  ref: keyof typeof TeamMembers;
  role: string;
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
  longDescription: string; 
  iconUrl: string;
  showcaseUrl: string;
  thumbnailUrl: string;

  website?: string; 
  repository?: string; 
  startDate: string; 
  status: "active" | "completed" | "archived";

  features: Feature[];
  technologies: Technology[];
  metrics: Metric[];

  team: ProjectTeamMember[];
  testimonials?: Testimonial[];

  screenshots: Array<{
    url: string;
    caption: string;
  }>;

  challenges: string[]; 
  learnings: string[]; 
  futurePlans?: string[]; 

  resources?: Array<{
    type: "article" | "video" | "documentation";
    title: string;
    url: string;
  }>;
}