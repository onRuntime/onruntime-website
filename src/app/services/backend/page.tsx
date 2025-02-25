import React from 'react';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { ServiceCategory } from '@/types/service';
import type { Metadata } from "next";
import { Database, Server, Shield, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: "Agence de développement backend : API et infrastructures",
  description: "Conception d'architectures backend robustes et API sécurisées. Notre agence développe des solutions évolutives qui soutiennent votre croissance.",
};

const BackendServicePage = () => {
  const backendService = Services.find(service => service.id === ServiceCategory.BACKEND);

  if (!backendService) {
    return null;
  }

  const benefits = [
    {
      title: "Architecture scalable",
      description: "Systèmes conçus pour évoluer avec votre croissance, utilisant des architectures modernes et distribuées.",
      icon: Scale
    },
    {
      title: "Base de données optimisée",
      description: "Conception et optimisation des bases de données pour des performances maximales et une intégrité des données.",
      icon: Database
    },
    {
      title: "Infrastructure robuste",
      description: "Déploiement sur des infrastructures cloud modernes avec haute disponibilité et résilience.",
      icon: Server
    },
    {
      title: "Sécurité avancée",
      description: "Implémentation des meilleures pratiques de sécurité et de protection des données sensibles.",
      icon: Shield
    }
  ];

  const processList = [
    {
      title: "Analyse des besoins",
      description: "Étude approfondie des besoins techniques, définition de l'architecture et des choix technologiques.",
      services: ["Architecture", "Conseil technique"]
    },
    {
      title: "Conception système",
      description: "Design de l'architecture backend, modélisation des données et définition des APIs.",
      services: ["Architecture", "Database Design"]
    },
    {
      title: "Développement API",
      description: "Implémentation des APIs RESTful ou GraphQL avec documentation complète.",
      services: ["API Development", "Documentation"]
    },
    {
      title: "Base de données",
      description: "Mise en place et optimisation des bases de données avec focus sur la performance et la scalabilité.",
      services: ["Database", "Optimisation"]
    },
    {
      title: "Tests et sécurité",
      description: "Implémentation des tests automatisés et des mesures de sécurité avancées.",
      services: ["Tests", "Security"]
    },
    {
      title: "Déploiement et monitoring",
      description: "Mise en place de l'infrastructure cloud, du monitoring et des alertes.",
      services: ["DevOps", "Monitoring"]
    }
  ];

  return (
    <ServiceOverviewPage
      service={backendService}
      heroImage="/static/images/services/back-end/dev-back-hero.webp"
      showCaseImage="/static/images/services/back-end/back-expert.webp"
      benefits={benefits}
      processList={processList}
    />
  );
};

export default BackendServicePage;