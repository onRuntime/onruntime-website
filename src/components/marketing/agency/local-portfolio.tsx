import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Routes from '@/constants/routes';
import { Tag } from '@/types/project';
import Projects from '@/constants/projects';
import { Agency } from '@/types/agency';

interface LocalPortfolioProps {
  agency: Agency;
}

const LocalPortfolio: React.FC<LocalPortfolioProps> = ({ agency }) => {
  // Get featured projects - in a real app, you would filter by city
  const featuredProjects = Projects.filter(project => 
    project.tags.includes(Tag.FEATURED)
  ).slice(0, 1);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Nos réalisations à {agency.name}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez quelques-uns de nos projets réalisés pour des entreprises à {agency.name} et dans la région {agency.region}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First local project */}
        {agency.localProjects.length > 0 && (
          <div className="flex flex-col h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
              <Image 
                src={agency.localProjects[0].imageUrl}
                alt={agency.localProjects[0].name}
                className="object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-medium">{agency.localProjects[0].name}</h3>
            <p className="mt-2 mb-4 text-muted-foreground">{agency.localProjects[0].description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {agency.localProjects[0].tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">{tag}</span>
              ))}
            </div>
            <div className="mt-auto">
              <Button variant="outline" className="w-full">
                Demander une étude de cas similaire
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Featured project from main projects */}
        {featuredProjects.map((project) => (
          <div key={project.id} className="flex flex-col h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
              <Image 
                src={project.showcaseUrl} 
                alt={project.name}
                className="object-cover"
                fill
              />
            </div>
            <h3 className="text-xl font-medium">{project.name}</h3>
            <p className="mt-2 mb-4 text-muted-foreground line-clamp-2">{project.description}</p>
            <div className="mt-auto">
              <Link href={Routes.project(project.id)}>
                <Button variant="outline" className="w-full">
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href={Routes.projects}>
          <Button>
            Voir tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LocalPortfolio;