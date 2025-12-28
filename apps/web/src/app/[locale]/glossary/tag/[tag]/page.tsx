import React from 'react';
import { notFound } from 'next/navigation';
import { getEntriesByTag } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata";
import GlossaryTagPage from '@/components/glossary/tag-page';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params
}: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return constructMetadata({
    title: `Termes liés à ${decodedTag} | Glossaire`,
    description: `Découvrez tous les termes du glossaire liés à la catégorie ${decodedTag}.`,
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