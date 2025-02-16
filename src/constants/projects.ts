import { Project, Tag } from "@/types/project";
import {
  Activity,
  BarChart,
  Blocks,
  BookOpen,
  Chrome,
  Code,
  Compass,
  Crown,
  Database,
  FileCode,
  FileText,
  Lightbulb,
  Paintbrush,
  Palette,
  Server,
  Shield,
  Smartphone,
  Target,
  Ticket,
} from "lucide-react";

const Projects: Project[] = [
  {
    id: "tonightpass",
    name: "Tonight Pass",
    tags: [Tag.FEATURED],
    shortDescription: "Découvrez et réservez les meilleurs événements adaptés à vos goûts.",
    description: "Tonight Pass est une plateforme innovante qui simplifie la découverte et la réservation d'événements grâce à un système de recommandations personnalisées basé sur vos préférences.",
    longDescription: `Tonight Pass révolutionne la façon dont les gens découvrent et participent aux événements. Notre plateforme combine technologie et expérience utilisateur pour offrir des recommandations personnalisées et une billetterie simplifiée.

La plateforme met en relation les organisateurs d'événements et les participants, offrant une solution complète de gestion des réservations, de recommandations intelligentes et d'analyse de données. L'application a été conçue pour optimiser l'expérience de découverte d'événements tout en simplifiant leur gestion pour les organisateurs.`,
    iconUrl: "/static/images/projects/tonightpass/icon.svg",
    showcaseUrl: "/static/images/projects/showcases/tonightpass.jpg",
    thumbnailUrl: "/static/images/projects/thumbnails/tonightpass.jpg",
    website: "https://tonightpass.com",
    repository: undefined,
    startDate: "2021-04",
    status: "active",

    features: [
      {
        title: "Billetterie simplifiée",
        description: "Réservez vos billets en quelques clics pour tous types d'événements",
        icon: Ticket
      },
      {
        title: "Recommandations personnalisées",
        description: "Découvrez des événements adaptés à vos goûts",
        icon: Compass
      },
      {
        title: "E-tickets sécurisés",
        description: "Accédez aux événements avec des billets numériques sécurisés",
        icon: Shield
      }
    ],

    technologies: [
      {
        name: "React & React Native",
        description: "Applications web et mobile",
        icon: Code
      },
      {
        name: "Nest.js", 
        description: "Backend API",
        icon: Server
      },
      {
        name: "MongoDB",
        description: "Base de données principale",
        icon: Database
      }
    ],

    metrics: [
      {
        label: "Temps gagné",
        value: "45min",
        description: "En moyenne par recherche d'événement",
      },
      {
        label: "Couverture",
        value: "100%",
        description: "Disponible partout en France", 
      },
      {
        label: "Facilité",
        value: "1-clic",
        description: "Pour réserver n'importe quel événement",
      }
    ],

    team: [
      {
        ref: "antoine-kingue",
        role: "Product Manager",
      },
      {
        ref: "killian-mendy",
        role: "Product Manager",
      },
      {
        ref: "jeremy-baudrin",
        role: "Lead Developer",
      },
      {
        ref: "lucas-bodin",
        role: "Lead Designer",
      },
      {
        ref: "maeva-leclerc",
        role: "Lead Marketing",
      },
      {
        ref: "mareh-mannaa",
        role: "Marketing",
      },
      {
        ref: "alois-gradelet",
        role: "Community Manager",
      },
      {
        ref: "ines-munoz",
        role: "Community Manager",
      },
      {
        ref: "maceo-vaz-da-mota",
        role: "Designer",
      },
      {
        ref: "younes-bessa",
        role: "Developer",
      },
      {
        ref: "alexis-lecourt",
        role: "Developer",
      },
      {
        ref: "oumaima-haddar",
        role: "Developer",
      },
      {
        ref: "alexis-mouchon",
        role: "Developer",
      },
      {
        ref: "amel-tolba",
        role: "Developer",
      },
      {
        ref: "ines-ferreira",
        role: "Developer",
      },
    ],

    screenshots: [
      {
        url: "/static/images/projects/tonightpass/screenshots/home.jpg",
        caption: "Page d'accueil de l'application",
      },
      {
        url: "/static/images/projects/tonightpass/screenshots/booking.jpg",
        caption: "Processus de réservation",
      },
    ],

    challenges: [
      "Développement d'une expérience de billetterie fluide et intuitive",
      "Création d'un système de recommandation personnalisé",
      "Mise en place d'une infrastructure scalable",
      "Gestion des pics de trafic lors des mises en vente",
    ],
    
    learnings: [
      "Importance de la simplicité dans le parcours de réservation",
      "Nécessité d'une interface adaptée aux différents types d'événements",
      "Gestion efficace d'une base de données d'événements",
      "Équilibre entre rapidité et fiabilité du service",
    ],
    
    futurePlans: [
      "Déploiement de bornes dans les établissements",
      "Lancement d'une plateforme de recrutement événementiel",
      "Mise en place d'un service de location de salles",
      "Création d'un réseau de fournisseurs événementiels",
      "Développement d'outils avancés pour les organisateurs",
      "Perfectionnement du système de recommandations",
    ],
  },

  {
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
  },
  {
    id: "kartrak",
    name: "Kartrak",
    tags: [Tag.OPEN_SOURCE],
    shortDescription:
      "Le suivi d'activité tourné vers l'écologie. Surveillez votre empreinte en ligne de façon ludique.",
    description:
      "Une extension de navigateur qui vous aide à comprendre et réduire votre impact environnemental en ligne.",
    longDescription: `Kartrak est une extension de navigateur innovante qui sensibilise les utilisateurs à leur empreinte carbone numérique. En surveillant votre activité en ligne, Kartrak fournit des insights détaillés sur votre consommation internet et son impact environnemental.

L'extension utilise des algorithmes avancés basés sur l'Écoindex pour calculer l'empreinte carbone de votre navigation, tout en proposant des suggestions personnalisées pour réduire votre impact. L'Écoindex est une méthodologie reconnue qui évalue l'impact environnemental des sites web en analysant leur complexité technique, leur poids et leur efficacité énergétique.

Avec une approche ludique et éducative, Kartrak rend la conscience environnementale accessible et engageante.`,
    iconUrl: "/static/images/projects/kartrak/icon.svg",
    showcaseUrl: "/static/images/projects/kartrak/showcase.jpg",
    thumbnailUrl: "/static/images/projects/kartrak/thumbnail.jpg",
    website:
      "https://chromewebstore.google.com/detail/kartrak/bheoaeahkgfmogmgkfldoecmnlbhlibf",
    repository: "https://github.com/onruntime/kartrak",
    startDate: "2023-10",
    status: "active",

    features: [
      {
        title: "Suivi en temps réel",
        description:
          "Visualisez votre empreinte carbone numérique en temps réel",
        icon: Activity,
      },
      {
        title: "Suggestions personnalisées",
        description: "Recevez des conseils adaptés pour réduire votre impact",
        icon: Lightbulb,
      },
      {
        title: "Statistiques détaillées",
        description: "Analysez vos habitudes de navigation et leur impact",
        icon: BarChart,
      },
      {
        title: "Objectifs écologiques",
        description: "Fixez-vous des objectifs et suivez vos progrès",
        icon: Target,
      },
    ],

    technologies: [
      {
        name: "TypeScript",
        description: "Extension navigateur",
        icon: FileCode,
      },
      {
        name: "React",
        description: "Interface utilisateur",
        icon: Code,
      },
      {
        name: "Node.js",
        description: "Backend et API",
        icon: Server,
      },
      {
        name: "Chrome API",
        description: "Intégration avec le navigateur",
        icon: Chrome,
      },
    ],

    metrics: [
      {
        label: "Sites analysés",
        value: "∞",
        description: "Compatible avec tous les sites web",
      },
      {
        label: "Open Source",
        value: "100%",
        description: "Code source public",
      },
      {
        label: "Confidentiel",
        value: "100%",
        description: "Aucune donnée utilisateur collectée",
      },
    ],

    team: [
      {
        ref: "lucas-bodin",
        role: "Product Manager",
      },
      {
        ref: "antoine-kingue",
        role: "Lead Developer",
      },
      {
        ref: "jeremy-baudrin",
        role: "Developer",
      },
    ],

    screenshots: [
      {
        url: "/static/images/projects/kartrak/screenshots/dashboard.jpg",
        caption: "Dashboard principal",
      },
      {
        url: "/static/images/projects/kartrak/screenshots/stats.jpg",
        caption: "Statistiques détaillées",
      },
    ],

    challenges: [
      "Calcul précis de l'empreinte carbone",
      "Protection de la vie privée des utilisateurs",
      "Performance de l'extension en arrière-plan",
      "Précision des données environnementales",
    ],

    learnings: [
      "Complexité du calcul d'impact environnemental",
      "Importance de l'engagement utilisateur",
      "Équilibre entre précision et performance",
      "UX adaptée aux habitudes de navigation",
    ],

    futurePlans: [
      "Support de plus de navigateurs",
      "Intégration avec d'autres outils écologiques",
      "Fonctionnalités communautaires",
      "Rapports détaillés personnalisés",
      "Fermeture automatique des onglets inutilisés",
    ],
  },
];

export default Projects;
