import fs from 'fs';
import path from 'path';
import { evaluate } from 'next-mdx-remote-client/rsc';
import { GlossaryEntry } from '@/types/glossary';
import React from 'react';
import { CustomMDX } from '@/components/custom-mdx';

const glossaryDirectory = path.join(process.cwd(), 'src', 'content', 'glossary');

/**
 * Récupérer une entrée spécifique du glossaire
 */
export async function getGlossaryEntry(letter: string, slug: string): Promise<GlossaryEntry | null> {
  const filePath = path.join(glossaryDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  try {
    const { frontmatter, content } = await evaluate<Omit<GlossaryEntry, 'content' | 'slug' | 'letter'>>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });
    
    // Vérifier que la première lettre du terme correspond à la lettre dans l'URL
    const termLetter = frontmatter.term.charAt(0).toLowerCase();
    if (termLetter !== letter.toLowerCase()) {
      return null; // Terme trouvé mais mauvaise lettre dans l'URL
    }
    
    // Envelopper le contenu avec CustomMDX pour utiliser le même style que les pages légales
    const wrappedContent = <CustomMDX>{content}</CustomMDX>;
    
    return {
      ...frontmatter,
      slug,
      letter: termLetter,
      content: wrappedContent,
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
}

/**
 * Récupérer toutes les entrées du glossaire
 */
export async function getAllGlossaryEntries(): Promise<GlossaryEntry[]> {
  const entries: GlossaryEntry[] = [];
  
  // Vérifier si le répertoire existe
  if (!fs.existsSync(glossaryDirectory)) {
    return entries;
  }
  
  // Lire tous les fichiers .mdx directement dans le dossier principal
  const termFiles = fs.readdirSync(glossaryDirectory)
    .filter(file => file.endsWith('.mdx'));
  
  for (const file of termFiles) {
    const filePath = path.join(glossaryDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    try {
      const { frontmatter } = await evaluate<Omit<GlossaryEntry, 'content' | 'slug' | 'letter'>>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });
      
      const slug = file.replace(/\.mdx$/, '');
      // Déterminer la lettre à partir du terme (première lettre en minuscule)
      const letter = frontmatter.term.charAt(0).toLowerCase();
      
      entries.push({
        ...frontmatter,
        slug,
        letter,
      });
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error);
    }
  }
  
  // Trier par terme alphabétiquement
  return entries.sort((a, b) => a.term.localeCompare(b.term));
}

/**
 * Récupérer les entrées reliées
 */
export async function getRelatedEntries(terms: string[]): Promise<GlossaryEntry[]> {
  const allEntries = await getAllGlossaryEntries();
  return allEntries.filter(entry => terms.includes(entry.term));
}

/**
 * Récupérer les entrées par tag
 */
export async function getEntriesByTag(tag: string): Promise<GlossaryEntry[]> {
  const allEntries = await getAllGlossaryEntries();
  return allEntries.filter(entry => 
    entry.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Récupérer toutes les entrées pour une lettre spécifique
 */
export async function getEntriesByLetter(letter: string): Promise<GlossaryEntry[]> {
  const allEntries = await getAllGlossaryEntries();
  return allEntries.filter(entry => entry.letter.toLowerCase() === letter.toLowerCase());
}

/**
 * Récupérer tous les tags uniques
 */
export async function getAllTags(): Promise<string[]> {
  const entries = await getAllGlossaryEntries();
  const tagSet = new Set<string>();
  
  entries.forEach(entry => {
    entry.tags?.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}