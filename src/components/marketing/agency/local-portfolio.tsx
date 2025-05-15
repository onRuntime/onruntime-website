import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';
import Projects from '@/constants/projects';
import { Tag } from '@/types/project';

interface LocalPortfolioProps {
  agency: Agency;
}

const LocalPortfolio: React.FC<LocalPortfolioProps> = ({ agency }) => {
  // Au lieu d'utiliser des projets fictifs locaux, utilisons les projets réels
  // Les projets mis en avant - on prend d'abord les featured s'il y en a
  const featuredProjects = Projects.filter(project => 
    project.tags.includes(Tag.FEATURED)
  ).slice(0, 1);
  
  // Puis 1-2 autres projets pour compléter
  const otherProjects = Projects.filter(project => 
    !project.tags.includes(Tag.FEATURED)
  ).slice(0, 2 - featuredProjects.length);
  
  // Combine pour affichage
  const displayProjects = [...featuredProjects, ...otherProjects].slice(0, 2);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Notre expertise applicable aux projets à {agency.name}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez quelques-unes de nos réalisations qui illustrent notre savoir-faire, 
          applicable aux défis numériques des entreprises de {agency.region}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayProjects.map((project, index) => (
          <div key={project.id} className="flex flex-col h-full border rounded-lg overflow-hidden hover:border-onruntime-blue transition-colors">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image 
                src={project.showcaseUrl || project.thumbnailUrl}
                alt={project.name}
                className="object-cover"
                fill
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-medium mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              {/* Explication de la pertinence pour le marché local */}
              <div className="mb-4 p-3 bg-muted/50 rounded-md">
                <p className="text-xs font-medium mb-1">Pertinence pour {agency.name}:</p>
                <p className="text-sm text-muted-foreground">
                  {index === 0 
                    ? `Cette solution peut être adaptée aux ${agency.keyBusinessSectors[0]}, un secteur clé à ${agency.name}.` 
                    : `Ce type de projet répond aux enjeux de ${agency.keyBusinessSectors[1] || agency.keyBusinessSectors[0]} dans la région ${agency.region}.`}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">
                    {tag === Tag.FEATURED ? "Projet phare" : 
                     tag === Tag.OPEN_SOURCE ? "Open Source" : tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto">
                <Link href={Routes.project(project.id)}>
                  <Button variant="outline" className="w-full">
                    Voir le projet
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appel à l'action adaptable au marché local */}
      <div className="p-6 border rounded-lg bg-card text-center">
        <p className="text-lg font-medium text-foreground mb-2">
          Un projet digital pour votre entreprise à {agency.name} ?
        </p>
        <p className="text-muted-foreground mb-4">
          Notre expertise est applicable à tous les secteurs, avec une attention particulière aux spécificités du marché {agency.region}.
        </p>
        <Link href={Routes.contact}>
          <Button>
            Discutons de votre projet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LocalPortfolio;