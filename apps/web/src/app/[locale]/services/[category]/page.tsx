import { notFound } from 'next/navigation';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { ServiceCategoryData } from '@/types/service';
import { constructMetadata } from '@/lib/utils/metadata';
import { getTranslation } from '@/lib/translations.server';

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const categoryData = Services.find(service => service.id === category);

  if (!categoryData) {
    const { t } = await getTranslation('app/services/[category]/page');
    return constructMetadata({
      title: t('metadata.not-found.title'),
      description: t('metadata.not-found.description'),
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${categoryData.name}`,
    description: categoryData.description,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryData = Services.find(service => service.id === category) as ServiceCategoryData;

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

export async function generateStaticParams() {
  return Services.map(service => ({
    category: service.id,
  }));
}