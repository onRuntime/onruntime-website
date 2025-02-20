import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Rocket, 
  Palette,
  LayoutDashboard,
  Image as ImageIcon,
  Code,
  Share2,
  MessageSquare,
  Zap,
  ShoppingBag,
  Shapes
} from 'lucide-react';

export const metadata = {
  title: "Développement Squarespace | onRuntime Studio",
  description: "Créez un site web élégant et fonctionnel avec Squarespace. Notre expertise vous permet de tirer le meilleur parti de cette plateforme intuitive et design.",
};

const SquarespaceServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Sites web élégants avec Squarespace"
      heroDescription="Créez une présence en ligne raffinée avec Squarespace. Notre expertise vous garantit un site web esthétique, fonctionnel et parfaitement adapté à votre image de marque."
      heroImage="/static/images/services/integration/squarespace.jpg"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="L'élégance alliée à la simplicité"
        description="Squarespace combine design épuré et facilité d'utilisation. Notre expertise vous permet d'exploiter pleinement son potentiel."
        features={[
          {
            title: "Design minimaliste",
            description: "Création de sites élégants et épurés qui mettent en valeur votre contenu et votre marque.",
            icon: Palette
          },
          {
            title: "Expérience fluide",
            description: "Navigation intuitive et performances optimisées pour une expérience utilisateur sans faille.",
            icon: Rocket
          },
          {
            title: "Gestion de contenu",
            description: "Interface d'administration simple et intuitive pour gérer votre contenu facilement.",
            icon: LayoutDashboard
          },
          {
            title: "Intégration média",
            description: "Mise en valeur optimale de vos images et médias avec des galeries dynamiques.",
            icon: ImageIcon
          }
        ]}
        image="/static/images/services/integration/squarespace-design.webp"
      />

      {/* Avantages Squarespace */}
      <FeatureSection
        title="Pourquoi choisir Squarespace ?"
        description="Découvrez les avantages qui font de Squarespace la plateforme idéale pour votre présence en ligne."
        features={[
          {
            title: "Templates professionnels",
            description: "Large choix de templates modernes et personnalisables pour tous les secteurs.",
            icon: Shapes
          },
          {
            title: "E-commerce intégré",
            description: "Solutions de vente en ligne complètes et personnalisables.",
            icon: ShoppingBag
          },
          {
            title: "Performance optimale",
            description: "Sites rapides et sécurisés hébergés sur une infrastructure robuste.",
            icon: Zap
          },
          {
            title: "Marketing intégré",
            description: "Outils marketing et analyses statistiques pour développer votre activité.",
            icon: Share2
          }
        ]}
        image="/static/images/services/integration/squarespace-marketing.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets Squarespace"
        testimonials={[
          {
            content: "Notre site Squarespace présente parfaitement notre portfolio avec un design épuré et professionnel.",
            author: {
              name: "Claire Dubois",
              role: "Photographe",
              company: "Studio Lumière",
              image: "/static/images/testimonials/claire-dubois.jpg"
            }
          },
          {
            content: "La simplicité de gestion nous permet de nous concentrer sur notre activité tout en ayant un site magnifique.",
            author: {
              name: "Antoine Martin",
              role: "Fondateur",
              company: "Concept Store",
              image: "/static/images/testimonials/antoine-martin.jpg"
            }
          },
          {
            content: "L'équipe d'onRuntime a su personnaliser Squarespace pour créer un site unique qui nous ressemble.",
            author: {
              name: "Sophie Lambert",
              role: "Directrice Artistique",
              company: "Design & Co",
              image: "/static/images/testimonials/sophie-lambert.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement Squarespace"
        items={[
          {
            question: "Combien de temps faut-il pour créer un site Squarespace ?",
            answer: "Le délai moyen pour créer un site Squarespace varie de 2 à 6 semaines, selon la complexité du projet. Ce délai comprend la sélection et personnalisation du template, l'intégration du contenu et les tests."
          },
          {
            question: "Puis-je vendre des produits sur mon site Squarespace ?",
            answer: "Oui, Squarespace propose une solution e-commerce complète que nous pouvons configurer pour vous permettre de vendre vos produits en ligne, avec gestion des stocks, paiements sécurisés et options d'expédition."
          },
          {
            question: "Est-il facile de mettre à jour le contenu ?",
            answer: "Absolument ! L'interface de Squarespace est très intuitive. Nous vous formons à son utilisation pour que vous puissiez gérer votre contenu en toute autonomie."
          },
          {
            question: "Mon site sera-t-il optimisé pour le référencement ?",
            answer: "Oui, nous mettons en place les meilleures pratiques SEO de Squarespace et configurons tous les éléments nécessaires pour optimiser votre visibilité sur les moteurs de recherche."
          },
          {
            question: "Proposez-vous un service de maintenance ?",
            answer: "Oui, nous proposons différentes formules de maintenance incluant les mises à jour, le support technique et l'optimisation continue de votre site Squarespace."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre présence en ligne avec nos services additionnels"
        features={[
          {
            title: "Personnalisation avancée",
            description: "Modifications CSS et Javascript pour personnaliser votre site au-delà des options standard.",
            icon: Code
          },
          {
            title: "Stratégie de contenu",
            description: "Accompagnement dans la création et l'optimisation de votre contenu.",
            icon: Share2
          },
          {
            title: "Formation utilisateur",
            description: "Formation complète pour maîtriser la gestion de votre site Squarespace.",
            icon: MessageSquare
          }
        ]}
        image="/static/images/services/integration/squarespace-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default SquarespaceServicePage;