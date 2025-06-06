import React from 'react';
import ProcessTimeline from '@/components/marketing/services/process-timeline';
import { Agency } from '@/types/agency';

const defaultProcessSteps = [
  { 
    title: "Analyse des besoins",
    description: "Compréhension approfondie de vos objectifs commerciaux, de votre public cible et de vos exigences techniques spécifiques à votre région.",
    services: ["Consultation", "Stratégie"]
  },
  { 
    title: "Conception UX/UI",
    description: "Création de wireframes, prototypes et design d'interface utilisateur optimisés pour une expérience utilisateur exceptionnelle.",
    services: ["Design", "Prototypage"]
  },
  { 
    title: "Développement",
    description: "Programmation de votre solution avec les technologies les plus adaptées à vos besoins spécifiques.",
    services: ["Frontend", "Backend"]
  },
  { 
    title: "Tests et validation",
    description: "Tests rigoureux pour garantir la qualité, la sécurité et les performances de votre solution.",
    services: ["QA", "Optimisation"]
  },
  { 
    title: "Déploiement",
    description: "Mise en production de votre solution avec une attention particulière à la stabilité et aux performances.",
    services: ["DevOps", "Supervision"]
  },
  { 
    title: "Support continu",
    description: "Accompagnement post-lancement pour assurer le succès à long terme de votre solution digitale.",
    services: ["Maintenance", "Évolution"]
  }
];

interface OurProcessProps {
  agency: Agency;
}

const OurProcess: React.FC<OurProcessProps> = ({ agency }) => {
  
  const processSteps = defaultProcessSteps;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Notre processus de travail à {agency.name}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Une méthodologie éprouvée qui garantit des résultats exceptionnels pour nos clients
          à {agency.name} et dans toute la région {agency.region}.
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border">
        <ProcessTimeline steps={processSteps} />
      </div>
    </div>
  );
};

export default OurProcess;