import { 
  Layers, 
  ShoppingBag, 
  Globe, 
  Box, 
  Rocket, 
  Palette, 
  Settings, 
  Shield,
  Code,
  Share2,
  MessageSquare,
  Zap,
  CreditCard,
  BarChart,
  Truck,
  Search,
  LayoutDashboard,
  Image as ImageIcon,
  Shapes,
  MousePointer,
  Users
} from "lucide-react";
import { ServiceBenefit, ServiceCategoryData, ServiceCategory, ServiceProcessStep } from "@/types/service";
import Routes from "@/constants/routes";

const integrationBenefits: ServiceBenefit[] = [
  {
    title: "Code propre et maintenable",
    description: "Intégration avec des standards de code élevés et une architecture pensée pour la maintenabilité à long terme.",
    icon: Code
  },
  {
    title: "Performance optimisée",
    description: "Sites web rapides et fluides grâce à des techniques d'optimisation avancées et au respect des bonnes pratiques.",
    icon: Zap
  },
  {
    title: "Responsive design",
    description: "Adaptation parfaite à tous les écrans et appareils pour une expérience utilisateur cohérente.",
    icon: Layers
  },
  {
    title: "Animations fluides",
    description: "Intégration d'animations soignées pour enrichir l'expérience utilisateur tout en maintenant les performances.",
    icon: Rocket
  }
];

const integrationProcessList: ServiceProcessStep[] = [
  {
    title: "Analyse des maquettes",
    description: "Étude approfondie des maquettes pour identifier les composants, les interactions et les points d'attention techniques.",
    services: ["Analyse technique", "Architecture"]
  },
  {
    title: "Architecture technique",
    description: "Définition de l'architecture frontend et choix des technologies adaptées au projet.",
    services: ["Architecture", "Conseil technique"]
  },
  {
    title: "Développement des composants",
    description: "Création des composants réutilisables en suivant les principes du design system.",
    services: ["Développement Frontend", "Intégration"]
  },
  {
    title: "Intégration responsive",
    description: "Adaptation du design pour tous les formats d'écran avec une attention particulière à l'expérience mobile.",
    services: ["Intégration", "Responsive Design"]
  },
  {
    title: "Optimisation",
    description: "Optimisation des performances, de l'accessibilité et du référencement technique.",
    services: ["Performance", "SEO technique"]
  },
  {
    title: "Tests et validation",
    description: "Tests approfondis sur différents navigateurs et appareils pour garantir une expérience utilisateur optimale.",
    services: ["Tests", "Quality Assurance"]
  }
];

const integrationCategory: ServiceCategoryData = {
  id: ServiceCategory.INTEGRATION,
  name: "Intégration",
  description: "Intégration sur les principales plateformes e-commerce et CMS",
  icon: Layers,
  benefits: integrationBenefits,
  processList: integrationProcessList,
  subServices: [
    {
      id: "shopify",
      name: "Shopify",
      description: "Création et personnalisation de boutiques en ligne Shopify",
      route: Routes.service.integration.shopify,
      icon: ShoppingBag,
      heroTitle: "Créez votre boutique en ligne avec Shopify",
      heroDescription: "Transformez votre vision e-commerce en réalité avec notre expertise Shopify. Nous créons des boutiques en ligne performantes, esthétiques et optimisées pour la conversion.",
      features: [
        {
          title: "Design personnalisé",
          description: "Création d'un thème unique qui reflète votre marque et optimise l'expérience utilisateur.",
          icon: Palette
        },
        {
          title: "Optimisation des conversions",
          description: "Mise en place des meilleures pratiques pour maximiser vos ventes et fidéliser vos clients.",
          icon: Rocket
        },
        {
          title: "Sécurité renforcée",
          description: "Protection de vos données et de celles de vos clients avec les dernières normes de sécurité.",
          icon: Shield
        },
        {
          title: "Intégrations avancées",
          description: "Connection avec vos outils préférés pour la gestion des stocks, la comptabilité et le marketing.",
          icon: Settings
        }
      ],
      benefits: [
        {
          title: "Paiements sécurisés",
          description: "Intégration des principaux moyens de paiement et gestion sécurisée des transactions.",
          icon: CreditCard
        },
        {
          title: "International par défaut",
          description: "Vente dans le monde entier avec gestion multi-devises et traductions automatiques.",
          icon: Globe
        },
        {
          title: "Analytics puissant",
          description: "Suivi détaillé de vos performances et insights pour optimiser vos ventes.",
          icon: BarChart
        },
        {
          title: "Logistique simplifiée",
          description: "Gestion efficace des commandes et intégration avec les principaux transporteurs.",
          icon: Truck
        }
      ],
      faqItems: [
        {
          question: "Combien de temps faut-il pour créer une boutique Shopify ?",
          answer: "Le délai moyen pour créer une boutique Shopify varie de 4 à 8 semaines, selon la complexité du projet. Ce délai comprend la phase de design, le développement, l'intégration des produits et les tests."
        },
        {
          question: "Pouvez-vous migrer ma boutique existante vers Shopify ?",
          answer: "Oui, nous proposons un service complet de migration de votre boutique existante vers Shopify, incluant le transfert des produits, des clients et des commandes, tout en assurant une transition en douceur."
        },
        {
          question: "Quels types de personnalisation proposez-vous ?",
          answer: "Nous offrons une personnalisation complète de votre boutique Shopify : design sur mesure, fonctionnalités personnalisées, intégrations spécifiques, et optimisation pour mobile."
        },
        {
          question: "Proposez-vous un support après le lancement ?",
          answer: "Oui, nous proposons plusieurs formules de support et maintenance pour assurer le bon fonctionnement de votre boutique après son lancement, incluant les mises à jour, les optimisations et le support technique."
        },
        {
          question: "Comment assurez-vous la sécurité de ma boutique ?",
          answer: "Nous mettons en place les meilleures pratiques de sécurité : SSL, conformité PCI DSS, sauvegardes régulières, et protection contre les fraudes. Shopify assure également une sécurité de niveau bancaire pour toutes les transactions."
        }
      ],
      testimonials: [],
      complementaryServices: [
        {
          title: "Référencement SEO",
          description: "Optimisation pour les moteurs de recherche pour augmenter votre visibilité.",
          icon: Search
        },
        {
          title: "Marketing digital",
          description: "Stratégies marketing adaptées pour attirer et convertir plus de clients.",
          icon: Share2
        },
        {
          title: "Formation",
          description: "Formation complète pour gérer votre boutique en toute autonomie.",
          icon: MessageSquare
        }
      ]
    },
    {
      id: "wordpress",
      name: "WordPress",
      description: "Développement de sites WordPress sur mesure",
      route: Routes.service.integration.wordpress,
      icon: Globe,
      heroTitle: "Développement WordPress sur mesure",
      heroDescription: "Créez un site web professionnel qui vous ressemble avec WordPress. Notre expertise vous garantit un site performant, sécurisé et parfaitement adapté à vos besoins.",
      features: [
        {
          title: "Thèmes sur mesure",
          description: "Création de thèmes personnalisés qui reflètent votre identité et répondent précisément à vos besoins.",
          icon: Palette
        },
        {
          title: "Performance optimisée",
          description: "Optimisation poussée pour garantir des temps de chargement rapides et une expérience utilisateur fluide.",
          icon: Rocket
        },
        {
          title: "Sécurité renforcée",
          description: "Mise en place des meilleures pratiques de sécurité pour protéger votre site et vos données.",
          icon: Shield
        },
        {
          title: "Administration simplifiée",
          description: "Interface d'administration personnalisée et intuitive pour une gestion facile de votre contenu.",
          icon: Settings
        }
      ],
      benefits: [
        {
          title: "Administration intuitive",
          description: "Interface de gestion simple et intuitive pour gérer votre contenu en toute autonomie.",
          icon: LayoutDashboard
        },
        {
          title: "SEO optimisé",
          description: "Structure optimisée pour le référencement naturel et outils SEO intégrés.",
          icon: Search
        },
        {
          title: "Extensions puissantes",
          description: "Accès à des milliers de plugins pour étendre les fonctionnalités de votre site.",
          icon: Box
        },
        {
          title: "Performance maximale",
          description: "Optimisation avancée des performances pour une expérience utilisateur optimale.",
          icon: Zap
        }
      ],
      faqItems: [
        {
          question: "Combien de temps faut-il pour créer un site WordPress ?",
          answer: "Le délai moyen pour créer un site WordPress varie de 4 à 12 semaines, selon la complexité du projet. Ce délai comprend la phase de design, le développement du thème sur mesure, l'intégration du contenu et les tests."
        },
        {
          question: "Pouvez-vous migrer mon site existant vers WordPress ?",
          answer: "Oui, nous proposons un service complet de migration vers WordPress, incluant le transfert du contenu, des images et des fonctionnalités, tout en préservant votre référencement."
        },
        {
          question: "Comment gérez-vous la maintenance et les mises à jour ?",
          answer: "Nous proposons différentes formules de maintenance incluant les mises à jour de sécurité, les sauvegardes régulières, les mises à jour de WordPress et des plugins, ainsi que le monitoring des performances."
        },
        {
          question: "Mon site sera-t-il optimisé pour les mobiles ?",
          answer: "Absolument. Tous nos développements WordPress sont responsive par défaut, garantissant une expérience optimale sur tous les appareils : ordinateurs, tablettes et smartphones."
        },
        {
          question: "Quelle est votre approche en matière de sécurité ?",
          answer: "Nous mettons en place une stratégie de sécurité complète : authentification forte, pare-feu applicatif, monitoring des tentatives d'intrusion, sauvegardes automatisées et mises à jour de sécurité régulières."
        }
      ],
      testimonials: [],
      complementaryServices: [
        {
          title: "Développement sur mesure",
          description: "Création de fonctionnalités spécifiques pour répondre à vos besoins particuliers.",
          icon: Code
        },
        {
          title: "Marketing digital",
          description: "Stratégies marketing adaptées pour augmenter votre visibilité en ligne.",
          icon: Share2
        },
        {
          title: "Formation WordPress",
          description: "Formation personnalisée pour maîtriser la gestion de votre site.",
          icon: MessageSquare
        }
      ]
    },
    {
      id: "webflow",
      name: "Webflow",
      description: "Création de sites web modernes avec Webflow",
      route: Routes.service.integration.webflow,
      icon: Box,
      heroTitle: "Développement Webflow professionnel",
      heroDescription: "Donnez vie à votre vision avec Webflow. Notre expertise vous garantit un site web moderne, interactif et parfaitement adapté à vos besoins, sans compromis sur la qualité.",
      features: [
        {
          title: "Design visuel avancé",
          description: "Création d'interfaces uniques et animations sophistiquées sans les limitations du codage traditionnel.",
          icon: Palette
        },
        {
          title: "Performance optimale",
          description: "Sites rapides et réactifs optimisés pour tous les appareils et navigateurs.",
          icon: Rocket
        },
        {
          title: "Interactions riches",
          description: "Animations et interactions utilisateur fluides pour une expérience web moderne et engageante.",
          icon: MousePointer
        },
        {
          title: "CMS intégré",
          description: "Système de gestion de contenu puissant et flexible pour une mise à jour facile.",
          icon: Settings
        }
      ],
      benefits: [
        {
          title: "Développement visuel",
          description: "Création de sites complexes sans écrire de code, tout en gardant un contrôle total sur le design.",
          icon: LayoutDashboard
        },
        {
          title: "SEO natif",
          description: "Outils de référencement intégrés et structure optimisée pour les moteurs de recherche.",
          icon: Search
        },
        {
          title: "Responsive par défaut",
          description: "Design parfaitement adapté à tous les écrans, des mobiles aux grands écrans.",
          icon: Layers
        },
        {
          title: "Hébergement optimisé",
          description: "Infrastructure cloud robuste avec CDN global pour des performances optimales.",
          icon: Zap
        }
      ],
      faqItems: [
        {
          question: "Combien de temps faut-il pour créer un site Webflow ?",
          answer: "Le délai moyen pour créer un site Webflow varie de 3 à 8 semaines, selon la complexité du projet. Ce délai comprend la conception, le développement des interactions, l'intégration du contenu et les tests."
        },
        {
          question: "Puis-je facilement mettre à jour mon site moi-même ?",
          answer: "Absolument ! Webflow dispose d'un CMS intuitif que nous personnalisons selon vos besoins. Nous vous formons à son utilisation pour que vous puissiez gérer votre contenu en toute autonomie."
        },
        {
          question: "Webflow est-il adapté aux sites e-commerce ?",
          answer: "Oui, Webflow propose une solution e-commerce robuste que nous pouvons personnaliser pour créer votre boutique en ligne avec des fonctionnalités avancées et un design sur mesure."
        },
        {
          question: "Comment gérez-vous les animations et interactions ?",
          answer: "Webflow permet de créer des animations et interactions sophistiquées sans code. Nous concevons des expériences interactives fluides et professionnelles tout en maintenant des performances optimales."
        },
        {
          question: "Quelle est la qualité du référencement avec Webflow ?",
          answer: "Webflow génère un code propre et optimisé pour le SEO. Nous mettons en place les meilleures pratiques de référencement pour maximiser votre visibilité sur les moteurs de recherche."
        }
      ],
      testimonials: [],
      complementaryServices: [
        {
          title: "Intégrations personnalisées",
          description: "Connection avec vos outils et services tiers préférés.",
          icon: Code
        },
        {
          title: "Stratégie digitale",
          description: "Accompagnement dans votre stratégie de présence en ligne.",
          icon: Share2
        },
        {
          title: "Formation Webflow",
          description: "Formation sur mesure pour maîtriser la gestion de votre site.",
          icon: MessageSquare
        }
      ]
    },
    {
      id: "squarespace",
      name: "SquareSpace",
      description: "Intégration et personnalisation sur SquareSpace",
      route: Routes.service.integration.squarespace,
      icon: Layers,
      heroTitle: "Sites web élégants avec Squarespace",
      heroDescription: "Créez une présence en ligne raffinée avec Squarespace. Notre expertise vous garantit un site web esthétique, fonctionnel et parfaitement adapté à votre image de marque.",
      features: [
        {
          title: "Design minimaliste",
          description: "Création de sites élégants et épurés qui mettent en valeur votre contenu et votre marque.",
          icon: Palette
        },
        {
          title: "Expérience fluide",
          description: "Navigation intuitive et performances optimisées pour une expérience utilisateur sans faille.",
          icon: Rocket
        },
        {
          title: "Gestion de contenu",
          description: "Interface d'administration simple et intuitive pour gérer votre contenu facilement.",
          icon: LayoutDashboard
        },
        {
          title: "Intégration média",
          description: "Mise en valeur optimale de vos images et médias avec des galeries dynamiques.",
          icon: ImageIcon
        }
      ],
      benefits: [
        {
          title: "Templates professionnels",
          description: "Large choix de templates modernes et personnalisables pour tous les secteurs.",
          icon: Shapes
        },
        {
          title: "E-commerce intégré",
          description: "Solutions de vente en ligne complètes et personnalisables.",
          icon: ShoppingBag
        },
        {
          title: "Performance optimale",
          description: "Sites rapides et sécurisés hébergés sur une infrastructure robuste.",
          icon: Zap
        },
        {
          title: "Marketing intégré",
          description: "Outils marketing et analyses statistiques pour développer votre activité.",
          icon: Share2
        }
      ],
      faqItems: [
        {
          question: "Combien de temps faut-il pour créer un site Squarespace ?",
          answer: "Le délai moyen pour créer un site Squarespace varie de 2 à 6 semaines, selon la complexité du projet. Ce délai comprend la sélection et personnalisation du template, l'intégration du contenu et les tests."
        },
        {
          question: "Puis-je vendre des produits sur mon site Squarespace ?",
          answer: "Oui, Squarespace propose une solution e-commerce complète que nous pouvons configurer pour vous permettre de vendre vos produits en ligne, avec gestion des stocks, paiements sécurisés et options d'expédition."
        },
        {
          question: "Est-il facile de mettre à jour le contenu ?",
          answer: "Absolument ! L'interface de Squarespace est très intuitive. Nous vous formons à son utilisation pour que vous puissiez gérer votre contenu en toute autonomie."
        },
        {
          question: "Mon site sera-t-il optimisé pour le référencement ?",
          answer: "Oui, nous mettons en place les meilleures pratiques SEO de Squarespace et configurons tous les éléments nécessaires pour optimiser votre visibilité sur les moteurs de recherche."
        },
        {
          question: "Proposez-vous un service de maintenance ?",
          answer: "Oui, nous proposons différentes formules de maintenance incluant les mises à jour, le support technique et l'optimisation continue de votre site Squarespace."
        }
      ],
      testimonials: [],
      complementaryServices: [
        {
          title: "Personnalisation avancée",
          description: "Modifications CSS et Javascript pour personnaliser votre site au-delà des options standard.",
          icon: Code
        },
        {
          title: "Stratégie de contenu",
          description: "Accompagnement dans la création et l'optimisation de votre contenu.",
          icon: Share2
        },
        {
          title: "Formation utilisateur",
          description: "Formation complète pour maîtriser la gestion de votre site Squarespace.",
          icon: MessageSquare
        }
      ]
    },
    {
      id: "prestashop",
      name: "PrestaShop",
      description: "Développement de boutiques PrestaShop",
      route: Routes.service.integration.prestashop,
      icon: ShoppingBag,
      heroTitle: "Développement e-commerce avec PrestaShop",
      heroDescription: "Lancez une boutique en ligne professionnelle avec PrestaShop. Notre expertise vous garantit une solution e-commerce puissante, évolutive et parfaitement adaptée à vos besoins.",
      features: [
        {
          title: "Design personnalisé",
          description: "Création de thèmes sur mesure qui reflètent votre marque et optimisent la conversion.",
          icon: Palette
        },
        {
          title: "Gestion avancée",
          description: "Interface d'administration puissante pour gérer vos produits, commandes et clients.",
          icon: LayoutDashboard
        },
        {
          title: "Performance optimisée",
          description: "Optimisation poussée pour des temps de chargement rapides et une expérience fluide.",
          icon: Rocket
        },
        {
          title: "Sécurité renforcée",
          description: "Protection avancée de votre boutique et des données de vos clients.",
          icon: Shield
        }
      ],
      benefits: [
        {
          title: "Gestion complète",
          description: "Contrôle total sur vos produits, stocks, commandes et relations clients.",
          icon: ShoppingBag
        },
        {
          title: "Multi-boutiques",
          description: "Gestion de plusieurs boutiques depuis une seule interface d'administration.",
          icon: Globe
        },
        {
          title: "Logistique intégrée",
          description: "Gestion avancée des transporteurs et des frais de livraison.",
          icon: Truck
        },
        {
          title: "Analyses détaillées",
          description: "Statistiques complètes pour suivre et optimiser vos performances.",
          icon: BarChart
        }
      ],
      faqItems: [
        {
          question: "Combien de temps faut-il pour créer une boutique PrestaShop ?",
          answer: "Le délai moyen pour créer une boutique PrestaShop varie de 6 à 12 semaines, selon la complexité du projet. Ce délai comprend la personnalisation du thème, le développement des fonctionnalités sur mesure, l'intégration des produits et les tests."
        },
        {
          question: "Pouvez-vous migrer ma boutique existante vers PrestaShop ?",
          answer: "Oui, nous proposons un service complet de migration vers PrestaShop, incluant le transfert des produits, clients, commandes et historiques, tout en préservant votre référencement."
        },
        {
          question: "PrestaShop est-il adapté aux grands catalogues de produits ?",
          answer: "Absolument ! PrestaShop est conçu pour gérer efficacement des catalogues de plusieurs milliers de produits avec des variations, tout en maintenant d'excellentes performances."
        },
        {
          question: "Proposez-vous des développements sur mesure ?",
          answer: "Oui, nous développons des modules et fonctionnalités sur mesure pour adapter PrestaShop à vos besoins spécifiques : intégrations ERP, processus métier personnalisés, etc."
        },
        {
          question: "Comment gérez-vous la maintenance et les mises à jour ?",
          answer: "Nous proposons différentes formules de maintenance incluant les mises à jour de sécurité, les sauvegardes, l'optimisation des performances et le support technique."
        }
      ],
      testimonials: [],
      complementaryServices: [
        {
          title: "Modules sur mesure",
          description: "Développement de fonctionnalités spécifiques pour votre activité.",
          icon: Code
        },
        {
          title: "Marketing digital",
          description: "Stratégies marketing pour augmenter votre visibilité et vos ventes.",
          icon: Share2
        },
        {
          title: "Formation PrestaShop",
          description: "Formation personnalisée pour maîtriser la gestion de votre boutique.",
          icon: MessageSquare
        }
      ]
    },
    {
      id: "strapi",
      name: "Strapi",
      description: "Développement de CMS headless avec Strapi",
      route: Routes.service.integration.strapi,
      icon: Box,
      heroTitle: "Développement CMS headless avec Strapi",
      heroDescription: "Développez des applications modernes avec Strapi. Notre expertise vous garantit une solution de gestion de contenu flexible, évolutive et parfaitement adaptée à vos besoins.",
      features: [
        {
          title: "API sur mesure",
          description: "Création d'APIs RESTful et GraphQL personnalisées pour tous vos besoins.",
          icon: Code
        },
        {
          title: "Administration flexible",
          description: "Interface d'administration personnalisable selon vos processus métier.",
          icon: LayoutDashboard
        },
        {
          title: "Performance optimale",
          description: "Architecture performante pour des temps de réponse rapides.",
          icon: Rocket
        },
        {
          title: "Sécurité avancée",
          description: "Protection robuste de vos données et de vos APIs.",
          icon: Shield
        }
      ],
      benefits: [
        {
          title: "100% JavaScript",
          description: "Développement unifié en JavaScript/Node.js pour plus d'efficacité.",
          icon: Code
        },
        {
          title: "Modèles flexibles",
          description: "Création de modèles de contenu personnalisés sans contraintes.",
          icon: Box
        },
        {
          title: "Gestion des rôles",
          description: "Contrôle précis des accès et des permissions utilisateurs.",
          icon: Users
        },
        {
          title: "Workflows avancés",
          description: "Automatisation des processus de publication et de validation.",
          icon: Settings
        }
      ],
      faqItems: [
        {
          question: "Combien de temps faut-il pour mettre en place un projet Strapi ?",
          answer: "Le délai moyen pour mettre en place un projet Strapi varie de 4 à 12 semaines, selon la complexité. Ce délai comprend la conception des modèles de contenu, le développement des APIs, la personnalisation de l'administration et les tests."
        },
        {
          question: "Strapi peut-il gérer des contenus multilingues ?",
          answer: "Oui, Strapi gère nativement le contenu multilingue. Nous pouvons configurer et personnaliser la gestion des traductions selon vos besoins spécifiques."
        },
        {
          question: "Est-il possible de migrer notre contenu existant vers Strapi ?",
          answer: "Oui, nous proposons un service complet de migration de contenu vers Strapi, incluant l'analyse de vos données existantes, la création de modèles adaptés et l'import de vos contenus."
        },
        {
          question: "Comment gérez-vous le déploiement et l'hébergement ?",
          answer: "Nous pouvons déployer Strapi sur différentes plateformes cloud (AWS, Google Cloud, DigitalOcean...) et mettre en place une infrastructure scalable avec des environnements de développement, staging et production."
        },
        {
          question: "Proposez-vous des développements de plugins personnalisés ?",
          answer: "Oui, nous développons des plugins Strapi sur mesure pour étendre les fonctionnalités selon vos besoins : intégrations spécifiques, workflows personnalisés, interfaces d'administration dédiées, etc."
        }
      ],
      testimonials: [],
      complementaryServices: [
        {
          title: "Développement frontend",
          description: "Création d'applications frontend connectées à votre API Strapi.",
          icon: Globe
        },
        {
          title: "Intégrations",
          description: "Connection avec vos outils et services tiers existants.",
          icon: Share2
        },
        {
          title: "Formation Strapi",
          description: "Formation personnalisée pour maîtriser la gestion de votre CMS.",
          icon: MessageSquare
        }
      ]
    }
  ]
};

export default integrationCategory;