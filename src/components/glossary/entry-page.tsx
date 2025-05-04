import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Tag as TagIcon } from "lucide-react"
import Link from "next/link"
import { GlossaryEntry } from '@/types/glossary'

interface GlossaryEntryPageProps {
  entry: GlossaryEntry;
  relatedEntries?: GlossaryEntry[];
}

const GlossaryEntryPage: React.FC<GlossaryEntryPageProps> = ({
  entry,
  relatedEntries = []
}) => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-3xl mx-auto">
        {/* Back navigation */}
        <div className="mb-8">
          <Link href="/glossary">
            <Button variant="ghost" className="pl-0 hover:pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour au glossaire
            </Button>
          </Link>
        </div>
        
        {/* Term header */}
        <div className="mb-8">
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {entry.tags.map(tag => (
                <Link key={tag} href={`/glossary/tag/${encodeURIComponent(tag)}`}>
                  <Badge variant="secondary" className="cursor-pointer">
                    <TagIcon className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
          
          <h1 className="text-4xl font-semibold text-foreground mb-4">{entry.term}</h1>
          <p className="text-xl text-muted-foreground">{entry.shortDescription}</p>
        </div>
        
        {/* Term content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {entry.content}
        </div>
        
        {/* Related terms */}
        {relatedEntries.length > 0 && (
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Termes associés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedEntries.map(related => (
                <Link 
                  key={related.slug} 
                  href={`/glossary/${related.letter}/${related.slug}`}
                  className="p-4 border rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">{related.term}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{related.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default GlossaryEntryPage