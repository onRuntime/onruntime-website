import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Code,
  Monitor,
  Smartphone,
  Zap,
  Layout,
  Share2,
  PenTool,
  Search,
  Globe,
  Paintbrush
} from 'lucide-react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata({
  title: "Développement Web Frontend | onRuntime Studio",
  description: "Créez des applications web modernes et performantes. Notre expertise en développement frontend vous garantit une expérience utilisateur exceptionnelle et des performances optimales.",
});

const WebFrontendServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title as string}
      description={metadata.description as string}
      heroTitle="Développement Web Frontend"
      heroDescription="Créez des applications web modernes, réactives et performantes avec les dernières technologies frontend. Notre expertise vous garantit une expérience utilisateur exceptionnelle."
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence technique frontend"
        description="Notre expertise en développement frontend vous garantit des applications web modernes et performantes."
        features={[
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
        ]}
      />

      {/* Avantages du développement frontend moderne */}
      <FeatureSection
        title="Technologies frontend modernes"
        description="Découvrez les avantages des dernières technologies de développement web."
        features={[
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
            icon: Search
          }
        ]}
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets web frontend"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement frontend"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre projet web avec nos services additionnels"
        features={[
          {
            title: "Design UI/UX",
            description: "Conception d'interfaces utilisateur modernes et ergonomiques.",
            icon: Paintbrush
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
        ]}
      />
    </ServiceLayout>
  );
};

export default WebFrontendServicePage;