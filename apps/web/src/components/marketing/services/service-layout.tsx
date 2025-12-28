import React from 'react';
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "@onruntime/translations/next";
import Routes from "@/constants/routes";

interface ServiceLayoutProps {
  title: string;
  description: string;
  
  heroTitle: string;
  heroDescription: string;
  
  accentColor?: string;
  
  children: React.ReactNode;
  
  className?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  heroTitle,
  heroDescription,
  accentColor = "onruntime-blue",
  children,
  className
}) => {

  return (
    <>
      <main className={cn("min-h-screen pt-32 pb-16", className)}>
        <div className="px-4 md:px-0 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card mb-24">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 md:p-12 flex flex-col items-start gap-6 relative z-10">
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
              </div>

              <div className="relative hidden md:flex items-center justify-center p-8 overflow-hidden">
                <div className={`absolute right-0 top-0 w-64 h-64 rounded-full bg-${accentColor}/5 backdrop-blur-sm border border-${accentColor}/10`}></div>
                <div className={`absolute right-24 bottom-12 w-32 h-32 rounded-full bg-${accentColor}/10 backdrop-blur-sm border border-${accentColor}/20`}></div>
                <div className={`absolute left-12 top-24 w-48 h-48 rounded-full bg-${accentColor}/8 backdrop-blur-sm border border-${accentColor}/15`}></div>
                
                <div className="z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm transform rotate-2 hover:rotate-0 transition-transform">
                    <div className={`w-10 h-10 rounded-md bg-${accentColor}/10 flex items-center justify-center mb-3`}>
                      <ArrowRight className={`w-5 h-5 text-${accentColor}`} />
                    </div>
                    <p className="text-sm font-medium">Solutions sur mesure</p>
                    <p className="text-xs text-muted-foreground mt-1">Adaptées à vos besoins</p>
                  </div>

                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className={`w-10 h-10 rounded-md bg-${accentColor}/10 flex items-center justify-center mb-3`}>
                      <ArrowRight className={`w-5 h-5 text-${accentColor}`} />
                    </div>
                    <p className="text-sm font-medium">Support expert</p>
                    <p className="text-xs text-muted-foreground mt-1">Par nos spécialistes</p>
                  </div>
                  
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className={`w-10 h-10 rounded-md bg-${accentColor}/10 flex items-center justify-center mb-3`}>
                      <ArrowRight className={`w-5 h-5 text-${accentColor}`} />
                    </div>
                    <p className="text-sm font-medium">Technologies modernes</p>
                    <p className="text-xs text-muted-foreground mt-1">Toujours à jour</p>
                  </div>
                  
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm transform rotate-1 hover:rotate-0 transition-transform">
                    <div className={`w-10 h-10 rounded-md bg-${accentColor}/10 flex items-center justify-center mb-3`}>
                      <ArrowRight className={`w-5 h-5 text-${accentColor}`} />
                    </div>
                    <p className="text-sm font-medium">Évolutivité garantie</p>
                    <p className="text-xs text-muted-foreground mt-1">Pour votre croissance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
              <div className={`absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-${accentColor} blur-3xl`}></div>
              <div className={`absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
            </div>

            <DotPattern
              width={30}
              height={30}
              className={cn(
                "absolute inset-0 z-0",
                "[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
              )}
            />
          </div>

          <div className="flex flex-col gap-24">
            {children}
          </div>

          <div className="mt-24 relative overflow-hidden rounded-xl border border-border bg-card p-12">
            <div className="relative z-10 max-w-2xl">
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

            <div className={`absolute inset-0 z-0 opacity-10 overflow-hidden`}>
              <div className={`absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-${accentColor} to-transparent`}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceLayout;