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
import Services from "@/constants/services";

interface FAQItemProps {
  categoryId: string;
  serviceId: string;
  faqKey: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({
  categoryId,
  serviceId,
  faqKey,
  index,
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${serviceId}`);

  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className="text-left">
        {t(`faq.${faqKey}.question`)}
      </AccordionTrigger>
      <AccordionContent>{t(`faq.${faqKey}.answer`)}</AccordionContent>
    </AccordionItem>
  );
};

interface FAQSectionProps {
  categoryId: string;
  serviceId: string;
  title: string;
  description: string;
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  categoryId,
  serviceId,
  title,
  description,
  className,
}) => {
  const categoryData = Services.find((s) => s.id === categoryId);
  const subService = categoryData?.subServices.find((s) => s.id === serviceId);
  const faqItems = subService?.faqItems || [];

  if (faqItems.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.key}
              categoryId={categoryId}
              serviceId={serviceId}
              faqKey={item.key}
              index={index}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
