import { 
  Code, 
  Rocket, 
  GitBranch, 
  Shield,
  Layout,
  Zap,
  Smartphone,
  Monitor,
  Laptop,
  Globe,
  Database,
  Cpu,
  Upload,
  Download,
  AppWindow,
  Gauge,
  LineChart,
  Cloud,
  Store,
  Share2,
  MessageSquare,
  Tablet,
  PenTool,
  ArrowDownToLine,
  Wifi,
  Bell
} from "lucide-react";
import { ServiceBenefit, ServiceCategoryData, ServiceCategory, ServiceProcessStep } from "@/types/service";
import Routes from "@/constants/routes";

// Bénéfices pour la page de catégorie
const frontendBenefits: ServiceBenefit[] = [
  {
    title: "Architecture évolutive",
    description: "Applications construites sur des architectures modernes et scalables, prêtes pour l'évolution de votre projet.",
    icon: Code
  },
  {
    title: "Performance optimale",
    description: "Focus sur les performances avec des techniques avancées d'optimisation et de mise en cache.",
    icon: Gauge
  },
  {
    title: "Code maintenable",
    description: "Architecture propre et modulaire permettant une maintenance facile et des évolutions rapides.",
    icon: GitBranch
  },
  {
    title: "Sécurité renforcée",
    description: "Implémentation des meilleures pratiques de sécurité frontend pour protéger vos utilisateurs.",
    icon: Shield
  }
];

// Processus pour la page de catégorie
const frontendProcessList: ServiceProcessStep[] = [
  {
    title: "Architecture technique",
    description: "Définition de l'architecture frontend, choix des technologies et mise en place de l'environnement de développement.",
    services: ["Architecture", "Conseil technique"]
  },
  {
    title: "Mise en place du projet",
    description: "Configuration du projet avec les bonnes pratiques de développement, tests et déploiement continu.",
    services: ["Setup technique", "CI/CD"]
  },
  {
    title: "Développement des features",
    description: "Implémentation des fonctionnalités avec un focus sur la qualité du code et les performances.",
    services: ["Développement Frontend", "React", "Next.js"]
  },
  {
    title: "Gestion de l'état",
    description: "Mise en place d'une gestion d'état robuste et performante pour les données de l'application.",
    services: ["State Management", "API Integration"]
  },
  {
    title: "Tests et qualité",
    description: "Mise en place des tests automatisés et des processus d'assurance qualité.",
    services: ["Tests unitaires", "Tests E2E"]
  },
  {
    title: "Optimisation et monitoring",
    description: "Optimisation des performances et mise en place d'outils de monitoring.",
    services: ["Performance", "Analytics"]
  }
];

const frontendCategory: ServiceCategoryData = {
  id: ServiceCategory.FRONTEND,
  name: "Développement Front-end",
  description: "Création d'applications web et mobiles performantes",
  icon: Code,
  benefits: frontendBenefits,
  processList: frontendProcessList,
  subServices: [
    {
      id: "web",
      name: "Applications Web",
      description: "Développement d'applications web modernes avec React et Next.js",
      route: Routes.service.frontend.web,
      icon: Globe,
      heroTitle: "Développement Web Frontend",
      heroDescription: "Créez des applications web modernes, réactives et performantes avec les dernières technologies frontend. Notre expertise vous garantit une expérience utilisateur exceptionnelle.",
      features: [
        {
          title: "React & Next.js",
          description: "Développement avec les frameworks modernes pour des applications performantes et évolutives.",
          icon: Code
        },
        {
          title: "Design Responsive",
          description: "Interfaces adaptatives pour une expérience optimale sur tous les appareils.",
          icon: Layout
        },
        {
          title: "Performance Web",
          description: "Optimisation poussée pour des temps de chargement rapides et une expérience fluide.",
          icon: Rocket
        },
        {
          title: "UI/UX Moderne",
          description: "Interfaces utilisateur élégantes et intuitives suivant les dernières tendances.",
          icon: PenTool
        }
      ],
      benefits: [
        {
          title: "Applications réactives",
          description: "Interfaces dynamiques et réactives pour une expérience utilisateur fluide.",
          icon: Monitor
        },
        {
          title: "Mobile First",
          description: "Conception pensée d'abord pour mobile puis adaptée aux grands écrans.",
          icon: Smartphone
        },
        {
          title: "Performance optimale",
          description: "Optimisation avancée pour des temps de chargement minimaux.",
          icon: Zap
        },
        {
          title: "SEO optimisé",
          description: "Structure optimisée pour un excellent référencement naturel.",
          icon: Globe
        }
      ],
      faqItems: [
        {
          question: "Quelles technologies utilisez-vous pour le développement frontend ?",
          answer: "Nous utilisons principalement React avec Next.js, ainsi que TypeScript pour un code plus robuste. Nous intégrons également des outils modernes comme Tailwind CSS pour le styling, et diverses bibliothèques pour les animations et les interactions."
        },
        {
          question: "Comment gérez-vous la performance des applications web ?",
          answer: "Nous appliquons les meilleures pratiques d'optimisation : code splitting, lazy loading, optimisation des images, mise en cache intelligente, et nous utilisons des outils de mesure de performance pour garantir des temps de chargement optimaux."
        },
        {
          question: "Proposez-vous des solutions pour le SEO ?",
          answer: "Oui, nous développons des applications avec le SEO en tête : rendu côté serveur (SSR), génération de pages statiques, meta-données dynamiques, structure sémantique et optimisation pour les moteurs de recherche."
        },
        {
          question: "Comment assurez-vous la compatibilité avec différents navigateurs ?",
          answer: "Nous testons sur les principaux navigateurs et versions, utilisons des outils de transpilation modernes, et mettons en place des fallbacks appropriés pour garantir une expérience cohérente."
        },
        {
          question: "Proposez-vous la maintenance des applications développées ?",
          answer: "Oui, nous proposons différentes formules de maintenance incluant les mises à jour de sécurité, l'optimisation continue des performances, et l'évolution des fonctionnalités."
        }
      ],
      testimonials: [
        {
          content: "L'équipe d'onRuntime a développé une interface moderne et performante qui a transformé l'expérience de nos utilisateurs.",
          author: {
            name: "Marion Dubois",
            role: "Product Owner",
            company: "Tech Solutions",
            image: "/static/images/testimonials/marion-dubois.jpg"
          }
        },
        {
          content: "La refonte de notre application web a considérablement amélioré nos conversions et la satisfaction client.",
          author: {
            name: "Lucas Martin",
            role: "Directeur Marketing",
            company: "E-Commerce Plus",
            image: "/static/images/testimonials/lucas-martin.jpg"
          }
        },
        {
          content: "Un développement frontend de qualité qui allie performance et esthétique.",
          author: {
            name: "Julie Lambert",
            role: "CEO",
            company: "Digital Agency",
            image: "/static/images/testimonials/julie-lambert.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Design UI/UX",
          description: "Conception d'interfaces utilisateur modernes et ergonomiques.",
          icon: PenTool
        },
        {
          title: "Intégration API",
          description: "Connection avec vos systèmes et services backend existants.",
          icon: Share2
        },
        {
          title: "Internationalisation",
          description: "Adaptation de votre application pour un public international.",
          icon: Globe
        }
      ]
    },
    {
      id: "mobile",
      name: "Applications Mobiles",
      description: "Création d'applications mobiles natives avec React Native",
      route: Routes.service.frontend.mobile,
      icon: Smartphone,
      heroTitle: "Développement Mobile React Native",
      heroDescription: "Créez des applications mobiles natives performantes pour iOS et Android avec React Native. Notre expertise vous garantit des applications robustes et une expérience utilisateur exceptionnelle.",
      features: [
        {
          title: "React Native & Expo",
          description: "Développement cross-platform efficace pour iOS et Android avec une base de code unique.",
          icon: Code
        },
        {
          title: "Design Natif",
          description: "Interfaces respectant les guidelines de design iOS et Android pour une expérience familière.",
          icon: Layout
        },
        {
          title: "Performance Native",
          description: "Optimisation poussée pour des performances proches du natif sur chaque plateforme.",
          icon: Rocket
        },
        {
          title: "UI/UX Mobile",
          description: "Interfaces mobiles intuitives suivant les meilleures pratiques de chaque plateforme.",
          icon: PenTool
        }
      ],
      benefits: [
        {
          title: "Multi-plateformes",
          description: "Applications fonctionnant sur iOS et Android à partir d'une base de code unique.",
          icon: Smartphone
        },
        {
          title: "Support tablettes",
          description: "Interfaces adaptées aux différentes tailles d'écrans et orientations.",
          icon: Tablet
        },
        {
          title: "Performance optimale",
          description: "Optimisation native pour des performances et une fluidité maximales.",
          icon: Gauge
        },
        {
          title: "Expérience native",
          description: "Utilisation des fonctionnalités natives des appareils (caméra, GPS, notifications...).",
          icon: AppWindow
        }
      ],
      faqItems: [
        {
          question: "Pourquoi choisir React Native pour le développement mobile ?",
          answer: "React Native permet de développer des applications performantes pour iOS et Android à partir d'une base de code unique, réduisant les coûts et le temps de développement tout en maintenant une qualité native. Il bénéficie également d'un large écosystème et du support de Meta (Facebook)."
        },
        {
          question: "Comment assurez-vous la performance des applications ?",
          answer: "Nous optimisons chaque aspect de l'application : temps de démarrage, consommation mémoire, animations fluides, chargement des données... Nous utilisons également des outils de profilage pour identifier et résoudre les problèmes de performance."
        },
        {
          question: "Gérez-vous la publication sur les stores ?",
          answer: "Oui, nous prenons en charge tout le processus de publication : préparation des assets, configuration des comptes développeur, soumission aux stores (App Store et Play Store) et suivi des mises à jour."
        },
        {
          question: "Comment gérez-vous les mises à jour des applications ?",
          answer: "Nous mettons en place des systèmes de mise à jour OTA (Over The Air) quand c'est possible, et nous gérons les mises à jour via les stores avec un processus optimisé pour minimiser les temps de validation."
        },
        {
          question: "Proposez-vous un support après le lancement ?",
          answer: "Oui, nous proposons différentes formules de maintenance incluant : monitoring des performances, corrections de bugs, mises à jour de sécurité et évolutions fonctionnelles."
        }
      ],
      testimonials: [
        {
          content: "Notre application React Native offre une expérience utilisateur exceptionnelle sur iOS et Android.",
          author: {
            name: "Thomas Leroux",
            role: "CPO",
            company: "MobileFirst",
            image: "/static/images/testimonials/thomas-leroux.jpg"
          }
        },
        {
          content: "La qualité du développement nous a permis d'obtenir d'excellentes notes sur les stores.",
          author: {
            name: "Emma Martin",
            role: "Directrice Produit",
            company: "AppInnovation",
            image: "/static/images/testimonials/emma-martin.jpg"
          }
        },
        {
          content: "Une seule équipe pour iOS et Android, avec des performances natives impressionnantes.",
          author: {
            name: "Nicolas Durand",
            role: "CTO",
            company: "TechMobile",
            image: "/static/images/testimonials/nicolas-durand.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Publication Store",
          description: "Gestion complète de la publication sur l'App Store et le Play Store.",
          icon: Store
        },
        {
          title: "Intégration Backend",
          description: "Connection avec vos systèmes et APIs existants.",
          icon: Share2
        },
        {
          title: "Formation React Native",
          description: "Formation de vos équipes au développement React Native.",
          icon: MessageSquare
        }
      ]
    },
    {
      id: "desktop",
      name: "Logiciels de Bureau",
      description: "Développement d'applications desktop multiplateforme",
      route: Routes.service.frontend.desktop,
      icon: Laptop,
      heroTitle: "Applications Desktop Multiplateformes",
      heroDescription: "Développez des applications de bureau modernes et performantes pour Windows, macOS et Linux. Notre expertise vous garantit des applications professionnelles qui tirent parti de toute la puissance du desktop.",
      features: [
        {
          title: "Electron & React",
          description: "Technologies modernes pour des applications desktop performantes et évolutives.",
          icon: Code
        },
        {
          title: "Multiplateforme",
          description: "Applications compatibles Windows, macOS et Linux à partir d'une base de code unique.",
          icon: Monitor
        },
        {
          title: "Performance native",
          description: "Optimisation pour tirer parti des ressources système de manière efficace.",
          icon: Rocket
        },
        {
          title: "Intégration système",
          description: "Accès aux fonctionnalités natives du système d'exploitation.",
          icon: Cpu
        }
      ],
      benefits: [
        {
          title: "Windows & macOS",
          description: "Support natif des principales plateformes desktop.",
          icon: Laptop
        },
        {
          title: "Accès système",
          description: "Interaction directe avec le système d'exploitation.",
          icon: Cpu
        },
        {
          title: "Mode hors ligne",
          description: "Fonctionnement autonome sans connexion internet requise.",
          icon: Download
        },
        {
          title: "Données locales",
          description: "Stockage et traitement des données en local pour plus de sécurité.",
          icon: Database
        }
      ],
      faqItems: [
        {
          question: "Pourquoi choisir Electron pour le développement desktop ?",
          answer: "Electron permet de créer des applications desktop multiplateformes avec des technologies web modernes (React, TypeScript). Cela offre un développement rapide, une maintenance simplifiée et une excellente expérience utilisateur, tout en garantissant la compatibilité avec Windows, macOS et Linux."
        },
        {
          question: "Comment gérez-vous la sécurité des applications desktop ?",
          answer: "Nous implémentons plusieurs niveaux de sécurité : chiffrement des données sensibles, protection contre les injections de code, mises à jour de sécurité automatiques, et bonnes pratiques de développement sécurisé. Nous suivons également les recommandations de sécurité spécifiques à chaque système d'exploitation."
        },
        {
          question: "Proposez-vous un système de mise à jour automatique ?",
          answer: "Oui, nous intégrons un système de mise à jour automatique qui permet de déployer facilement les nouvelles versions de l'application. Les utilisateurs sont notifiés des mises à jour disponibles et peuvent les installer en un clic."
        },
        {
          question: "Comment gérez-vous la distribution des applications ?",
          answer: "Nous gérons tout le processus de distribution : création des installateurs pour chaque plateforme, signature des applications, publication sur les stores si nécessaire (Microsoft Store, Mac App Store), et mise en place d'un système de mise à jour automatique."
        },
        {
          question: "Proposez-vous un support après le lancement ?",
          answer: "Oui, nous proposons plusieurs formules de maintenance incluant : support technique, correction de bugs, mises à jour de sécurité, optimisations de performance et évolutions fonctionnelles."
        }
      ],
      testimonials: [
        {
          content: "Notre application desktop nous permet d'offrir une expérience professionnelle à nos utilisateurs sur tous les systèmes.",
          author: {
            name: "Laurent Dupont",
            role: "Directeur Technique",
            company: "DesktopPro",
            image: "/static/images/testimonials/laurent-dupont.jpg"
          }
        },
        {
          content: "La performance et la fiabilité de notre application ont dépassé nos attentes.",
          author: {
            name: "Caroline Martin",
            role: "Product Owner",
            company: "SoftSolutions",
            image: "/static/images/testimonials/caroline-martin.jpg"
          }
        },
        {
          content: "Une solution desktop moderne qui combine puissance et facilité d'utilisation.",
          author: {
            name: "Michel Bernard",
            role: "CEO",
            company: "AppStudio",
            image: "/static/images/testimonials/michel-bernard.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Télémétrie",
          description: "Suivi des performances et du comportement utilisateur.",
          icon: LineChart
        },
        {
          title: "Distribution",
          description: "Publication sur les stores et gestion des mises à jour.",
          icon: Upload
        },
        {
          title: "Cloud Sync",
          description: "Synchronisation des données avec le cloud.",
          icon: Cloud
        }
      ]
    },
    {
      id: "pwa",
      name: "Progressive Web Apps",
      description: "Création d'applications web progressives performantes",
      route: Routes.service.frontend.pwa,
      icon: Globe,
      heroTitle: "Progressive Web Apps (PWA)",
      heroDescription: "Transformez votre site web en véritable application installable avec les Progressive Web Apps. Offrez une expérience utilisateur exceptionnelle, en ligne comme hors ligne.",
      features: [
        {
          title: "Installation native",
          description: "Applications installables directement depuis le navigateur, sans passer par les stores.",
          icon: ArrowDownToLine
        },
        {
          title: "Mode hors ligne",
          description: "Fonctionnement même sans connexion internet grâce au cache intelligent.",
          icon: Wifi
        },
        {
          title: "Performance optimale",
          description: "Chargement rapide et expérience fluide sur tous les appareils.",
          icon: Rocket
        },
        {
          title: "Notifications Push",
          description: "Engagement utilisateur amélioré grâce aux notifications push.",
          icon: Bell
        }
      ],
      benefits: [
        {
          title: "Multi-plateformes",
          description: "Une seule application pour tous les appareils et systèmes d'exploitation.",
          icon: Smartphone
        },
        {
          title: "Toujours à jour",
          description: "Mises à jour automatiques sans action utilisateur nécessaire.",
          icon: ArrowDownToLine
        },
        {
          title: "Légèreté",
          description: "Pas d'installation lourde, accessible instantanément.",
          icon: Cloud
        },
        {
          title: "Performances natives",
          description: "Expérience utilisateur proche des applications natives.",
          icon: Zap
        }
      ],
      faqItems: [
        {
          question: "Qu'est-ce qu'une Progressive Web App ?",
          answer: "Une PWA est une application web qui offre une expérience similaire à une application native : elle est installable, fonctionne hors ligne, et peut envoyer des notifications push. Elle combine les avantages du web (accessibilité, mise à jour automatique) et du natif (performance, fonctionnalités avancées)."
        },
        {
          question: "Quels sont les avantages par rapport à une application native ?",
          answer: "Les PWA offrent plusieurs avantages : pas besoin de passer par les stores, mise à jour automatique, développement plus rapide et moins coûteux, meilleur référencement, et une base de code unique pour toutes les plateformes."
        },
        {
          question: "Comment fonctionne le mode hors ligne ?",
          answer: "Nous utilisons des Service Workers pour mettre en cache les ressources essentielles et les données. L'application peut ainsi fonctionner même sans connexion internet, avec une synchronisation automatique une fois la connexion rétablie."
        },
        {
          question: "Les PWA sont-elles compatibles avec tous les navigateurs ?",
          answer: "Les PWA fonctionnent sur la majorité des navigateurs modernes. Pour les navigateurs plus anciens, nous mettons en place des solutions de fallback pour garantir une expérience utilisateur optimale."
        },
        {
          question: "Proposez-vous un support après le lancement ?",
          answer: "Oui, nous proposons plusieurs formules de maintenance incluant : mises à jour de sécurité, optimisations de performance, ajout de fonctionnalités et support technique."
        }
      ],
      testimonials: [
        {
          content: "Notre PWA nous a permis d'augmenter significativement l'engagement de nos utilisateurs mobiles.",
          author: {
            name: "Sophie Martinez",
            role: "Directrice Digital",
            company: "WebInnovation",
            image: "/static/images/testimonials/sophie-martinez.jpg"
          }
        },
        {
          content: "Une solution idéale qui combine les avantages du web et du mobile natif.",
          author: {
            name: "Pierre Dubois",
            role: "CTO",
            company: "AppFuture",
            image: "/static/images/testimonials/pierre-dubois.jpg"
          }
        },
        {
          content: "Le mode hors ligne a transformé l'expérience de nos utilisateurs en déplacement.",
          author: {
            name: "Marie Leroy",
            role: "Product Manager",
            company: "MobileFirst",
            image: "/static/images/testimonials/marie-leroy.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Analytics avancés",
          description: "Suivi détaillé du comportement utilisateur et des performances.",
          icon: LineChart
        },
        {
          title: "SEO optimisé",
          description: "Optimisation pour les moteurs de recherche et partage social.",
          icon: Globe
        },
        {
          title: "Sécurité renforcée",
          description: "Protection des données et communications sécurisées.",
          icon: Shield
        }
      ]
    }
  ]
};

export default frontendCategory;