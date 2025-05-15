// Type Agency révisé - suppression des localProjects fictifs
import { LucideIcon } from "lucide-react";

// Pour les témoignages clients
export interface AgencyTestimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl?: string;
}

// Pour les atouts/spécificités du service
export interface AgencyStrength {
  title: string;
  description: string;
  icon?: LucideIcon;
}

// Pour les services spécialisés adaptés au marché local
export interface AgencyService {
  name: string;
  description: string;
  link: string;
  icon?: LucideIcon;
}

// Pour les témoignages du marché local
export interface AgencyStat {
  label: string;
  value: string;
  description: string;
}

// Type principal pour l'expertise par ville
export interface Agency {
  // Informations de base
  id: string;            // Identifiant unique pour la ville
  name: string;          // Nom de la ville
  region: string;        // Région de France
  
  // Contenu SEO
  title: string;         // Titre SEO pour la page
  description: string;   // Description SEO
  
  // Sections de contenu
  heroTitle?: string;    // Titre alternatif pour la section hero
  heroDescription?: string; // Description alternative pour hero
  introText: string;     // Texte d'introduction ciblé sur les besoins des entreprises locales
  expertiseText: string; // Texte sur l'expertise adaptée aux entreprises locales
  whyChooseUs: string;   // Pourquoi choisir notre expertise pour cette ville
  
  // Informations clés sur le marché local
  keyBusinessSectors: string[]; // Secteurs d'activité principaux dans la région
  localChallenges: string[];    // Défis numériques spécifiques à cette région
  benefits: string[];           // Bénéfices concrets pour les entreprises locales
  
  // Caractéristiques et mise en avant
  strengths: AgencyStrength[];  // Nos forces pour ce marché local (4-5 points clés)
  focusedServices: AgencyService[]; // Services adaptés pour les entreprises de cette région
  testimonials: AgencyTestimonial[]; // Témoignages clients (non spécifiques à la ville, mais pertinents)
  
  // Informations de contact
  contactInfo: {
    email: string;       // Email de contact
    phone: string;       // Téléphone de contact
    meetingOptions?: string[]; // Options de réunion (visio, déplacement)
  };
  
  // Statistiques et métriques du marché local
  stats: AgencyStat[];
  
  // Informations géographiques pour SEO
  geo: {
    latitude: string;
    longitude: string;
  };
  
  // Éléments visuels et design
  accentColor?: string;  // Couleur d'accent optionnelle ("blue" ou "magenta")
  primaryStat?: {        // Caractéristique principale à mettre en avant
    icon: LucideIcon;
    value: string;
    label: string;
  };
  
  // Villes voisines pour référencement croisé
  nearbyLocations: string[];
}