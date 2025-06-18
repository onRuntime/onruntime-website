import Routes from "@/constants/routes";
import { OnRuntimeWordMark } from "@/logos/components";
import Link from "next/link";
import React from "react";

/**
 * Configuration de la navigation du footer
 * Organisée par catégories pour une meilleure maintenabilité
 */
const navigation = {
  Navigation: [
    { name: "Nos services", href: Routes.services },
    { name: "Nos projets", href: Routes.projects },
    { name: "L'association", href: Routes.npo },
    { name: "Carrières", href: Routes.unknown },
    { name: "Blog", href: Routes.unknown },
  ],
  Ressources: [
    { name: "Glossaire", href: Routes.glossary },
    { name: "Communauté", href: Routes.unknown },
    { name: "Status", href: Routes.unknown },
  ],
  Autres: [
    { name: "Contact", href: Routes.contact },
    { name: "Conditions générales", href: Routes.legals.terms },
    { name: "Politique de confidentialité", href: Routes.legals.privacy },
    { name: "Détails de l'entreprise", href: Routes.legals.company },
  ],
  ["Réseaux sociaux"]: [
    { name: "LinkedIn", href: Routes.socials.linkedin },
    { name: "Github", href: Routes.socials.github },
    { name: "Discord", href: Routes.socials.discord },
    { name: "X (Twitter)", href: Routes.socials.x },
    { name: "Instagram", href: Routes.socials.instagram },
  ],
};

/**
 * Composant StatusIndicator - Indicateur visuel de statut
 */
const StatusIndicator = () => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10.9746C8.65685 10.9746 10 9.63146 10 7.97461C10 6.31776 8.65685 4.97461 7 4.97461C5.34315 4.97461 4 6.31776 4 7.97461C4 9.63146 5.34315 10.9746 7 10.9746Z"
      fill="#2294FF"
    />
    <path
      d="M7 11.9746C9.20914 11.9746 11 10.1837 11 7.97461C11 5.76547 9.20914 3.97461 7 3.97461C4.79086 3.97461 3 5.76547 3 7.97461C3 10.1837 4.79086 11.9746 7 11.9746Z"
      stroke="#2294FF"
      strokeOpacity="0.15"
      strokeWidth="4"
    />
  </svg>
);

/**
 * Composant NavigationSection - Affiche une section de navigation
 */
const NavigationSection = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-muted-foreground">{title}</h4>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-foreground"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Composant Footer - Pied de page principal
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-24 pt-10 md:pt-20 border-t w-full border-border">
      <div className="px-4 md:px-0 max-w-5xl text-xs md:text-sm mx-auto">
        {/* Section principale du footer */}
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
          {/* Section branding et description */}
          <div className="flex flex-col items-start gap-5">
            <OnRuntimeWordMark height={24} className="h-6" />
            <p>
              Un studio de créatif, à travers le monde.
              <br />
              Mais on peut se voir sur{" "}
              <strong className="text-foreground">Rouen</strong> et{" "}
              <strong className="text-foreground">Paris</strong>.
            </p>
          </div>

          {/* Sections de navigation */}
          <div className="flex flex-wrap gap-8">
            {Object.entries(navigation).map(([title, links]) => (
              <NavigationSection key={title} title={title} links={links} />
            ))}
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-border w-full my-8" />

        {/* Section inférieure (copyright et statut) */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2">
          <p>{`© onRuntime Studio, ${currentYear}`}</p>
          <p className="inline-flex gap-2 items-center">
            <StatusIndicator />
            Tous les services sont opérationnels
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;