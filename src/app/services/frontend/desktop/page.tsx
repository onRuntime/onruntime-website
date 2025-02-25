import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Monitor,
  Laptop,
  Apple,
  Database,
  Upload,
  Download,
  Cpu,
  Code,
  LineChart,
  Cloud
} from 'lucide-react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata({
  title: "Développement Applications Desktop | onRuntime Studio",
  description: "Créez des applications de bureau performantes et multiplateformes avec Electron. Notre expertise en développement desktop vous garantit des applications robustes et intuitives.",
});

const DesktopServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title as string}
      description={metadata.description as string}
      heroTitle="Applications Desktop Multiplateformes"
      heroDescription="Développez des applications de bureau modernes et performantes pour Windows, macOS et Linux. Notre expertise vous garantit des applications professionnelles qui tirent parti de toute la puissance du desktop."
      heroImage="/static/images/services/frontend/desktop/frontend-systeme.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en développement desktop"
        description="Notre expertise en développement d'applications de bureau vous garantit des solutions professionnelles et performantes."
        features={[
          {
            title: "Electron & React",
            description: "Technologies modernes pour des applications desktop performantes et évolutives.",
            icon: Code
          },
          {
            title: "Multiplateforme",
            description: "Applications compatibles Windows, macOS et Linux à partir d'une base de code unique.",
            icon: Monitor
          },
          {
            title: "Performance native",
            description: "Optimisation pour tirer parti des ressources système de manière efficace.",
            icon: Rocket
          },
          {
            title: "Intégration système",
            description: "Accès aux fonctionnalités natives du système d'exploitation.",
            icon: Cpu
          }
        ]}
        image="/static/images/services/frontend/desktop/frontend-developpement.webp"
      />

      {/* Avantages des applications desktop */}
      <FeatureSection
        title="Puissance du desktop"
        description="Découvrez les avantages des applications de bureau modernes."
        features={[
          {
            title: "Windows & macOS",
            description: "Support natif des principales plateformes desktop.",
            icon: Laptop
          },
          {
            title: "Accès système",
            description: "Interaction directe avec le système d'exploitation.",
            icon: Apple
          },
          {
            title: "Mode hors ligne",
            description: "Fonctionnement autonome sans connexion internet requise.",
            icon: Download
          },
          {
            title: "Données locales",
            description: "Stockage et traitement des données en local pour plus de sécurité.",
            icon: Database
          }
        ]}
        image="/static/images/services/frontend/desktop/frontend-app.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs applications desktop"
        testimonials={[
          {
            content: "Notre application desktop nous permet d'offrir une expérience professionnelle à nos utilisateurs sur tous les systèmes.",
            author: {
              name: "Laurent Dupont",
              role: "Directeur Technique",
              company: "DesktopPro",
              image: "/static/images/testimonials/laurent-dupont.jpg"
            }
          },
          {
            content: "La performance et la fiabilité de notre application ont dépassé nos attentes.",
            author: {
              name: "Caroline Martin",
              role: "Product Owner",
              company: "SoftSolutions",
              image: "/static/images/testimonials/caroline-martin.jpg"
            }
          },
          {
            content: "Une solution desktop moderne qui combine puissance et facilité d'utilisation.",
            author: {
              name: "Michel Bernard",
              role: "CEO",
              company: "AppStudio",
              image: "/static/images/testimonials/michel-bernard.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement desktop"
        items={[
          {
            question: "Pourquoi choisir Electron pour le développement desktop ?",
            answer: "Electron permet de créer des applications desktop multiplateformes avec des technologies web modernes (React, TypeScript). Cela offre un développement rapide, une maintenance simplifiée et une excellente expérience utilisateur, tout en garantissant la compatibilité avec Windows, macOS et Linux."
          },
          {
            question: "Comment gérez-vous la sécurité des applications desktop ?",
            answer: "Nous implémentons plusieurs niveaux de sécurité : chiffrement des données sensibles, protection contre les injections de code, mises à jour de sécurité automatiques, et bonnes pratiques de développement sécurisé. Nous suivons également les recommandations de sécurité spécifiques à chaque système d'exploitation."
          },
          {
            question: "Proposez-vous un système de mise à jour automatique ?",
            answer: "Oui, nous intégrons un système de mise à jour automatique qui permet de déployer facilement les nouvelles versions de l'application. Les utilisateurs sont notifiés des mises à jour disponibles et peuvent les installer en un clic."
          },
          {
            question: "Comment gérez-vous la distribution des applications ?",
            answer: "Nous gérons tout le processus de distribution : création des installateurs pour chaque plateforme, signature des applications, publication sur les stores si nécessaire (Microsoft Store, Mac App Store), et mise en place d'un système de mise à jour automatique."
          },
          {
            question: "Proposez-vous un support après le lancement ?",
            answer: "Oui, nous proposons plusieurs formules de maintenance incluant : support technique, correction de bugs, mises à jour de sécurité, optimisations de performance et évolutions fonctionnelles."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre application desktop avec nos services additionnels"
        features={[
          {
            title: "Télémétrie",
            description: "Suivi des performances et du comportement utilisateur.",
            icon: LineChart
          },
          {
            title: "Distribution",
            description: "Publication sur les stores et gestion des mises à jour.",
            icon: Upload
          },
          {
            title: "Cloud Sync",
            description: "Synchronisation des données avec le cloud.",
            icon: Cloud
          }
        ]}
        image="/static/images/services/frontend/desktop/frontend-complementaire.webp"

      />
    </ServiceLayout>
  );
};

export default DesktopServicePage;