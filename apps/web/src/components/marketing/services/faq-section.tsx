import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  items: FAQItem[];
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  items,
  className
}) => {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
