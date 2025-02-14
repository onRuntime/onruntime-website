import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Palette, 
  Settings,
  LayoutDashboard,
  Search,
  Code,
  Share2,
  MessageSquare,
  Zap,
  MousePointer,
  Laptop
} from 'lucide-react';

export const metadata = {
  title: "Développement Webflow | onRuntime Studio",
  description: "Créez un site web moderne et dynamique avec Webflow. De la conception visuelle à l'interaction utilisateur, nous donnons vie à votre vision avec une approche no-code professionnelle.",
};

const WebflowServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Développement Webflow professionnel"
      heroDescription="Donnez vie à votre vision avec Webflow. Notre expertise vous garantit un site web moderne, interactif et parfaitement adapté à vos besoins, sans compromis sur la qualité."
      heroImage="/static/images/services/webflow-hero.jpg"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Design et développement sans compromis"
        description="Webflow révolutionne la création web en combinant design visuel et contrôle total. Notre expertise vous permet d'en exploiter tout le potentiel."
        features={[
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
        ]}
        image="/static/images/services/webflow-features.jpg"
      />

      {/* Avantages Webflow */}
      <FeatureSection
        title="Pourquoi choisir Webflow ?"
        description="Découvrez les avantages qui font de Webflow la plateforme idéale pour votre présence web moderne."
        features={[
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
            icon: Laptop
          },
          {
            title: "Hébergement optimisé",
            description: "Infrastructure cloud robuste avec CDN global pour des performances optimales.",
            icon: Zap
          }
        ]}
        image="/static/images/services/webflow-benefits.jpg"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets Webflow"
        testimonials={[
          {
            content: "Notre site Webflow nous a permis de nous démarquer avec un design unique et des animations impressionnantes.",
            author: {
              name: "Sarah Dubois",
              role: "Directrice Artistique",
              company: "Studio Créatif",
              image: "/static/images/testimonials/sarah-dubois.jpg"
            }
          },
          {
            content: "La flexibilité de Webflow nous permet de mettre à jour notre site facilement tout en gardant un design professionnel.",
            author: {
              name: "Marc Laurent",
              role: "CEO",
              company: "Tech Innovate",
              image: "/static/images/testimonials/marc-laurent.jpg"
            }
          },
          {
            content: "L'équipe d'onRuntime a créé une expérience web unique qui représente parfaitement notre marque.",
            author: {
              name: "Julie Martin",
              role: "Responsable Marketing",
              company: "Design Lab",
              image: "/static/images/testimonials/julie-martin.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement Webflow"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre présence en ligne avec nos services additionnels"
        features={[
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
        ]}
      />
    </ServiceLayout>
  );
};

export default WebflowServicePage;