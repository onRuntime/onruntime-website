import React from 'react';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { ServiceCategory } from '@/types/service';
import { Cpu, Gauge, GitBranch, Shield } from 'lucide-react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata({
  title: "Agence de développement frontend : web et applications",
  description: "Création d'applications web modernes, performantes et évolutives. Notre expertise frontend garantit des interfaces réactives et des expériences fluides.",
});

const FrontendServicePage = () => {
  const frontendService = Services.find(service => service.id === ServiceCategory.FRONTEND);

  if (!frontendService) {
    return null;
  }

  const benefits = [
    {
      title: "Architecture évolutive",
      description: "Applications construites sur des architectures modernes et scalables, prêtes pour l'évolution de votre projet.",
      icon: Cpu
    },
    {
      title: "Performance optimale",
      description: "Focus sur les performances avec des techniques avancées d'optimisation et de mise en cache.",
      icon: Gauge
    },
    {
      title: "Code maintenable",
      description: "Architecture propre et modulaire permettant une maintenance facile et des évolutions rapides.",
      icon: GitBranch
    },
    {
      title: "Sécurité renforcée",
      description: "Implémentation des meilleures pratiques de sécurité frontend pour protéger vos utilisateurs.",
      icon: Shield
    }
  ];

  const processList = [
    {
      title: "Architecture technique",
      description: "Définition de l'architecture frontend, choix des technologies et mise en place de l'environnement de développement.",
      services: ["Architecture", "Conseil technique"]
    },
    {
      title: "Mise en place du projet",
      description: "Configuration du projet avec les bonnes pratiques de développement, tests et déploiement continu.",
      services: ["Setup technique", "CI/CD"]
    },
    {
      title: "Développement des features",
      description: "Implémentation des fonctionnalités avec un focus sur la qualité du code et les performances.",
      services: ["Développement Frontend", "React", "Next.js"]
    },
    {
      title: "Gestion de l'état",
      description: "Mise en place d'une gestion d'état robuste et performante pour les données de l'application.",
      services: ["State Management", "API Integration"]
    },
    {
      title: "Tests et qualité",
      description: "Mise en place des tests automatisés et des processus d'assurance qualité.",
      services: ["Tests unitaires", "Tests E2E"]
    },
    {
      title: "Optimisation et monitoring",
      description: "Optimisation des performances et mise en place d'outils de monitoring.",
      services: ["Performance", "Analytics"]
    }
  ];

  return (
    <ServiceOverviewPage
      service={frontendService}
      benefits={benefits}
      processList={processList}
    />
  );
};

export default FrontendServicePage;