"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useTranslation } from "@onruntime/translations/react";
import { getAgencyById } from "@/constants/agencies";

const FAQ_KEYS = [
  "choose-agency",
  "project-costs",
  "development-time",
  "remote-work",
] as const;

interface AgencyFAQSectionProps {
  agencyId: string;
  className?: string;
}

const AgencyFAQSection: React.FC<AgencyFAQSectionProps> = ({
  agencyId,
  className,
}) => {
  const { t } = useTranslation("app/agency/[city]/page");
  const agency = getAgencyById(agencyId);

  if (!agency) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {t("faq.title", { city: agency.name })}
        </h2>
        <p className="text-muted-foreground">
          {t("faq.description", { city: agency.name })}
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_KEYS.map((key, index) => (
            <AccordionItem key={key} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {t(`faq.questions.${key}.question`, {
                  city: agency.name,
                  region: agency.region,
                })}
              </AccordionTrigger>
              <AccordionContent>
                {t(`faq.questions.${key}.answer`, {
                  city: agency.name,
                  region: agency.region,
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AgencyFAQSection;
