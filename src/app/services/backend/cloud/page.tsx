import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Cloud,
  Shield,
  Zap,
  Scale,
  LineChart,
  Server,
  Database,
  Lock,
  GitBranch,
  Globe,
  Timer,
} from 'lucide-react';

export const metadata = {
  title: "Solutions Cloud | onRuntime Studio",
  description: "Déployez et gérez vos applications dans le cloud avec expertise. Notre savoir-faire en cloud computing vous garantit une infrastructure flexible, sécurisée et performante.",
};

const CloudServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Solutions Cloud"
      heroDescription="Optimisez votre infrastructure avec des solutions cloud modernes et évolutives. Notre expertise vous garantit un déploiement sécurisé et performant sur les principales plateformes cloud."
      heroImage="/static/images/services/back-end/solutions-cloud/cloud-hero.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en cloud computing"
        description="Notre expertise en solutions cloud vous garantit une infrastructure moderne et performante."
        features={[
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
        ]}
        image="/static/images/services/back-end/solutions-cloud/multi-cloud.jpg"
      />

      {/* Avantages du cloud */}
      <FeatureSection
        title="Infrastructure cloud moderne"
        description="Découvrez les avantages d'une infrastructure cloud optimisée."
        features={[
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
        ]}
        image="/static/images/services/back-end/solutions-cloud/infrastructure-modern.jpg"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs solutions cloud"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur nos solutions cloud"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre infrastructure cloud avec nos services additionnels"
        features={[
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
        ]}
        image="/static/images/services/back-end/solutions-cloud/service-complementaire.jpg"
      />
    </ServiceLayout>
  );
};

export default CloudServicePage;