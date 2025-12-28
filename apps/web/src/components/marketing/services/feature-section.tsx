import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon?: LucideIcon;
  }[];
  reversed?: boolean;
  className?: string;
  accentColor?: string;
  variant?: 'default' | 'cards' | 'minimal';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  reversed = false,
  className,
  accentColor = "onruntime-blue",
  variant = 'default'
}) => {
  const renderFeatures = () => {
    switch (variant) {
      case 'cards':
        return (
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors"
              >
                {feature.icon && (
                  <div className={`p-3 rounded-md bg-${accentColor}/10 text-${accentColor} mb-4 w-fit`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                )}
                <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        );
        
      case 'minimal':
        return (
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {feature.icon && (
                  <div className={`p-2 rounded-md bg-${accentColor}/10 text-${accentColor} h-fit flex-shrink-0`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
        
      default:
        return (
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {feature.icon && (
                  <div className={`p-2 rounded-md bg-${accentColor}/10 text-${accentColor} h-fit flex-shrink-0`}>
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
        );
    }
  };

  return (
    <div className={cn("grid md:grid-cols-2 gap-12 items-start", className)}>
      <div className={cn("flex flex-col gap-8", reversed && "md:order-2")}>
        <div>
          <h2 className="text-3xl font-medium text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {renderFeatures()}
      </div>

      <div className={cn("relative rounded-xl border border-border bg-card min-h-[320px] overflow-hidden", reversed && "md:order-1")}>
        <div className={`absolute inset-0 z-0 opacity-20 overflow-hidden`}>
          <div className={`absolute ${reversed ? '-left-20' : '-right-20'} -top-20 w-[300px] h-[300px] rounded-full bg-${accentColor} blur-3xl`}></div>
          <div className={`absolute ${reversed ? '-right-20' : '-left-20'} -bottom-20 w-[250px] h-[250px] rounded-full bg-${accentColor} blur-3xl`}></div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {features[0]?.icon && React.createElement(
            features[0].icon, 
            { className: `w-32 h-32 text-${accentColor} opacity-10` }
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;