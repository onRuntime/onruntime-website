import React from 'react';
import { notFound } from 'next/navigation';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { ServiceCategoryData } from '@/types/service';
import { constructMetadata } from '@/lib/utils/metadata';

// Types pour les paramètres
type Props = {
  params: Promise<{
    category: string;
  }>;
};

// Génération des métadonnées
export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  
  // Trouver la catégorie correspondante
  const categoryData = Services.find(service => service.id === category);
  
  if (!categoryData) {
    return constructMetadata({
      title: "Service non trouvé | onRuntime Studio",
      description: "Cette catégorie de service n'existe pas.",
      noIndex: true,
    });
  }
  
  return constructMetadata({
    title: `${categoryData.name} | onRuntime Studio`,
    description: categoryData.description,
  });
}

// Page dynamique pour les catégories de services
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  
  // Trouver la catégorie correspondante
  const categoryData = Services.find(service => service.id === category) as ServiceCategoryData;
  
  // Si la catégorie n'existe pas, afficher la page 404
  if (!categoryData) {
    notFound();
  }
  
  return (
    <ServiceOverviewPage
      service={categoryData}
      benefits={categoryData.benefits || []}
      processList={categoryData.processList || []}
    />
  );
}

// Pré-génération des routes statiques
export async function generateStaticParams() {
  return Services.map(service => ({
    category: service.id,
  }));
}