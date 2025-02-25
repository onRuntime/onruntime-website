import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Search,
  LineChart,
  Users,
  Eye,
  BarChart,
  Target,
  MousePointer,
  Zap,
  MessageSquare,
} from 'lucide-react';

export const metadata = {
  title: "Audit UX/UI et optimisation de vos interfaces digitales",
  description: "Analyse approfondie et recommandations pour améliorer vos interfaces. Notre expertise identifie les opportunités d'optimisation de votre expérience utilisateur.",
};

const AuditServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Audit UX/UI & Optimisation"
      heroDescription="Améliorez l'expérience utilisateur de vos interfaces grâce à un audit professionnel. Notre expertise vous garantit une analyse approfondie et des recommandations concrètes pour optimiser vos interfaces."
      heroImage="/static/images/services/design/audit-ui/audit-hero.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en analyse UX/UI"
        description="Notre expertise en audit vous garantit une analyse approfondie et des recommandations actionnables."
        features={[
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
            icon: LineChart
          },
          {
            title: "Accessibilité",
            description: "Vérification des standards d'accessibilité.",
            icon: Eye
          }
        ]}
        image="/static/images/services/design/audit-ui/analyse-ui-ux.webp"
      />

      {/* Avantages de l'audit */}
      <FeatureSection
        title="Optimisation basée sur les données"
        description="Découvrez les avantages d'un audit UX/UI professionnel."
        features={[
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
        ]}
        image="/static/images/services/design/audit-ui/optimisation-donnees.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs audits UX/UI"
        testimonials={[
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
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service d'audit UX/UI"
        items={[
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
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez davantage vos interfaces avec nos services additionnels"
        features={[
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
        ]}
        image="/static/images/services/design/audit-ui/service-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default AuditServicePage;