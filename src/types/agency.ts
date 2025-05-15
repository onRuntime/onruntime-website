// src/types/agency.ts
import { LucideIcon } from "lucide-react";

// For testimonials
export interface AgencyTestimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl?: string;
}

// For local projects
export interface AgencyProject {
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

// For agency benefits/strengths
export interface AgencyStrength {
  title: string;
  description: string;
  icon?: LucideIcon;
}

// For agency specialized services
export interface AgencyService {
  name: string;
  description: string;
  link: string;
  icon?: LucideIcon;
}

// For agency metrics/stats
export interface AgencyStat {
  label: string;
  value: string;
  description: string;
}

// Main agency type
export interface Agency {
  // Basic Information
  id: string;            // Unique identifier for the agency
  name: string;          // Name of the city
  region: string;        // Region of France
  population: number;    // Approximate population
  
  // SEO Content
  title: string;         // SEO title for the agency page
  description: string;   // SEO description
  
  // Page Content Sections
  heroTitle?: string;    // Optional title override for the hero section
  heroDescription?: string; // Optional description override for hero
  introText: string;     // Introduction text
  expertiseText: string; // Text about the agency's expertise
  whyChooseUs: string;   // Why choose this agency
  
  // Features and Showcase
  strengths: AgencyStrength[];  // Agency strengths (4-5 key points)
  focusedServices: AgencyService[]; // Featured services for this location
  localProjects: AgencyProject[]; // Projects completed in this city
  testimonials: AgencyTestimonial[]; // Client testimonials
  
  // Contact Information
  contactInfo: {
    address?: string;    // Optional physical address
    phone: string;
    email: string;
    meetingPoints?: string[]; // Optional meeting locations
  };
  
  // Statistics and Metrics
  stats: AgencyStat[];
  
  // Geographical Information for SEO
  geo: {
    latitude: string;
    longitude: string;
  };
  
  // Visual and Design Elements
  accentColor?: string;  // Optional brand color accent ("blue" or "magenta")
  primaryStat?: {        // Main statistic or feature to highlight
    icon: LucideIcon;
    value: string;
    label: string;
  };
  
  // Related Cities
  nearbyLocations: string[];
}