import { Link } from '@onruntime/translations/next';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight, Globe, Laptop, Users } from "lucide-react";
import Routes from "@/constants/routes";
import { constructMetadata } from '@/lib/utils/metadata.server';
import FranceMap from '@/components/marketing/agency/france-map';
import AgencyCard from '@/components/marketing/agency/agency-card';
import { getMajorAgencies } from '@/constants/agencies';
import { OrganizationSchema } from '@/components/json-ld/organization-schema';
import { ORGANIZATION_DATA } from '@/components/json-ld/constants';
import { getTranslation } from '@/lib/translations.server';

export async function generateMetadata() {
  const { t } = await getTranslation('app/agency/page');
  return constructMetadata({
    title: t('metadata.title'),
    description: t('metadata.description'),
  });
}

export default async function AgencyLandingPage() {
  const { t } = await getTranslation('app/agency/page');

  const majorAgencies = getMajorAgencies(10);

  return (
    <main className="min-h-screen pt-32 pb-16 sm:w-auto w-full">
      <OrganizationSchema
        type="DigitalAgency"
        id={`${ORGANIZATION_DATA.url}${Routes.agency.root}#organization`}
      />

      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">

        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col items-start gap-6">
            <h1 className="font-medium text-4xl md:text-5xl text-foreground">
              {t('hero.title')}
            </h1>

            <p className="text-muted-foreground text-lg">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={Routes.contact}>
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Link href="#expertise-locale">
                <Button variant="outline" size="lg">
                  {t('hero.secondary-cta')}
                </Button>
              </Link>
            </div>

            <DotPattern
              width={30}
              height={30}
              className={cn(
                "absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                "mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md">
              <FranceMap cities={majorAgencies.map(agency => agency.id)} />
            </div>
          </div>
        </div>

        <div id="expertise-locale" className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t('expertise.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('expertise.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">{t('expertise.local-markets.title')}</h3>
              <p className="text-muted-foreground">
                {t('expertise.local-markets.description')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">{t('expertise.remote-work.title')}</h3>
              <p className="text-muted-foreground">
                {t('expertise.remote-work.description')}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">{t('expertise.custom-solutions.title')}</h3>
              <p className="text-muted-foreground">
                {t('expertise.custom-solutions.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t('cities.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('cities.description')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {majorAgencies.map((agency) => (
              <AgencyCard key={agency.id} agency={agency} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t('why-us.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('why-us.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">{t('why-us.local-ecosystems.title')}</h3>
              <p className="text-muted-foreground">
                {t('why-us.local-ecosystems.description')}
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">{t('why-us.remote-agility.title')}</h3>
              <p className="text-muted-foreground">
                {t('why-us.remote-agility.description')}
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">{t('why-us.localized-strategies.title')}</h3>
              <p className="text-muted-foreground">
                {t('why-us.localized-strategies.description')}
              </p>
            </div>

            <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-medium text-foreground">{t('why-us.regional-analysis.title')}</h3>
              <p className="text-muted-foreground">
                {t('why-us.regional-analysis.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href={Routes.service.design.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">{t('services.design.title')}</h3>
                <p className="text-xs text-muted-foreground">
                  {t('services.design.description')}
                </p>
              </div>
            </Link>

            <Link href={Routes.service.integration.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">{t('services.integration.title')}</h3>
                <p className="text-xs text-muted-foreground">
                  {t('services.integration.description')}
                </p>
              </div>
            </Link>

            <Link href={Routes.service.frontend.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">{t('services.frontend.title')}</h3>
                <p className="text-xs text-muted-foreground">
                  {t('services.frontend.description')}
                </p>
              </div>
            </Link>

            <Link href={Routes.service.backend.root}>
              <div className="flex flex-col items-center p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors text-center">
                <h3 className="text-lg font-medium text-foreground mb-1">{t('services.backend.title')}</h3>
                <p className="text-xs text-muted-foreground">
                  {t('services.backend.description')}
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href={Routes.services}>
              <Button>
                {t('services.discover-all')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-card p-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-onruntime-blue/10 to-transparent" />
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={Routes.contact}>
                  {t('cta.contact')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[223px] text-md xs:text-xl whitespace-normal xs:whitespace-nowrap ">
                <Link href="#expertise-locale">
                  {t('cta.learn-more')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
