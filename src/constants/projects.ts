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
  Smartphone,
  Target,
  Ticket,
} from "lucide-react";

const Projects: Project[] = [
  {
    id: "tonightpass",
    name: "Tonight Pass",
    tags: [Tag.FEATURED],
    shortDescription:
      "Réserve ton pass de soirée VIP en avance et coupe les files d'attentes.",
    description:
      "Tonight Pass permet de réserver un pass de soirée VIP en avance et couper les files d'attentes des événements.",
    longDescription: `Tonight Pass révolutionne la façon dont les noctambules vivent leurs soirées. Notre plateforme offre une solution innovante pour réserver des accès VIP aux meilleurs événements nocturnes, permettant aux utilisateurs d'éviter les files d'attente et de profiter d'une expérience premium.

La plateforme met en relation les organisateurs d'événements avec les fêtards, offrant une solution tout-en-un pour la gestion des réservations, des accès VIP et des promotions spéciales. Chaque aspect de l'application a été pensé pour optimiser l'expérience utilisateur et simplifier la gestion des événements pour les organisateurs.`,
    iconUrl: "/static/images/projects/tonightpass/icon.svg",
    showcaseUrl: "/static/images/projects/showcases/tonightpass.jpg",
    website: "https://tonightpass.com",
    repository: undefined,
    startDate: "2021-04",
    status: "active",

    features: [
      {
        title: "Réservation instantanée",
        description: "Réservez votre place en quelques clics et recevez une confirmation immédiate",
        icon: Ticket
      },
      {
        title: "Pass VIP digital",
        description: "Accédez directement aux établissements avec votre pass digital",
        icon: Crown
      },
      {
        title: "Découverte d'événements",
        description: "Explorez les meilleurs événements de votre ville avec des recommandations personnalisées",
        icon: Compass
      }
    ],

    technologies: [
      {
        name: "React Native",
        description: "Application mobile cross-platform",
        icon: Code
      },
      {
        name: "Node.js",
        description: "Backend API et services",
        icon: Server
      },
      {
        name: "PostgreSQL",
        description: "Base de données principale",
        icon: Database
      }
    ],

    metrics: [
      {
        label: "Utilisateurs actifs",
        value: "10k+",
        description: "Utilisateurs mensuels actifs",
      },
      {
        label: "Établissements partenaires",
        value: "50+",
        description: "Dans toute la France",
      },
      {
        label: "Réservations",
        value: "100k+",
        description: "Réservations effectuées",
      },
    ],

    team: [
      {
        name: "Jérémy Baudrin",
        role: "Lead Developer",
        avatar: "/static/images/members/jeremy-baudrin.jpg",
        github: "https://github.com/jerembdn",
        linkedin: "https://linkedin.com/in/jeremybdn",
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
      "Gestion du temps réel pour les disponibilités",
      "Mise en place d'un système de paiement sécurisé",
      "Scalabilité pour gérer les pics d'affluence",
    ],

    learnings: [
      "Importance de l'UX dans le processus de réservation",
      "Gestion des données en temps réel avec WebSocket",
      "Optimisation des performances sur mobile",
    ],

    futurePlans: [
      "Expansion internationale",
      "Intégration de la réalité augmentée",
      "Programme de fidélité avancé",
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
        name: "Lucas Bodin",
        role: "Lead Designer",
        avatar: "/static/images/members/lucas-bodin.jpg",
        github: "https://github.com/lucasbodin",
        linkedin: "https://linkedin.com/in/lucasbodin",
      },
      {
        name: "Macéo Vaz Da Mota",
        role: "Designer",
        avatar: "/static/images/members/lucas-bodin.jpg",
        linkedin: "https://linkedin.com/in/macéo-vaz-da-mota-74b8b2258",
      },
      {
        name: "Antoine Kingue",
        role: "Lead Developer",
        avatar: "/static/images/members/antoine-kingue.jpg",
        github: "https://github.com/antoinekm",
        linkedin: "https://linkedin.com/in/antoinekm",
      },
      {
        name: "Jérémy Baudrin",
        role: "Developer",
        avatar: "/static/images/members/jeremy-baudrin.jpg",
        github: "https://github.com/jerembdn",
        linkedin: "https://linkedin.com/in/jeremybdn",
      },
      {
        name: "Younès Bessa",
        role: "Developer",
        avatar: "/static/images/members/younes-bessa.jpg",
        github: "https://github.com/younesbessa",
        linkedin: "https://linkedin.com/in/younesbessa",
      },
      {
        name: "Alexis Mouchon",
        role: "Developer",
        avatar: "/static/images/members/alexis-mouchon.jpg",
        github: "https://github.com/siralex214",
        linkedin: "https://linkedin.com/in/alexis-mouchon",
      },
      {
        name: "Alexis Lecourt",
        role: "Developer",
        github: "https://github.com/ibaky",
        linkedin: "https://linkedin.com/in/alexis-lecourt-b46a64329",
      },
      {
        name: "Inès Ferreira",
        role: "Developer",
        github: "https://github.com/tigersnowy",
        linkedin: "https://linkedin.com/in/ines-ferreira-ds",
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
        name: "Lucas Bodin",
        role: "Product Manager",
        avatar: "/static/images/members/lucas-bodin.jpg",
        github: "https://github.com/imazyx",
        linkedin: "https://www.linkedin.com/in/lucasbdn",
      },
      {
        name: "Antoine Kingue",
        role: "Lead Developer",
        avatar: "/static/images/members/antoine-kingue.jpg",
        github: "https://github.com/antoinekm",
        linkedin: "https://linkedin.com/in/antoinekm",
      },
      {
        name: "Jérémy Baudrin",
        role: "Developer",
        avatar: "/static/images/members/jeremy-baudrin.jpg",
        github: "https://github.com/jerembdn",
        linkedin: "https://linkedin.com/in/jeremybdn",
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
