import { 
  Server, 
  Database, 
  Shield, 
  Scale, 
  Cloud,
  Code,
  FileJson,
  Zap,
  GitBranch,
  LineChart,
  BarChart,
  Layers,
  Bot,
  Bell,
  Users,
  MessageSquare,
  Heart,
  Clock,
  Boxes,
  CircuitBoard,
  Gauge,
  Timer,
  Workflow,
  Lock,
  Globe,
  Box,
  Settings,
  Command,
  Search,
  Share2,
  History
} from "lucide-react";
import { ServiceBenefit, ServiceCategoryData, ServiceCategory, ServiceProcessStep } from "@/types/service";
import Routes from "@/constants/routes";

// Bénéfices pour la page de catégorie
const backendBenefits: ServiceBenefit[] = [
  {
    title: "Architecture scalable",
    description: "Systèmes conçus pour évoluer avec votre croissance, utilisant des architectures modernes et distribuées.",
    icon: Scale
  },
  {
    title: "Base de données optimisée",
    description: "Conception et optimisation des bases de données pour des performances maximales et une intégrité des données.",
    icon: Database
  },
  {
    title: "Infrastructure robuste",
    description: "Déploiement sur des infrastructures cloud modernes avec haute disponibilité et résilience.",
    icon: Server
  },
  {
    title: "Sécurité avancée",
    description: "Implémentation des meilleures pratiques de sécurité et de protection des données sensibles.",
    icon: Shield
  }
];

// Processus pour la page de catégorie
const backendProcessList: ServiceProcessStep[] = [
  {
    title: "Analyse des besoins",
    description: "Étude approfondie des besoins techniques, définition de l'architecture et des choix technologiques.",
    services: ["Architecture", "Conseil technique"]
  },
  {
    title: "Conception système",
    description: "Design de l'architecture backend, modélisation des données et définition des APIs.",
    services: ["Architecture", "Database Design"]
  },
  {
    title: "Développement API",
    description: "Implémentation des APIs RESTful ou GraphQL avec documentation complète.",
    services: ["API Development", "Documentation"]
  },
  {
    title: "Base de données",
    description: "Mise en place et optimisation des bases de données avec focus sur la performance et la scalabilité.",
    services: ["Database", "Optimisation"]
  },
  {
    title: "Tests et sécurité",
    description: "Implémentation des tests automatisés et des mesures de sécurité avancées.",
    services: ["Tests", "Security"]
  },
  {
    title: "Déploiement et monitoring",
    description: "Mise en place de l'infrastructure cloud, du monitoring et des alertes.",
    services: ["DevOps", "Monitoring"]
  }
];

const backendCategory: ServiceCategoryData = {
  id: ServiceCategory.BACKEND,
  name: "Développement Back-end",
  description: "Architecture et développement de solutions robustes",
  icon: Server,
  benefits: backendBenefits,
  processList: backendProcessList,
  subServices: [
    {
      id: "api",
      name: "APIs RESTful",
      description: "Conception et développement d'APIs performantes",
      route: Routes.service.backend.api,
      icon: Code,
      heroTitle: "APIs RESTful & GraphQL",
      heroDescription: "Développez des APIs modernes, sécurisées et performantes pour vos applications. Notre expertise vous garantit des interfaces robustes et évolutives qui répondent à vos besoins spécifiques.",
      features: [
        {
          title: "REST & GraphQL",
          description: "Développement d'APIs modernes avec les standards de l'industrie.",
          icon: Code
        },
        {
          title: "Sécurité avancée",
          description: "Protection robuste contre les vulnérabilités et les attaques.",
          icon: Shield
        },
        {
          title: "Performance optimale",
          description: "Architecture optimisée pour des temps de réponse minimaux.",
          icon: Zap
        },
        {
          title: "Documentation complète",
          description: "Documentation claire et interactive pour une intégration facile.",
          icon: FileJson
        }
      ],
      benefits: [
        {
          title: "Haute disponibilité",
          description: "Infrastructure redondante pour une disponibilité maximale.",
          icon: Cloud
        },
        {
          title: "Scalabilité",
          description: "Architecture conçue pour supporter la croissance.",
          icon: GitBranch
        },
        {
          title: "Monitoring avancé",
          description: "Suivi en temps réel des performances et de la santé.",
          icon: LineChart
        },
        {
          title: "Cache intelligent",
          description: "Optimisation des performances avec mise en cache avancée.",
          icon: Zap
        }
      ],
      faqItems: [
        {
          question: "Quelle est la différence entre REST et GraphQL ?",
          answer: "REST est une architecture traditionnelle où chaque endpoint correspond à une ressource spécifique, tandis que GraphQL permet aux clients de demander exactement les données dont ils ont besoin. Nous vous conseillons la meilleure approche selon vos besoins spécifiques et vos cas d'usage."
        },
        {
          question: "Comment assurez-vous la sécurité des APIs ?",
          answer: "Nous implémentons plusieurs niveaux de sécurité : authentification JWT, chiffrement SSL/TLS, rate limiting, validation des données, protection contre les injections et les attaques CSRF. Nous suivons également les recommandations OWASP pour la sécurité des APIs."
        },
        {
          question: "Comment gérez-vous la montée en charge ?",
          answer: "Nous concevons des APIs scalables horizontalement, avec load balancing, mise en cache distribuée, et optimisation des requêtes. L'architecture est pensée pour supporter une croissance importante du trafic."
        },
        {
          question: "Quelle documentation fournissez-vous ?",
          answer: "Nous fournissons une documentation complète : documentation technique OpenAPI/Swagger, guides d'intégration, exemples de code, et environnement de test. La documentation est maintenue à jour avec chaque évolution de l'API."
        },
        {
          question: "Proposez-vous un support après le déploiement ?",
          answer: "Oui, nous proposons plusieurs formules de maintenance incluant : monitoring 24/7, support technique, optimisation continue des performances, mises à jour de sécurité et évolutions fonctionnelles."
        }
      ],
      testimonials: [
        {
          content: "Une API robuste qui nous permet de gérer des millions de requêtes quotidiennes en toute sérénité.",
          author: {
            name: "Alexandre Martin",
            role: "CTO",
            company: "DataFlow",
            image: "/static/images/testimonials/alexandre-martin.jpg"
          }
        },
        {
          content: "La qualité de la documentation et le support technique sont exceptionnels.",
          author: {
            name: "Sarah Dubois",
            role: "Lead Developer",
            company: "TechPro",
            image: "/static/images/testimonials/sarah-dubois.jpg"
          }
        },
        {
          content: "Une architecture API qui nous a permis de multiplier notre croissance par 10.",
          author: {
            name: "Marc Lambert",
            role: "Product Director",
            company: "ScaleUp",
            image: "/static/images/testimonials/marc-lambert.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Analytics avancés",
          description: "Analyse détaillée de l'utilisation et des performances.",
          icon: BarChart
        },
        {
          title: "Migration de données",
          description: "Migration depuis vos systèmes existants.",
          icon: Database
        },
        {
          title: "Intégration",
          description: "Support pour l'intégration avec vos applications.",
          icon: Layers
        }
      ]
    },
    {
      id: "database",
      name: "Bases de données",
      description: "Architecture et optimisation de bases de données",
      route: Routes.service.backend.database,
      icon: Database,
      heroTitle: "Architecture de Bases de Données",
      heroDescription: "Concevez et optimisez vos bases de données pour des performances optimales et une scalabilité maximale. Notre expertise vous garantit une architecture robuste qui répond à vos besoins actuels et futurs.",
      features: [
        {
          title: "Architecture optimisée",
          description: "Conception intelligente des schémas et des relations pour des performances optimales.",
          icon: Database
        },
        {
          title: "Sécurité renforcée",
          description: "Protection robuste des données sensibles et conformité aux normes.",
          icon: Shield
        },
        {
          title: "Haute performance",
          description: "Optimisation des requêtes et des index pour des temps de réponse minimaux.",
          icon: Zap
        },
        {
          title: "Backup & Recovery",
          description: "Stratégies de sauvegarde et de restauration fiables.",
          icon: History
        }
      ],
      benefits: [
        {
          title: "Scalabilité horizontale",
          description: "Architecture conçue pour la croissance et la montée en charge.",
          icon: GitBranch
        },
        {
          title: "Réplication",
          description: "Haute disponibilité et répartition géographique des données.",
          icon: Share2
        },
        {
          title: "Monitoring avancé",
          description: "Suivi en temps réel des performances et de la santé.",
          icon: LineChart
        },
        {
          title: "Recherche optimisée",
          description: "Indexation intelligente pour des recherches rapides.",
          icon: Search
        }
      ],
      faqItems: [
        {
          question: "Comment choisir entre SQL et NoSQL ?",
          answer: "Le choix dépend de vos besoins spécifiques. Les bases SQL sont idéales pour les données structurées avec des relations complexes, tandis que NoSQL excelle dans la gestion de données non structurées et la scalabilité horizontale. Nous vous guidons vers la meilleure solution selon vos cas d'usage."
        },
        {
          question: "Comment gérez-vous la sécurité des données ?",
          answer: "Nous implémentons plusieurs niveaux de sécurité : chiffrement des données sensibles, contrôle d'accès granulaire, audit des accès, backups réguliers, et conformité aux normes de sécurité (RGPD, etc.). Nous effectuons également des tests de sécurité réguliers."
        },
        {
          question: "Comment optimisez-vous les performances ?",
          answer: "Nous utilisons plusieurs techniques : optimisation des schémas et des requêtes, indexation intelligente, mise en cache, partitionnement des données, et monitoring continu. Nous analysons régulièrement les performances pour identifier les opportunités d'optimisation."
        },
        {
          question: "Proposez-vous des services de migration ?",
          answer: "Oui, nous gérons les migrations de bases de données de bout en bout : analyse de l'existant, planification, tests, migration des données avec minimum d'interruption, et validation post-migration. Nous assurons la cohérence et l'intégrité des données."
        },
        {
          question: "Comment assurez-vous la disponibilité des données ?",
          answer: "Nous mettons en place des architectures hautement disponibles avec réplication, clustering, et plans de reprise d'activité. Nous effectuons des sauvegardes régulières et testons les procédures de restauration."
        }
      ],
      testimonials: [
        {
          content: "L'optimisation de notre base de données a réduit nos temps de réponse de 80%.",
          author: {
            name: "Thomas Weber",
            role: "Lead DBA",
            company: "DataScale",
            image: "/static/images/testimonials/thomas-weber.jpg"
          }
        },
        {
          content: "Une architecture qui nous permet de gérer des millions d'enregistrements sans effort.",
          author: {
            name: "Julie Martin",
            role: "CTO",
            company: "BigData Solutions",
            image: "/static/images/testimonials/julie-martin.jpg"
          }
        },
        {
          content: "La migration de notre base de données s'est déroulée sans aucune interruption de service.",
          author: {
            name: "Pierre Dubois",
            role: "Directeur Technique",
            company: "TechFlow",
            image: "/static/images/testimonials/pierre-dubois.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Migration de données",
          description: "Transfer sécurisé depuis vos systèmes existants.",
          icon: Cloud
        },
        {
          title: "Audit & Optimisation",
          description: "Analyse des performances et recommandations.",
          icon: BarChart
        },
        {
          title: "Monitoring 24/7",
          description: "Surveillance continue et alertes en temps réel.",
          icon: Timer
        }
      ]
    },
    {
      id: "bots",
      name: "Bots Discord/Slack",
      description: "Développement de bots et d'automatisations",
      route: Routes.service.backend.bots,
      icon: Bot,
      heroTitle: "Bots & Automatisations",
      heroDescription: "Développez des bots intelligents et des automatisations pour améliorer l'engagement et la productivité de votre communauté. Notre expertise vous garantit des bots fiables et performants pour Discord, Slack et autres plateformes.",
      features: [
        {
          title: "Discord & Slack",
          description: "Bots personnalisés pour les principales plateformes de communication.",
          icon: MessageSquare
        },
        {
          title: "Commandes avancées",
          description: "Interface intuitive avec commandes personnalisables.",
          icon: Command
        },
        {
          title: "Performance optimale",
          description: "Architecture optimisée pour une réactivité maximale.",
          icon: Zap
        },
        {
          title: "Intégrations",
          description: "Connection avec vos outils et services existants.",
          icon: Settings
        }
      ],
      benefits: [
        {
          title: "Modération intelligente",
          description: "Gestion automatisée de votre communauté et modération.",
          icon: Shield
        },
        {
          title: "Notifications",
          description: "Alertes personnalisées et mises à jour automatiques.",
          icon: Bell
        },
        {
          title: "Engagement",
          description: "Fonctionnalités interactives pour animer votre communauté.",
          icon: Users
        },
        {
          title: "Statistiques",
          description: "Suivi détaillé de l'activité et des interactions.",
          icon: LineChart
        }
      ],
      faqItems: [
        {
          question: "Quels types de bots pouvez-vous développer ?",
          answer: "Nous développons des bots pour diverses plateformes (Discord, Slack, Telegram) avec différentes fonctionnalités : modération, support client, automatisation de tâches, statistiques, jeux et animations communautaires. Chaque bot est personnalisé selon vos besoins spécifiques."
        },
        {
          question: "Comment assurez-vous la fiabilité des bots ?",
          answer: "Nous implémentons plusieurs mécanismes : monitoring 24/7, redémarrage automatique en cas de problème, logs détaillés, et alertes en temps réel. Nous effectuons également des tests approfondis avant chaque déploiement."
        },
        {
          question: "Peut-on personnaliser les commandes et fonctionnalités ?",
          answer: "Oui, tous nos bots sont entièrement personnalisables : commandes, réponses, permissions, intégrations. Nous adaptons chaque fonctionnalité à vos besoins et votre charte de modération."
        },
        {
          question: "Comment gérez-vous la sécurité ?",
          answer: "La sécurité est une priorité : authentification sécurisée, permissions granulaires, validation des entrées, protection contre le spam et les abus. Nous suivons les meilleures pratiques de chaque plateforme."
        },
        {
          question: "Proposez-vous un support après le déploiement ?",
          answer: "Oui, nous proposons plusieurs formules de maintenance incluant : surveillance 24/7, mises à jour régulières, support technique, et évolutions fonctionnelles selon vos besoins."
        }
      ],
      testimonials: [
        {
          content: "Notre bot Discord a transformé la gestion de notre communauté gaming.",
          author: {
            name: "Lucas Bernard",
            role: "Community Manager",
            company: "GamersWorld",
            image: "/static/images/testimonials/lucas-bernard.jpg"
          }
        },
        {
          content: "L'automatisation Slack a boosté la productivité de notre équipe.",
          author: {
            name: "Marie Dubois",
            role: "Product Owner",
            company: "TechFlow",
            image: "/static/images/testimonials/marie-dubois.jpg"
          }
        },
        {
          content: "Un bot fiable qui gère parfaitement notre support client 24/7.",
          author: {
            name: "Antoine Martin",
            role: "Support Lead",
            company: "CustomerFirst",
            image: "/static/images/testimonials/antoine-martin.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Analytics",
          description: "Suivi détaillé de l'utilisation et des interactions.",
          icon: BarChart
        },
        {
          title: "Support 24/7",
          description: "Surveillance continue et intervention rapide.",
          icon: Clock
        },
        {
          title: "Évolutions",
          description: "Ajout régulier de nouvelles fonctionnalités.",
          icon: Heart
        }
      ]
    },
    {
      id: "microservices",
      name: "Microservices",
      description: "Architecture et développement de microservices",
      route: Routes.service.backend.microservices,
      icon: Box,
      heroTitle: "Architecture Microservices",
      heroDescription: "Transformez vos applications monolithiques en architectures microservices modernes et scalables. Notre expertise vous garantit une infrastructure flexible, résiliente et performante.",
      features: [
        {
          title: "Architecture évolutive",
          description: "Conception modulaire pour une scalabilité optimale.",
          icon: Boxes
        },
        {
          title: "Déploiement continu",
          description: "Pipeline CI/CD pour des mises à jour fluides.",
          icon: GitBranch
        },
        {
          title: "Performance optimale",
          description: "Services indépendants pour une meilleure réactivité.",
          icon: Zap
        },
        {
          title: "Haute disponibilité",
          description: "Architecture résiliente avec redondance.",
          icon: Shield
        }
      ],
      benefits: [
        {
          title: "Scalabilité granulaire",
          description: "Mise à l'échelle indépendante de chaque service.",
          icon: Scale
        },
        {
          title: "Déploiement flexible",
          description: "Mises à jour sans interruption de service.",
          icon: Cloud
        },
        {
          title: "Isolation des pannes",
          description: "Résilience accrue grâce à l'isolation des services.",
          icon: CircuitBoard
        },
        {
          title: "Monitoring avancé",
          description: "Surveillance détaillée de chaque composant.",
          icon: LineChart
        }
      ],
      faqItems: [
        {
          question: "Quand adopter une architecture microservices ?",
          answer: "L'architecture microservices est particulièrement adaptée aux applications complexes nécessitant une grande scalabilité, une mise à l'échelle indépendante des composants, et une évolution rapide. Nous évaluons avec vous si cette architecture correspond à vos besoins spécifiques."
        },
        {
          question: "Comment gérez-vous la communication entre services ?",
          answer: "Nous implémentons des patterns de communication robustes : API Gateway, message brokers (Kafka, RabbitMQ), communication synchrone (REST, gRPC) et asynchrone. Chaque méthode est choisie selon les besoins spécifiques de performance et de fiabilité."
        },
        {
          question: "Comment assurez-vous la cohérence des données ?",
          answer: "Nous utilisons plusieurs stratégies : Saga pattern pour les transactions distribuées, Event Sourcing pour la traçabilité, et CQRS pour la séparation des opérations de lecture et d'écriture. La cohérence éventuelle est gérée de manière appropriée."
        },
        {
          question: "Comment surveillez-vous l'infrastructure ?",
          answer: "Nous mettons en place un monitoring complet : métriques de performance, tracing distribué, logs centralisés, et alerting intelligent. Des dashboards personnalisés permettent de visualiser la santé de chaque service."
        },
        {
          question: "Proposez-vous de la formation pour les équipes ?",
          answer: "Oui, nous proposons des formations complètes pour vos équipes : principes des microservices, bonnes pratiques de développement, monitoring et troubleshooting, et utilisation des outils DevOps."
        }
      ],
      testimonials: [
        {
          content: "La transition vers les microservices nous a permis de multiplier notre capacité de traitement par 10.",
          author: {
            name: "Philippe Laurent",
            role: "CTO",
            company: "ScaleOps",
            image: "/static/images/testimonials/philippe-laurent.jpg"
          }
        },
        {
          content: "Une architecture qui nous permet d'évoluer sereinement avec notre croissance.",
          author: {
            name: "Sophie Martin",
            role: "Lead Architect",
            company: "CloudScale",
            image: "/static/images/testimonials/sophie-martin.jpg"
          }
        },
        {
          content: "La modularité des microservices a transformé notre façon de développer.",
          author: {
            name: "Thomas Durand",
            role: "VP Engineering",
            company: "TechFlow",
            image: "/static/images/testimonials/thomas-durand.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "DevOps & CI/CD",
          description: "Automatisation complète du déploiement.",
          icon: Workflow
        },
        {
          title: "Monitoring 24/7",
          description: "Surveillance continue et alertes en temps réel.",
          icon: Timer
        },
        {
          title: "Optimisation",
          description: "Amélioration continue des performances.",
          icon: Gauge
        }
      ]
    },
    {
      id: "cloud",
      name: "Solutions Cloud",
      description: "Déploiement et gestion d'infrastructures cloud",
      route: Routes.service.backend.cloud,
      icon: Cloud,
      heroTitle: "Solutions Cloud",
      heroDescription: "Optimisez votre infrastructure avec des solutions cloud modernes et évolutives. Notre expertise vous garantit un déploiement sécurisé et performant sur les principales plateformes cloud.",
      features: [
        {
          title: "Multi-cloud",
          description: "Support des principales plateformes (AWS, GCP, Azure).",
          icon: Cloud
        },
        {
          title: "Sécurité avancée",
          description: "Protection robuste de vos données et applications.",
          icon: Shield
        },
        {
          title: "Performance optimale",
          description: "Architecture optimisée pour des performances maximales.",
          icon: Zap
        },
        {
          title: "Scalabilité automatique",
          description: "Adaptation dynamique aux besoins de charge.",
          icon: Scale
        }
      ],
      benefits: [
        {
          title: "Haute disponibilité",
          description: "Infrastructure redondante et résiliente.",
          icon: Server
        },
        {
          title: "Stockage élastique",
          description: "Gestion flexible et sécurisée des données.",
          icon: Database
        },
        {
          title: "Monitoring avancé",
          description: "Surveillance en temps réel de votre infrastructure.",
          icon: LineChart
        },
        {
          title: "Sécurité renforcée",
          description: "Protection multicouche de vos ressources.",
          icon: Lock
        }
      ],
      faqItems: [
        {
          question: "Quelle plateforme cloud choisir ?",
          answer: "Le choix dépend de vos besoins spécifiques : AWS excelle en variété de services, Google Cloud en machine learning, et Azure en intégration Microsoft. Nous vous guidons vers la meilleure solution en fonction de vos objectifs, contraintes techniques et budget."
        },
        {
          question: "Comment gérez-vous la sécurité dans le cloud ?",
          answer: "Nous implémentons une sécurité multicouche : chiffrement des données au repos et en transit, contrôle d'accès IAM, réseaux privés virtuels (VPC), pare-feu applicatifs (WAF), et surveillance continue des menaces. Nous suivons les meilleures pratiques de chaque plateforme."
        },
        {
          question: "Comment optimisez-vous les coûts ?",
          answer: "Nous utilisons plusieurs stratégies : instances réservées, scaling automatique, optimisation des ressources, suppression des ressources inutilisées, et monitoring des coûts. Nous effectuons des audits réguliers pour identifier les opportunités d'économies."
        },
        {
          question: "Comment assurez-vous la haute disponibilité ?",
          answer: "Nous déployons votre infrastructure sur plusieurs zones de disponibilité, avec réplication des données, load balancing, et failover automatique. Nous mettons également en place des plans de reprise d'activité (DRP) robustes."
        },
        {
          question: "Proposez-vous un support 24/7 ?",
          answer: "Oui, nous proposons plusieurs niveaux de support incluant : monitoring 24/7, alerting automatique, intervention rapide en cas d'incident, maintenance préventive, et support technique dédié."
        }
      ],
      testimonials: [
        {
          content: "La migration vers le cloud nous a permis de réduire nos coûts d'infrastructure de 40%.",
          author: {
            name: "David Martin",
            role: "CTO",
            company: "CloudScale",
            image: "/static/images/testimonials/david-martin.jpg"
          }
        },
        {
          content: "Une expertise qui nous a permis de migrer sans interruption de service.",
          author: {
            name: "Claire Dubois",
            role: "DevOps Lead",
            company: "TechFlow",
            image: "/static/images/testimonials/claire-dubois.jpg"
          }
        },
        {
          content: "Notre infrastructure cloud nous offre enfin la flexibilité dont nous avions besoin.",
          author: {
            name: "Marc Lambert",
            role: "IT Director",
            company: "DataFirst",
            image: "/static/images/testimonials/marc-lambert.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Migration cloud",
          description: "Transition en douceur vers le cloud.",
          icon: GitBranch
        },
        {
          title: "Multi-région",
          description: "Déploiement global de vos applications.",
          icon: Globe
        },
        {
          title: "DevOps",
          description: "Automatisation et CI/CD dans le cloud.",
          icon: Timer
        }
      ]
    }
  ]
};

export default backendCategory;