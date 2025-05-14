import { 
  Palette, 
  PenTool, 
  LayoutTemplate, 
  Smartphone, 
  FileCode, 
  Lightbulb,
  Target,
  Users,
  Zap,
  Eye,
  Share2,
  Layers,
  Image as ImageIcon,
  Compass,
  Brush,
  FileImage,
  MousePointer,
  Search,
  BarChart,
  MessageSquare,
  ListChecks,
  LayoutGrid,
  FileText,
  Globe,
  Heart
} from "lucide-react";
import { ServiceBenefit, ServiceCategoryData, ServiceCategory, ServiceProcessStep } from "@/types/service";
import Routes from "@/constants/routes";

// Bénéfices pour la page de catégorie
const designBenefits: ServiceBenefit[] = [
  {
    title: "Design UI/UX centré utilisateur",
    description: "Une approche qui place les besoins utilisateurs au cœur de nos designs, validée par des prototypes interactifs.",
    icon: Users
  },
  {
    title: "Innovation créative",
    description: "Des solutions UI/UX créatives et des prototypes innovants qui distinguent votre marque tout en respectant les standards.",
    icon: Lightbulb
  },
  {
    title: "Prototypage itératif",
    description: "Une méthodologie basée sur des prototypes rapides et des itérations fréquentes pour affiner l'expérience utilisateur.",
    icon: Zap
  },
  {
    title: "Objectifs business",
    description: "Un design UI/UX aligné sur vos objectifs commerciaux, validé par des tests utilisateurs sur prototypes.",
    icon: Target
  }
];

// Processus pour la page de catégorie
const designProcessList: ServiceProcessStep[] = [
  {
    title: "Analyse des besoins",
    description: "Première étape cruciale où nous analysons vos besoins, votre marque et vos objectifs business pour définir la direction UI/UX.",
    services: ["Design UI/UX"]
  },
  {
    title: "Recherche et moodboard",
    description: "Création de moodboards et exploration des directions créatives possibles. Définition de la direction artistique globale.",
    services: ["Design UI/UX", "Moodboard"]
  },
  {
    title: "Wireframes",
    description: "Conception des wireframes pour valider la structure, la hiérarchie et l'architecture de l'information.",
    services: ["Design UI/UX", "Wireframes"]
  },
  {
    title: "Design d'interface",
    description: "Création des maquettes finales en respectant votre charte graphique. Attention particulière aux composants et à leur réutilisabilité.",
    services: ["Design UI/UX"]
  },
  {
    title: "Prototypage",
    description: "Création de prototypes pour tester les interactions et valider les parcours utilisateurs.",
    services: ["Design UI/UX"]
  },
  {
    title: "Développement",
    description: "Transformation des maquettes en interfaces fonctionnelles, avec une attention particulière aux animations définies.",
    services: ["Développement Frontend", "Intégration"]
  }
];

const designCategory: ServiceCategoryData = {
  id: ServiceCategory.DESIGN,
  name: "Design UI/UX",
  description: "Création d'interfaces modernes et d'expériences utilisateur optimales",
  icon: Palette,
  benefits: designBenefits,
  processList: designProcessList,
  subServices: [
    {
      id: "moodboard",
      name: "Moodboard",
      description: "Définition de l'identité visuelle et de l'ambiance de votre projet",
      route: Routes.service.design.moodboard,
      icon: PenTool,
      heroTitle: "Moodboards & Direction Artistique",
      heroDescription: "Donnez vie à votre vision grâce à des moodboards soigneusement élaborés. Notre expertise en design vous aide à définir une direction artistique claire et inspirante pour votre projet.",
      features: [
        {
          title: "Direction créative",
          description: "Définition claire de l'ambiance et du style visuel.",
          icon: Compass
        },
        {
          title: "Palette de couleurs",
          description: "Sélection harmonieuse des couleurs de votre identité.",
          icon: Palette
        },
        {
          title: "Style visuel",
          description: "Exploration et définition de votre univers graphique.",
          icon: ImageIcon
        },
        {
          title: "Inspiration ciblée",
          description: "Recherche approfondie adaptée à votre secteur.",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Direction claire",
          description: "Vision commune et alignement des équipes créatives.",
          icon: Lightbulb
        },
        {
          title: "Communication visuelle",
          description: "Support efficace pour partager votre vision.",
          icon: Share2
        },
        {
          title: "Cohérence",
          description: "Garantie d'une identité visuelle harmonieuse.",
          icon: Eye
        },
        {
          title: "Expertise créative",
          description: "Conseils professionnels et direction artistique.",
          icon: Brush
        }
      ],
      faqItems: [
        {
          question: "Qu'est-ce qu'un moodboard et à quoi sert-il ?",
          answer: "Un moodboard est un assemblage visuel qui définit la direction artistique de votre projet. Il combine couleurs, typographies, images et textures pour créer une référence visuelle cohérente. C'est un outil essentiel pour communiquer votre vision et assurer la cohérence de votre identité visuelle."
        },
        {
          question: "Comment se déroule le processus de création ?",
          answer: "Le processus commence par une phase de découverte où nous explorons vos objectifs et votre univers. Nous effectuons ensuite une recherche approfondie pour sélectionner les éléments visuels appropriés. Après plusieurs itérations et vos retours, nous finalisons le moodboard qui servira de guide pour votre projet."
        },
        {
          question: "Quels éléments comprend un moodboard ?",
          answer: "Un moodboard professionnel inclut généralement : une palette de couleurs, des typographies, des images d'inspiration, des textures, des patterns, et des références stylistiques. Nous ajoutons également des notes explicatives pour clarifier les choix créatifs."
        },
        {
          question: "Comment utilisez-vous le moodboard dans la suite du projet ?",
          answer: "Le moodboard sert de référence tout au long du projet. Il guide les décisions de design, assure la cohérence visuelle et facilite la communication entre toutes les parties prenantes. C'est un document vivant qui peut évoluer avec vos retours."
        },
        {
          question: "Combien de temps prend la création d'un moodboard ?",
          answer: "La création d'un moodboard professionnel prend généralement 1 à 2 semaines, incluant la phase de recherche, la création initiale et les itérations basées sur vos retours. Ce temps nous permet d'explorer en profondeur et d'affiner la direction artistique."
        }
      ],
      testimonials: [
        {
          content: "Le moodboard a parfaitement capturé l'essence de notre marque et guidé toute notre identité visuelle.",
          author: {
            name: "Marie Laurent",
            role: "Directrice Artistique",
            company: "Studio Créatif",
            image: "/static/images/testimonials/marie-laurent.webp"
          }
        },
        {
          content: "Une exploration visuelle qui nous a permis de définir clairement notre direction artistique.",
          author: {
            name: "Thomas Moreau",
            role: "Fondateur",
            company: "Brand New",
            image: "/static/images/testimonials/thomas-moreau.webp"
          }
        },
        {
          content: "Un outil précieux qui a unifié la vision de toute notre équipe créative.",
          author: {
            name: "Sophie Martin",
            role: "Creative Lead",
            company: "Design Factory",
            image: "/static/images/testimonials/sophie-martin.webp"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Charte graphique",
          description: "Création d'une charte graphique complète.",
          icon: FileImage
        },
        {
          title: "Style Guide",
          description: "Guide détaillé d'utilisation de votre identité.",
          icon: Layers
        },
        {
          title: "Direction artistique",
          description: "Accompagnement créatif continu.",
          icon: PenTool
        }
      ]
    },
    {
      id: "wireframes",
      name: "Wireframes",
      description: "Conception de la structure et du parcours utilisateur",
      route: Routes.service.design.wireframes,
      icon: LayoutTemplate,
      heroTitle: "Wireframes & Architecture UX",
      heroDescription: "Structurez vos interfaces utilisateur avec des wireframes professionnels. Notre expertise en UX design vous garantit une architecture intuitive et une expérience utilisateur optimale dès les premières étapes de votre projet.",
      features: [
        {
          title: "Architecture UX",
          description: "Structure claire et logique de vos interfaces.",
          icon: LayoutTemplate
        },
        {
          title: "Parcours utilisateur",
          description: "Optimisation des flux de navigation.",
          icon: Users
        },
        {
          title: "Hiérarchie visuelle",
          description: "Organisation efficace du contenu et des fonctionnalités.",
          icon: Layers
        },
        {
          title: "Interactions",
          description: "Définition des comportements et des transitions.",
          icon: MousePointer
        }
      ],
      benefits: [
        {
          title: "Responsive Design",
          description: "Adaptation à tous les formats d'écrans.",
          icon: Smartphone
        },
        {
          title: "Prototypage rapide",
          description: "Tests et itérations efficaces.",
          icon: Zap
        },
        {
          title: "Collaboration",
          description: "Communication claire avec toutes les parties prenantes.",
          icon: Share2
        },
        {
          title: "Validation précoce",
          description: "Détection et correction rapide des problèmes UX.",
          icon: Eye
        }
      ],
      faqItems: [
        {
          question: "Qu'est-ce qu'un wireframe et pourquoi est-ce important ?",
          answer: "Un wireframe est une représentation schématique de votre interface qui se concentre sur la structure, la hiérarchie et les fonctionnalités, sans les éléments de design final. C'est une étape cruciale qui permet de valider l'architecture de l'information et l'expérience utilisateur avant d'investir dans le design détaillé."
        },
        {
          question: "Comment se déroule le processus de création ?",
          answer: "Le processus commence par l'analyse de vos besoins et objectifs. Nous créons ensuite des wireframes de basse fidélité pour valider la structure globale, puis des versions plus détaillées avec les interactions. Après plusieurs itérations et vos retours, nous finalisons les wireframes qui serviront de base au design UI."
        },
        {
          question: "Quels livrables sont fournis ?",
          answer: "Vous recevez un ensemble complet de wireframes pour chaque écran clé, des diagrammes de flux utilisateur, une documentation des interactions, et des prototypes interactifs pour tester les parcours utilisateur. Tous les fichiers sources sont également fournis."
        },
        {
          question: "Comment gérez-vous le responsive design ?",
          answer: "Nous créons des wireframes adaptés à chaque format d'écran important (desktop, tablet, mobile) en suivant une approche mobile-first. Chaque version est optimisée pour offrir la meilleure expérience utilisateur possible sur son support."
        },
        {
          question: "Combien de temps prend la création des wireframes ?",
          answer: "La durée dépend de la complexité du projet, mais généralement 2 à 4 semaines pour un projet moyen, incluant les phases d'analyse, création, itérations et finalisation. Nous établissons un planning détaillé au début du projet."
        }
      ],
      testimonials: [
        {
          content: "Les wireframes nous ont permis d'optimiser notre parcours utilisateur avant même de commencer le design.",
          author: {
            name: "Julie Dubois",
            role: "Product Owner",
            company: "UX Vision",
            image: "/static/images/testimonials/julie-dubois.jpg"
          }
        },
        {
          content: "Une étape cruciale qui a considérablement réduit nos coûts de développement.",
          author: {
            name: "Pierre Martin",
            role: "CTO",
            company: "AppFlow",
            image: "/static/images/testimonials/pierre-martin.jpg"
          }
        },
        {
          content: "La qualité des wireframes a facilité la communication avec toute l'équipe.",
          author: {
            name: "Sarah Lambert",
            role: "UX Designer",
            company: "DigitalFirst",
            image: "/static/images/testimonials/sarah-lambert.jpg"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Audit UX",
          description: "Analyse approfondie de vos interfaces existantes.",
          icon: ListChecks
        },
        {
          title: "Prototypage",
          description: "Création de prototypes interactifs.",
          icon: LayoutGrid
        },
        {
          title: "Documentation UX",
          description: "Documentation détaillée des parcours utilisateur.",
          icon: FileText
        }
      ]
    },
    {
      id: "ui",
      name: "Maquettage UI",
      description: "Design détaillé des interfaces utilisateur",
      route: Routes.service.design.ui,
      icon: Smartphone,
      heroTitle: "Design d'Interface Utilisateur",
      heroDescription: "Créez des interfaces modernes, élégantes et intuitives pour vos applications. Notre expertise en design UI vous garantit des maquettes professionnelles qui captiveront vos utilisateurs.",
      features: [
        {
          title: "Design moderne",
          description: "Interfaces élégantes suivant les dernières tendances.",
          icon: PenTool
        },
        {
          title: "Système de design",
          description: "Composants cohérents et réutilisables.",
          icon: Layers
        },
        {
          title: "Responsive design",
          description: "Adaptation parfaite à tous les écrans.",
          icon: Smartphone
        },
        {
          title: "Animations & micro-interactions",
          description: "Interactions fluides et engageantes.",
          icon: Zap
        }
      ],
      benefits: [
        {
          title: "Identité visuelle",
          description: "Design cohérent avec votre marque.",
          icon: Palette
        },
        {
          title: "Expérience utilisateur",
          description: "Interfaces intuitives et agréables à utiliser.",
          icon: Eye
        },
        {
          title: "Design system",
          description: "Bibliothèque de composants réutilisables.",
          icon: Layers
        },
        {
          title: "Accessibilité",
          description: "Interfaces accessibles à tous les utilisateurs.",
          icon: Users
        }
      ],
      faqItems: [
        {
          question: "Comment se déroule le processus de design UI ?",
          answer: "Le processus commence par l'analyse de vos besoins et de votre identité de marque. Nous créons ensuite des premières versions des écrans clés, établissons le système de design, puis itérons sur les maquettes détaillées. Chaque étape inclut vos retours pour assurer un résultat parfaitement aligné avec vos attentes."
        },
        {
          question: "Quels outils et livrables sont fournis ?",
          answer: "Nous utilisons principalement Figma pour le design UI. Vous recevez les maquettes détaillées de tous les écrans, un système de design complet avec ses composants, les spécifications pour les développeurs, et les assets nécessaires à l'intégration."
        },
        {
          question: "Comment gérez-vous le responsive design ?",
          answer: "Nous suivons une approche mobile-first et créons des maquettes pour chaque breakpoint important (mobile, tablette, desktop). Chaque interface est optimisée pour offrir la meilleure expérience possible sur son support."
        },
        {
          question: "Comment garantissez-vous la cohérence du design ?",
          answer: "Nous créons un système de design complet incluant une bibliothèque de composants, des règles typographiques, une palette de couleurs et des principes de design. Ce système assure la cohérence à travers toute l'interface."
        },
        {
          question: "Comment facilitez-vous le travail des développeurs ?",
          answer: "Nous fournissons des spécifications détaillées pour chaque composant, incluant les mesures, les styles, les états et les interactions. Nous utilisons également des outils comme Zeplin ou les exports Figma pour faciliter l'intégration."
        }
      ],
      testimonials: [
        {
          content: "Le nouveau design de notre application a considérablement amélioré l'engagement de nos utilisateurs.",
          author: {
            name: "Mathilde Laurent",
            role: "Product Manager",
            company: "AppLife",
            image: "/static/images/testimonials/mathilde-laurent.webp"
          }
        },
        {
          content: "Un design moderne qui a transformé l'image de notre marque.",
          author: {
            name: "Antoine Dubois",
            role: "Directeur Marketing",
            company: "BrandNew",
            image: "/static/images/testimonials/antoine-dubois.webp"
          }
        },
        {
          content: "La qualité des maquettes a facilité le travail de nos développeurs.",
          author: {
            name: "Claire Martin",
            role: "Lead Developer",
            company: "TechFlow",
            image: "/static/images/testimonials/claire-martin.webp"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Design system",
          description: "Création d'une bibliothèque de composants.",
          icon: LayoutGrid
        },
        {
          title: "Prototypage",
          description: "Création de prototypes interactifs.",
          icon: MousePointer
        },
        {
          title: "Développement",
          description: "Intégration de vos maquettes en code.",
          icon: FileCode
        }
      ]
    },
    {
      id: "branding",
      name: "Charte graphique",
      description: "Création de votre identité visuelle complète",
      route: Routes.service.design.branding,
      icon: Palette,
      heroTitle: "Branding & Identité de Marque",
      heroDescription: "Donnez vie à votre marque avec une identité visuelle distinctive et mémorable. Notre expertise en branding vous aide à créer une image de marque qui résonne avec votre audience et reflète vos valeurs.",
      features: [
        {
          title: "Identité visuelle",
          description: "Création d'une identité unique et mémorable.",
          icon: Palette
        },
        {
          title: "Valeurs de marque",
          description: "Expression visuelle de votre ADN et vos valeurs.",
          icon: Heart
        },
        {
          title: "Charte graphique",
          description: "Documentation complète de votre identité.",
          icon: FileText
        },
        {
          title: "Design system",
          description: "Éléments visuels cohérents et réutilisables.",
          icon: PenTool
        }
      ],
      benefits: [
        {
          title: "Reconnaissance",
          description: "Image de marque mémorable et distinctive.",
          icon: Target
        },
        {
          title: "Cohérence",
          description: "Communication visuelle unifiée sur tous les supports.",
          icon: LayoutTemplate
        },
        {
          title: "Confiance",
          description: "Crédibilité renforcée auprès de votre audience.",
          icon: Users
        },
        {
          title: "Portée",
          description: "Impact visuel fort sur tous les canaux.",
          icon: Globe
        }
      ],
      faqItems: [
        {
          question: "Que comprend une identité de marque complète ?",
          answer: "Une identité de marque complète inclut le logo, la palette de couleurs, la typographie, les éléments graphiques, le ton de voix, et les règles d'utilisation. Nous fournissons une charte graphique détaillée qui documente tous ces éléments et guide leur utilisation cohérente."
        },
        {
          question: "Comment se déroule le processus de création ?",
          answer: "Le processus commence par une phase de découverte pour comprendre votre marque, vos valeurs et votre audience. Nous développons ensuite des concepts créatifs, créons les éléments visuels, et itérons selon vos retours. Le processus se termine par la livraison d'une charte graphique complète."
        },
        {
          question: "Quels livrables sont fournis ?",
          answer: "Vous recevez un package complet incluant : logos (différentes versions), palette de couleurs, typographies, éléments graphiques, modèles de documents, guides d'utilisation, et fichiers sources dans tous les formats nécessaires."
        },
        {
          question: "Comment garantissez-vous l'unicité de l'identité ?",
          answer: "Nous effectuons une recherche approfondie de votre marché et de la concurrence pour créer une identité distinctive. Nous vérifions également la disponibilité des éléments visuels pour éviter tout conflit avec des marques existantes."
        },
        {
          question: "Comment gérez-vous la transition vers la nouvelle identité ?",
          answer: "Nous fournissons un plan de déploiement progressif qui guide la transition vers la nouvelle identité. Cela inclut des recommandations pour la communication interne et externe, et un calendrier de mise en œuvre."
        }
      ],
      testimonials: [
        {
          content: "Notre nouvelle identité visuelle a transformé la perception de notre marque sur le marché.",
          author: {
            name: "Émilie Robert",
            role: "Directrice Marketing",
            company: "BrandNew",
            image: "/static/images/testimonials/emilie-robert.webp"
          }
        },
        {
          content: "Une identité qui reflète parfaitement nos valeurs et résonne avec notre audience.",
          author: {
            name: "Lucas Dupont",
            role: "Fondateur",
            company: "StartupVision",
            image: "/static/images/testimonials/lucas-dupont.webp"
          }
        },
        {
          content: "La cohérence de notre marque a considérablement renforcé notre crédibilité.",
          author: {
            name: "Marie Lambert",
            role: "Directrice Communication",
            company: "InnoGroup",
            image: "/static/images/testimonials/marie-lambert.webp"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Marketing Kit",
          description: "Création de supports marketing cohérents.",
          icon: MessageSquare
        },
        {
          title: "Réseaux sociaux",
          description: "Adaptation pour les médias sociaux.",
          icon: Share2
        },
        {
          title: "Supports print",
          description: "Création de supports imprimés.",
          icon: FileImage
        }
      ]
    },
    {
      id: "audit",
      name: "Audit UX/UI",
      description: "Analyse et optimisation de vos interfaces existantes",
      route: Routes.service.design.audit,
      icon: FileCode,
      heroTitle: "Audit UX/UI & Optimisation",
      heroDescription: "Améliorez l'expérience utilisateur de vos interfaces grâce à un audit professionnel. Notre expertise vous garantit une analyse approfondie et des recommandations concrètes pour optimiser vos interfaces.",
      features: [
        {
          title: "Analyse heuristique",
          description: "Évaluation experte basée sur les principes UX.",
          icon: Search
        },
        {
          title: "Tests utilisateurs",
          description: "Observation et analyse des comportements réels.",
          icon: Users
        },
        {
          title: "Analytics",
          description: "Analyse des données d'utilisation.",
          icon: BarChart
        },
        {
          title: "Accessibilité",
          description: "Vérification des standards d'accessibilité.",
          icon: Eye
        }
      ],
      benefits: [
        {
          title: "Conversion",
          description: "Identification des freins à la conversion.",
          icon: Target
        },
        {
          title: "Performance",
          description: "Analyse des métriques de performance.",
          icon: Zap
        },
        {
          title: "Satisfaction",
          description: "Mesure de la satisfaction utilisateur.",
          icon: BarChart
        },
        {
          title: "Parcours",
          description: "Optimisation des parcours utilisateurs.",
          icon: MousePointer
        }
      ],
      faqItems: [
        {
          question: "Que comprend un audit UX/UI complet ?",
          answer: "Un audit complet inclut : analyse heuristique basée sur les principes UX, tests utilisateurs, analyse des données analytics, évaluation de l'accessibilité, benchmark concurrentiel, et recommandations détaillées. Nous fournissons un rapport complet avec des solutions concrètes."
        },
        {
          question: "Comment se déroule le processus d'audit ?",
          answer: "Le processus commence par une phase de découverte pour comprendre vos objectifs et KPIs. Nous réalisons ensuite les différentes analyses (heuristique, données, tests), synthétisons les résultats, et préparons un rapport détaillé avec des recommandations priorisées."
        },
        {
          question: "Quels livrables sont fournis ?",
          answer: "Vous recevez un rapport d'audit complet incluant : synthèse exécutive, analyses détaillées, visualisations des données, problèmes identifiés avec leur niveau de gravité, recommandations priorisées, et plan d'action suggéré."
        },
        {
          question: "Comment mesurez-vous l'impact des recommandations ?",
          answer: "Nous définissons des KPIs spécifiques pour chaque recommandation et mettons en place un suivi des métriques clés (taux de conversion, satisfaction utilisateur, temps de complétion des tâches, etc.) pour mesurer l'impact des améliorations."
        },
        {
          question: "Proposez-vous un accompagnement post-audit ?",
          answer: "Oui, nous proposons un accompagnement pour la mise en œuvre des recommandations, incluant : priorisation des actions, support dans l'implémentation, et mesure des résultats. Nous pouvons également réaliser des audits de suivi."
        }
      ],
      testimonials: [
        {
          content: "L'audit a révélé des problèmes critiques que nous n'avions pas identifiés et nous a permis d'augmenter nos conversions de 45%.",
          author: {
            name: "Thomas Leroux",
            role: "Product Owner",
            company: "E-Commerce Plus",
            image: "/static/images/testimonials/thomas-leroux.webp"
          }
        },
        {
          content: "Les recommandations concrètes nous ont permis d'améliorer significativement l'expérience de nos utilisateurs.",
          author: {
            name: "Sophie Martin",
            role: "UX Designer",
            company: "AppSolution",
            image: "/static/images/testimonials/sophie-martin.webp"
          }
        },
        {
          content: "Un audit complet qui nous a fourni une feuille de route claire pour nos améliorations.",
          author: {
            name: "Laurent Dubois",
            role: "Directeur Digital",
            company: "WebAgency",
            image: "/static/images/testimonials/laurent-dubois.webp"
          }
        }
      ],
      complementaryServices: [
        {
          title: "Tests utilisateurs",
          description: "Sessions de tests approfondis avec vos utilisateurs.",
          icon: Users
        },
        {
          title: "Analytics avancés",
          description: "Mise en place de tracking et analyse approfondie.",
          icon: BarChart
        },
        {
          title: "Formation UX",
          description: "Formation de vos équipes aux bonnes pratiques.",
          icon: MessageSquare
        }
      ]
    }
  ]
};

export default designCategory;