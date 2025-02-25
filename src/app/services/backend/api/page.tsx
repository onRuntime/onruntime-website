import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Code,
  Shield,
  Zap,
  Database,
  LineChart,
  Cloud,
  GitBranch,
  FileJson,
  Layers,
  BarChart,
} from 'lucide-react';

export const metadata = {
  title: "Développement d'API RESTful et GraphQL par notre agence",
  description: "Création d'API robustes, sécurisées et performantes pour vos applications. Notre expertise garantit des interfaces de programmation fiables et évolutives.",
};

const APIServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="APIs RESTful & GraphQL"
      heroDescription="Développez des APIs modernes, sécurisées et performantes pour vos applications. Notre expertise vous garantit des interfaces robustes et évolutives qui répondent à vos besoins spécifiques."
      heroImage="/static/images/services/back-end/api-restful/api-hero.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en développement d'APIs"
        description="Notre expertise en développement d'APIs vous garantit des interfaces fiables et performantes."
        features={[
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
            icon: Rocket
          },
          {
            title: "Documentation complète",
            description: "Documentation claire et interactive pour une intégration facile.",
            icon: FileJson
          }
        ]}
        image="/static/images/services/back-end/api-restful/excellence-api.webp"
      />

      {/* Avantages des APIs modernes */}
      <FeatureSection
        title="APIs robustes et évolutives"
        description="Découvrez les avantages des APIs modernes pour vos applications."
        features={[
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
        ]}
        image="/static/images/services/back-end/api-restful/api-robuste.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs APIs"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement d'APIs"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez vos APIs avec nos services additionnels"
        features={[
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
        ]}
        image="/static/images/services/back-end/api-restful/service-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default APIServicePage;