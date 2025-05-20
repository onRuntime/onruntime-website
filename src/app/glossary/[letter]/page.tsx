import React from 'react';
import { notFound } from 'next/navigation';
import { getEntriesByLetter } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata";
import GlossaryLetterPage from '@/components/glossary/letter-page';

interface LetterPageProps {
  params: Promise<{
    letter: string;
  }>;
}

export async function generateMetadata({ 
  params 
}: LetterPageProps) {
  const { letter } = await params;
  const sanitizedLetter = letter.toLowerCase();
  
  if (!sanitizedLetter.match(/^[a-z]$/)) {
    return constructMetadata({
      title: "Lettre non valide | Glossaire",
      description: "Cette lettre n'est pas valide.",
    });
  }
  
  return constructMetadata({
    title: `Termes commençant par ${sanitizedLetter.toUpperCase()} | Glossaire`,
    description: `Découvrez tous les termes du glossaire commençant par la lettre ${sanitizedLetter.toUpperCase()}.`,
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