import React from 'react'
import { Button } from "@/components/ui/button"
import DotPattern from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { Mail } from 'lucide-react'
import Link from "next/link"
import Routes from '@/constants/routes'

interface LegalPageProps {
  title: string
  description: string
  content: React.ReactElement
  lastUpdated: string;
}

const LegalPage: React.FC<LegalPageProps> = ({
  title,
  description,
  content,
  lastUpdated
}) => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center mb-16">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            {title}
          </h1>
          
          <p className="text-muted-foreground">
            {description}
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

        {/* Legal Content */}
        <p className="text-sm text-muted-foreground italic mb-8" suppressHydrationWarning>
          Dernière mise à jour : {new Date(lastUpdated).toLocaleDateString()}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {content}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-6 border rounded-lg bg-card">
          <h2 className="text-xl font-medium text-foreground mb-4">
            Une question à propos de nos conditions ?
          </h2>
          <p className="text-muted-foreground mb-6">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>

          <Link href="mailto:legal@onruntime.com">
            <Button className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Nous contacter
            </Button>
          </Link>
        </div>

        {/* Links to other legal pages */}
        <nav className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href={Routes.legal.company} className="hover:text-foreground transition-colors">
            Mentions légales
          </Link>
          <Link href={Routes.legal.privacy} className="hover:text-foreground transition-colors">
            Politique de confidentialité
          </Link>
          <Link href={Routes.legal.terms} className="hover:text-foreground transition-colors">
            Conditions générales
          </Link>
        </nav>
      </div>
    </main>
  )
}

export default LegalPage
