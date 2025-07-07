"use client";

import React from "react";
import { JobPosting } from "@/types/job";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Briefcase,
  Building,
  CalendarDays,
  Clock,
  FileText,
  Globe,
  MapPin,
  Share2,
} from "lucide-react";
import Link from "next/link";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import JobContent from "@/components/ui/job-content";

interface JobDetailPageProps {
  job: JobPosting;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ job }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: job.title,
          text: `Découvrez cette opportunité: ${job.title} chez onRuntime Studio`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier!");
    }
  };

  const handleApplyClick = () => {
    if (job.applyUrl) {
      window.open(job.applyUrl, "_blank");
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-12">
        <div>
          <Link href="/careers">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux offres
            </Button>
          </Link>
        </div>

        <div className="relative border rounded-lg p-8 bg-card">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>{job.department}</Badge>
              {job.seniority && (
                <Badge variant="outline">{job.seniority}</Badge>
              )}
              {job.remote && <Badge variant="outline">Remote</Badge>}
            </div>

            <h1 className="font-medium text-3xl md:text-4xl text-foreground mb-4">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                {job.employmentType}
              </div>
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="w-4 h-4 mr-2" />
                Publié le {formatDate(job.datePosted)}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleApplyClick}>
                Postuler maintenant
                <Briefcase className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={handleShareClick}>
                Partager
                <Share2 className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "absolute z-[-1] top-0 right-0 w-1/3 h-full",
              "[mask-image:linear-gradient(to_left,white,transparent)]",
            )}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-medium mb-4">
                Description du poste
              </h2>
              {job.description ? (
                <JobContent content={job.description} />
              ) : (
                <p className="text-muted-foreground">
                  {job.shortDescription ||
                    "Aucune description détaillée n'est disponible pour ce poste."}
                </p>
              )}
            </div>

            {job.requirements && (
              <div>
                <h2 className="text-2xl font-medium mb-4">Prérequis</h2>
                <JobContent content={job.requirements} />
              </div>
            )}

            {job.benefits && (
              <div>
                <h2 className="text-2xl font-medium mb-4">Avantages</h2>
                <JobContent content={job.benefits} />
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-medium mb-4">Détails du poste</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">
                      Département
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {job.department}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Lieu</p>
                    <p className="text-sm text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">
                      Type de contrat
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {job.employmentType}
                    </p>
                  </div>
                </div>

                {job.salary && (
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">
                        Salaire
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {job.salary}
                      </p>
                    </div>
                  </div>
                )}

                {job.remote && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">
                        Télétravail
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {typeof job.remote === "string"
                          ? job.remote
                          : "Possible"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="border rounded-lg p-6 bg-card text-center">
              <h3 className="text-lg font-medium mb-4">
                Intéressé par ce poste ?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Postulez dès maintenant et rejoignez notre équipe passionnée.
              </p>
              <Button onClick={handleApplyClick} className="w-full">
                Postuler maintenant
              </Button>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8 bg-card">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-4">
              Notre culture d'entreprise
            </h2>
            <p className="text-muted-foreground mb-6">
              Chez onRuntime Studio, nous cultivons un environnement de travail
              collaboratif et stimulant où chaque membre de léquipe peut
              exprimer sa créativité et développer ses compétences. Nous
              privilégions linnovation, la qualité et le bien-être de nos
              collaborateurs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  Formation continue
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nous investissons dans le développement professionnel de nos
                  équipes
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  Environnement flexible
                </h3>
                <p className="text-sm text-muted-foreground">
                  Équilibre vie professionnelle/vie personnelle et travail
                  hybride
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  Projets variés
                </h3>
                <p className="text-sm text-muted-foreground">
                  Travaillez sur des projets diversifiés et stimulants
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/npo">
                <Button variant="outline">
                  En savoir plus sur notre équipe
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-8 bg-card text-center">
          <h2 className="text-2xl font-medium mb-4">
            Prêt à relever le défi ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Rejoignez notre équipe et participez à des projets stimulants qui
            vous permettront de développer vos compétences et dexprimer votre
            créativité.
          </p>
          <Button size="lg" onClick={handleApplyClick}>
            Postuler maintenant
            <Briefcase className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default JobDetailPage;
