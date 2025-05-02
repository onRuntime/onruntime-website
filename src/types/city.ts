// src/types/city.ts

export interface CityTestimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    imageUrl?: string;
  }
  
  export interface LocalProject {
    name: string;
    description: string;
    imageUrl: string;
    tags: string[];
  }
  
  export interface City {
    id: string;            // Identifiant URL-friendly
    name: string;          // Nom de la ville
    region: string;        // Région de la ville
    population: number;    // Population approximative
    
    // Contenu SEO
    title: string;         // Titre SEO pour la ville
    description: string;   // Description SEO pour la ville
    
    // Contenu spécifique à la ville
    introText: string;     // Introduction spécifique à la ville
    expertiseText: string; // Texte sur l'expertise locale
    whyChooseUs: string;   // Pourquoi nous choisir dans cette ville
    
    // Points forts locaux (3-4 points)
    strengths: Array<{
      title: string;
      description: string;
    }>;
    
    // Services spécifiques à mettre en avant pour cette ville
    focusedServices: Array<{
      name: string;
      description: string;
      link: string;
    }>;
    
    // Projets réalisés dans ou près de la ville
    localProjects: LocalProject[];
    
    // Témoignages de clients locaux
    testimonials: CityTestimonial[];
    
    // Informations de contact local
    contactInfo: {
      address?: string;   // Optionnel, adresse si bureau local
      phone: string;
      email: string;
      meetingPoints?: string[]; // Points de rencontre possibles
    };
    
    // Statistiques locales
    stats: Array<{
      label: string;
      value: string;
      description: string;
    }>;
    
    // Informations géographiques pour SEO local
    geo: {
      latitude: string;
      longitude: string;
    };
    
    // Villes voisines pour le référencement croisé
    nearbyLocations: string[];
  }