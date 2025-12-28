"use client";

import { Link } from "@onruntime/translations/next";

import { useTranslation, useLocale } from "@onruntime/translations/react";

import Routes from "@/constants/routes";
import { OnRuntimeWordMark } from "@/logos/components";
import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useTranslation("layout/footer");
  const { locale, locales, setLocale } = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = {
    [t("nav.navigation")]: [
      { name: t("links.services"), href: Routes.services },
      { name: t("links.projects"), href: Routes.projects },
      { name: t("links.npo"), href: Routes.npo },
      { name: t("links.careers"), href: Routes.careers },
      { name: t("links.blog"), href: Routes.unknown },
    ],
    [t("nav.resources")]: [
      { name: t("links.glossary"), href: Routes.glossary },
      { name: t("links.community"), href: Routes.unknown },
      { name: t("links.status"), href: Routes.unknown },
    ],
    [t("nav.other")]: [
      { name: t("links.contact"), href: Routes.contact },
      { name: t("links.terms"), href: Routes.legals.terms },
      { name: t("links.privacy"), href: Routes.legals.privacy },
      { name: t("links.company"), href: Routes.legals.company },
    ],
    [t("nav.social")]: [
      { name: "LinkedIn", href: Routes.socials.linkedin },
      { name: "Github", href: Routes.socials.github },
      { name: "Discord", href: Routes.socials.discord },
      { name: "X (Twitter)", href: Routes.socials.x },
      { name: "Instagram", href: Routes.socials.instagram },
    ],
  };

  return (
    <footer className={"pb-24 pt-10 md:pt-20 border-t w-full border-border"}>
      <div className={"px-4 md:px-0 max-w-5xl text-xs md:text-sm mx-auto"}>
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
          <div className="flex flex-col items-start gap-5">
            <OnRuntimeWordMark height={24} className="h-6" />

            <p>
              {t("tagline")}
              <br />
              <span
                dangerouslySetInnerHTML={{ __html: t("location") }}
                className="[&>strong]:text-foreground"
              />
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {Object.entries(navigation).map(([key, links]) => (
              <div key={key} className="flex flex-col gap-4">
                <h3 className="text-muted-foreground">{key}</h3>

                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-foreground"
                        target={link.href.startsWith("http") ? "_blank" : ""}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : ""
                        }
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-border w-full my-8" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p>{`© onRuntime Studio, ${currentYear}`}</p>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 text-xs gap-2">
                  {t(`language.${locale}`)}
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className="text-xs gap-2 cursor-pointer"
                  >
                    {locale === loc ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <span className="h-3 w-3" />
                    )}
                    {t(`language.${loc}`)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <p className="inline-flex gap-2">
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
              {t("status")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
