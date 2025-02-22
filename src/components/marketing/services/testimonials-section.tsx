import React from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials,
  className
}) => {
  return (
    <div className={cn("flex flex-col gap-12", className)}>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex flex-col gap-6 p-6 rounded-lg border bg-card"
          >
            <Quote className="w-8 h-8 text-onruntime-blue" />
            
            <p className="flex-1 text-foreground italic">
              &quot;{testimonial.content}&quot;
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
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;