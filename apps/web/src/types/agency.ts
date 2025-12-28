
import { LucideIcon } from "lucide-react";

export interface AgencyTestimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl?: string;
}

export interface AgencyStrength {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface AgencyService {
  name: string;
  description: string;
  link: string;
  icon?: LucideIcon;
}

export interface AgencyStat {
  label: string;
  value: string;
  description: string;
}

export interface Agency {
  
  id: string;            
  name: string;          
  region: string;        

  title: string;         
  description: string;   

  heroTitle?: string;    
  heroDescription?: string; 
  introText: string;     
  expertiseText: string; 
  whyChooseUs: string;   

  keyBusinessSectors: string[]; 
  localChallenges: string[];    
  benefits: string[];           

  strengths: AgencyStrength[];  
  focusedServices: AgencyService[]; 
  testimonials: AgencyTestimonial[]; 

  contactInfo: {
    email: string;       
    phone: string;       
    meetingOptions?: string[]; 
  };

  stats: AgencyStat[];

  geo: {
    latitude: string;
    longitude: string;
  };

  accentColor?: string;  
  primaryStat?: {        
    icon: LucideIcon;
    value: string;
    label: string;
  };

  nearbyLocations: string[];
}