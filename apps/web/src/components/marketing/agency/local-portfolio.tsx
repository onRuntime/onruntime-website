import { Link } from '@onruntime/translations/next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';
import Projects from '@/constants/projects';
import { Project, Tag } from '@/types/project';
import { getTranslation } from '@/lib/translations.server';

interface LocalPortfolioProps {
  agency: Agency;
}

interface LocalPortfolioProjectProps {
  project: Project;
  agency: Agency;
  isPrimary: boolean;
}

const LocalPortfolioProject = async ({
  project,
  agency,
  isPrimary,
}: LocalPortfolioProjectProps) => {
  const { t: tProject } = await getTranslation(`constants/projects/${project.id}`);
  const { t } = await getTranslation('components/marketing/agency/local-portfolio');

  const getExpertiseText = () => {
    const isFeatured = project.tags.includes(Tag.FEATURED);
    if (isPrimary) {
      return isFeatured
        ? t('project.expertise-featured', { region: agency.region })
        : t('project.expertise-digital', { region: agency.region });
    }
    return isFeatured
      ? t('project.skills-featured', { name: agency.name })
      : t('project.skills-digital', { name: agency.name });
  };

  const getTagLabel = (tag: Tag): string => {
    switch (tag) {
      case Tag.FEATURED:
        return t('tags.featured');
      case Tag.OPEN_SOURCE:
        return t('tags.open-source');
      case Tag.CUSTOMER:
        return t('tags.customer');
      default: {
        const _exhaustiveCheck: never = tag;
        return _exhaustiveCheck;
      }
    }
  };

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden hover:border-onruntime-blue transition-colors">
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
        <p className="text-sm text-muted-foreground mb-4">{tProject("description")}</p>

        <div className="mb-4 p-3 bg-muted/50 rounded-md">
          <p className="text-xs font-medium mb-1">{t('project.market-application', { region: agency.region })}</p>
          <p className="text-sm text-muted-foreground">
            {getExpertiseText()}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-muted text-xs rounded-full">
              {getTagLabel(tag)}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link href={Routes.project(project.id)}>
            <Button variant="outline" className="w-full">
              {t('project.view-project')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const LocalPortfolio = async ({ agency }: LocalPortfolioProps) => {
  const { t } = await getTranslation('components/marketing/agency/local-portfolio');

  const featuredProjects = Projects.filter(project =>
    project.tags.includes(Tag.FEATURED)
  ).slice(0, 1);

  const otherProjects = Projects.filter(project =>
    !project.tags.includes(Tag.FEATURED)
  ).slice(0, 2 - featuredProjects.length);

  const displayProjects = [...featuredProjects, ...otherProjects].slice(0, 2);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {t('section.title', { name: agency.name })}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {t('section.description', { region: agency.region })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayProjects.map((project, index) => (
          <LocalPortfolioProject
            key={project.id}
            project={project}
            agency={agency}
            isPrimary={index === 0}
          />
        ))}
      </div>

      <div className="p-6 border rounded-lg bg-card text-center">
        <p className="text-lg font-medium text-foreground mb-2">
          {t('cta.title', { name: agency.name })}
        </p>
        <p className="text-muted-foreground mb-4">
          {t('cta.description', { region: agency.region })}
        </p>
        <Link href={Routes.contact}>
          <Button>
            {t('cta.button')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LocalPortfolio;
