import fs from 'fs';
import path from 'path';
import { evaluate } from 'next-mdx-remote-client/rsc';
import { headers } from 'next/headers';
import { GlossaryEntry } from '@/types/glossary';
import React from 'react';
import { CustomMDX } from '@/components/custom-mdx';
import { defaultLocale } from '@/lib/translations';

function getGlossaryDirectory(locale: string): string {
  return path.join(process.cwd(), 'src', 'content', locale, 'glossary');
}

async function getCurrentLocale(): Promise<string> {
  const headersList = await headers();
  return headersList.get('x-locale') || defaultLocale;
}

/**
 * Get a specific glossary entry
 */
export async function getGlossaryEntry(letter: string, slug: string): Promise<GlossaryEntry | null> {
  const locale = await getCurrentLocale();
  const glossaryDirectory = getGlossaryDirectory(locale);
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

    // Check that the first letter of the term matches the letter in the URL
    const termLetter = frontmatter.term.charAt(0).toLowerCase();
    if (termLetter !== letter.toLowerCase()) {
      return null; // Term found but wrong letter in URL
    }

    // Wrap content with CustomMDX to use the same style as legal pages
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
 * Get all glossary entries
 */
export async function getAllGlossaryEntries(): Promise<GlossaryEntry[]> {
  const locale = await getCurrentLocale();
  const glossaryDirectory = getGlossaryDirectory(locale);
  const entries: GlossaryEntry[] = [];

  // Check if directory exists
  if (!fs.existsSync(glossaryDirectory)) {
    return entries;
  }

  // Read all .mdx files directly from the main folder
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
      // Determine the letter from the term (first letter in lowercase)
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

  // Sort alphabetically by term
  return entries.sort((a, b) => a.term.localeCompare(b.term));
}

/**
 * Get related entries
 */
export async function getRelatedEntries(terms: string[]): Promise<GlossaryEntry[]> {
  const allEntries = await getAllGlossaryEntries();
  return allEntries.filter(entry => terms.includes(entry.term));
}

/**
 * Get entries by tag
 */
export async function getEntriesByTag(tag: string): Promise<GlossaryEntry[]> {
  const allEntries = await getAllGlossaryEntries();
  return allEntries.filter(entry =>
    entry.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all entries for a specific letter
 */
export async function getEntriesByLetter(letter: string): Promise<GlossaryEntry[]> {
  const allEntries = await getAllGlossaryEntries();
  return allEntries.filter(entry => entry.letter.toLowerCase() === letter.toLowerCase());
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const entries = await getAllGlossaryEntries();
  const tagSet = new Set<string>();

  entries.forEach(entry => {
    entry.tags?.forEach(tag => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}
