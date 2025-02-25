import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Database,
  Shield,
  Zap,
  History,
  Share2,
  Search,
  LineChart,
  Cloud,
  GitBranch,
  BarChart,
  Timer
} from 'lucide-react';

export const metadata = {
  title: "Architecture et optimisation de bases de données pour entreprises",
  description: "Conception et optimisation de bases de données performantes et sécurisées. Notre agence assure intégrité, disponibilité et performance de vos données.",
};

const DatabaseServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Architecture de Bases de Données"
      heroDescription="Concevez et optimisez vos bases de données pour des performances optimales et une scalabilité maximale. Notre expertise vous garantit une architecture robuste qui répond à vos besoins actuels et futurs."
      heroImage="/static/images/services/back-end/bases-de-données/database-hero.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en bases de données"
        description="Notre expertise en bases de données vous garantit une architecture optimale et performante."
        features={[
          {
            title: "Architecture optimisée",
            description: "Conception intelligente des schémas et des relations pour des performances optimales.",
            icon: Database
          },
          {
            title: "Sécurité renforcée",
            description: "Protection robuste des données sensibles et conformité aux normes.",
            icon: Shield
          },
          {
            title: "Haute performance",
            description: "Optimisation des requêtes et des index pour des temps de réponse minimaux.",
            icon: Zap
          },
          {
            title: "Backup & Recovery",
            description: "Stratégies de sauvegarde et de restauration fiables.",
            icon: History
          }
        ]}
        image="/static/images/services/back-end/bases-de-données/excellence-database.webp"
      />

      {/* Avantages des bases de données modernes */}
      <FeatureSection
        title="Solutions de bases de données modernes"
        description="Découvrez les avantages des architectures de bases de données modernes."
        features={[
          {
            title: "Scalabilité horizontale",
            description: "Architecture conçue pour la croissance et la montée en charge.",
            icon: GitBranch
          },
          {
            title: "Réplication",
            description: "Haute disponibilité et répartition géographique des données.",
            icon: Share2
          },
          {
            title: "Monitoring avancé",
            description: "Suivi en temps réel des performances et de la santé.",
            icon: LineChart
          },
          {
            title: "Recherche optimisée",
            description: "Indexation intelligente pour des recherches rapides.",
            icon: Search
          }
        ]}
        image="/static/images/services/back-end/bases-de-données/solution-moderne.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs bases de données"
        testimonials={[
          {
            content: "L'optimisation de notre base de données a réduit nos temps de réponse de 80%.",
            author: {
              name: "Thomas Weber",
              role: "Lead DBA",
              company: "DataScale",
              image: "/static/images/testimonials/thomas-weber.jpg"
            }
          },
          {
            content: "Une architecture qui nous permet de gérer des millions d'enregistrements sans effort.",
            author: {
              name: "Julie Martin",
              role: "CTO",
              company: "BigData Solutions",
              image: "/static/images/testimonials/julie-martin.jpg"
            }
          },
          {
            content: "La migration de notre base de données s'est déroulée sans aucune interruption de service.",
            author: {
              name: "Pierre Dubois",
              role: "Directeur Technique",
              company: "TechFlow",
              image: "/static/images/testimonials/pierre-dubois.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de bases de données"
        items={[
          {
            question: "Comment choisir entre SQL et NoSQL ?",
            answer: "Le choix dépend de vos besoins spécifiques. Les bases SQL sont idéales pour les données structurées avec des relations complexes, tandis que NoSQL excelle dans la gestion de données non structurées et la scalabilité horizontale. Nous vous guidons vers la meilleure solution selon vos cas d'usage."
          },
          {
            question: "Comment gérez-vous la sécurité des données ?",
            answer: "Nous implémentons plusieurs niveaux de sécurité : chiffrement des données sensibles, contrôle d'accès granulaire, audit des accès, backups réguliers, et conformité aux normes de sécurité (RGPD, etc.). Nous effectuons également des tests de sécurité réguliers."
          },
          {
            question: "Comment optimisez-vous les performances ?",
            answer: "Nous utilisons plusieurs techniques : optimisation des schémas et des requêtes, indexation intelligente, mise en cache, partitionnement des données, et monitoring continu. Nous analysons régulièrement les performances pour identifier les opportunités d'optimisation."
          },
          {
            question: "Proposez-vous des services de migration ?",
            answer: "Oui, nous gérons les migrations de bases de données de bout en bout : analyse de l'existant, planification, tests, migration des données avec minimum d'interruption, et validation post-migration. Nous assurons la cohérence et l'intégrité des données."
          },
          {
            question: "Comment assurez-vous la disponibilité des données ?",
            answer: "Nous mettons en place des architectures hautement disponibles avec réplication, clustering, et plans de reprise d'activité. Nous effectuons des sauvegardes régulières et testons les procédures de restauration."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez vos bases de données avec nos services additionnels"
        features={[
          {
            title: "Migration de données",
            description: "Transfer sécurisé depuis vos systèmes existants.",
            icon: Cloud
          },
          {
            title: "Audit & Optimisation",
            description: "Analyse des performances et recommandations.",
            icon: BarChart
          },
          {
            title: "Monitoring 24/7",
            description: "Surveillance continue et alertes en temps réel.",
            icon: Timer
          }
        ]}
        image="/static/images/services/back-end/bases-de-données/service-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default DatabaseServicePage;