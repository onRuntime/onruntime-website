import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  Palette,
  Heart,
  Book,
  PenTool,
  Layout,
  Target,
  Users,
  Globe,
  FileImage,
  Megaphone,
  Share2,
} from 'lucide-react';

export const metadata = {
  title: "Branding & Identité Visuelle | onRuntime Studio",
  description: "Créez une identité de marque mémorable et cohérente. Notre expertise en branding vous garantit une identité visuelle qui reflète vos valeurs et capte votre audience.",
};

const BrandingServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Branding & Identité de Marque"
      heroDescription="Donnez vie à votre marque avec une identité visuelle distinctive et mémorable. Notre expertise en branding vous aide à créer une image de marque qui résonne avec votre audience et reflète vos valeurs."
      heroImage="/static/images/services/design/charte-graphique/charte-graphique-hero.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en branding"
        description="Notre expertise en identité de marque vous garantit une image cohérente et impactante."
        features={[
          {
            title: "Identité visuelle",
            description: "Création d'une identité unique et mémorable.",
            icon: Palette
          },
          {
            title: "Valeurs de marque",
            description: "Expression visuelle de votre ADN et vos valeurs.",
            icon: Heart
          },
          {
            title: "Charte graphique",
            description: "Documentation complète de votre identité.",
            icon: Book
          },
          {
            title: "Design system",
            description: "Éléments visuels cohérents et réutilisables.",
            icon: PenTool
          }
        ]}
        image="/static/images/services/design/charte-graphique/excellence-branding.webp"
      />

      {/* Avantages du branding */}
      <FeatureSection
        title="Identité de marque distinctive"
        description="Découvrez les avantages d'une identité de marque professionnelle."
        features={[
          {
            title: "Reconnaissance",
            description: "Image de marque mémorable et distinctive.",
            icon: Target
          },
          {
            title: "Cohérence",
            description: "Communication visuelle unifiée sur tous les supports.",
            icon: Layout
          },
          {
            title: "Confiance",
            description: "Crédibilité renforcée auprès de votre audience.",
            icon: Users
          },
          {
            title: "Portée",
            description: "Impact visuel fort sur tous les canaux.",
            icon: Globe
          }
        ]}
        image="/static/images/services/design/charte-graphique/identite-distinctive.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leur identité de marque"
        testimonials={[
          {
            content: "Notre nouvelle identité visuelle a transformé la perception de notre marque sur le marché.",
            author: {
              name: "Émilie Robert",
              role: "Directrice Marketing",
              company: "BrandNew",
              image: "/static/images/testimonials/emilie-robert.webp"
            }
          },
          {
            content: "Une identité qui reflète parfaitement nos valeurs et résonne avec notre audience.",
            author: {
              name: "Lucas Dupont",
              role: "Fondateur",
              company: "StartupVision",
              image: "/static/images/testimonials/lucas-dupont.webp"
            }
          },
          {
            content: "La cohérence de notre marque a considérablement renforcé notre crédibilité.",
            author: {
              name: "Marie Lambert",
              role: "Directrice Communication",
              company: "InnoGroup",
              image: "/static/images/testimonials/marie-lambert.webp"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de branding"
        items={[
          {
            question: "Que comprend une identité de marque complète ?",
            answer: "Une identité de marque complète inclut le logo, la palette de couleurs, la typographie, les éléments graphiques, le ton de voix, et les règles d'utilisation. Nous fournissons une charte graphique détaillée qui documente tous ces éléments et guide leur utilisation cohérente."
          },
          {
            question: "Comment se déroule le processus de création ?",
            answer: "Le processus commence par une phase de découverte pour comprendre votre marque, vos valeurs et votre audience. Nous développons ensuite des concepts créatifs, créons les éléments visuels, et itérons selon vos retours. Le processus se termine par la livraison d'une charte graphique complète."
          },
          {
            question: "Quels livrables sont fournis ?",
            answer: "Vous recevez un package complet incluant : logos (différentes versions), palette de couleurs, typographies, éléments graphiques, modèles de documents, guides d'utilisation, et fichiers sources dans tous les formats nécessaires."
          },
          {
            question: "Comment garantissez-vous l'unicité de l'identité ?",
            answer: "Nous effectuons une recherche approfondie de votre marché et de la concurrence pour créer une identité distinctive. Nous vérifions également la disponibilité des éléments visuels pour éviter tout conflit avec des marques existantes."
          },
          {
            question: "Comment gérez-vous la transition vers la nouvelle identité ?",
            answer: "Nous fournissons un plan de déploiement progressif qui guide la transition vers la nouvelle identité. Cela inclut des recommandations pour la communication interne et externe, et un calendrier de mise en œuvre."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Renforcez votre identité de marque avec nos services additionnels"
        features={[
          {
            title: "Marketing Kit",
            description: "Création de supports marketing cohérents.",
            icon: Megaphone
          },
          {
            title: "Réseaux sociaux",
            description: "Adaptation pour les médias sociaux.",
            icon: Share2
          },
          {
            title: "Supports print",
            description: "Création de supports imprimés.",
            icon: FileImage
          }
        ]}
        image="/static/images/services/design/charte-graphique/service-complementaire.webp"
      />
    </ServiceLayout>
  );
};

export default BrandingServicePage;