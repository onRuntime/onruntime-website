import React from 'react';
import { Agency } from '@/types/agency';

interface LocalExpertiseProps {
  agency: Agency;
}

const LocalExpertise: React.FC<LocalExpertiseProps> = ({ agency }) => {
  // Use accent color from agency data (default to blue if not specified)
  const accent = agency.accentColor || "blue";

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Notre expertise à {agency.name}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {agency.expertiseText}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 rounded-lg border bg-card">
        <div className="flex items-center gap-2 text-sm">
          {agency.contactInfo.address && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 text-onruntime-${accent}`}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-medium">{agency.contactInfo.address}</span>
            </>
          )}
          {!agency.contactInfo.address && agency.region && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 text-onruntime-${accent}`}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-medium">{agency.name}, {agency.region}</span>
            </>
          )}
        </div>
        <div className="h-4 w-px bg-border hidden md:block"></div>
        <div className="text-sm text-center md:text-left">
          <span className={`font-medium text-onruntime-${accent}`}>Écosystème:</span> {agency.primaryStat?.value}
        </div>
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
        <h3 className="text-xl font-medium text-foreground mb-4">Pourquoi nous choisir à {agency.name}</h3>
        <p className="text-muted-foreground">{agency.whyChooseUs}</p>
      </div>
    </div>
  );
};

export default LocalExpertise;