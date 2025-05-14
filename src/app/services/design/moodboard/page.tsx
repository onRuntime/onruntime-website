import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Palette,
  Image,
  Lightbulb,
  Target,
  PenTool,
  Compass,
  Brush,
  Share2,
  Eye,
  FileImage,
  Layers
} from 'lucide-react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata({
  title: "Création de moodboards pour définir l'identité de votre projet",
  description: "Définissez une direction artistique claire et cohérente pour votre projet. Nos moodboards professionnels établissent les fondations visuelles de votre identité.",
});

const MoodboardServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title as string}
      description={metadata.description as string}
      heroTitle="Moodboards & Direction Artistique"
      heroDescription="Donnez vie à votre vision grâce à des moodboards soigneusement élaborés. Notre expertise en design vous aide à définir une direction artistique claire et inspirante pour votre projet."
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en direction artistique"
        description="Notre expertise en création de moodboards vous garantit une identité visuelle cohérente et impactante."
        features={[
          {
            title: "Direction créative",
            description: "Définition claire de l'ambiance et du style visuel.",
            icon: Compass
          },
          {
            title: "Palette de couleurs",
            description: "Sélection harmonieuse des couleurs de votre identité.",
            icon: Palette
          },
          {
            title: "Style visuel",
            description: "Exploration et définition de votre univers graphique.",
            icon: Image
          },
          {
            title: "Inspiration ciblée",
            description: "Recherche approfondie adaptée à votre secteur.",
            icon: Target
          }
        ]}
      />

      {/* Avantages des moodboards */}
      <FeatureSection
        title="Vision créative claire"
        description="Découvrez les avantages d'un moodboard professionnel pour votre projet."
        features={[
          {
            title: "Direction claire",
            description: "Vision commune et alignement des équipes créatives.",
            icon: Lightbulb
          },
          {
            title: "Communication visuelle",
            description: "Support efficace pour partager votre vision.",
            icon: Share2
          },
          {
            title: "Cohérence",
            description: "Garantie d'une identité visuelle harmonieuse.",
            icon: Eye
          },
          {
            title: "Expertise créative",
            description: "Conseils professionnels et direction artistique.",
            icon: Brush
          }
        ]}
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs moodboards"
        testimonials={[
          {
            content: "Le moodboard a parfaitement capturé l'essence de notre marque et guidé toute notre identité visuelle.",
            author: {
              name: "Marie Laurent",
              role: "Directrice Artistique",
              company: "Studio Créatif",
              image: "/static/images/testimonials/marie-laurent.webp"
            }
          },
          {
            content: "Une exploration visuelle qui nous a permis de définir clairement notre direction artistique.",
            author: {
              name: "Thomas Moreau",
              role: "Fondateur",
              company: "Brand New",
              image: "/static/images/testimonials/thomas-moreau.webp"
            }
          },
          {
            content: "Un outil précieux qui a unifié la vision de toute notre équipe créative.",
            author: {
              name: "Sophie Martin",
              role: "Creative Lead",
              company: "Design Factory",
              image: "/static/images/testimonials/sophie-martin.webp"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de création de moodboards"
        items={[
          {
            question: "Qu'est-ce qu'un moodboard et à quoi sert-il ?",
            answer: "Un moodboard est un assemblage visuel qui définit la direction artistique de votre projet. Il combine couleurs, typographies, images et textures pour créer une référence visuelle cohérente. C'est un outil essentiel pour communiquer votre vision et assurer la cohérence de votre identité visuelle."
          },
          {
            question: "Comment se déroule le processus de création ?",
            answer: "Le processus commence par une phase de découverte où nous explorons vos objectifs et votre univers. Nous effectuons ensuite une recherche approfondie pour sélectionner les éléments visuels appropriés. Après plusieurs itérations et vos retours, nous finalisons le moodboard qui servira de guide pour votre projet."
          },
          {
            question: "Quels éléments comprend un moodboard ?",
            answer: "Un moodboard professionnel inclut généralement : une palette de couleurs, des typographies, des images d'inspiration, des textures, des patterns, et des références stylistiques. Nous ajoutons également des notes explicatives pour clarifier les choix créatifs."
          },
          {
            question: "Comment utilisez-vous le moodboard dans la suite du projet ?",
            answer: "Le moodboard sert de référence tout au long du projet. Il guide les décisions de design, assure la cohérence visuelle et facilite la communication entre toutes les parties prenantes. C'est un document vivant qui peut évoluer avec vos retours."
          },
          {
            question: "Combien de temps prend la création d'un moodboard ?",
            answer: "La création d'un moodboard professionnel prend généralement 1 à 2 semaines, incluant la phase de recherche, la création initiale et les itérations basées sur vos retours. Ce temps nous permet d'explorer en profondeur et d'affiner la direction artistique."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Enrichissez votre identité visuelle avec nos services additionnels"
        features={[
          {
            title: "Charte graphique",
            description: "Création d'une charte graphique complète.",
            icon: FileImage
          },
          {
            title: "Style Guide",
            description: "Guide détaillé d'utilisation de votre identité.",
            icon: Layers
          },
          {
            title: "Direction artistique",
            description: "Accompagnement créatif continu.",
            icon: PenTool
          }
        ]}
      />
    </ServiceLayout>
  );
};

export default MoodboardServicePage;