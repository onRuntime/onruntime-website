import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';

interface CityHeroSectionProps {
  agency: Agency;
}

const CityHeroSection: React.FC<CityHeroSectionProps> = ({ agency }) => {
  
  const accent = agency.accentColor || "blue";

  const heroTitle = agency.heroTitle || `Développement web à ${agency.name}`;
  const heroDescription = agency.heroDescription || agency.description;

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card mb-24">
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="p-8 md:p-12 flex flex-col items-start gap-6 relative z-10">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            {heroTitle}
          </h1>
          
          <p className="text-muted-foreground text-lg">
            {heroDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            {agency.keyBusinessSectors.slice(0, 3).map((sector, index) => (
              <div key={index} className="px-3 py-1 bg-background rounded-full border text-sm">
                {sector}
              </div>
            ))}
          </div>

          <Link href={Routes.contact}>
            <Button size="lg">
              Démarrer votre projet à {agency.name}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="relative hidden md:flex items-center justify-center p-8 overflow-hidden">
          <div className="relative z-10 w-full max-w-xs aspect-square">
            
            {agency.primaryStat && agency.primaryStat.icon && (
              <div className={`absolute inset-0 rounded-full bg-onruntime-${accent}/5 backdrop-blur-sm border border-onruntime-${accent}/10 flex items-center justify-center`}>
                {React.createElement(
                  agency.primaryStat.icon,
                  { className: `w-24 h-24 text-onruntime-${accent} opacity-30` }
                )}
              </div>
            )}

            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm"
              style={{ maxWidth: '160px' }}
            >
              <p className="text-center font-medium text-lg capitalize">{agency.name}</p>
              {agency.primaryStat && (
                <p className="text-xs text-center text-muted-foreground mt-1">
                  Spécialiste {agency.primaryStat.label}
                </p>
              )}
            </div>

            <div className={`absolute right-0 top-0 w-20 h-20 rounded-full bg-onruntime-${accent}/10 backdrop-blur-sm border border-onruntime-${accent}/20`}></div>
            <div className={`absolute left-12 bottom-12 w-16 h-16 rounded-full bg-onruntime-${accent}/15 backdrop-blur-sm border border-onruntime-${accent}/30`}></div>
            <div className={`absolute left-0 top-1/4 w-12 h-12 rounded-full bg-onruntime-${accent}/20 backdrop-blur-sm border border-onruntime-${accent}/40`}></div>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
        <div className={`absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-onruntime-${accent} blur-3xl`}></div>
        <div className={`absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-onruntime-${accent} blur-3xl`}></div>
      </div>

      <DotPattern
        width={30}
        height={30}
        className={cn(
          "absolute inset-0 z-0",
          "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
        )}
      />
    </div>
  );
};

export default CityHeroSection;