import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Video, Calendar } from 'lucide-react';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';

interface ContactCTAProps {
  agency: Agency;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ agency }) => {
  const accent = agency.accentColor || "blue";

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card p-12">
      <Star className="absolute right-8 top-8 text-onruntime-blue/20 w-24 h-24 rotate-12" />
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Développer votre projet digital à {agency.name}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Prêt à donner vie à votre projet avec notre expertise à {agency.name} ? Notre équipe connait parfaitement le marché local et peut vous accompagner dans votre transformation digitale.
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Video className={`h-5 w-5 text-onruntime-${accent}`} />
            <span>Consultation en ligne ou présentiel selon vos besoins</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className={`h-5 w-5 text-onruntime-${accent}`} />
            <span>Planning adapté à vos besoins</span>
          </div>
          <div className="flex items-start gap-3">
            <Star className={`h-5 w-5 text-onruntime-${accent} flex-shrink-0 mt-0.5`} />
            <span>Connaissance approfondie du marché de {agency.name} et sa région</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link href={Routes.contact}>
            <Button size="lg">
              Discuter de votre projet à {agency.name}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href={Routes.services}>
            <Button variant="outline" size="lg">
              Découvrir nos services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;