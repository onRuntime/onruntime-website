import React from 'react';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { ServiceCategory } from '@/types/service';
import { Lightbulb, Target, Users, Zap } from 'lucide-react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata({
  title: "Agence de design UI/UX : interfaces modernes et intuitives",
  description: "Création d'interfaces utilisateur et expériences digitales engageantes. Notre agence de design conçoit des interfaces qui convertissent et fidélisent.",
});

const DesignServicePage = () => {
  const designService = Services.find(service => service.id === ServiceCategory.DESIGN);

  if (!designService) {
    return null;
  }

  const benefits = [
    {
      title: "Design UI/UX centré utilisateur",
      description: "Une approche qui place les besoins utilisateurs au cœur de nos designs, validée par des prototypes interactifs.",
      icon: Users
    },
    {
      title: "Innovation créative",
      description: "Des solutions UI/UX créatives et des prototypes innovants qui distinguent votre marque tout en respectant les standards.",
      icon: Lightbulb
    },
    {
      title: "Prototypage itératif",
      description: "Une méthodologie basée sur des prototypes rapides et des itérations fréquentes pour affiner l'expérience utilisateur.",
      icon: Zap
    },
    {
      title: "Objectifs business",
      description: "Un design UI/UX aligné sur vos objectifs commerciaux, validé par des tests utilisateurs sur prototypes.",
      icon: Target
    }
  ];

  const processList = [
    {
      title: "Analyse des besoins",
      description: "Première étape cruciale où nous analysons vos besoins, votre marque et vos objectifs business pour définir la direction UI/UX.",
      services: ["Design UI/UX"]
    },
    {
      title: "Recherche et moodboard",
      description: "Création de moodboards et exploration des directions créatives possibles. Définition de la direction artistique globale.",
      services: ["Design UI/UX", "Moodboard"]
    },
    {
      title: "Wireframes",
      description: "Conception des wireframes pour valider la structure, la hiérarchie et l'architecture de l'information.",
      services: ["Design UI/UX", "Wireframes"]
    },
    {
      title: "Design d'interface",
      description: "Création des maquettes finales en respectant votre charte graphique. Attention particulière aux composants et à leur réutilisabilité.",
      services: ["Design UI/UX"]
    },
    {
      title: "Prototypage",
      description: "Création de prototypes pour tester les interactions et valider les parcours utilisateurs.",
      services: ["Design UI/UX"]
    },
    {
      title: "Développement",
      description: "Transformation des maquettes en interfaces fonctionnelles, avec une attention particulière aux animations définies.",
      services: ["Développement Frontend", "Intégration"]
    }
  ];

  return (
    <ServiceOverviewPage
      service={designService}
      benefits={benefits}
      processList={processList}
    />
  );
};

export default DesignServicePage;