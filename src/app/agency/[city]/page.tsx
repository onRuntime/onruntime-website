import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/utils/metadata';
import CityHeroSection from '@/components/marketing/agency/city-hero-section';
import LocalExpertise from '@/components/marketing/agency/local-expertise';
import OurProcess from '@/components/marketing/agency/our-process';
import LocalPortfolio from '@/components/marketing/agency/local-portfolio';
import ContactCTA from '@/components/marketing/agency/contact-cta';
import { getAgencyById } from '@/constants/agencies';
import { LocalBusinessSchema } from '@/components/json-ld/localbusiness-schema';
import { BreadcrumbSchema } from '@/components/json-ld/breadcrumb-schema';

type AgencyPageProps = {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  // Get city ID from params
  const { city } = await params;
  const cityLower = city.toLowerCase();
  
  // Find agency data
  const agency = getAgencyById(cityLower);
  
  if (!agency) {
    return constructMetadata({
      title: "Agence non trouvée",
      description: "Cette agence n'existe pas.",
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
  
  // Get agency data
  const agency = getAgencyById(cityLower);
  
  // Check if agency exists in our data
  if (!agency) {
    notFound();
  }
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Add JSON-LD schemas for SEO */}
      <LocalBusinessSchema 
        type="DigitalAgency"
        id={`https://onruntime.com/agency/${agency.id}#localbusiness`}
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
            name: "Agences",
            item: "https://onruntime.com/agency"
          },
          {
            position: 3,
            name: `Agence ${agency.name}`,
            item: `https://onruntime.com/agency/${agency.id}`
          }
        ]}
      />
      
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        <CityHeroSection agency={agency} />
        <LocalExpertise agency={agency} />
        <OurProcess agency={agency} />
        <LocalPortfolio agency={agency} />
        {/* <LocalTestimonials agency={agency} />  */}
        <ContactCTA agency={agency} />
      </div>
    </main>
  );
}

// Generate pages for available agencies
export async function generateStaticParams() {
  // Import all agencies and map to params
  const { default: agencies } = await import('@/constants/agencies');
  
  return agencies.map((agency) => ({
    city: agency.id,
  }));
}