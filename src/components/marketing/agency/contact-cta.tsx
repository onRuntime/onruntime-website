import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Calendar } from 'lucide-react';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';

interface ContactCTAProps {
  agency: Agency;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ agency }) => {
  const accent = agency.accentColor || "blue";

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card p-12">
      <div className="absolute right-8 top-8 text-onruntime-blue/20 w-24 h-24 rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
        </svg>
      </div>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Un projet adapté au marché de {agency.name} ?
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Notre expertise du marché local de {agency.region} nous permet de vous proposer des solutions parfaitement adaptées à votre contexte régional. Discutons de votre projet !
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Video className={`h-5 w-5 text-onruntime-${accent}`} />
            <span>Consultation en ligne via visioconférence</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className={`h-5 w-5 text-onruntime-${accent}`} />
            <span>Horaires flexibles adaptés à votre agenda</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-onruntime-${accent} flex-shrink-0 mt-0.5`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Expertise approfondie du marché de {agency.name} et de {agency.region}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="text-md xs:text-lg">
            <Link href={Routes.contact}>
              Discuter de votre projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={Routes.services}>
              Découvrir nos services  
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;