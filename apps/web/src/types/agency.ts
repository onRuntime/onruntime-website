import { LucideIcon } from "lucide-react";

export interface AgencyTestimonial {
  key: string;
  author: {
    name: string;
    role: string;
    company: string;
    imageUrl?: string;
  };
}

export interface AgencyStrength {
  key: string;
  icon?: LucideIcon;
}

export interface AgencyService {
  key: string;
  link: string;
  icon?: LucideIcon;
}

export interface AgencyStat {
  key: string;
  value: string;
}

export interface Agency {
  id: string;
  name: string;
  region: string;

  keyBusinessSectors: string[];
  localChallenges: string[];
  benefits: string[];

  strengths: AgencyStrength[];
  focusedServices: AgencyService[];
  testimonials: AgencyTestimonial[];

  contactInfo: {
    email: string;
    phone: string;
  };

  stats: AgencyStat[];

  geo: {
    latitude: string;
    longitude: string;
  };

  accentColor?: string;
  primaryStat?: {
    key: string;
    icon: LucideIcon;
  };

  nearbyLocations: string[];
}
