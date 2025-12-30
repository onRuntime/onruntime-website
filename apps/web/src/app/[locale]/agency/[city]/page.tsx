import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/utils/metadata.server';
import { getTranslation } from '@/lib/translations.server';
import CityHeroSection from '@/components/marketing/agency/city-hero-section';
import LocalExpertise from '@/components/marketing/agency/local-expertise';
import LocalPortfolio from '@/components/marketing/agency/local-portfolio';
import ContactCTA from '@/components/marketing/agency/contact-cta';
import { getAgencyById } from '@/constants/agencies';
import { LocalBusinessSchema } from '@/components/json-ld/localbusiness-schema';
import { BreadcrumbSchema } from '@/components/json-ld/breadcrumb-schema';
import { FAQPageSchema } from '@/components/json-ld/faqpage-schema';
import { ORGANIZATION_DATA } from '@/components/json-ld/constants';
import FAQSection from '@/components/marketing/services/faq-section';
import Routes from '@/constants/routes';

type AgencyPageProps = {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityLower = city.toLowerCase();
  const agency = getAgencyById(cityLower);
  const { t } = await getTranslation('app/agency/[city]/page');

  if (!agency) {
    return constructMetadata({
      title: t('metadata.not-found.title'),
      description: t('metadata.not-found.description'),
      noIndex: true,
    });
  }

  const { t: tAgency } = await getTranslation(`constants/agencies/${agency.id}`);

  return constructMetadata({
    title: tAgency('title'),
    description: tAgency('description'),
  });
}

export default async function CityPage({ params }: AgencyPageProps) {
  const { city } = await params;
  const cityLower = city.toLowerCase();

  const agency = getAgencyById(cityLower);

  if (!agency) {
    notFound();
  }

  const { t } = await getTranslation('app/agency/[city]/page');
  const { t: tAgency } = await getTranslation(`constants/agencies/${agency.id}`);

  const faqItems = [
    {
      questionName: t('faq.questions.choose-agency.question', { city: agency.name }),
      acceptedAnswerText: t('faq.questions.choose-agency.answer', { city: agency.name, region: agency.region })
    },
    {
      questionName: t('faq.questions.project-costs.question', { city: agency.name }),
      acceptedAnswerText: t('faq.questions.project-costs.answer', { city: agency.name })
    },
    {
      questionName: t('faq.questions.development-time.question', { city: agency.name }),
      acceptedAnswerText: t('faq.questions.development-time.answer', { city: agency.name })
    },
    {
      questionName: t('faq.questions.remote-work.question', { city: agency.name }),
      acceptedAnswerText: t('faq.questions.remote-work.answer', { city: agency.name, region: agency.region })
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 w-full">

      <LocalBusinessSchema
        type="ProfessionalService"
        id={`${ORGANIZATION_DATA.url}${Routes.agency.city(agency.id)}#service`}
        description={tAgency('description')}
        geo={agency.geo}
      />

      <BreadcrumbSchema
        itemListElements={[
          {
            position: 1,
            name: t('breadcrumb.home'),
            item: `${ORGANIZATION_DATA.url}/`
          },
          {
            position: 2,
            name: t('breadcrumb.local-expertise'),
            item: `${ORGANIZATION_DATA.url}${Routes.agency.root}`
          },
          {
            position: 3,
            name: `${agency.name}`,
            item: `${ORGANIZATION_DATA.url}${Routes.agency.city(agency.id)}`
          }
        ]}
      />

      <FAQPageSchema mainEntity={faqItems} />

      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        <CityHeroSection agency={agency} />
        <LocalExpertise agency={agency} />

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              {t('challenges.title', { city: agency.name })}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('challenges.description', { city: agency.name })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-medium text-foreground mb-4">{t('challenges.market-issues', { region: agency.region })}</h3>
              <ul className="space-y-4">
                {agency.localChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-onruntime-blue/10 text-onruntime-blue mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="m4.93 4.93 4.24 4.24"/>
                        <path d="m14.83 9.17 4.24-4.24"/>
                        <path d="m14.83 14.83 4.24 4.24"/>
                        <path d="m9.17 14.83-4.24 4.24"/>
                        <circle cx="12" cy="12" r="4"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">{tAgency(`local-challenges.${challenge}`)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-medium text-foreground mb-4">{t('challenges.our-solutions')}</h3>
              {agency.focusedServices.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-start gap-3 mb-4">
                    {Icon && (
                      <div className="p-1.5 rounded-md bg-onruntime-blue/10 text-onruntime-blue mt-0.5 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{tAgency(`focused-services.${service.key}.name`)}</h4>
                      <p className="text-xs text-muted-foreground">{tAgency(`focused-services.${service.key}.description`)}</p>
                    </div>
                  </div>
                );
              })}
              <a
                href={Routes.services}
                className="text-xs flex items-center text-onruntime-blue hover:underline mt-2"
              >
                {t('challenges.discover-all-services')}
                <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <LocalPortfolio agency={agency} />

        <FAQSection
          title={t('faq.title', { city: agency.name })}
          description={t('faq.description', { city: agency.name })}
          items={faqItems.map(faq => ({
            question: faq.questionName,
            answer: faq.acceptedAnswerText
          }))}
        />

        {agency.testimonials && agency.testimonials.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                {t('testimonials.title', { city: agency.name })}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {t('testimonials.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {agency.testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 border rounded-lg bg-card">
                  <p className="text-muted-foreground italic mb-4">&quot;{tAgency(`testimonials.${testimonial.key}.text`)}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      {testimonial.author.imageUrl ? (
                        <Image src={testimonial.author.imageUrl} alt={testimonial.author.name} width={40} height={40} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.author.role} - {testimonial.author.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <ContactCTA agency={agency} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {

  const { default: agencies } = await import('@/constants/agencies');

  return agencies.map((agency) => ({
    city: agency.id,
  }));
}
