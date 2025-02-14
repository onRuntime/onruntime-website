import React from 'react';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { ServiceCategory } from '@/types/service';
import type { Metadata } from "next";
import { Code, Zap, Layout, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Intégration | onRuntime Studio",
  description: "Transformation de vos maquettes en sites web performants et responsive. Notre expertise en intégration garantit une expérience utilisateur optimale sur tous les appareils.",
};

const IntegrationServicePage = () => {
  const integrationService = Services.find(service => service.id === ServiceCategory.INTEGRATION);

  if (!integrationService) {
    return null;
  }

  const benefits = [
    {
      title: "Code propre et maintenable",
      description: "Intégration avec des standards de code élevés et une architecture pensée pour la maintenabilité à long terme.",
      icon: Code
    },
    {
      title: "Performance optimisée",
      description: "Sites web rapides et fluides grâce à des techniques d'optimisation avancées et au respect des bonnes pratiques.",
      icon: Zap
    },
    {
      title: "Responsive design",
      description: "Adaptation parfaite à tous les écrans et appareils pour une expérience utilisateur cohérente.",
      icon: Layout
    },
    {
      title: "Animations fluides",
      description: "Intégration d'animations soignées pour enrichir l'expérience utilisateur tout en maintenant les performances.",
      icon: Sparkles
    }
  ];

  const processList = [
    {
      title: "Analyse des maquettes",
      description: "Étude approfondie des maquettes pour identifier les composants, les interactions et les points d'attention techniques.",
      services: ["Analyse technique", "Architecture"]
    },
    {
      title: "Architecture technique",
      description: "Définition de l'architecture frontend et choix des technologies adaptées au projet.",
      services: ["Architecture", "Conseil technique"]
    },
    {
      title: "Développement des composants",
      description: "Création des composants réutilisables en suivant les principes du design system.",
      services: ["Développement Frontend", "Intégration"]
    },
    {
      title: "Intégration responsive",
      description: "Adaptation du design pour tous les formats d'écran avec une attention particulière à l'expérience mobile.",
      services: ["Intégration", "Responsive Design"]
    },
    {
      title: "Optimisation",
      description: "Optimisation des performances, de l'accessibilité et du référencement technique.",
      services: ["Performance", "SEO technique"]
    },
    {
      title: "Tests et validation",
      description: "Tests approfondis sur différents navigateurs et appareils pour garantir une expérience utilisateur optimale.",
      services: ["Tests", "Quality Assurance"]
    }
  ];

  return (
    <ServiceOverviewPage
      service={integrationService}
      heroImage="/static/images/services/integration-hero.jpg"
      showCaseImage="/static/images/services/integration-showcase.jpg"
      benefits={benefits}
      processList={processList}
    />
  );
};

export default IntegrationServicePage;