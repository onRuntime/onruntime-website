import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Routes from "@/constants/routes";
import Image from 'next/image';

interface ServiceLayoutProps {
  // SEO et métadonnées
  title: string;
  description: string;
  
  // Contenu de l'en-tête
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  
  // Sections de contenu
  children: React.ReactNode;
  
  // Autres props
  className?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  heroTitle,
  heroDescription,
  heroImage,
  children,
  className
}) => {

  return (
    <>
      <main className={cn("min-h-screen pt-32 pb-16", className)}>
        <div className="px-4 md:px-0 max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="relative flex flex-col lg:flex-row gap-12 items-center mb-24">
            <div className="flex-1 flex flex-col items-start gap-6">
              <h1 className="font-medium text-4xl md:text-5xl text-foreground">
                {heroTitle}
              </h1>
              
              <p className="text-muted-foreground text-lg">
                {heroDescription}
              </p>

              <Link href={Routes.contact}>
                <Button size="lg">
                  Discuter de votre projet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <DotPattern
                width={30}
                height={30}
                className={cn(
                  "absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                )}
              />
            </div>

            {heroImage && (
              <div className="flex-1 relative w-full aspect-video">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Contenu principal */}
          <div className="flex flex-col gap-24">
            {children}
          </div>

          {/* CTA final */}
          <div className="mt-24 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-medium text-foreground mb-6">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>
              <Link href={Routes.contact}>
                <Button size="lg">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceLayout;