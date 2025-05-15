import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/utils/metadata';
import CityHeroSection from '@/components/marketing/agency/city-hero-section';
import LocalExpertise from '@/components/marketing/agency/local-expertise';
import LocalPortfolio from '@/components/marketing/agency/local-portfolio';
import ContactCTA from '@/components/marketing/agency/contact-cta';
import { getAgencyById } from '@/constants/agencies';
import { LocalBusinessSchema } from '@/components/json-ld/localbusiness-schema';
import { BreadcrumbSchema } from '@/components/json-ld/breadcrumb-schema';
import { FAQPageSchema } from '@/components/json-ld/faqpage-schema'; 
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
  
  if (!agency) {
    return constructMetadata({
      title: "Expertise locale non disponible",
      description: "Nous n'avons pas encore d'expertise spécifique pour cette ville.",
      noIndex: true
    });
  }

  return constructMetadata({
    title: agency.title,
    description: agency.description,
  });
}

export default async function CityPage({ params }: AgencyPageProps) {
  const { city } = await params;
  const cityLower = city.toLowerCase();

  const agency = getAgencyById(cityLower);

  if (!agency) {
    notFound();
  }

  const faqItems = [
    {
      questionName: `Comment choisir la bonne agence web à ${agency.name} ?`,
      acceptedAnswerText: `Pour choisir la bonne agence web à ${agency.name}, évaluez leur connaissance du marché local, leur portfolio dans votre secteur d'activité, et leur capacité à comprendre vos objectifs spécifiques. L'expertise dans les défis numériques propres à la région ${agency.region} est également un facteur clé.`
    },
    {
      questionName: `Quels sont les coûts d'un projet web à ${agency.name} ?`,
      acceptedAnswerText: `Les coûts d'un projet web à ${agency.name} varient selon la complexité, les fonctionnalités et les objectifs. Pour un site vitrine professionnel, comptez entre 3 000€ et 8 000€. Pour une application web ou e-commerce, les tarifs débutent généralement à 10 000€. Demandez un devis personnalisé pour une estimation précise.`
    },
    {
      questionName: `Combien de temps faut-il pour développer un site web ou une application pour mon entreprise à ${agency.name} ?`,
      acceptedAnswerText: `Les délais de développement pour une entreprise à ${agency.name} dépendent de la complexité du projet. Un site vitrine peut être réalisé en 4-8 semaines, tandis qu'une application sur mesure ou un e-commerce nécessite généralement 2-4 mois. Notre méthodologie agile permet des livraisons progressives pour voir rapidement les avancées.`
    },
    {
      questionName: `Pouvez-vous travailler efficacement avec mon entreprise à ${agency.name} à distance ?`,
      acceptedAnswerText: `Absolument. Nous collaborons efficacement avec les entreprises de ${agency.name} grâce à notre méthodologie éprouvée de travail à distance. Visioconférences régulières, outils collaboratifs performants et notre connaissance approfondie du marché local de ${agency.region} nous permettent d'assurer un suivi aussi efficace qu'avec une équipe sur place.`
    }
  ];
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      
      <LocalBusinessSchema 
        type="ProfessionalService"
        id={`https://onruntime.com/agency/${agency.id}#service`}
        description={agency.description}
        geo={agency.geo}
      />
      
      <BreadcrumbSchema 
        itemListElements={[
          {
            position: 1,
            name: "Accueil",
            item: "https://onruntime.com/"
          },
          {
            position: 2,
            name: "Expertise locale",
            item: "https://onruntime.com/agency"
          },
          {
            position: 3,
            name: `${agency.name}`,
            item: `https://onruntime.com/agency/${agency.id}`
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
              Défis numériques des entreprises à {agency.name}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Les entreprises de {agency.name} font face à des défis spécifiques en matière de transformation digitale. Notre expertise nous permet d&apos;y répondre efficacement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-medium text-foreground mb-4">Enjeux du marché {agency.region}</h3>
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
                    <p className="text-muted-foreground">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-medium text-foreground mb-4">Nos solutions adaptées</h3>
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
                      <h4 className="text-sm font-medium text-foreground">{service.name}</h4>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                );
              })}
              <a 
                href={Routes.services} 
                className="text-xs flex items-center text-onruntime-blue hover:underline mt-2"
              >
                Découvrir tous nos services
                <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <LocalPortfolio agency={agency} />

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Questions fréquentes sur les projets web à {agency.name}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Découvrez les réponses aux questions les plus courantes des entreprises de {agency.name} concernant leurs projets digitaux.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="p-6 border rounded-lg bg-card">
                <h3 className="text-lg font-medium text-foreground mb-2">{faq.questionName}</h3>
                <p className="text-muted-foreground">{faq.acceptedAnswerText}</p>
              </div>
            ))}
          </div>
        </div>

        {agency.testimonials && agency.testimonials.length > 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Ce que disent nos clients à {agency.name}
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Découvrez les retours d&apos;entreprises locales avec lesquelles nous avons collaboré.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {agency.testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 border rounded-lg bg-card">
                  <p className="text-muted-foreground italic mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      {testimonial.imageUrl ? (
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role} - {testimonial.company}</p>
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