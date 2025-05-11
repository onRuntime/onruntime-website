import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/utils/metadata';
import CityHeroSection from '@/components/marketing/agency/city-hero-section';
import LocalExpertise from '@/components/marketing/agency/local-expertise';
import OurProcess from '@/components/marketing/agency/our-process';
import LocalPortfolio from '@/components/marketing/agency/local-portfolio';
import ContactCTA from '@/components/marketing/agency/contact-cta';
import LocalTestimonials from '@/components/marketing/agency/local-testimonials';

// City data for SEO and content
const cityData = {
  paris: {
    title: "Agence web à Paris | Développement sur mesure",
    description: "Notre agence web à Paris offre des solutions de développement web et mobile sur mesure pour votre entreprise. Experts en design UI/UX et développement.",
    metaDescription: "Votre partenaire digital à Paris pour le développement web, mobile et design UI/UX. Notre agence crée des solutions numériques innovantes adaptées à vos objectifs.",
  },
  rouen: {
    title: "Agence digitale à Rouen | Web et Mobile",
    description: "Agence digitale à Rouen spécialisée en développement web, mobile et design UI/UX. Solutions digitales sur mesure pour les entreprises normandes.",
    metaDescription: "Votre partenaire digital à Rouen pour le développement web, mobile et design UI/UX. Notre agence accompagne les entreprises normandes dans leur transformation digitale.",
  }
};

type AgencyPageProps = {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  // Get city data if valid, or default
  const { city } = await params;
  const cityLower = city.toLowerCase();
  const data = cityData[cityLower as keyof typeof cityData];
  
  if (!data) {
    return constructMetadata({
      title: "Agence non trouvée",
      description: "Cette agence n'existe pas.",
    });
  }

  return constructMetadata({
    title: data.title,
    description: data.metaDescription,
  });
}

// Generate pages for supported cities
export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }));
}

export default async function CityPage({ params }: AgencyPageProps) {
  const { city } = await params;
  const cityLower = city.toLowerCase();
  
  // Check if city exists in our data
  if (!(cityLower in cityData)) {
    notFound();
  }
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        {/* Hero Section */}
        <CityHeroSection city={cityLower} />
        
        {/* Other components */}
        <LocalExpertise city={cityLower} />
        <OurProcess city={cityLower} />
        <LocalPortfolio city={cityLower} />
        <LocalTestimonials city={cityLower} />
        <ContactCTA city={cityLower} />
      </div>
    </main>
  );
}