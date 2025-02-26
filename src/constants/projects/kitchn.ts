import { Project, Tag } from "@/types/project";
import { Blocks, BookOpen, Code, FileCode, FileText, Paintbrush, Palette, Smartphone } from "lucide-react";

export const kitchnProject: Project = {
  id: "kitchn",
  name: "Kitchn",
  tags: [Tag.OPEN_SOURCE],
  shortDescription:
    "Une bibliothèque de composants React et React Native moderne, performante et hautement personnalisable, inspirée par Geist UI et Vercel Design.",
  description:
    "Une suite complète de composants styled-components conçue pour créer des interfaces utilisateur cohérentes et élégantes, maintenue par Tonight Pass.",
  longDescription: `Kitchn est une bibliothèque de composants UI complète qui accélère le développement d'applications web et mobiles modernes. 
  
Inspirée par Geist UI et Vercel Design, elle se distingue par son approche minimaliste et sa facilité d'utilisation, offrant une collection de composants optimisés construits avec styled-components et TypeScript.

Chaque composant est conçu pour être modulaire, performant et hautement personnalisable, permettant aux équipes de développement de créer rapidement des interfaces utilisateur cohérentes tout en maintenant une excellente expérience développeur.`,
  iconUrl: "/static/images/projects/kitchn/icon.svg",
  showcaseUrl: "/static/images/projects/kitchn/showcase.jpg",
  thumbnailUrl: "/static/images/projects/kitchn/thumbnail.jpg",
  website: "https://kitchn.tonightpass.com",
  repository: "https://github.com/tonightpass/kitchn",
  startDate: "2022-10",
  status: "active",

  features: [
    {
      title: "Architecture Modulaire",
      description:
        "Composants indépendants et réutilisables conçus pour fonctionner ensemble harmonieusement",
      icon: Blocks,
    },
    {
      title: "Thèmes Flexibles",
      description:
        "Support complet des modes clair et sombre avec un système de thème extensible",
      icon: Palette,
    },
    {
      title: "Cross-Platform",
      description:
        "Support natif de React et React Native pour une expérience cohérente sur toutes les plateformes",
      icon: Smartphone,
    },
    {
      title: "Documentation Interactive",
      description:
        "Documentation exhaustive avec exemples et playground pour une prise en main rapide",
      icon: FileText,
    },
  ],

  technologies: [
    {
      name: "Styled Components",
      description: "Styles CSS-in-JS",
      icon: Paintbrush,
    },
    {
      name: "React",
      description: "Bibliothèque UI web",
      icon: Code,
    },
    {
      name: "React Native",
      description: "Composants mobiles natifs",
      icon: Smartphone,
    },
    {
      name: "TypeScript",
      description: "Type safety et auto-complétion",
      icon: FileCode,
    },
    {
      name: "Storybook",
      description: "Documentation interactive",
      icon: BookOpen,
    },
  ],

  metrics: [
    {
      label: "Composants",
      value: "35+",
      description: "Composants UI réutilisables",
    },
    {
      label: "Téléchargements",
      value: "20k+",
      description: "Téléchargements mensuels",
    },
    {
      label: "Github Stars",
      value: "50+",
      description: "Stars sur GitHub",
    },
  ],

  team: [
    {
      ref: "lucas-bodin",
      role: "Lead Designer",
    },
    {
      ref: "maceo-vaz-da-mota",
      role: "Designer",
    },
    {
      ref: "antoine-kingue",
      role: "Lead Developer",
    },
    {
      ref: "jeremy-baudrin",
      role: "Developer",
    },
    {
      ref: "younes-bessa",
      role: "Developer",
    },
    {
      ref: "alexis-mouchon",
      role: "Developer",
    },
    {
      ref: "alexis-lecourt",
      role: "Developer",
    },
    {
      ref: "ines-ferreira",
      role: "Developer",
    },
  ],

  screenshots: [
    {
      url: "/static/images/projects/kitchn/screenshots/responsive.jpg",
      caption: "Composants responsive",
    },
    {
      url: "/static/images/projects/kitchn/screenshots/themable.jpg",
      caption: "Thèmes personnalisables",
    },
  ],

  challenges: [
    "Maintenir une cohérence visuelle parfaite entre les plateformes web et mobile",
    "Optimiser la taille du bundle tout en préservant la richesse fonctionnelle",
    "Assurer la compatibilité avec les différentes versions de React",
    "Garantir la rétrocompatibilité lors des mises à jour",
  ],

  learnings: [
    "Importance cruciale d'une documentation claire et détaillée",
    "Nécessité d'une architecture modulaire pour la maintenabilité",
    "Valeur des tests automatisés pour la fiabilité",
    "Impact de l'expérience développeur sur l'adoption",
  ],

  futurePlans: [
    "Enrichissement de la bibliothèque de composants",
    "Optimisations continues des performances",
    "Extension de la compatibilité avec les frameworks modernes",
  ],
};