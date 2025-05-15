import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Agency } from '@/types/agency';

interface LocalTestimonialsProps {
  agency: Agency;
}

const LocalTestimonials: React.FC<LocalTestimonialsProps> = ({ agency }) => {
  // Use accent color from agency data or default to blue
  const accent = agency.accentColor || "blue";

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          Ce que nos clients à {agency.name} disent de nous
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Découvrez les témoignages de nos clients à {agency.name}, et comment nous les avons accompagnés dans leur transformation digitale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {agency.testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex flex-col gap-6 p-6 rounded-lg border bg-card"
          >
            <Quote className={`w-8 h-8 text-onruntime-${accent}`} />
            
            <p className="flex-1 text-foreground italic">
              &quot;{testimonial.text}&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.imageUrl || "/static/images/testimonials/placeholder.jpg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalTestimonials;