import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Palette, 
  Settings, 
  Shield, 
  Globe,
  CreditCard,
  BarChart,
  Truck,
  Search,
  Share2,
  MessageSquare 
} from 'lucide-react';

export const metadata = {
  title: "Développement Shopify | onRuntime Studio",
  description: "Créez votre boutique en ligne performante avec notre expertise Shopify. De la personnalisation à l'optimisation, nous vous accompagnons dans votre succès e-commerce.",
};

const ShopifyServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Créez votre boutique en ligne avec Shopify"
      heroDescription="Transformez votre vision e-commerce en réalité avec notre expertise Shopify. Nous créons des boutiques en ligne performantes, esthétiques et optimisées pour la conversion."
      heroImage="/static/images/services/shopify-hero.jpg"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Une solution e-commerce complète"
        description="Shopify offre tous les outils nécessaires pour gérer votre boutique en ligne efficacement. Notre expertise vous permet d'en tirer le meilleur parti."
        features={[
          {
            title: "Design personnalisé",
            description: "Création d'un thème unique qui reflète votre marque et optimise l'expérience utilisateur.",
            icon: Palette
          },
          {
            title: "Optimisation des conversions",
            description: "Mise en place des meilleures pratiques pour maximiser vos ventes et fidéliser vos clients.",
            icon: Rocket
          },
          {
            title: "Sécurité renforcée",
            description: "Protection de vos données et de celles de vos clients avec les dernières normes de sécurité.",
            icon: Shield
          },
          {
            title: "Intégrations avancées",
            description: "Connection avec vos outils préférés pour la gestion des stocks, la comptabilité et le marketing.",
            icon: Settings
          }
        ]}
        image="/static/images/services/integration/shopify-mobile.jpg"
      />

      {/* Avantages Shopify */}
      <FeatureSection
        title="Pourquoi choisir Shopify ?"
        description="Découvrez les avantages qui font de Shopify la plateforme e-commerce préférée des entrepreneurs."
        features={[
          {
            title: "Paiements sécurisés",
            description: "Intégration des principaux moyens de paiement et gestion sécurisée des transactions.",
            icon: CreditCard
          },
          {
            title: "International par défaut",
            description: "Vente dans le monde entier avec gestion multi-devises et traductions automatiques.",
            icon: Globe
          },
          {
            title: "Analytics puissant",
            description: "Suivi détaillé de vos performances et insights pour optimiser vos ventes.",
            icon: BarChart
          },
          {
            title: "Logistique simplifiée",
            description: "Gestion efficace des commandes et intégration avec les principaux transporteurs.",
            icon: Truck
          }
        ]}
        image="/static/images/services/integration/shopify-buy.jpg"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets Shopify"
        testimonials={[
          {
            content: "L'équipe d'onRuntime a transformé notre vision en une boutique en ligne performante qui dépasse nos attentes.",
            author: {
              name: "Sophie Martin",
              role: "Fondatrice",
              company: "Maison Élégance",
              image: "/static/images/testimonials/sophie-martin.jpg"
            }
          },
          {
            content: "Un véritable partenariat qui nous a permis de multiplier nos ventes en ligne par 3 en seulement 6 mois.",
            author: {
              name: "Thomas Dubois",
              role: "Directeur E-commerce",
              company: "SportStyle",
              image: "/static/images/testimonials/thomas-dubois.jpg"
            }
          },
          {
            content: "Leur expertise Shopify nous a permis de créer une expérience client unique et mémorable.",
            author: {
              name: "Marie Lambert",
              role: "CEO",
              company: "Bio & Co",
              image: "/static/images/testimonials/marie-lambert.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement Shopify"
        items={[
          {
            question: "Combien de temps faut-il pour créer une boutique Shopify ?",
            answer: "Le délai moyen pour créer une boutique Shopify varie de 4 à 8 semaines, selon la complexité du projet. Ce délai comprend la phase de design, le développement, l'intégration des produits et les tests."
          },
          {
            question: "Pouvez-vous migrer ma boutique existante vers Shopify ?",
            answer: "Oui, nous proposons un service complet de migration de votre boutique existante vers Shopify, incluant le transfert des produits, des clients et des commandes, tout en assurant une transition en douceur."
          },
          {
            question: "Quels types de personnalisation proposez-vous ?",
            answer: "Nous offrons une personnalisation complète de votre boutique Shopify : design sur mesure, fonctionnalités personnalisées, intégrations spécifiques, et optimisation pour mobile."
          },
          {
            question: "Proposez-vous un support après le lancement ?",
            answer: "Oui, nous proposons plusieurs formules de support et maintenance pour assurer le bon fonctionnement de votre boutique après son lancement, incluant les mises à jour, les optimisations et le support technique."
          },
          {
            question: "Comment assurez-vous la sécurité de ma boutique ?",
            answer: "Nous mettons en place les meilleures pratiques de sécurité : SSL, conformité PCI DSS, sauvegardes régulières, et protection contre les fraudes. Shopify assure également une sécurité de niveau bancaire pour toutes les transactions."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre présence en ligne avec nos services additionnels"
        features={[
          {
            title: "Référencement SEO",
            description: "Optimisation pour les moteurs de recherche pour augmenter votre visibilité.",
            icon: Search
          },
          {
            title: "Marketing digital",
            description: "Stratégies marketing adaptées pour attirer et convertir plus de clients.",
            icon: Share2
          },
          {
            title: "Formation",
            description: "Formation complète pour gérer votre boutique en toute autonomie.",
            icon: MessageSquare
          }
        ]}
            image="/static/images/services/integration/shopify-complementaire.jpg"
      />
    </ServiceLayout>
  );
};

export default ShopifyServicePage;