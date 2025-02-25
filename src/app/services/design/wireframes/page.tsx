import React from 'react';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { 
  LayoutTemplate,
  Users,
  Blocks,
  MousePointer,
  Smartphone,
  Monitor,
  Share2,
  FileCheck,
  LayoutGrid,
  FileText,
  ListChecks
} from 'lucide-react';

export const metadata = {
  title: "Wireframes et architecture UX pour interfaces optimisées",
  description: "Conception de la structure et des parcours utilisateurs de vos interfaces. Nos wireframes garantissent une expérience utilisateur fluide et intuitive.",
};

const WireframesServicePage = () => {
  return (
    <ServiceLayout
      title={metadata.title}
      description={metadata.description}
      heroTitle="Wireframes & Architecture UX"
      heroDescription="Structurez vos interfaces utilisateur avec des wireframes professionnels. Notre expertise en UX design vous garantit une architecture intuitive et une expérience utilisateur optimale dès les premières étapes de votre projet."
      heroImage="/static/images/services/design/wireframes/hero-wireframes.webp"
    >
      {/* Caractéristiques principales */}
      <FeatureSection
        title="Excellence en conception UX"
        description="Notre expertise en création de wireframes vous garantit une architecture d'interface claire et efficace."
        features={[
          {
            title: "Architecture UX",
            description: "Structure claire et logique de vos interfaces.",
            icon: LayoutTemplate
          },
          {
            title: "Parcours utilisateur",
            description: "Optimisation des flux de navigation.",
            icon: Users
          },
          {
            title: "Hiérarchie visuelle",
            description: "Organisation efficace du contenu et des fonctionnalités.",
            icon: Blocks
          },
          {
            title: "Interactions",
            description: "Définition des comportements et des transitions.",
            icon: MousePointer
          }
        ]}
        image="/static/images/services/design/wireframes/excellence-conception-ux.webp"
      />

      {/* Avantages des wireframes */}
      <FeatureSection
        title="Design UX structuré"
        description="Découvrez les avantages des wireframes dans votre processus de conception."
        features={[
          {
            title: "Responsive Design",
            description: "Adaptation à tous les formats d'écrans.",
            icon: Smartphone
          },
          {
            title: "Prototypage rapide",
            description: "Tests et itérations efficaces.",
            icon: Monitor
          },
          {
            title: "Collaboration",
            description: "Communication claire avec toutes les parties prenantes.",
            icon: Share2
          },
          {
            title: "Validation précoce",
            description: "Détection et correction rapide des problèmes UX.",
            icon: FileCheck
          }
        ]}
        image="/static/images/services/design/wireframes/design-structure.webp"
        reversed
      />

      {/* Témoignages */}
      <TestimonialsSection
        title="Ils nous font confiance"
        description="Découvrez les retours de nos clients sur leurs wireframes"
        testimonials={[
          {
            content: "Les wireframes nous ont permis d'optimiser notre parcours utilisateur avant même de commencer le design.",
            author: {
              name: "Julie Dubois",
              role: "Product Owner",
              company: "UX Vision",
              image: "/static/images/testimonials/julie-dubois.jpg"
            }
          },
          {
            content: "Une étape cruciale qui a considérablement réduit nos coûts de développement.",
            author: {
              name: "Pierre Martin",
              role: "CTO",
              company: "AppFlow",
              image: "/static/images/testimonials/pierre-martin.jpg"
            }
          },
          {
            content: "La qualité des wireframes a facilité la communication avec toute l'équipe.",
            author: {
              name: "Sarah Lambert",
              role: "UX Designer",
              company: "DigitalFirst",
              image: "/static/images/testimonials/sarah-lambert.jpg"
            }
          }
        ]}
      />

      {/* FAQ */}
      <FAQSection
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir sur notre service de création de wireframes"
        items={[
          {
            question: "Qu'est-ce qu'un wireframe et pourquoi est-ce important ?",
            answer: "Un wireframe est une représentation schématique de votre interface qui se concentre sur la structure, la hiérarchie et les fonctionnalités, sans les éléments de design final. C'est une étape cruciale qui permet de valider l'architecture de l'information et l'expérience utilisateur avant d'investir dans le design détaillé."
          },
          {
            question: "Comment se déroule le processus de création ?",
            answer: "Le processus commence par l'analyse de vos besoins et objectifs. Nous créons ensuite des wireframes de basse fidélité pour valider la structure globale, puis des versions plus détaillées avec les interactions. Après plusieurs itérations et vos retours, nous finalisons les wireframes qui serviront de base au design UI."
          },
          {
            question: "Quels livrables sont fournis ?",
            answer: "Vous recevez un ensemble complet de wireframes pour chaque écran clé, des diagrammes de flux utilisateur, une documentation des interactions, et des prototypes interactifs pour tester les parcours utilisateur. Tous les fichiers sources sont également fournis."
          },
          {
            question: "Comment gérez-vous le responsive design ?",
            answer: "Nous créons des wireframes adaptés à chaque format d'écran important (desktop, tablet, mobile) en suivant une approche mobile-first. Chaque version est optimisée pour offrir la meilleure expérience utilisateur possible sur son support."
          },
          {
            question: "Combien de temps prend la création des wireframes ?",
            answer: "La durée dépend de la complexité du projet, mais généralement 2 à 4 semaines pour un projet moyen, incluant les phases d'analyse, création, itérations et finalisation. Nous établissons un planning détaillé au début du projet."
          }
        ]}
      />

      {/* Services complémentaires */}
      <FeatureSection
        title="Services complémentaires"
        description="Optimisez votre processus UX avec nos services additionnels"
        features={[
          {
            title: "Audit UX",
            description: "Analyse approfondie de vos interfaces existantes.",
            icon: ListChecks
          },
          {
            title: "Prototypage",
            description: "Création de prototypes interactifs.",
            icon: LayoutGrid
          },
          {
            title: "Documentation UX",
            description: "Documentation détaillée des parcours utilisateur.",
            icon: FileText
          }
        ]}
        image="/static/images/services/design/moodboard/services-supplementaires.webp"
      />
    </ServiceLayout>
  );
};

export default WireframesServicePage;