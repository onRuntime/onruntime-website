import { notFound } from 'next/navigation';
import Services from '@/constants/services';
import ServiceOverviewPage from '@/components/marketing/services/service-overview';
import { constructMetadata } from '@/lib/utils/metadata.server';
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

  const { t } = await getTranslation(`constants/services/${category}`);

  return constructMetadata({
    title: t('name'),
    description: t('description'),
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryData = Services.find(service => service.id === category);

  if (!categoryData) {
    notFound();
  }

  const { t } = await getTranslation(`constants/services/${category}`);

  return (
    <ServiceOverviewPage
      categoryId={categoryData.id}
      name={t('name')}
      description={t('description')}
    />
  );
}

export async function generateStaticParams() {
  return Services.map(service => ({
    category: service.id,
  }));
}