"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Code,
  FileText,
  Globe,
  Lightbulb,
  MapPin,
  Palette,
  Search,
  Users,
} from "lucide-react";
import Link from "next/link";
import Routes from "@/constants/routes";
import JobList from "./job-list";
import { JobPosting } from "@/types/job";

const CareersPage: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  );
  const [departments, setDepartments] = useState<string[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/careers");

        if (!response.ok) {
          throw new Error("Failed to fetch job postings");
        }

        const data = await response.json();
        setJobs(data.jobs || []);

        const uniqueDepartments = Array.from(
          new Set(data.jobs.map((job: JobPosting) => job.department)),
        ).filter(Boolean) as string[];

        setDepartments(uniqueDepartments);
        setError(null);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(
          "Une erreur est survenue lors du chargement des offres d'emploi. Veuillez réessayer ultérieurement.",
        );
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.description &&
        job.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDepartment =
      !selectedDepartment || job.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-24">
        <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="font-medium text-4xl md:text-5xl text-foreground">
            Rejoignez notre équipe
          </h1>

          <p className="text-muted-foreground">
            Découvrez les opportunités de carrière chez onRuntime Studio et
            rejoignez une équipe dynamique de passionnés du développement et du
            design.
          </p>

          <DotPattern
            width={30}
            height={30}
            className={cn(
              "z-[-1]",
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Chez onRuntime Studio, nous croyons en la créativité,
              l&apos;innovation et la collaboration. Rejoignez-nous pour
              façonner l&apos;avenir du digital et développer vos compétences
              dans un environnement stimulant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Créativité et Innovation
              </h3>
              <p className="text-muted-foreground">
                Exprimez vos idées et contribuez à des projets innovants qui
                repoussent les limites du possible.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Équipe Passionnée
              </h3>
              <p className="text-muted-foreground">
                Collaborez avec des professionnels talentueux et passionnés dans
                un environnement convivial et stimulant.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="p-3 rounded-full bg-onruntime-blue/10 text-onruntime-blue mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">
                Impact Global
              </h3>
              <p className="text-muted-foreground">
                Contribuez à des projets qui ont un impact réel et touchent des
                utilisateurs à travers le monde.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Nos opportunités actuelles
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos offres demploi et trouvez le poste qui correspond à
              vos compétences et aspirations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un poste, un lieu..."
                className="w-full pl-10 py-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={selectedDepartment === null ? "default" : "outline"}
                onClick={() => setSelectedDepartment(null)}
                className="whitespace-nowrap"
              >
                Tous
              </Button>
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  className="whitespace-nowrap"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          <JobList jobs={filteredJobs} isLoading={isLoading} error={error} />
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-card p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Vous n&apos;avez pas trouvé le poste qui vous correspond ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Envoyez-nous une candidature spontanée ! Nous sommes toujours à la
              recherche de talents exceptionnels pour rejoindre notre équipe.
            </p>
            <Link href={Routes.contact}>
              <Button>
                Envoyer une candidature spontanée
                <FileText className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">
              Nos équipes
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Découvrez les différentes équipes qui composent onRuntime Studio
              et trouvez celle qui correspond le mieux à vos compétences et
              aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Développement
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos développeurs créent des applications web et mobiles
                performantes et innovantes, en utilisant les technologies les
                plus récentes pour offrir des expériences utilisateur
                exceptionnelles.
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">Design</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Notre équipe de designers crée des interfaces utilisateur
                élégantes et intuitives, en veillant à ce que chaque pixel soit
                parfaitement aligné avec l&apos;identité visuelle du projet.
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Projet & Produit
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Nos chefs de projet et product managers assurent le bon
                déroulement des projets et veillent à ce que les solutions
                développées répondent parfaitement aux besoins des utilisateurs.
              </p>
            </div>

            <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-foreground">
                  Marketing & Communication
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Notre équipe marketing travaille à faire connaître nos projets
                et à communiquer efficacement sur nos réalisations, tant en
                interne qu&apos;auprès du grand public.
              </p>
            </div>
          </div>
        </div>


        <div className="text-center">
          <h2 className="text-3xl font-medium text-foreground mb-4">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Parcourez nos offres d&apos;emploi et trouvez le poste qui
            correspond à vos compétences et aspirations. Nous avons hâte de vous
            accueillir dans notre équipe !
          </p>
          <Button
            size="lg"
            onClick={() => {
              const jobsSection = document.getElementById("job-listings");
              if (jobsSection) {
                jobsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Voir les offres d&apos;emploi
            <Briefcase className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;
