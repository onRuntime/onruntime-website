import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Tag as TagIcon } from "lucide-react";
import { getAllGlossaryEntries } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata";

export const metadata = constructMetadata({
  title: "Tags du Glossaire",
  description: "Explorez le glossaire par catégories thématiques.",
});

export default async function TagsPage() {
  const entries = await getAllGlossaryEntries();
  
  // Extract all tags and count their occurrences
  const tagCounts = entries.reduce((acc, entry) => {
    if (entry.tags) {
      entry.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);
  
  // Convert to array for sorting
  const tagList = Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count); // Sort by count descending
  
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto">
        {/* Back navigation */}
        <div className="mb-8">
          <Link href="/glossary">
            <Button variant="ghost" className="pl-0 hover:pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour au glossaire
            </Button>
          </Link>
        </div>
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-3">Catégories du Glossaire</h1>
          <p className="text-muted-foreground text-lg">
            Explorez notre glossaire par catégories thématiques et découvrez les termes associés.
          </p>
        </div>
        
        {/* Tags grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tagList.map(({ tag, count }) => (
            <Link 
              key={tag} 
              href={`/glossary/tag/${encodeURIComponent(tag)}`}
              className="p-6 border rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <TagIcon className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{tag}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {count} terme{count > 1 ? 's' : ''}
              </p>
              
              <Badge variant="outline">
                Voir les termes
              </Badge>
            </Link>
          ))}
        </div>
        
        {/* Empty state */}
        {tagList.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucune catégorie n'est disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}