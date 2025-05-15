import React from 'react';
import { Agency } from '@/types/agency';

interface LocalExpertiseProps {
  agency: Agency;
}

const LocalExpertise: React.FC<LocalExpertiseProps> = ({ agency }) => {
  
  const accent = agency.accentColor || "blue";

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Solutions web adaptées aux entreprises de {agency.name}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {agency.expertiseText}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {agency.strengths.map((strength, index) => {
          const Icon = strength.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              {Icon && (
                <div className={`p-3 rounded-md bg-${accent}/10 text-onruntime-${accent} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
              )}
              {!Icon && (
                <div className={`p-3 rounded-md bg-${accent}/10 text-onruntime-${accent} mb-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 22v-6"></path>
                    <path d="M9 8V2"></path>
                    <path d="M15 8V2"></path>
                    <path d="M12 8a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4Z"></path>
                    <path d="M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  </svg>
                </div>
              )}
              <h3 className="text-xl font-medium text-foreground mb-2">{strength.title}</h3>
              <p className="text-sm text-muted-foreground">{strength.description}</p>
            </div>
          );
        })}
      </div>

      <div className="p-6 border rounded-lg bg-card">
        <h3 className="text-xl font-medium text-foreground mb-4">Notre approche pour les projets à {agency.name}</h3>
        <p className="text-muted-foreground">{agency.whyChooseUs}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {agency.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`p-1 rounded-md bg-${accent}/10 text-onruntime-${accent} mt-0.5`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalExpertise;