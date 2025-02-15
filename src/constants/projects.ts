// src/constants/projects.ts
import { Project, Tag } from "@/types/project";

const Projects: Project[] = [
  {
    id: "tonightpass",
    name: "Tonight Pass",
    tags: [Tag.FEATURED],
    shortDescription: "Réserve ton pass de soirée VIP en avance et coupe les files d'attentes.",
    description: "Tonight Pass permet de réserver un pass de soirée VIP en avance et couper les files d'attentes des événements.",
    longDescription: `Tonight Pass révolutionne la façon dont les noctambules vivent leurs soirées. Notre plateforme offre une solution innovante pour réserver des accès VIP aux meilleurs événements nocturnes, permettant aux utilisateurs d'éviter les files d'attente et de profiter d'une expérience premium.

La plateforme met en relation les organisateurs d'événements avec les fêtards, offrant une solution tout-en-un pour la gestion des réservations, des accès VIP et des promotions spéciales. Chaque aspect de l'application a été pensé pour optimiser l'expérience utilisateur et simplifier la gestion des événements pour les organisateurs.`,
    iconUrl: "/static/images/projects/icons/tonightpass.svg",
    showcaseUrl: "/static/images/projects/showcases/tonightpass.jpg",
    website: "https://tonightpass.com",
    repository: undefined,
    startDate: "2022-03",
    status: "active",

    features: [
      {
        title: "Réservation instantanée",
        description: "Réservez votre place en quelques clics et recevez une confirmation immédiate",
        icon: "/static/images/projects/tonightpass/features/booking.svg"
      },
      {
        title: "Pass VIP digital",
        description: "Accédez directement aux établissements avec votre pass digital",
        icon: "/static/images/projects/tonightpass/features/vip.svg"
      },
      {
        title: "Découverte d'événements",
        description: "Explorez les meilleurs événements de votre ville avec des recommandations personnalisées",
        icon: "/static/images/projects/tonightpass/features/discovery.svg"
      }
    ],

    technologies: [
      {
        name: "React Native",
        description: "Application mobile cross-platform",
        icon: "/static/images/technologies/react.svg"
      },
      {
        name: "Node.js",
        description: "Backend API et services",
        icon: "/static/images/technologies/nodejs.svg"
      },
      {
        name: "PostgreSQL",
        description: "Base de données principale",
        icon: "/static/images/technologies/postgresql.svg"
      }
    ],

    metrics: [
      {
        label: "Utilisateurs actifs",
        value: "10k+",
        description: "Utilisateurs mensuels actifs"
      },
      {
        label: "Établissements partenaires",
        value: "50+",
        description: "Dans toute la France"
      },
      {
        label: "Réservations",
        value: "100k+",
        description: "Réservations effectuées"
      }
    ],

    team: [
      {
        name: "Jérémy Baudrin",
        role: "Lead Developer",
        avatar: "/static/images/team/jeremy.jpg",
        github: "https://github.com/jerembdn",
        linkedin: "https://linkedin.com/in/jerembdn"
      },
      // Ajoutez les autres membres de l'équipe
    ],

    screenshots: [
      {
        url: "/static/images/projects/tonightpass/screenshots/home.jpg",
        caption: "Page d'accueil de l'application"
      },
      {
        url: "/static/images/projects/tonightpass/screenshots/booking.jpg",
        caption: "Processus de réservation"
      }
    ],

    challenges: [
      "Gestion du temps réel pour les disponibilités",
      "Mise en place d'un système de paiement sécurisé",
      "Scalabilité pour gérer les pics d'affluence"
    ],

    learnings: [
      "Importance de l'UX dans le processus de réservation",
      "Gestion des données en temps réel avec WebSocket",
      "Optimisation des performances sur mobile"
    ],

    futurePlans: [
      "Expansion internationale",
      "Intégration de la réalité augmentée",
      "Programme de fidélité avancé"
    ]
  },
  
  {
    id: "kitchn",
    name: "Kitchn",
    tags: [Tag.OPEN_SOURCE],
    shortDescription: "Intégrez des interfaces React & React Native dans votre projet avec des composants optimisés et personnalisables.",
    description: "Une bibliothèque de composants React et React Native moderne, performante et hautement personnalisable.",
    longDescription: `Kitchn est une bibliothèque de composants UI complète conçue pour accélérer le développement d'applications web et mobiles modernes. Elle offre une collection de composants hautement optimisés et personnalisables, construits avec TypeScript et suivant les meilleures pratiques de développement.

Notre bibliothèque se distingue par son approche modulaire, sa performance optimisée et sa documentation exhaustive. Chaque composant est conçu pour être facilement intégrable et personnalisable, permettant aux développeurs de créer rapidement des interfaces utilisateur cohérentes et professionnelles.`,
    iconUrl: "/static/images/projects/icons/kitchn.svg",
    showcaseUrl: "/static/images/projects/showcases/kitchn.jpg",
    website: "https://kitchn.dev",
    repository: "https://github.com/onruntime/kitchn",
    startDate: "2023-01",
    status: "active",

    features: [
      {
        title: "Composants modulaires",
        description: "Des composants indépendants et réutilisables pour une flexibilité maximale",
        icon: "/static/images/projects/kitchn/features/modular.svg"
      },
      {
        title: "Thèmes personnalisables",
        description: "Système de thème puissant pour adapter les composants à votre marque",
        icon: "/static/images/projects/kitchn/features/themes.svg"
      },
      {
        title: "Performance optimisée",
        description: "Composants optimisés pour des performances maximales",
        icon: "/static/images/projects/kitchn/features/performance.svg"
      },
      {
        title: "Documentation interactive",
        description: "Documentation complète avec exemples et playground interactif",
        icon: "/static/images/projects/kitchn/features/docs.svg"
      }
    ],

    technologies: [
      {
        name: "React",
        description: "Bibliothèque UI web",
        icon: "/static/images/technologies/react.svg"
      },
      {
        name: "React Native",
        description: "Composants mobiles natifs",
        icon: "/static/images/technologies/react-native.svg"
      },
      {
        name: "TypeScript",
        description: "Type safety et auto-complétion",
        icon: "/static/images/technologies/typescript.svg"
      },
      {
        name: "Storybook",
        description: "Documentation interactive",
        icon: "/static/images/technologies/storybook.svg"
      }
    ],

    metrics: [
      {
        label: "Composants",
        value: "50+",
        description: "Composants UI réutilisables"
      },
      {
        label: "Téléchargements",
        value: "10k+",
        description: "Téléchargements mensuels"
      },
      {
        label: "Github Stars",
        value: "500+",
        description: "Stars sur GitHub"
      }
    ],

    team: [
      {
        name: "Antoine Kingue",
        role: "Lead Developer",
        avatar: "/static/images/team/antoine.jpg",
        github: "https://github.com/antoinekm",
        linkedin: "https://linkedin.com/in/antoinekm"
      }
    ],

    screenshots: [
      {
        url: "/static/images/projects/kitchn/screenshots/components.jpg",
        caption: "Galerie de composants"
      },
      {
        url: "/static/images/projects/kitchn/screenshots/documentation.jpg",
        caption: "Documentation interactive"
      },
      {
        url: "/static/images/projects/kitchn/screenshots/theming.jpg",
        caption: "Système de thèmes"
      }
    ],

    challenges: [
      "Maintenir la cohérence visuelle entre web et mobile",
      "Optimiser la taille du bundle pour la performance",
      "Assurer la compatibilité avec différentes versions de React",
      "Gérer les mises à jour sans breaking changes"
    ],

    learnings: [
      "Importance de la documentation détaillée",
      "Gestion des versions et de la rétrocompatibilité",
      "Tests automatisés pour la fiabilité",
      "Architecture modulaire pour la maintenabilité"
    ],

    futurePlans: [
      "Support de React Server Components",
      "Plus de composants avancés",
      "Amélioration des performances",
      "Intégration avec plus de frameworks"
    ]
  },
  {
    id: "kartrak",
    name: "Kartrak",
    tags: [Tag.OPEN_SOURCE],
    shortDescription: "Le suivi d'activité tourné vers l'écologie. Surveillez votre empreinte en ligne de façon ludique.",
    description: "Une extension de navigateur qui vous aide à comprendre et réduire votre impact environnemental en ligne.",
    longDescription: `Kartrak est une extension de navigateur innovante qui sensibilise les utilisateurs à leur empreinte carbone numérique. En surveillant votre activité en ligne, Kartrak fournit des insights détaillés sur votre consommation internet et son impact environnemental.

L'extension utilise des algorithmes avancés pour calculer l'empreinte carbone de votre navigation, tout en proposant des suggestions personnalisées pour réduire votre impact. Avec une approche ludique et éducative, Kartrak rend la conscience environnementale accessible et engageante.`,
    iconUrl: "/static/images/projects/icons/kartrak.svg",
    showcaseUrl: "/static/images/projects/showcases/kartrak.jpg",
    website: "https://kartrak.io",
    repository: "https://github.com/onruntime/kartrak",
    startDate: "2023-06",
    status: "active",

    features: [
      {
        title: "Suivi en temps réel",
        description: "Visualisez votre empreinte carbone numérique en temps réel",
        icon: "/static/images/projects/kartrak/features/realtime.svg"
      },
      {
        title: "Suggestions personnalisées",
        description: "Recevez des conseils adaptés pour réduire votre impact",
        icon: "/static/images/projects/kartrak/features/suggestions.svg"
      },
      {
        title: "Statistiques détaillées",
        description: "Analysez vos habitudes de navigation et leur impact",
        icon: "/static/images/projects/kartrak/features/stats.svg"
      },
      {
        title: "Objectifs écologiques",
        description: "Fixez-vous des objectifs et suivez vos progrès",
        icon: "/static/images/projects/kartrak/features/goals.svg"
      }
    ],

    technologies: [
      {
        name: "JavaScript",
        description: "Extension navigateur",
        icon: "/static/images/technologies/javascript.svg"
      },
      {
        name: "Vue.js",
        description: "Interface utilisateur",
        icon: "/static/images/technologies/vue.svg"
      },
      {
        name: "Node.js",
        description: "Backend et API",
        icon: "/static/images/technologies/nodejs.svg"
      },
      {
        name: "MongoDB",
        description: "Base de données",
        icon: "/static/images/technologies/mongodb.svg"
      }
    ],

    metrics: [
      {
        label: "Utilisateurs actifs",
        value: "5k+",
        description: "Utilisateurs mensuels"
      },
      {
        label: "CO₂ économisé",
        value: "1000kg+",
        description: "Impact positif total"
      },
      {
        label: "Sites analysés",
        value: "1M+",
        description: "Base de données d'empreintes"
      }
    ],

    team: [
      {
        name: "Lucas Bodin",
        role: "Product Manager",
        avatar: "/static/images/team/lucas.jpg",
        github: "https://github.com/lucasb",
        linkedin: "https://linkedin.com/in/lucasb"
      }
    ],

    screenshots: [
      {
        url: "/static/images/projects/kartrak/screenshots/dashboard.jpg",
        caption: "Dashboard principal"
      },
      {
        url: "/static/images/projects/kartrak/screenshots/stats.jpg",
        caption: "Statistiques détaillées"
      },
      {
        url: "/static/images/projects/kartrak/screenshots/suggestions.jpg",
        caption: "Suggestions personnalisées"
      }
    ],

    challenges: [
      "Calcul précis de l'empreinte carbone",
      "Protection de la vie privée des utilisateurs",
      "Performance de l'extension en arrière-plan",
      "Précision des données environnementales"
    ],

    learnings: [
      "Complexité du calcul d'impact environnemental",
      "Importance de l'engagement utilisateur",
      "Équilibre entre précision et performance",
      "UX adaptée aux habitudes de navigation"
    ],

    futurePlans: [
      "Support de plus de navigateurs",
      "Intégration avec d'autres outils écologiques",
      "Fonctionnalités communautaires",
      "Rapports détaillés personnalisés"
    ]
  }
];

export default Projects;