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
  LayoutDashboard,
  Search,
  Blocks,
  Code,
  Share2,
  MessageSquare,
  Zap
} from 'lucide-react';

export const metadata = {
  title: "Développement WordPress | onRuntime Studio",
  description: "Créez un site web professionnel avec WordPress. De la conception sur mesure à l'optimisation des performances, nous vous accompagnons dans la réalisation de votre projet web.",
};

const WordPressServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Développement WordPress sur mesure"
      heroDescription="Créez un site web professionnel qui vous ressemble avec WordPress. Notre expertise vous garantit un site performant, sécurisé et parfaitement adapté à vos besoins."
      heroImage="/static/images/services/integration/wordpress.jpg"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Une solution web complète"
        description="WordPress est la plateforme de gestion de contenu la plus populaire au monde. Notre expertise vous permet d'en exploiter tout le potentiel."
        features={[
          {
            title: "Thèmes sur mesure",
            description: "Création de thèmes personnalisés qui reflètent votre identité et répondent précisément à vos besoins.",
            icon: Palette
          },
          {
            title: "Performance optimisée",
            description: "Optimisation poussée pour garantir des temps de chargement rapides et une expérience utilisateur fluide.",
            icon: Rocket
          },
          {
            title: "Sécurité renforcée",
            description: "Mise en place des meilleures pratiques de sécurité pour protéger votre site et vos données.",
            icon: Shield
          },
          {
            title: "Administration simplifiée",
            description: "Interface d'administration personnalisée et intuitive pour une gestion facile de votre contenu.",
            icon: Settings
          }
        ]}
        image="/static/images/services/integration/wordpress-solution.webp"
      />

      {/* Avantages WordPress */}
      <FeatureSection
        title="Pourquoi choisir WordPress ?"
        description="Découvrez les avantages qui font de WordPress la plateforme de choix pour votre présence en ligne."
        features={[
          {
            title: "Administration intuitive",
            description: "Interface de gestion simple et intuitive pour gérer votre contenu en toute autonomie.",
            icon: LayoutDashboard
          },
          {
            title: "SEO optimisé",
            description: "Structure optimisée pour le référencement naturel et outils SEO intégrés.",
            icon: Search
          },
          {
            title: "Extensions puissantes",
            description: "Accès à des milliers de plugins pour étendre les fonctionnalités de votre site.",
            icon: Blocks
          },
          {
            title: "Performance maximale",
            description: "Optimisation avancée des performances pour une expérience utilisateur optimale.",
            icon: Zap
          }
        ]}
        image="/static/images/services/integration/wordpress-seo.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs projets WordPress"
        testimonials={[
          {
            content: "L'équipe d'onRuntime a créé un site qui dépasse toutes nos attentes, avec une administration vraiment intuitive.",
            author: {
              name: "Pierre Durand",
              role: "Directeur",
              company: "Agence Créative",
              image: "/static/images/testimonials/pierre-durand.jpg"
            }
          },
          {
            content: "Notre nouveau site WordPress nous a permis d'augmenter significativement notre visibilité en ligne.",
            author: {
              name: "Marie Robert",
              role: "Responsable Marketing",
              company: "Design Studio",
              image: "/static/images/testimonials/marie-robert.jpg"
            }
          },
          {
            content: "Un accompagnement professionnel et des résultats qui parlent d'eux-mêmes.",
            author: {
              name: "Lucas Martin",
              role: "Fondateur",
              company: "Digital Solutions",
              image: "/static/images/testimonials/lucas-martin.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de développement WordPress"
        items={[
          {
            question: "Combien de temps faut-il pour créer un site WordPress ?",
            answer: "Le délai moyen pour créer un site WordPress varie de 4 à 12 semaines, selon la complexité du projet. Ce délai comprend la phase de design, le développement du thème sur mesure, l'intégration du contenu et les tests."
          },
          {
            question: "Pouvez-vous migrer mon site existant vers WordPress ?",
            answer: "Oui, nous proposons un service complet de migration vers WordPress, incluant le transfert du contenu, des images et des fonctionnalités, tout en préservant votre référencement."
          },
          {
            question: "Comment gérez-vous la maintenance et les mises à jour ?",
            answer: "Nous proposons différentes formules de maintenance incluant les mises à jour de sécurité, les sauvegardes régulières, les mises à jour de WordPress et des plugins, ainsi que le monitoring des performances."
          },
          {
            question: "Mon site sera-t-il optimisé pour les mobiles ?",
            answer: "Absolument. Tous nos développements WordPress sont responsive par défaut, garantissant une expérience optimale sur tous les appareils : ordinateurs, tablettes et smartphones."
          },
          {
            question: "Quelle est votre approche en matière de sécurité ?",
            answer: "Nous mettons en place une stratégie de sécurité complète : authentification forte, pare-feu applicatif, monitoring des tentatives d'intrusion, sauvegardes automatisées et mises à jour de sécurité régulières."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre site WordPress avec nos services additionnels"
        features={[
          {
            title: "Développement sur mesure",
            description: "Création de fonctionnalités spécifiques pour répondre à vos besoins particuliers.",
            icon: Code
          },
          {
            title: "Marketing digital",
            description: "Stratégies marketing adaptées pour augmenter votre visibilité en ligne.",
            icon: Share2
          },
          {
            title: "Formation WordPress",
            description: "Formation personnalisée pour maîtriser la gestion de votre site.",
            icon: MessageSquare
          }
        ]}
            image="/static/images/services/integration/wordpress-complementaire.webp"

      />
    </ServiceLayout>
  );
};

export default WordPressServicePage;