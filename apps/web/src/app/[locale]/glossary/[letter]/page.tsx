import React from 'react';
import { notFound } from 'next/navigation';
import { getEntriesByLetter } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";
import GlossaryLetterPage from '@/components/glossary/letter-page';

interface LetterPageProps {
  params: Promise<{
    letter: string;
  }>;
}

export async function generateMetadata({
  params
}: LetterPageProps) {
  const { t } = await getTranslation('app/glossary/page');
  const { letter } = await params;
  const sanitizedLetter = letter.toLowerCase();

  if (!sanitizedLetter.match(/^[a-z]$/)) {
    return constructMetadata({
      title: t('letter.metadata.invalid.title'),
      description: t('letter.metadata.invalid.description'),
    });
  }

  return constructMetadata({
    title: t('letter.metadata.title', { letter: sanitizedLetter.toUpperCase() }),
    description: t('letter.metadata.description', { letter: sanitizedLetter.toUpperCase() }),
  });
}

export default async function LetterPage({ 
  params 
}: LetterPageProps) {
  const { letter } = await params;
  const sanitizedLetter = letter.toLowerCase();
  
  if (!sanitizedLetter.match(/^[a-z]$/)) {
    notFound();
  }
  
  const entries = await getEntriesByLetter(sanitizedLetter);
  
  if (entries.length === 0) {
    notFound();
  }
  
  return <GlossaryLetterPage letter={sanitizedLetter} entries={entries} />;
}