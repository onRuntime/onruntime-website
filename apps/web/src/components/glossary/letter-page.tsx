import { Link } from '@onruntime/translations/next'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import { GlossaryEntry } from '@/types/glossary'
import { getTranslation } from "@/lib/translations.server"

interface GlossaryLetterPageProps {
  letter: string;
  entries: GlossaryEntry[];
}

const GlossaryLetterPage = async ({
  letter,
  entries
}: GlossaryLetterPageProps) => {
  const { t } = await getTranslation('app/glossary/page');
  const { t: tComponents } = await getTranslation('components/glossary');

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto">
        {/* Back navigation */}
        <div className="mb-8">
          <Link href="/glossary">
            <Button variant="ghost" className="pl-0 hover:pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {tComponents('back-to-glossary')}
            </Button>
          </Link>
        </div>

        {/* Letter header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground uppercase mb-2">{letter}</h1>
          <p className="text-muted-foreground text-lg">
            {t('letter.count', { count: entries.length, letter: letter.toUpperCase() })}
          </p>
        </div>
        
        {/* Terms list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map(entry => (
            <Link 
              key={entry.slug} 
              href={`/glossary/${letter}/${entry.slug}`}
              className="p-6 border rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{entry.term}</h3>
              <p className="text-muted-foreground mb-4">{entry.shortDescription}</p>
              
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {entry.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
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

export default GlossaryLetterPage