import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Code, 
  Shield, 
  LayoutDashboard,
  Database,
  Share2,
  MessageSquare,
  Users,
  Workflow,
  Box,
  Network
} from 'lucide-react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata({
  title: "Développement Strapi | onRuntime Studio",
  description: "Créez des applications performantes avec Strapi, le CMS headless leader. Notre expertise vous garantit une solution évolutive et personnalisée pour gérer votre contenu.",
});

const StrapiServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title as string}
      description={metadata.description as string}
      heroTitle="Développement CMS headless avec Strapi"
      heroDescription="Développez des applications modernes avec Strapi. Notre expertise vous garantit une solution de gestion de contenu flexible, évolutive et parfaitement adaptée à vos besoins."
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Un CMS headless puissant"
        description="Strapi offre une flexibilité totale pour gérer et distribuer votre contenu. Notre expertise vous permet d'en exploiter tout le potentiel."
        features={[
          {
            title: "API sur mesure",
            description: "Création d'APIs RESTful et GraphQL personnalisées pour tous vos besoins.",
            icon: Network
          },
          {
            title: "Administration flexible",
            description: "Interface d'administration personnalisable selon vos processus métier.",
            icon: LayoutDashboard
          },
          {
            title: "Performance optimale",
            description: "Architecture performante pour des temps de réponse rapides.",
            icon: Rocket
          },
          {
            title: "Sécurité avancée",
            description: "Protection robuste de vos données et de vos APIs.",
            icon: Shield
          }
        ]}
      />

      {/* Avantages Strapi */}
      <FeatureSection
        title="Pourquoi choisir Strapi ?"
        description="Découvrez les avantages qui font de Strapi le CMS headless de référence."
        features={[
          {
            title: "100% JavaScript",
            description: "Développement unifié en JavaScript/Node.js pour plus d'efficacité.",
            icon: Code
          },
          {
            title: "Modèles flexibles",
            description: "Création de modèles de contenu personnalisés sans contraintes.",
            icon: Database
          },
          {
            title: "Gestion des rôles",
            description: "Contrôle précis des accès et des permissions utilisateurs.",
            icon: Users
          },
          {
            title: "Workflows avancés",
            description: "Automatisation des processus de publication et de validation.",
            icon: Workflow
          }
        ]}
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets Strapi"
        testimonials={[
          {
            content: "Strapi nous permet de gérer efficacement le contenu de notre application mobile et de notre site web depuis une seule interface.",
            author: {
              name: "Alexandre Dupont",
              role: "CTO",
              company: "Digital Solutions",
              image: "/static/images/testimonials/alexandre-dupont.jpg"
            }
          },
          {
            content: "La flexibilité de Strapi nous a permis de créer une architecture de contenu parfaitement adaptée à nos besoins.",
            author: {
              name: "Sophie Bernard",
              role: "Chef de Projet Digital",
              company: "Media Group",
              image: "/static/images/testimonials/sophie-bernard.jpg"
            }
          },
          {
            content: "L'équipe d'onRuntime a développé des plugins Strapi sur mesure qui ont grandement amélioré notre productivité.",
            author: {
              name: "Thomas Martin",
              role: "Responsable Technique",
              company: "Tech Innovation",
              image: "/static/images/testimonials/thomas-martin.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement Strapi"
        items={[
          {
            question: "Combien de temps faut-il pour mettre en place un projet Strapi ?",
            answer: "Le délai moyen pour mettre en place un projet Strapi varie de 4 à 12 semaines, selon la complexité. Ce délai comprend la conception des modèles de contenu, le développement des APIs, la personnalisation de l'administration et les tests."
          },
          {
            question: "Strapi peut-il gérer des contenus multilingues ?",
            answer: "Oui, Strapi gère nativement le contenu multilingue. Nous pouvons configurer et personnaliser la gestion des traductions selon vos besoins spécifiques."
          },
          {
            question: "Est-il possible de migrer notre contenu existant vers Strapi ?",
            answer: "Oui, nous proposons un service complet de migration de contenu vers Strapi, incluant l'analyse de vos données existantes, la création de modèles adaptés et l'import de vos contenus."
          },
          {
            question: "Comment gérez-vous le déploiement et l'hébergement ?",
            answer: "Nous pouvons déployer Strapi sur différentes plateformes cloud (AWS, Google Cloud, DigitalOcean...) et mettre en place une infrastructure scalable avec des environnements de développement, staging et production."
          },
          {
            question: "Proposez-vous des développements de plugins personnalisés ?",
            answer: "Oui, nous développons des plugins Strapi sur mesure pour étendre les fonctionnalités selon vos besoins : intégrations spécifiques, workflows personnalisés, interfaces d'administration dédiées, etc."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre projet Strapi avec nos services additionnels"
        features={[
          {
            title: "Développement frontend",
            description: "Création d'applications frontend connectées à votre API Strapi.",
            icon: Box
          },
          {
            title: "Intégrations",
            description: "Connection avec vos outils et services tiers existants.",
            icon: Share2
          },
          {
            title: "Formation Strapi",
            description: "Formation personnalisée pour maîtriser la gestion de votre CMS.",
            icon: MessageSquare
          }
        ]}
      />
    </ServiceLayout>
  );
};

export default StrapiServicePage;