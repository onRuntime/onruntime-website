import React from 'react';
import { notFound } from 'next/navigation';
import { getGlossaryEntry, getRelatedEntries } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata";
import GlossaryEntryPage from '@/components/glossary/entry-page';

interface TermPageProps {
  params: Promise<{
    letter: string;
    term: string;
  }>;
}

export async function generateMetadata({ 
  params 
}: TermPageProps) {
  const { letter, term } = await params;
  const entry = await getGlossaryEntry(letter, term);
  
  if (!entry) {
    return constructMetadata({
      title: "Terme non trouvé | Glossaire",
      description: "Ce terme n'existe pas dans notre glossaire.",
    });
  }

  return constructMetadata({
    title: `${entry.term} | Glossaire`,
    description: entry.shortDescription,
  });
}

export default async function TermPage({ 
  params 
}: TermPageProps) {
  const { letter, term } = await params;
  const entry = await getGlossaryEntry(letter, term);
  
  if (!entry) {
    notFound();
  }
  
  // Get related entries if there are any
  const relatedEntries = entry.relatedTerms?.length 
    ? await getRelatedEntries(entry.relatedTerms)
    : [];
  
  return <GlossaryEntryPage entry={entry} relatedEntries={relatedEntries} />;
}