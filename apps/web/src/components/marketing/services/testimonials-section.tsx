"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Quote } from 'lucide-react';
import { useTranslation } from "@onruntime/translations/react";
import { ServiceTestimonial } from '@/types/service';
import Services from '@/constants/services';

interface TestimonialCardProps {
  categoryId: string;
  serviceId: string;
  testimonial: ServiceTestimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  categoryId,
  serviceId,
  testimonial
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${serviceId}`);

  return (
    <div className="flex flex-col gap-6 p-6 rounded-lg border bg-card">
      <Quote className="w-8 h-8 text-onruntime-blue" />

      <p className="flex-1 text-foreground italic">
        &quot;{t(`testimonials.${testimonial.key}.content`)}&quot;
      </p>

      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.author.image}
            alt={testimonial.author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-foreground">{testimonial.author.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

interface TestimonialsSectionProps {
  categoryId: string;
  serviceId: string;
  title: string;
  description: string;
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  categoryId,
  serviceId,
  title,
  description,
  className
}) => {
  // Look up testimonials from Services constant
  const categoryData = Services.find(s => s.id === categoryId);
  const subService = categoryData?.subServices.find(s => s.id === serviceId);
  const testimonials = subService?.testimonials;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            categoryId={categoryId}
            serviceId={serviceId}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
