import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Palette,
  Layers,
  Paintbrush,
  Smartphone,
  Zap,
  Eye,
  SlidersHorizontal,
  MousePointer,
  Component,
  LayoutGrid,
  Code
} from 'lucide-react';

export const metadata = {
  title: "Design d'interfaces utilisateur modernes et attrayantes",
  description: "Création d'interfaces utilisateur élégantes et fonctionnelles. Notre expertise en design UI transforme vos wireframes en interfaces qui captivent.",
};

const UIDesignServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Design d'Interface Utilisateur"
      heroDescription="Créez des interfaces modernes, élégantes et intuitives pour vos applications. Notre expertise en design UI vous garantit des maquettes professionnelles qui captiveront vos utilisateurs."
      heroImage="/static/images/services/design/maquettage-ui/hero-ui.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en design UI"
        description="Notre expertise en design d'interface vous garantit des maquettes professionnelles et impactantes."
        features={[
          {
            title: "Design moderne",
            description: "Interfaces élégantes suivant les dernières tendances.",
            icon: Paintbrush
          },
          {
            title: "Système de design",
            description: "Composants cohérents et réutilisables.",
            icon: Component
          },
          {
            title: "Responsive design",
            description: "Adaptation parfaite à tous les écrans.",
            icon: Smartphone
          },
          {
            title: "Animations & micro-interactions",
            description: "Interactions fluides et engageantes.",
            icon: Zap
          }
        ]}
        image="/static/images/services/design/maquettage-ui/excellence-design-ui.webp"
      />

      {/* Avantages du design UI */}
      <FeatureSection
        title="Design UI professionnel"
        description="Découvrez les avantages d'un design d'interface professionnel."
        features={[
          {
            title: "Identité visuelle",
            description: "Design cohérent avec votre marque.",
            icon: Palette
          },
          {
            title: "Expérience utilisateur",
            description: "Interfaces intuitives et agréables à utiliser.",
            icon: Eye
          },
          {
            title: "Design system",
            description: "Bibliothèque de composants réutilisables.",
            icon: Layers
          },
          {
            title: "Accessibilité",
            description: "Interfaces accessibles à tous les utilisateurs.",
            icon: SlidersHorizontal
          }
        ]}
        image="/static/images/services/design/maquettage-ui/design-ui-professionnel.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs interfaces"
        testimonials={[
          {
            content: "Le nouveau design de notre application a considérablement amélioré l'engagement de nos utilisateurs.",
            author: {
              name: "Mathilde Laurent",
              role: "Product Manager",
              company: "AppLife",
              image: "/static/images/testimonials/mathilde-laurent.webp"
            }
          },
          {
            content: "Un design moderne qui a transformé l'image de notre marque.",
            author: {
              name: "Antoine Dubois",
              role: "Directeur Marketing",
              company: "BrandNew",
              image: "/static/images/testimonials/antoine-dubois.webp"
            }
          },
          {
            content: "La qualité des maquettes a facilité le travail de nos développeurs.",
            author: {
              name: "Claire Martin",
              role: "Lead Developer",
              company: "TechFlow",
              image: "/static/images/testimonials/claire-martin.webp"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de design UI"
        items={[
          {
            question: "Comment se déroule le processus de design UI ?",
            answer: "Le processus commence par l'analyse de vos besoins et de votre identité de marque. Nous créons ensuite des premières versions des écrans clés, établissons le système de design, puis itérons sur les maquettes détaillées. Chaque étape inclut vos retours pour assurer un résultat parfaitement aligné avec vos attentes."
          },
          {
            question: "Quels outils et livrables sont fournis ?",
            answer: "Nous utilisons principalement Figma pour le design UI. Vous recevez les maquettes détaillées de tous les écrans, un système de design complet avec ses composants, les spécifications pour les développeurs, et les assets nécessaires à l'intégration."
          },
          {
            question: "Comment gérez-vous le responsive design ?",
            answer: "Nous suivons une approche mobile-first et créons des maquettes pour chaque breakpoint important (mobile, tablette, desktop). Chaque interface est optimisée pour offrir la meilleure expérience possible sur son support."
          },
          {
            question: "Comment garantissez-vous la cohérence du design ?",
            answer: "Nous créons un système de design complet incluant une bibliothèque de composants, des règles typographiques, une palette de couleurs et des principes de design. Ce système assure la cohérence à travers toute l'interface."
          },
          {
            question: "Comment facilitez-vous le travail des développeurs ?",
            answer: "Nous fournissons des spécifications détaillées pour chaque composant, incluant les mesures, les styles, les états et les interactions. Nous utilisons également des outils comme Zeplin ou les exports Figma pour faciliter l'intégration."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre design UI avec nos services additionnels"
        features={[
          {
            title: "Design system",
            description: "Création d'une bibliothèque de composants.",
            icon: LayoutGrid
          },
          {
            title: "Prototypage",
            description: "Création de prototypes interactifs.",
            icon: MousePointer
          },
          {
            title: "Développement",
            description: "Intégration de vos maquettes en code.",
            icon: Code
          }
        ]}
        image="/static/images/services/design/moodboard/services-supplementaires.webp"
      />
    </ServiceLayout>
  );
};

export default UIDesignServicePage;