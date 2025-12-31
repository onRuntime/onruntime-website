import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Agency } from '@/types/agency';
import { getTranslation } from '@/lib/translations.server';

interface LocalTestimonialsProps {
  agency: Agency;
}

const LocalTestimonials = async ({ agency }: LocalTestimonialsProps) => {
  const { t } = await getTranslation(`constants/agencies/${agency.id}`);
  const { t: tComponent } = await getTranslation('components/marketing/agency/local-testimonials');

  const accent = agency.accentColor || "blue";

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-medium text-foreground mb-4">
          {tComponent('title', { city: agency.name })}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {tComponent('description', { city: agency.name })}
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
              &quot;{t(`testimonials.${testimonial.key}.text`)}&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.author.imageUrl || "/static/images/testimonials/placeholder.jpg"}
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

export default LocalTestimonials;
