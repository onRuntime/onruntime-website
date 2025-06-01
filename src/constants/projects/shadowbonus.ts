import { Project, Tag } from "@/types/project";
import { Cloud, Code, ExternalLink, Globe, Target, Users } from "lucide-react";

export const shadowbonusProject: Project = {
  id: "shadowbonus",
  name: "ShadowBonus",
  tags: [Tag.CUSTOMER],
  shortDescription: "Plateforme d'affiliation pour streameur spécialisée dans les bonus de casinos en ligne et box opening.",
  description: "Site web d'affiliation développé pour le streameur vitapvp, présentant les meilleurs bonus et avantages des casinos partenaires avec redirection vers les liens d'affiliation.",
  longDescription: `ShadowBonus est une plateforme d'affiliation développée pour le streameur vitapvp, conçue pour présenter de manière claire et attractive les meilleurs bonus et avantages des casinos en ligne partenaires.

Le projet se concentre sur l'essentiel : une interface épurée qui met en valeur les offres partenaires et facilite la conversion vers les liens d'affiliation. Développé avec React et styled-components, le site privilégie la simplicité d'utilisation et l'efficacité de conversion.

Notre approche s'est concentrée sur une expérience utilisateur fluide permettant aux viewers de vitapvp de découvrir rapidement les meilleures offres disponibles et d'accéder facilement aux plateformes partenaires.`,
  
  iconUrl: "/static/images/projects/shadowbonus/icon.jpg",
  showcaseUrl: "/static/images/projects/shadowbonus/showcase.webp",
  thumbnailUrl: "/static/images/projects/shadowbonus/thumbnail.jpg",
  website: "https://shadowbonus.com",
  repository: undefined,
  startDate: "2021-05",
  status: "completed",

  features: [
    {
      title: "Vitrine des partenaires",
      description: "Présentation claire et attractive des casinos et plateformes partenaires du streameur",
      icon: Users,
    },
    {
      title: "Comparaison de bonus",
      description: "Mise en avant des meilleurs bonus et avantages disponibles pour les viewers",
      icon: Target,
    },
    {
      title: "Redirection d'affiliation",
      description: "Système de redirection optimisé vers les liens d'affiliation partenaires",
      icon: ExternalLink,
    },
    {
      title: "Interface responsive",
      description: "Design adaptatif pour une expérience optimale sur tous les appareils",
      icon: Globe,
    },
  ],

  technologies: [
    {
      name: "React",
      description: "Bibliothèque JavaScript pour l'interface utilisateur",
      icon: Code,
    },
    {
      name: "Styled Components",
      description: "Styling CSS-in-JS pour une approche moderne",
      icon: Code,
    },
    {
      name: "Cloudflare Pages",
      description: "Hébergement et déploiement continu",
      icon: Cloud,
    },
  ],

  metrics: [
    {
      label: "Visites hebdomadaires",
      value: "1500+",
      description: "Au lancement en juillet 2021",
    },
    {
      label: "Temps de développement",
      value: "2 mois",
      description: "Livraison rapide et efficace",
    },
    {
      label: "Équipe",
      value: "3 pers.",
      description: "Équipe réduite et agile",
    },
  ],

  team: [
    {
      ref: "antoine-kingue",
      role: "Lead Developer",
    },
    {
      ref: "jeremy-baudrin",
      role: "Frontend Developer",
    },
    {
      ref: "lucas-bodin",
      role: "Designer",
    },
  ],

  screenshots: [
    {
      url: "/static/images/projects/shadowbonus/screenshots/homepage.webp",
      caption: "Page d'accueil présentant les offres partenaires",
    },
    {
      url: "/static/images/projects/shadowbonus/screenshots/partners.webp",
      caption: "Section des casinos et plateformes partenaires",
    },
  ],

  challenges: [
    "Créer une interface attractive pour mettre en valeur les offres partenaires",
    "Optimiser les taux de conversion vers les liens d'affiliation",
    "Développer une solution simple mais efficace en React",
    "Assurer une expérience utilisateur fluide sur tous les appareils",
  ],

  learnings: [
    "Importance de la simplicité dans les projets d'affiliation",
    "Optimisation des parcours de conversion pour streameurs",
    "Développement rapide et efficace avec React et styled-components",
    "Adaptation aux besoins spécifiques du monde du streaming gaming",
  ],

  futurePlans: [
    "Le projet a été transféré au client pour maintenance",
    "Évolutions possibles selon les besoins du streameur",
  ],
};