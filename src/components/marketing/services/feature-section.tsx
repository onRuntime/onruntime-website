import React from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon?: LucideIcon;
  }[];
  image?: string;
  reversed?: boolean;
  className?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  image,
  reversed = false,
  className
}) => {
  return (
    <div className={cn("grid md:grid-cols-2 gap-12 items-center", className)}>
      {/* Contenu */}
      <div className={cn("flex flex-col gap-8", reversed && "md:order-2")}>
        <div>
          <h2 className="text-3xl font-medium text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="grid gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              {feature.icon && (
                <div className="p-2 rounded-md bg-onruntime-blue/10 text-onruntime-blue h-fit">
                  <feature.icon className="w-5 h-5" />
                </div>
              )}
              <div>
                <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {image && (
        <div className={cn("relative w-full aspect-square", reversed && "md:order-1")}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureSection;