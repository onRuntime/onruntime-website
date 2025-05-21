import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ChevronLeft, Tag as TagIcon } from "lucide-react";
import { getAllTags } from "@/lib/glossary";
import { constructMetadata } from "@/lib/utils/metadata";

export const metadata = constructMetadata({
  title: "Tags du glossaire | onRuntime Studio",
  description: "Explorez les différentes catégories de termes disponibles dans notre glossaire technique.",
});

export default async function TagsPage() {
  const tags = await getAllTags();
  
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
          <h1 className="text-4xl font-semibold text-foreground mb-4">Catégories du glossaire</h1>
          <p className="text-muted-foreground text-lg">
            Explorez les {tags.length} catégories de termes disponibles dans notre glossaire technique.
          </p>
        </div>
        
        {/* Tags grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tags.map(tag => (
            <Link 
              key={tag} 
              href={`/glossary/tag/${encodeURIComponent(tag)}`}
              className="p-4 border rounded-lg hover:border-primary transition-colors flex items-center gap-3"
            >
              <TagIcon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{tag}</span>
            </Link>
          ))}
        </div>
        
        {/* Empty state */}
        {tags.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucune catégorie n&apos;est disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}