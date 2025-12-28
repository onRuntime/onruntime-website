"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ProjectTimeline = () => {
  const phases = [
    { 
      title: "Prise de contact initiale",
      description: "Première rencontre pour comprendre vos besoins et établir une relation de confiance. Nous recueillons les informations essentielles sur votre projet, vos objectifs, et vos attentes.",
      adaptable: true
    },
    { 
      title: "Kickoff & Découverte",
      description: "Clarification approfondie des objectifs, attentes, et contraintes du projet. Discussion des choix technologiques et établissement d'un planning prévisionnel.",
      adaptable: true,
      optional: false
    },
    { 
      title: "Proposition et devis",
      description: "Élaboration d'une proposition détaillée incluant la vision, les étapes clés, et la méthodologie. Présentation d'un devis précis et des modalités de paiement.",
      adaptable: true
    },
    { 
      title: "Recherche et idéation",
      description: "Exploration et définition de la direction créative. Création de moodboards, d'esquisses ou de wireframes pour valider les concepts initiaux.",
      adaptable: true,
      optional: true
    },
    { 
      title: "Design UI/UX",
      description: "Conception des interfaces et de l'expérience utilisateur. Itérations régulières basées sur vos retours pour aboutir à un design final validé.",
      adaptable: true,
      optional: true
    },
    { 
      title: "Développement",
      description: "Transformation du design en produit fonctionnel avec des points de contrôle réguliers. Tests intermédiaires pour garantir la qualité.",
      adaptable: true
    },
    { 
      title: "Tests et ajustements",
      description: "Tests approfondis sur différents supports, correction des bugs et ajustements selon les retours. Validation finale avant mise en production.",
      adaptable: true
    },
    { 
      title: "Mise en production",
      description: "Déploiement du projet, formation des utilisateurs si nécessaire, et fourniture de la documentation. Support post-livraison pour une transition en douceur.",
      adaptable: true
    },
    { 
      title: "Suivi et maintenance",
      description: "Accompagnement continu pour garantir le succès de votre projet, avec des points de suivi réguliers et des optimisations continues.",
      adaptable: true,
      optional: true
    }
  ];

  const [path, setPath] = useState("");
  const timelineRef = useRef<HTMLDivElement>(null);
  const pointRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const calculatePath = () => {
      if (!timelineRef.current) return;

      const validPointRefs = pointRefs.current.filter((ref): ref is HTMLDivElement => ref !== null);
      if (validPointRefs.length === 0) return;

      const points = validPointRefs.map(ref => {
        const rect = ref.getBoundingClientRect();
        const timelineRect = timelineRef.current!.getBoundingClientRect();
        return {
          x: rect.left - timelineRect.left + rect.width / 2,
          y: rect.top - timelineRect.top + rect.height / 2
        };
      });

      let svgPath = `M ${points[0].x} ${points[0].y}`;
      
      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        const midY = (current.y + next.y) / 2;
        
        svgPath += ` C ${current.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
      }

      setPath(svgPath);
    };

    calculatePath();
    window.addEventListener('resize', calculatePath);
    return () => window.removeEventListener('resize', calculatePath);
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <p className="text-muted-foreground">
          Ce processus représente notre approche idéale, mais nous l&apos;adaptons toujours à vos besoins et contraintes spécifiques. 
          Certaines étapes peuvent être ajustées ou ignorées selon votre situation.
        </p>
      </div>

      <div className="relative" ref={timelineRef}>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: '100%' }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--onruntime-blue))" />
              <stop offset="50%" stopColor="hsl(var(--onruntime-magenta))" />
              <stop offset="100%" stopColor="hsl(var(--onruntime-blue))" />
            </linearGradient>
          </defs>
          <path
            d={path}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 8"
            className="transition-all duration-300 animate-[dash_30s_linear_infinite]"
          />
        </svg>

        <div className="relative flex flex-col gap-8 md:gap-16 max-w-2xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className={cn(
                "flex gap-8",
                
                index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                "group"
              )}
            >
              <div 
                ref={(el) => {
                  pointRefs.current[index] = el;
                }}
                className={cn(
                  "relative flex-none w-8 h-8 mt-2",
                  
                  index % 2 === 0 ? "ml-0" : "-ml-4",
                  "md:ml-0"
                )}
              >
                <div className="absolute inset-0 bg-background border-2 border-onruntime-blue rounded-full group-hover:scale-125 transition-transform" />
                <div className="absolute inset-2 bg-onruntime-blue rounded-full animate-pulse" />
              </div>

              <div className={cn(
                "flex-1 p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors",
                "group-hover:shadow-lg group-hover:shadow-onruntime-blue/5"
              )}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-lg font-medium text-foreground">
                    {phase.title}
                  </h3>
                  {phase.optional && (
                    <Badge>Optionnel</Badge>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;