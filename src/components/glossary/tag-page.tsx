import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Tag as TagIcon } from "lucide-react"
import { GlossaryEntry } from '@/types/glossary'

interface GlossaryTagPageProps {
  tag: string;
  entries: GlossaryEntry[];
}

const GlossaryTagPage: React.FC<GlossaryTagPageProps> = ({
  tag,
  entries
}) => {
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
        
        {/* Tag header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <TagIcon className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-semibold text-foreground">{tag}</h1>
          </div>
          
          <p className="text-muted-foreground text-lg">
            {entries.length} terme{entries.length > 1 ? 's' : ''} lié{entries.length > 1 ? 's' : ''} à cette catégorie
          </p>
        </div>
        
        {/* Terms list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map(entry => (
            <Link 
              key={entry.slug} 
              href={`/glossary/${entry.letter}/${entry.slug}`}
              className="p-6 border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{entry.term}</h3>
              <p className="text-muted-foreground mb-4">{entry.shortDescription}</p>
              
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {entry.tags.map(t => (
                    <Badge 
                      key={t} 
                      variant={t === tag ? "default" : "secondary"}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default GlossaryTagPage