import React from "react";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import TeamMembers from "@/constants/team-members";
import {
  ArrowRight,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  MessageSquare,
  Rocket,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Routes from "@/constants/routes";
import { OrganizationSchema } from "@/components/json-ld/organization-schema";
import { roleToDisplay, TeamRole } from "@/types/team-member";
import { TechnologiesSection } from "@/components/marketing/services/sections";
import Donations from "@/components/marketing/npo/donations";

const coFounders = Object.entries(TeamMembers)
  .filter(([, member]) => member.roles.includes(TeamRole.CO_FOUNDER))
  .map(([id, member]) => ({
    id,
    ...member,
  }));

const npoValues = [
  {
    title: "Innovation",
    description:
      "Nous repoussons constamment les limites de la créativité et de la technologie pour offrir des solutions novatrices.",
    icon: Rocket,
  },
  {
    title: "Communauté",
    description:
      "Nous croyons en la force du collectif et favorisons un environnement collaboratif où chacun peut s'épanouir.",
    icon: Users,
  },
  {
    title: "Passion",
    description:
      "Chaque projet est abordé avec passion et dévouement, car nous aimons profondément ce que nous faisons.",
    icon: Heart,
  },
  {
    title: "Apprentissage",
    description:
      "Nous valorisons l'apprentissage continu et le partage des connaissances pour progresser ensemble.",
    icon: GraduationCap,
  },
];

const historyTimeline = [
  {
    year: "2015",
    title: "Premières collaborations",
    description:
      "Début des collaborations entre Jérémy, Antoine et Lucas, principalement sur des plateformes de jeux vidéos.",
  },
  {
    year: "2020",
    title: "Création de l'association",
    description:
      "Fondation officielle d'onRuntime Studio en tant qu'association loi 1901, sur les conseils de Bryan Recher.",
  },
  {
    year: "2021",
    title: "Réunion à Rouen",
    description:
      "Les fondateurs se réunissent à Rouen afin d'accélérer les projets, notamment avec leur projet phare: Tonight Pass.",
  },
  {
    year: "2022",
    title: "Premiers recrutements",
    description:
      "L'association recrute ses premiers salariés pour soutenir le développement de ses projets.",
  },
  {
    year: "2023-2025",
    title: "Expansion continue",
    description:
      "Focus sur le développement de Tonight Pass et préparation à une transformation future en entreprise.",
  },
];

const NPOPage: React.FC = () => {
  return (
    <>
      <OrganizationSchema />

      <main className="min-h-screen pt-32 pb-16 w-full">
        <div className="px-4 md:px-0 max-w-5xl mx-auto space-y-32 w-full">
          
          <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-6 text-center mb-24">
            <h1 className="font-medium text-4xl md:text-5xl text-foreground">
              L&apos;Association onRuntime Studio
            </h1>

            <p className="text-muted-foreground">
              Une association loi 1901 dédiée à l&apos;innovation et la
              créativité dans le domaine du développement web, mobile et design.
            </p>

            <div className="flex gap-3">
              <Link href="#adhesion">
                <Button>Devenir membre</Button>
              </Link>

              <Link href={Routes.projects}>
                <Button variant="outline">Nos projets</Button>
              </Link>
            </div>

            <DotPattern
              width={30}
              height={30}
              className={cn(
                "z-[-1]",
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
          </div>

          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Notre histoire
              </h2>
              <p className="text-muted-foreground mb-8">
                Fondée en 2020, onRuntime Studio est née de la passion commune
                de développeurs et designers qui collaborent ensemble depuis
                2015. Notre association a pour vocation de créer un espace
                collaboratif pour innover et partager nos connaissances, avec
                l&apos;ambition de devenir prochainement une entreprise à part
                entière.
              </p>
            </div>

            <div className="relative">
              
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

              <div className="space-y-12">
                {historyTimeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start relative ${
                      index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="w-1/2"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-background border-2 border-onruntime-blue rounded-full h-5 w-5 z-10"></div>

                    <div
                      className={`w-1/2 p-4 ${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                      }`}
                    >
                      <div className="mb-1 text-2xl font-semibold text-onruntime-blue">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-24" id="team">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Les fondateurs
              </h2>
              <p className="text-muted-foreground">
                Notre association a été fondée par trois passionnés qui
                travaillent ensemble depuis plusieurs années pour donner vie à
                des projets innovants.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coFounders.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center p-6 border rounded-lg bg-card text-center gap-4 hover:border-onruntime-blue transition-colors"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={
                        member.avatar || "/static/images/placeholder-avatar.jpg"
                      }
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {roleToDisplay[member.roles[0]]}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    {member.website && (
                      <Link
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Globe className="w-4 h-4 mr-2" />
                          Site web
                        </Button>
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <svg
                            className="w-4 h-4 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Nos valeurs
              </h2>
              <p className="text-muted-foreground">
                Ces principes fondamentaux guident notre approche et notre
                vision, influençant chacune de nos actions et décisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {npoValues.map((value, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Notre expertise technique
              </h2>
              <p className="text-muted-foreground">
                Les technologies que nous maîtrisons et utilisons dans nos
                projets associatifs.
              </p>
            </div>

            <TechnologiesSection />
          </section>

          <section className="mb-24" id="adhesion">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Devenir membre
              </h2>
              <p className="text-muted-foreground">
                Rejoignez notre communauté de passionnés et participez au
                développement de projets innovants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg bg-card hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    Adhésion annuelle
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-semibold text-foreground mb-2">
                    30€
                    <span className="text-sm font-normal text-muted-foreground">
                      /an
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Cotisation annuelle pour devenir membre bénévole de
                    l&apos;association.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Engagement de 3 à 6 heures par semaine
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Participation aux projets associatifs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Rôle Discord dédié et accès aux salons privés
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Mentorat personnalisé par nos membres expérimentés
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Accès à toutes nos ressources et formations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Autonomie sur les projets de l&apos;association
                    </p>
                  </div>
                </div>

                <Link href={Routes.contact}>
                  <Button className="w-full">
                    Demander mon adhésion
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <Donations />
            </div>
          </section>

          <section className="mb-24" id="initiatives">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-medium text-foreground mb-4">
                Nos programmes et initiatives
              </h2>
              <p className="text-muted-foreground">
                Découvrez les initiatives que nous développons actuellement et
                nos projets à venir.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-card p-8 mb-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-onruntime-blue/10 rounded-md">
                    <Calendar className="h-5 w-5 text-onruntime-blue" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">
                    Programme de mentorat technique
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Notre programme de mentorat permet aux membres débutants
                  d&apos;être accompagnés dans leur montée en compétences par des
                  développeurs et designers expérimentés de l&apos;association.
                </p>

                <div className="flex items-center gap-2 mt-8">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground">
                    Actuellement actif
                  </span>
                </div>
              </div>

              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-onruntime-blue/10 blur-3xl"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-lg border bg-card p-6 hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-medium text-foreground">
                    Ateliers techniques collaboratifs
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Sessions de travail et d&apos;apprentissage en groupe sur des
                  technologies spécifiques, organisées en ligne et en présentiel
                  quand possible.
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-muted-foreground">
                    En phase de développement
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg border bg-card p-6 hover:border-onruntime-blue transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-lg font-medium text-foreground">
                    Hackathons communautaires
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Organisation d&apos;événements de 48h où des équipes développeront
                  ensemble des solutions innovantes sur des problématiques
                  précises.
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-muted-foreground">
                    Projet futur
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Vous souhaitez contribuer au développement de ces initiatives ?
              </p>
              <Link href={Routes.contact}>
                <Button variant="outline">
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-4">
            <div className="relative overflow-hidden rounded-lg border bg-card p-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-medium text-foreground mb-4">
                  Rejoignez notre communauté Discord
                </h2>
                <p className="text-muted-foreground mb-6">
                  Connectez-vous avec les autres membres, participez aux
                  discussions techniques et restez informé des dernières
                  actualités de l&apos;association.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={Routes.socials.discord}>
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Rejoindre le Discord
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-onruntime-blue/10 to-transparent" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default NPOPage;
