import { ReactElement } from 'react';

export type GlossaryEntry = {
  term: string;           // Le terme du glossaire
  slug: string;           // Slug URL-friendly
  letter: string;         // Première lettre (calculée automatiquement)
  shortDescription: string; // Description courte pour les aperçus
  relatedTerms?: string[]; // Termes liés
  tags?: string[];        // Tags pour la catégorisation
  content?: ReactElement;  // Contenu MDX compilé
};