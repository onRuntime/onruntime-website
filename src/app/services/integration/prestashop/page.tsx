import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Palette,
  Shield, 
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Code,
  Share2,
  MessageSquare,
  Truck,
  BarChart
} from 'lucide-react';

export const metadata = {
  title: "Développement PrestaShop | onRuntime Studio",
  description: "Créez votre boutique en ligne performante avec PrestaShop. Notre expertise vous garantit une solution e-commerce robuste et personnalisée pour développer votre activité.",
};

const PrestaShopServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Développement e-commerce avec PrestaShop"
      heroDescription="Lancez une boutique en ligne professionnelle avec PrestaShop. Notre expertise vous garantit une solution e-commerce puissante, évolutive et parfaitement adaptée à vos besoins."
      heroImage="/static/images/services/prestashop-hero.jpg"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Une solution e-commerce complète"
        description="PrestaShop offre toutes les fonctionnalités nécessaires pour gérer votre activité en ligne. Notre expertise vous permet d'en exploiter tout le potentiel."
        features={[
          {
            title: "Design personnalisé",
            description: "Création de thèmes sur mesure qui reflètent votre marque et optimisent la conversion.",
            icon: Palette
          },
          {
            title: "Gestion avancée",
            description: "Interface d'administration puissante pour gérer vos produits, commandes et clients.",
            icon: LayoutDashboard
          },
          {
            title: "Performance optimisée",
            description: "Optimisation poussée pour des temps de chargement rapides et une expérience fluide.",
            icon: Rocket
          },
          {
            title: "Sécurité renforcée",
            description: "Protection avancée de votre boutique et des données de vos clients.",
            icon: Shield
          }
        ]}
        image="/static/images/services/prestashop-features.jpg"
      />

      {/* Avantages PrestaShop */}
      <FeatureSection
        title="Pourquoi choisir PrestaShop ?"
        description="Découvrez les avantages qui font de PrestaShop une solution e-commerce de référence."
        features={[
          {
            title: "Gestion complète",
            description: "Contrôle total sur vos produits, stocks, commandes et relations clients.",
            icon: ShoppingBag
          },
          {
            title: "Multi-boutiques",
            description: "Gestion de plusieurs boutiques depuis une seule interface d'administration.",
            icon: Globe
          },
          {
            title: "Logistique intégrée",
            description: "Gestion avancée des transporteurs et des frais de livraison.",
            icon: Truck
          },
          {
            title: "Analyses détaillées",
            description: "Statistiques complètes pour suivre et optimiser vos performances.",
            icon: BarChart
          }
        ]}
        image="/static/images/services/prestashop-benefits.jpg"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets PrestaShop"
        testimonials={[
          {
            content: "Notre boutique PrestaShop nous permet de gérer efficacement des milliers de produits et de commandes chaque mois.",
            author: {
              name: "Philippe Martin",
              role: "Directeur E-commerce",
              company: "Mode Express",
              image: "/static/images/testimonials/philippe-martin.jpg"
            }
          },
          {
            content: "La migration vers PrestaShop a boosté nos ventes en ligne grâce à une meilleure expérience client.",
            author: {
              name: "Marie Durand",
              role: "Gérante",
              company: "Boutique Tendance",
              image: "/static/images/testimonials/marie-durand.jpg"
            }
          },
          {
            content: "L'équipe d'onRuntime a créé une boutique sur mesure qui répond parfaitement à nos besoins spécifiques.",
            author: {
              name: "Laurent Bernard",
              role: "Fondateur",
              company: "Tech Store",
              image: "/static/images/testimonials/laurent-bernard.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement PrestaShop"
        items={[
          {
            question: "Combien de temps faut-il pour créer une boutique PrestaShop ?",
            answer: "Le délai moyen pour créer une boutique PrestaShop varie de 6 à 12 semaines, selon la complexité du projet. Ce délai comprend la personnalisation du thème, le développement des fonctionnalités sur mesure, l'intégration des produits et les tests."
          },
          {
            question: "Pouvez-vous migrer ma boutique existante vers PrestaShop ?",
            answer: "Oui, nous proposons un service complet de migration vers PrestaShop, incluant le transfert des produits, clients, commandes et historiques, tout en préservant votre référencement."
          },
          {
            question: "PrestaShop est-il adapté aux grands catalogues de produits ?",
            answer: "Absolument ! PrestaShop est conçu pour gérer efficacement des catalogues de plusieurs milliers de produits avec des variations, tout en maintenant d'excellentes performances."
          },
          {
            question: "Proposez-vous des développements sur mesure ?",
            answer: "Oui, nous développons des modules et fonctionnalités sur mesure pour adapter PrestaShop à vos besoins spécifiques : intégrations ERP, processus métier personnalisés, etc."
          },
          {
            question: "Comment gérez-vous la maintenance et les mises à jour ?",
            answer: "Nous proposons différentes formules de maintenance incluant les mises à jour de sécurité, les sauvegardes, l'optimisation des performances et le support technique."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre boutique PrestaShop avec nos services additionnels"
        features={[
          {
            title: "Modules sur mesure",
            description: "Développement de fonctionnalités spécifiques pour votre activité.",
            icon: Code
          },
          {
            title: "Marketing digital",
            description: "Stratégies marketing pour augmenter votre visibilité et vos ventes.",
            icon: Share2
          },
          {
            title: "Formation PrestaShop",
            description: "Formation personnalisée pour maîtriser la gestion de votre boutique.",
            icon: MessageSquare
          }
        ]}
      />
    </ServiceLayout>
  );
};

export default PrestaShopServicePage;