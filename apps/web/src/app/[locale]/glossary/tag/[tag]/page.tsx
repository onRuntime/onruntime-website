import { notFound } from 'next/navigation';
import { getEntriesByTag } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";
import GlossaryTagPage from '@/components/glossary/tag-page';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params
}: TagPageProps) {
  const { t } = await getTranslation('app/glossary/page');
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return constructMetadata({
    title: t('tag.metadata.title', { tag: decodedTag }),
    description: t('tag.metadata.description', { tag: decodedTag }),
  });
}

export default async function TagPage({ 
  params 
}: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const entries = await getEntriesByTag(decodedTag);
  
  if (entries.length === 0) {
    notFound();
  }
  
  return <GlossaryTagPage tag={decodedTag} entries={entries} />;
}