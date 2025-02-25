import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Boxes,
  GitBranch,
  Zap,
  Shield,
  Cloud,
  LineChart,
  Scale,
  CircuitBoard,
  Gauge,
  Timer,
  Workflow
} from 'lucide-react';

export const metadata = {
  title: "Architecture microservices pour applications évolutives",
  description: "Conception d'architectures microservices modulaires et scalables. Notre expertise vous garantit des systèmes résilients qui accompagnent votre croissance.",
};

const MicroservicesServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Architecture Microservices"
      heroDescription="Transformez vos applications monolithiques en architectures microservices modernes et scalables. Notre expertise vous garantit une infrastructure flexible, résiliente et performante."
      heroImage="/static/images/services/back-end/microservices/architecture-hero.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en microservices"
        description="Notre expertise en architecture microservices vous garantit une infrastructure moderne et évolutive."
        features={[
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
        ]}
        image="/static/images/services/back-end/microservices/excellence-microservice.webp"
      />

      {/* Avantages des microservices */}
      <FeatureSection
        title="Architecture moderne et flexible"
        description="Découvrez les avantages d'une architecture microservices."
        features={[
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
        ]}
        image="/static/images/services/back-end/microservices/moderne-flexible.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs architectures microservices"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service d'architecture microservices"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre architecture microservices avec nos services additionnels"
        features={[
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
        ]}
        image="/static/images/services/back-end/microservices/service-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default MicroservicesServicePage;