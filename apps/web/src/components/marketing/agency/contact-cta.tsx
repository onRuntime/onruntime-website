import { Link } from '@onruntime/translations/next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Video, Calendar } from 'lucide-react';
import Routes from '@/constants/routes';
import { Agency } from '@/types/agency';
import { getTranslation } from '@/lib/translations.server';

interface ContactCTAProps {
  agency: Agency;
}

const ContactCTA = async ({ agency }: ContactCTAProps) => {
  const { t } = await getTranslation('components/marketing/agency/contact-cta');
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
          {t('title', { city: agency.name })}
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          {t('description', { region: agency.region })}
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Video className={`h-5 w-5 text-onruntime-${accent}`} />
            <span>{t('features.video')}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className={`h-5 w-5 text-onruntime-${accent}`} />
            <span>{t('features.calendar')}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-onruntime-${accent} shrink-0 mt-0.5`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>{t('features.expertise', { city: agency.name, region: agency.region })}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href={Routes.contact}>
            <Button size="lg">
              {t('buttons.discuss')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href={Routes.services}>
            <Button variant="outline" size="lg">
              {t('buttons.discover')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;