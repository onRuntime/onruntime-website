import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Wifi,
  Smartphone,
  Cloud,
  Zap,
  Bell,
  Download,
  ArrowDownToLine,
  Globe,
  LineChart,
  Shield
} from 'lucide-react';

export const metadata = {
  title: "Développement Progressive Web App (PWA) | onRuntime Studio",
  description: "Créez des applications web progressives performantes qui offrent une expérience proche du natif. Notre expertise en PWA vous garantit des applications accessibles et engageantes.",
};

const PWAServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Progressive Web Apps (PWA)"
      heroDescription="Transformez votre site web en véritable application installable avec les Progressive Web Apps. Offrez une expérience utilisateur exceptionnelle, en ligne comme hors ligne."
      heroImage="/static/images/services/frontend/pwa/frontend-pwa.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en PWA"
        description="Notre expertise en Progressive Web Apps vous garantit des applications web modernes et performantes."
        features={[
          {
            title: "Installation native",
            description: "Applications installables directement depuis le navigateur, sans passer par les stores.",
            icon: Download
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
        ]}
        image="/static/images/services/frontend/pwa/frontend-nowifi.webp"
      />

      {/* Avantages des PWA */}
      <FeatureSection
        title="Avantages des PWA"
        description="Découvrez pourquoi les Progressive Web Apps représentent l'avenir du web mobile."
        features={[
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
        ]}
        image="/static/images/services/frontend/pwa/frontend-mobile.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets PWA"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement PWA"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre PWA avec nos services additionnels"
        features={[
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
        ]}
        image="/static/images/services/frontend/pwa/frontend-seo.webp"

      />
    </ServiceLayout>
  );
};

export default PWAServicePage;