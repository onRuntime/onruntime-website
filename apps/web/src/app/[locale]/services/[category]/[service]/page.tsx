import React from 'react';
import { notFound } from 'next/navigation';
import Services from '@/constants/services';
import ServiceLayout from '@/components/marketing/services/service-layout';
import FeatureSection from '@/components/marketing/services/feature-section';
import TestimonialsSection from '@/components/marketing/services/testimonials-section';
import FAQSection from '@/components/marketing/services/faq-section';
import { ServiceCategoryData, SubService } from '@/types/service';
import { constructMetadata } from '@/lib/utils/metadata';

type Props = {
  params: Promise<{
    category: string;
    service: string;
  }>;
};

function findService(category: string, service: string): { categoryData: ServiceCategoryData | undefined, subService: SubService | undefined } {
  const categoryData = Services.find(s => s.id === category);
  const subService = categoryData?.subServices.find(sub => sub.id === service);

  return { categoryData, subService };
}

export async function generateMetadata({ params }: Props) {
  const { category, service } = await params;
  const { categoryData, subService } = findService(category, service);

  if (!categoryData || !subService) {
    return constructMetadata({
      title: "Service non trouvé",
      description: "Ce service n'existe pas.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${subService.name} | ${categoryData.name}`,
    description: subService.description,
  });
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const { categoryData, subService } = findService(category, service);

  if (!categoryData || !subService) {
    notFound();
  }
  
  return (
    <ServiceLayout
      title={`${subService.name} | ${categoryData.name}`}
      description={subService.description}
      heroTitle={subService.heroTitle || subService.name}
      heroDescription={subService.heroDescription || subService.description}
    >
      
      {subService.features && subService.features.length > 0 && (
        <FeatureSection
          title={`Excellence en ${subService.name.toLowerCase()}`}
          description={`Notre expertise en ${subService.name.toLowerCase()} vous garantit des solutions professionnelles et performantes.`}
          features={subService.features}
        />
      )}

      {subService.benefits && subService.benefits.length > 0 && (
        <FeatureSection
          title={`${subService.name} professionnel`}
          description={`Découvrez les avantages d'un service ${subService.name.toLowerCase()} professionnel.`}
          features={subService.benefits}
          reversed
        />
      )}

      {subService.testimonials && subService.testimonials.length > 0 && (
        <TestimonialsSection
          title="Ils nous font confiance"
          description={`Découvrez les retours de nos clients sur leurs projets ${subService.name.toLowerCase()}`}
          testimonials={subService.testimonials}
        />
      )}

      {subService.faqItems && subService.faqItems.length > 0 && (
        <FAQSection
          title="Questions fréquentes"
          description={`Tout ce que vous devez savoir sur notre service de ${subService.name.toLowerCase()}`}
          items={subService.faqItems}
        />
      )}

      {subService.complementaryServices && subService.complementaryServices.length > 0 && (
        <FeatureSection
          title="Services complémentaires"
          description={`Optimisez votre projet ${subService.name.toLowerCase()} avec nos services additionnels`}
          features={subService.complementaryServices}
        />
      )}
    </ServiceLayout>
  );
}

export async function generateStaticParams() {
  const paths: { category: string; service: string }[] = [];
  
  Services.forEach(category => {
    category.subServices.forEach(service => {
      paths.push({
        category: category.id,
        service: service.id,
      });
    });
  });
  
  return paths;
}