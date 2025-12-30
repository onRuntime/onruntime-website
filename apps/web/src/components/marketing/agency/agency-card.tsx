import { Link } from '@onruntime/translations/next';
import { ArrowRight } from 'lucide-react';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';
import { getTranslation } from '@/lib/translations.server';

interface AgencyCardProps {
  agency: Agency;
}

const AgencyCard = async ({ agency }: AgencyCardProps) => {
  const { t } = await getTranslation('app/agency/page');
  const { t: tAgency } = await getTranslation(`constants/agencies/${agency.id}`);

  return (
    <Link
      href={Routes.agency.city(agency.id)}
      className="flex flex-col p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors group"
    >
      <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-onruntime-blue transition-colors">
        {agency.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {t('cities.region-label')}: {agency.region}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {agency.strengths.slice(0, 3).map((strength, index) => (
          <span
            key={index}
            className="inline-block text-xs px-2 py-1 rounded-full bg-muted"
          >
            {tAgency(`strengths.${strength.key}.title`)}
          </span>
        ))}
      </div>
      <div className="mt-4 text-xs text-muted-foreground flex items-center group-hover:text-onruntime-blue transition-colors">
        <span>{t('cities.discover-cta')}</span>
        <ArrowRight className="ml-1 h-3 w-3" />
      </div>
    </Link>
  );
};

export default AgencyCard;
