// src/constants/cities.ts
import { City } from "@/types/city";
import Routes from "@/constants/routes";

export const cities: City[] = [
  {
    id: "paris",
    name: "Paris",
    region: "Île-de-France",
    population: 2161000,
    title: "Agence Web à Paris | Développement Web, Mobile & Design UI/UX",
    description: "Votre partenaire digital à Paris pour tous vos projets web, mobile et design UI/UX. Expertise locale et solutions digitales personnalisées dans la capitale.",
    introText: "Située au cœur de Paris, notre agence digitale combine créativité parisienne et expertise technique pour transformer vos idées en solutions digitales performantes. En plein centre de l'innovation française, nous accompagnons startups, PME et grands groupes parisiens dans leur transformation numérique.",
    expertiseText: "Notre équipe parisienne maîtrise les dernières technologies du web et du mobile pour créer des expériences utilisateur exceptionnelles. Nous comprenons les spécificités du marché parisien et ses exigences en matière d'innovation et d'excellence.",
    whyChooseUs: "Choisir onRuntime Studio à Paris, c'est opter pour une agence qui comprend les défis spécifiques des entreprises parisiennes. Notre proximité avec l'écosystème startup et tech de la capitale nous permet de vous apporter des solutions adaptées à votre contexte et à vos ambitions.",
    strengths: [
      {
        title: "Au cœur de l'innovation parisienne",
        description: "Notre équipe parisienne est immergée dans l'un des écosystèmes tech les plus dynamiques d'Europe."
      },
      {
        title: "Réseau local étendu",
        description: "Bénéficiez de notre réseau de partenaires et d'experts parisiens pour enrichir votre projet."
      },
      {
        title: "Expertise secteurs de pointe",
        description: "Fintech, luxe, retail, médias: nous connaissons les enjeux des industries parisiennes."
      },
      {
        title: "Agilité métropolitaine",
        description: "Notre méthodologie s'adapte au rythme intense de la capitale et de ses entreprises."
      }
    ],
    focusedServices: [
      {
        name: "Design UI/UX premium",
        description: "Des interfaces élégantes qui reflètent l'excellence attendue des marques parisiennes.",
        link: Routes.service.design.root
      },
      {
        name: "Développement d'applications mobiles",
        description: "Applications iOS et Android performantes pour conquérir le marché parisien exigeant.",
        link: Routes.service.frontend.mobile
      },
      {
        name: "Solutions e-commerce haut de gamme",
        description: "Boutiques en ligne sophistiquées avec Shopify et solutions sur mesure.",
        link: Routes.service.integration.shopify
      }
    ],
    localProjects: [
      {
        name: "Plateforme de réservation événementielle",
        description: "Application de découverte et réservation d'événements culturels parisiens, utilisée par plus de 50 000 habitants.",
        imageUrl: "/static/images/projects/tonightpass/thumbnail.jpg",
        tags: ["Mobile", "Web", "Design UI/UX"]
      },
      {
        name: "Site vitrine pour créateur parisien",
        description: "Création d'un site showcase pour un créateur de mode du Marais, avec système de prise de rendez-vous intégré.",
        imageUrl: "/static/images/agency/paris-project-fashion.jpg",
        tags: ["Web", "Design UI/UX"]
      }
    ],
    testimonials: [
      {
        name: "Sophie Martin",
        role: "Directrice Marketing",
        company: "Mode Élégance Paris",
        text: "L'équipe d'onRuntime à Paris a parfaitement saisi l'essence de notre marque parisienne. Leur design élégant et fonctionnel a transformé notre présence en ligne."
      },
      {
        name: "Thomas Dubois",
        role: "Fondateur",
        company: "TechStart Paris",
        text: "Leur connaissance de l'écosystème startup parisien nous a permis de développer une solution parfaitement adaptée à notre marché cible dans la capitale."
      }
    ],
    contactInfo: {
      address: "16 Rue du Faubourg Saint-Denis, 75010 Paris",
      phone: "+33 7 56 90 93 75",
      email: "paris@onruntime.com",
      meetingPoints: ["Station F", "WeWork La Fayette", "Café de la Gare"]
    },
    stats: [
      {
        label: "Projets parisiens",
        value: "75+",
        description: "Réalisations pour des clients de Paris"
      },
      {
        label: "Startups accompagnées",
        value: "30+",
        description: "Jeunes pousses parisiennes"
      },
      {
        label: "Satisfaction client",
        value: "98%",
        description: "De clients satisfaits à Paris"
      }
    ],
    geo: {
      latitude: "48.856614",
      longitude: "2.3522219"
    },
    nearbyLocations: ["boulogne-billancourt", "saint-denis", "montreuil", "versailles"]
  },
  {
    id: "marseille",
    name: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    population: 870731,
    title: "Agence Web & Mobile à Marseille | Solutions digitales sur mesure",
    description: "Expert en développement web, mobile et design UI/UX à Marseille. Solutions digitales innovantes adaptées aux entreprises méditerranéennes.",
    introText: "Au cœur de Marseille, onRuntime Studio apporte son expertise digitale aux entreprises de la cité phocéenne. Entre tradition méditerranéenne et innovation, nous développons des solutions web et mobile qui captent l'esprit unique de cette métropole dynamique du sud.",
    expertiseText: "Notre connaissance approfondie du tissu économique marseillais, de son écosystème touristique et de ses initiatives numériques nous permet de créer des expériences digitales parfaitement adaptées aux besoins locaux et aux ambitions méditerranéennes.",
    whyChooseUs: "Notre agence comprend les spécificités du marché marseillais et méditerranéen. De la valorisation du patrimoine à la digitalisation du commerce local, en passant par les solutions pour le secteur maritime, nous apportons notre expertise technique et créative aux défis uniques de Marseille.",
    strengths: [
      {
        title: "Expertise méditerranéenne",
        description: "Solutions digitales adaptées aux secteurs clés de Marseille: tourisme, maritime, commerce."
      },
      {
        title: "Design inspiré du Sud",
        description: "Interfaces qui capturent l'esprit méditerranéen tout en respectant les standards internationaux."
      },
      {
        title: "Connaissance du marché local",
        description: "Compréhension des enjeux spécifiques de la région PACA et de ses entreprises."
      },
      {
        title: "Support de proximité",
        description: "Accompagnement personnalisé pour les acteurs économiques marseillais."
      }
    ],
    focusedServices: [
      {
        name: "Sites web et e-commerce",
        description: "Solutions adaptées au commerce local et au tourisme marseillais.",
        link: Routes.service.integration.shopify
      },
      {
        name: "Applications touristiques",
        description: "Expériences mobiles innovantes pour valoriser le patrimoine marseillais.",
        link: Routes.service.frontend.mobile
      },
      {
        name: "Identité visuelle locale",
        description: "Design qui capture l'esprit méditerranéen et l'énergie marseillaise.",
        link: Routes.service.design.branding
      }
    ],
    localProjects: [
      {
        name: "Application de découverte du patrimoine",
        description: "App mobile guidant les touristes à travers l'histoire et les trésors cachés de Marseille.",
        imageUrl: "/static/images/agency/marseille-app-patrimoine.jpg",
        tags: ["Mobile", "Tourisme", "Géolocalisation"]
      },
      {
        name: "Plateforme e-commerce locale",
        description: "Marketplace connectant les artisans marseillais aux consommateurs, valorisant le savoir-faire local.",
        imageUrl: "/static/images/agency/marseille-marketplace.jpg",
        tags: ["Web", "E-commerce", "Marketplace"]
      }
    ],
    testimonials: [
      {
        name: "Jean Moreno",
        role: "Directeur",
        company: "Office de Tourisme de Marseille",
        text: "L'application développée par onRuntime a transformé l'expérience touristique de notre ville. Une vraie réussite locale!"
      },
      {
        name: "Marie Cassard",
        role: "Fondatrice",
        company: "Artisanat Méditerranéen",
        text: "Leur compréhension des enjeux du commerce local marseillais nous a permis de créer une plateforme parfaitement adaptée à nos besoins."
      }
    ],
    contactInfo: {
      phone: "+33 7 56 90 93 75",
      email: "marseille@onruntime.com",
      meetingPoints: ["Vieux-Port", "La Joliette", "Prado"]
    },
    stats: [
      {
        label: "Projets locaux",
        value: "35+",
        description: "Réalisations sur Marseille"
      },
      {
        label: "Commerce local",
        value: "45%",
        description: "De nos clients marseillais"
      },
      {
        label: "Tourisme & Culture",
        value: "30%",
        description: "Projets dans ce secteur"
      }
    ],
    geo: {
      latitude: "43.296482",
      longitude: "5.36978"
    },
    nearbyLocations: ["aix-en-provence", "toulon", "avignon", "montpellier"]
  },
  {
    id: "lyon",
    name: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    population: 518635,
    title: "Agence Web & Design UI/UX à Lyon | Développement sur mesure",
    description: "Solutions digitales innovantes à Lyon. Notre agence lyonnaise développe des sites web, applications mobiles et designs UI/UX pour dynamiser votre entreprise.",
    introText: "Implantée à Lyon, carrefour économique majeur entre Paris et la Méditerranée, notre agence digitale met son expertise au service des entreprises lyonnaises. Nous combinons l'innovation technique et la rigueur pour créer des solutions digitales qui répondent aux ambitions de la capitale des Gaules.",
    expertiseText: "Notre équipe lyonnaise maîtrise les dernières technologies du web et du mobile, avec une connaissance approfondie des attentes des entreprises locales. Entre tradition et innovation, nous concevons des expériences utilisateur qui reflètent l'excellence lyonnaise.",
    whyChooseUs: "Choisir onRuntime Studio à Lyon, c'est s'associer à une équipe qui comprend les spécificités du tissu économique local, des industries traditionnelles aux startups innovantes. Notre approche combine excellence technique et vision stratégique pour vous accompagner dans votre transformation digitale.",
    strengths: [
      {
        title: "Au cœur de l'écosystème lyonnais",
        description: "Parfaite connaissance des acteurs économiques et technologiques de la région."
      },
      {
        title: "Excellence technique",
        description: "Solutions de haute qualité reflétant la tradition d'excellence lyonnaise."
      },
      {
        title: "Approche multisectorielle",
        description: "Expertise adaptée aux diverses industries de la région: gastronomie, pharma, textile..."
      },
      {
        title: "Agilité et pragmatisme",
        description: "Méthodologies flexibles héritées de l'esprit entrepreneurial lyonnais."
      }
    ],
    focusedServices: [
      {
        name: "Applications métier",
        description: "Solutions digitales optimisant les processus des industries lyonnaises.",
        link: Routes.service.frontend.web
      },
      {
        name: "E-commerce gastronomique",
        description: "Plateformes valorisant l'excellence culinaire lyonnaise à l'international.",
        link: Routes.service.integration.shopify
      },
      {
        name: "Design UI/UX industriel",
        description: "Interfaces utilisateur ergonomiques pour secteurs techniques et industriels.",
        link: Routes.service.design.ui
      }
    ],
    localProjects: [
      {
        name: "Plateforme pour artisans lyonnais",
        description: "Solution connectant les artisans de la soie et autres savoir-faire locaux aux marchés internationaux.",
        imageUrl: "/static/images/agency/lyon-artisans.jpg",
        tags: ["Web", "E-commerce", "Marketplace"]
      },
      {
        name: "Application découverte gastronomique",
        description: "Guide interactif des bouchons lyonnais et expériences culinaires de la capitale gastronomique.",
        imageUrl: "/static/images/agency/lyon-gastronomie.jpg",
        tags: ["Mobile", "Géolocalisation", "Restauration"]
      }
    ],
    testimonials: [
      {
        name: "Philippe Blanc",
        role: "Directeur",
        company: "Association des Artisans de la Croix-Rousse",
        text: "Leur plateforme a donné une visibilité internationale à notre savoir-faire lyonnais. Un impact concret sur notre activité."
      },
      {
        name: "Isabelle Mercier",
        role: "Fondatrice",
        company: "LyonTech Innovations",
        text: "Une équipe qui comprend parfaitement les enjeux de la tech lyonnaise et sait traduire nos besoins en solutions concrètes."
      }
    ],
    contactInfo: {
      address: "10 Place Bellecour, 69002 Lyon",
      phone: "+33 7 56 90 93 75",
      email: "lyon@onruntime.com",
      meetingPoints: ["Part-Dieu", "Confluence", "Vieux Lyon"]
    },
    stats: [
      {
        label: "Projets lyonnais",
        value: "45+",
        description: "Réalisations locales"
      },
      {
        label: "Industries servies",
        value: "12+",
        description: "Secteurs d'activité"
      },
      {
        label: "Satisfaction client",
        value: "97%",
        description: "Clients satisfaits à Lyon"
      }
    ],
    geo: {
      latitude: "45.764043",
      longitude: "4.835659"
    },
    nearbyLocations: ["villeurbanne", "saint-etienne", "grenoble", "clermont-ferrand"]
  },
  {
    id: "toulouse",
    name: "Toulouse",
    region: "Occitanie",
    population: 479553,
    title: "Agence Web à Toulouse | Développement & Design UI/UX",
    description: "Solutions digitales sur mesure à Toulouse. Développement web, mobile et design UI/UX par notre agence toulousaine pour dynamiser votre activité.",
    introText: "Au cœur de la Ville Rose, notre agence digitale apporte des solutions innovantes aux entreprises toulousaines. Forte d'une compréhension du tissu économique local, entre aéronautique, spatial et numérique, nous développons des projets digitaux adaptés aux ambitions du Sud-Ouest.",
    expertiseText: "Notre équipe toulousaine combine expertise technique et créativité pour répondre aux enjeux spécifiques de la région. De l'aéronautique aux startups innovantes, nous maîtrisons les codes des secteurs clés toulousains pour créer des expériences digitales percutantes.",
    whyChooseUs: "Choisir onRuntime Studio à Toulouse, c'est opter pour une agence qui comprend les spécificités de l'écosystème local. Notre expertise technique, notre approche agile et notre ancrage dans le territoire toulousain nous permettent de proposer des solutions parfaitement adaptées à vos besoins.",
    strengths: [
      {
        title: "Expertise high-tech",
        description: "Solutions adaptées aux industries de pointe toulousaines: aéronautique, spatial, IoT."
      },
      {
        title: "Connexion à l'écosystème local",
        description: "Partenariats actifs avec les incubateurs et structures d'innovation toulousaines."
      },
      {
        title: "Design inspiré du Sud-Ouest",
        description: "Interfaces utilisateur qui capturent l'esprit toulousain, entre tradition et innovation."
      },
      {
        title: "Approche technologique avancée",
        description: "Utilisation des dernières technologies reflétant la culture d'excellence technique toulousaine."
      }
    ],
    focusedServices: [
      {
        name: "Applications métier aerospace",
        description: "Solutions digitales pour l'industrie aéronautique et spatiale toulousaine.",
        link: Routes.service.backend.cloud
      },
      {
        name: "Sites web performants",
        description: "Vitrines digitales et solutions e-commerce adaptées aux entreprises du Sud-Ouest.",
        link: Routes.service.frontend.web
      },
      {
        name: "IoT & interfaces connectées",
        description: "Solutions pour l'internet des objets et visualisation de données complexes.",
        link: Routes.service.backend.api
      }
    ],
    localProjects: [
      {
        name: "Dashboard aéronautique",
        description: "Interface de visualisation de données pour maintenance prédictive dans l'aéronautique toulousaine.",
        imageUrl: "/static/images/agency/toulouse-aeronautique.jpg",
        tags: ["Web", "Data Visualization", "Industrie"]
      },
      {
        name: "Application tourisme occitan",
        description: "Guide interactif des sites touristiques et gastronomiques de la région toulousaine.",
        imageUrl: "/static/images/agency/toulouse-tourisme.jpg",
        tags: ["Mobile", "Tourisme", "Géolocalisation"]
      }
    ],
    testimonials: [
      {
        name: "Marc Lacoste",
        role: "Directeur R&D",
        company: "AeroTech Toulouse",
        text: "L'interface développée par onRuntime a révolutionné notre approche de la maintenance prédictive. Une compréhension parfaite de nos enjeux techniques."
      },
      {
        name: "Claire Dupont",
        role: "Fondatrice",
        company: "Occitanie Gourmet",
        text: "Leur application valorise parfaitement notre patrimoine gastronomique toulousain. Un vrai plus pour notre visibilité locale et touristique."
      }
    ],
    contactInfo: {
      phone: "+33 7 56 90 93 75",
      email: "toulouse@onruntime.com",
      meetingPoints: ["Place du Capitole", "Espace Compans Caffarelli", "La Cité"]
    },
    stats: [
      {
        label: "Projets aerospace",
        value: "15+",
        description: "Solutions pour l'aéronautique"
      },
      {
        label: "Startups accompagnées",
        value: "25+",
        description: "Jeunes pousses toulousaines"
      },
      {
        label: "Taux de recommandation",
        value: "95%",
        description: "Clients prêts à nous recommander"
      }
    ],
    geo: {
      latitude: "43.604652",
      longitude: "1.444209"
    },
    nearbyLocations: ["montpellier", "bordeaux", "pau", "albi"]
  },
  {
    id: "nice",
    name: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    population: 342522,
    title: "Agence Web & Mobile à Nice | Design UI/UX et Développement",
    description: "Créez votre présence digitale sur la Côte d'Azur. Notre agence à Nice développe sites web, applications mobiles et designs UI/UX adaptés aux entreprises azuréennes.",
    introText: "Sur la prestigieuse Côte d'Azur, notre agence niçoise imagine et développe des solutions digitales qui reflètent l'élégance et le dynamisme de Nice. Entre mer et montagne, nous accompagnons les entreprises locales dans leur transformation numérique avec des créations digitales d'exception.",
    expertiseText: "Notre équipe niçoise combine expertise technique et sensibilité esthétique pour créer des expériences digitales qui captent l'essence de la Riviera. Spécialistes du tourisme, de l'hôtellerie de luxe et des services liés à l'art de vivre azuréen, nous développons des solutions parfaitement adaptées à l'écosystème local.",
    whyChooseUs: "Choisir onRuntime Studio à Nice, c'est opter pour une agence qui comprend les spécificités du marché azuréen, entre exigence esthétique, excellence du service et dimension internationale. Notre approche créative et technique s'adapte aux standards élevés de la Côte d'Azur.",
    strengths: [
      {
        title: "Excellence esthétique",
        description: "Design d'exception reflétant l'élégance et le raffinement de la Côte d'Azur."
      },
      {
        title: "Expertise tourisme et luxe",
        description: "Solutions adaptées aux secteurs prédominants de l'économie niçoise."
      },
      {
        title: "Approche internationale",
        description: "Développement multilingue adapté à la clientèle cosmopolite de la région."
      },
      {
        title: "Innovation méditerranéenne",
        description: "Technologies de pointe au service de l'art de vivre azuréen."
      }
    ],
    focusedServices: [
      {
        name: "Sites web premium",
        description: "Vitrines digitales élégantes pour hôtels, restaurants et commerces niçois.",
        link: Routes.service.integration.webflow
      },
      {
        name: "Applications tourisme et événementiel",
        description: "Solutions mobiles pour valoriser l'offre touristique et culturelle azuréenne.",
        link: Routes.service.frontend.mobile
      },
      {
        name: "Design UI/UX luxe",
        description: "Interfaces utilisateur raffinées pour marques et services haut de gamme.",
        link: Routes.service.design.ui
      }
    ],
    localProjects: [
      {
        name: "Plateforme pour événements de la Riviera",
        description: "Solution de découverte et réservation pour les événements prestigieux de la Côte d'Azur.",
        imageUrl: "/static/images/agency/nice-evenements.jpg",
        tags: ["Web", "Mobile", "Événementiel"]
      },
      {
        name: "Application hôtellerie de luxe",
        description: "Expérience digitale sur mesure pour un palace niçois, enrichissant le séjour des clients.",
        imageUrl: "/static/images/agency/nice-hotel.jpg",
        tags: ["Mobile", "Luxe", "Hospitality"]
      }
    ],
    testimonials: [
      {
        name: "Laurent Mercier",
        role: "Directeur",
        company: "Palais Azur",
        text: "L'application développée par onRuntime transforme l'expérience de nos clients et renforce l'image d'excellence de notre établissement niçois."
      },
      {
        name: "Sophie Blanc",
        role: "Directrice Marketing",
        company: "Nice Events",
        text: "Leur plateforme a considérablement augmenté la visibilité de nos événements auprès d'une clientèle internationale exigeante."
      }
    ],
    contactInfo: {
      phone: "+33 7 56 90 93 75",
      email: "nice@onruntime.com",
      meetingPoints: ["Promenade des Anglais", "Place Masséna", "Quartier du Port"]
    },
    stats: [
      {
        label: "Projets tourisme",
        value: "30+",
        description: "Solutions pour le secteur clé niçois"
      },
      {
        label: "Langues supportées",
        value: "12+",
        description: "Pour une clientèle internationale"
      },
      {
        label: "Satisfaction client",
        value: "98%",
        description: "Excellence azuréenne"
      }
    ],
    geo: {
      latitude: "43.7101728",
      longitude: "7.2619532"
    },
    nearbyLocations: ["cannes", "antibes", "monaco", "marseille"]
  },
  {
    id: "nantes",
    name: "Nantes",
    region: "Pays de la Loire",
    population: 309346,
    title: "Agence Web & Mobile à Nantes | Développement Digital Innovant",
    description: "Solutions digitales créatives et performantes à Nantes. Développement web, applications mobiles et design UI/UX par notre agence pour les entreprises du Grand Ouest.",
    introText: "Au cœur de Nantes, ville créative et dynamique de l'Ouest, notre agence digitale accompagne les entreprises locales dans leur transformation numérique. Entre tradition maritime et innovation, nous concevons des expériences digitales qui reflètent l'esprit nantais: créatif, durable et tourné vers l'avenir.",
    expertiseText: "Notre équipe nantaise combine expertise technique et créativité pour répondre aux défis numériques des entreprises du Grand Ouest. Nous maîtrisons les technologies de pointe tout en comprenant les spécificités du tissu économique local, de l'industrie maritime aux startups innovantes.",
    whyChooseUs: "Choisir onRuntime Studio à Nantes, c'est s'associer à une agence qui comprend l'écosystème digital du Grand Ouest. Notre approche combine innovation technique, sensibilité écologique et vision créative pour accompagner votre transformation numérique avec des solutions parfaitement adaptées à votre contexte.",
    strengths: [
      {
        title: "Créativité atlantique",
        description: "Solutions innovantes inspirées par l'écosystème créatif nantais et son dynamisme culturel."
      },
      {
        title: "Développement durable",
        description: "Approche éco-responsable du digital, reflétant l'engagement environnemental nantais."
      },
      {
        title: "Expertise maritime et industrielle",
        description: "Solutions adaptées au riche patrimoine industriel et portuaire de la région."
      },
      {
        title: "Innovation collaborative",
        description: "Méthodes de travail inspirées de l'esprit collaboratif des initiatives nantaises."
      }
    ],
    focusedServices: [
      {
        name: "Applications éco-conçues",
        description: "Solutions digitales responsables pour entreprises engagées dans la transition écologique.",
        link: Routes.service.frontend.web
      },
      {
        name: "Plateformes collaboratives",
        description: "Outils digitaux favorisant l'économie collaborative et les initiatives locales.",
        link: Routes.service.backend.api
      },
      {
        name: "Design UI/UX innovant",
        description: "Interfaces créatives reflétant l'esprit des Machines de l'Île et du patrimoine culturel nantais.",
        link: Routes.service.design.ui
      }
    ],
    localProjects: [
      {
        name: "Plateforme pour acteurs culturels",
        description: "Solution connectant les initiatives culturelles nantaises et facilitant l'accès aux événements locaux.",
        imageUrl: "/static/images/agency/nantes-culture.jpg",
        tags: ["Web", "Culture", "Événementiel"]
      },
      {
        name: "Application mobilité durable",
        description: "Solution multimodale pour optimiser les déplacements urbains écologiques à Nantes.",
        imageUrl: "/static/images/agency/nantes-mobilite.jpg",
        tags: ["Mobile", "Green Tech", "Smart City"]
      }
    ],
    testimonials: [
      {
        name: "Nicolas Durand",
        role: "Directeur",
        company: "Éco-Initiatives Nantes",
        text: "Leur approche digitale responsable correspond parfaitement à nos valeurs. L'application développée a considérablement amplifié l'impact de nos actions environnementales."
      },
      {
        name: "Marie Lefevre",
        role: "Fondatrice",
        company: "Collectif Culturel Nantais",
        text: "La plateforme conçue par onRuntime a transformé notre visibilité et connecté les acteurs culturels nantais comme jamais auparavant."
      }
    ],
    contactInfo: {
      address: "4 Rue des Olivettes, 44000 Nantes",
      phone: "+33 7 56 90 93 75",
      email: "nantes@onruntime.com",
      meetingPoints: ["Île de Nantes", "Quartier Bouffay", "Lieu Unique"]
    },
    stats: [
      {
        label: "Projets écologiques",
        value: "20+",
        description: "Solutions durables développées"
      },
      {
        label: "Startups accompagnées",
        value: "30+",
        description: "Jeunes pousses de l'Ouest"
      },
      {
        label: "Satisfaction client",
        value: "96%",
        description: "Clients satisfaits à Nantes"
      }
    ],
    geo: {
      latitude: "47.218371",
      longitude: "-1.553621"
    },
    nearbyLocations: ["rennes", "angers", "la-rochelle", "vannes"]
  }
]
