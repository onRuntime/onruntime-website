import { Project, Tag } from "@/types/project";

const Projects: Project[] = [
  {
    id: "tonightpass",
    name: "Tonight Pass",
    tags: [Tag.FEATURED, Tag.OPEN_SOURCE],
    shortDescription: "Réserve ton pass de soirée VIP en avance et coupe les files d'attentes.",
    description: "Tonight Pass permet de réserver un pass de soirée VIP en avance et couper les files d'attentes des événements.",
    iconUrl: "/static/images/projects/icons/tonightpass.svg",
    showcaseUrl: "/static/images/projects/showcases/tonightpass.jpg"
  },
  {
    id: "kitchn",
    name: "Kitchn",
    tags: [Tag.OPEN_SOURCE],
    shortDescription: "Intégrez des interfaces React & React Native dans votre projet avec des composants optimisés et personnalisables.",
    description: "",
    iconUrl: "/static/images/projects/icons/kitchn.svg",
    showcaseUrl: "/static/images/projects/showcases/kitchn.jpg"
  },
  {
    id: "kartrak",
    name: "Kartrak",
    tags: [Tag.OPEN_SOURCE],
    shortDescription: "Le suivi d'activité tourné vers l'écologie. Surveillez votre empreinte en ligne de façon ludique.",
    description: "Le suivi d'activité tourné vers l'écologie. Cette extension révolutionnaire offre une plongée approfondie dans votre empreinte en ligne en fournissant des détails précis sur votre consommation internet.",
    iconUrl: "/static/images/projects/icons/kartrak.svg",
    showcaseUrl: "/static/images/projects/showcases/kartrak.jpg"
  }
];

export default Projects;