import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Smartphone, 
  Tablet,
  AppWindow,
  Layout,
  Share2,
  MessageSquare,
  PenTool,
  Gauge,
  Code,
  Store
} from 'lucide-react';

export const metadata = {
  title: "Développement Mobile Frontend | onRuntime Studio",
  description: "Créez des applications mobiles performantes avec React Native. Notre expertise en développement mobile vous garantit des applications natives de qualité pour iOS et Android.",
};

const MobileFrontendServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Développement Mobile React Native"
      heroDescription="Créez des applications mobiles natives performantes pour iOS et Android avec React Native. Notre expertise vous garantit des applications robustes et une expérience utilisateur exceptionnelle."
      heroImage="/static/images/services/frontend/mobile/frontend-react.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en développement mobile"
        description="Notre expertise en React Native vous garantit des applications mobiles performantes et évolutives."
        features={[
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
        ]}
        image="/static/images/services/frontend/mobile/frontend-ux.webp"
      />

      {/* Avantages du développement mobile */}
      <FeatureSection
        title="Applications mobiles natives"
        description="Découvrez les avantages du développement mobile avec React Native."
        features={[
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
        ]}
        image="/static/images/services/frontend/mobile/frontend-multiplatforme.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets mobiles"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement mobile"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre projet mobile avec nos services additionnels"
        features={[
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
        ]}
            image="/static/images/services/frontend/mobile/frontend-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default MobileFrontendServicePage;