import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { getAllGlossaryEntries } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata";
import { GlossaryAlphabetNav } from "@/components/glossary/alphabet-nav";
import { GlossarySearch } from "@/components/glossary/search";
import { Badge } from "@/components/ui/badge";
import { Tag as TagIcon } from "lucide-react";

export async function generateMetadata() {
  return constructMetadata({
    title: "Glossaire du Développement et Design Web",
    description: "Consultez notre glossaire complet des termes techniques en développement web, design UI/UX et gestion de projet digital.",
  });
}

export default async function GlossaryPage() {
  const entries = await getAllGlossaryEntries();
  
  // Extraction des tags uniques pour le filtrage
  const uniqueTags = [...new Set(entries.flatMap(entry => entry.tags || []))].sort();
  
  // Regroupement par lettre pour l'affichage
  const entriesByLetter = entries.reduce((acc, entry) => {
    const letter = entry.letter.toLowerCase();
    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(entry);
    return acc;
  }, {} as Record<string, typeof entries>);

  // Récupérer les lettres pour lesquelles nous avons des entrées
  const availableLetters = Object.keys(entriesByLetter).sort();
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-semibold text-4xl md:text-5xl text-foreground">
            Glossaire
          </h1>
          
          <p className="text-muted-foreground">
            Explorez notre glossaire complet des termes techniques en développement web, 
            design UI/UX et gestion de projet digital.
          </p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <GlossarySearch entries={entries} />
          
          <div className="flex flex-wrap gap-2 justify-end">
            {uniqueTags.slice(0, 5).map(tag => (
              <Link key={tag} href={`/glossary/tag/${encodeURIComponent(tag)}`}>
                <Badge variant="outline" className="cursor-pointer">
                  <TagIcon className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              </Link>
            ))}
            {uniqueTags.length > 5 && (
              <Link href="/glossary/tags">
                <Badge variant="outline" className="cursor-pointer">
                  +{uniqueTags.length - 5}
                </Badge>
              </Link>
            )}
          </div>
        </div>

        {/* Alphabet Navigation */}
        <GlossaryAlphabetNav availableLetters={availableLetters} />
        
        {/* Terms List Grouped by Letter */}
        <div className="space-y-12">
          {availableLetters.map(letter => (
            <div key={letter} id={letter} className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-4xl font-bold text-foreground uppercase">{letter}</h2>
                <div className="h-px flex-grow bg-border"></div>
                <Link href={`/glossary/${letter}`}>
                  <Button variant="outline" size="sm">
                    Voir tous
                  </Button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {entriesByLetter[letter].map(entry => (
                  <Link 
                    key={entry.slug} 
                    href={`/glossary/${letter}/${entry.slug}`}
                    className="p-4 border rounded-lg hover:border-primary transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{entry.term}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{entry.shortDescription}</p>
                    
                    {entry.tags && entry.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {entry.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {entry.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{entry.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {availableLetters.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground mb-4">
              Aucun terme n&apos;a encore été ajouté au glossaire.
            </p>
            <p className="text-sm text-muted-foreground">
              Revenez bientôt pour découvrir notre glossaire complet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}