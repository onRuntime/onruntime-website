"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { useTranslation } from "@onruntime/translations/react";
import { ServiceFeature } from '@/types/service';
import Services from '@/constants/services';

interface FeatureItemProps {
  categoryId: string;
  serviceId: string;
  feature: ServiceFeature;
  type: 'features' | 'benefits' | 'complementary';
  accentColor?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  categoryId,
  serviceId,
  feature,
  type,
  accentColor = "onruntime-blue"
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${serviceId}`);
  const FeatureIcon = feature.icon;

  return (
    <div className="flex gap-4">
      {FeatureIcon && (
        <div className={`p-2 rounded-md bg-${accentColor}/10 text-${accentColor} h-fit shrink-0`}>
          <FeatureIcon className="w-5 h-5" />
        </div>
      )}
      <div>
        <h3 className="font-medium text-foreground mb-2">{t(`${type}.${feature.key}.title`)}</h3>
        <p className="text-sm text-muted-foreground">{t(`${type}.${feature.key}.description`)}</p>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  categoryId: string;
  serviceId: string;
  feature: ServiceFeature;
  type: 'features' | 'benefits' | 'complementary';
  accentColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  categoryId,
  serviceId,
  feature,
  type,
  accentColor = "onruntime-blue"
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${serviceId}`);
  const FeatureIcon = feature.icon;

  return (
    <div className="p-6 rounded-lg border bg-card hover:border-onruntime-blue transition-colors">
      {FeatureIcon && (
        <div className={`p-3 rounded-md bg-${accentColor}/10 text-${accentColor} mb-4 w-fit`}>
          <FeatureIcon className="w-5 h-5" />
        </div>
      )}
      <h3 className="text-lg font-medium text-foreground mb-2">{t(`${type}.${feature.key}.title`)}</h3>
      <p className="text-sm text-muted-foreground">{t(`${type}.${feature.key}.description`)}</p>
    </div>
  );
};

interface FeatureMinimalProps {
  categoryId: string;
  serviceId: string;
  feature: ServiceFeature;
  type: 'features' | 'benefits' | 'complementary';
  accentColor?: string;
}

const FeatureMinimal: React.FC<FeatureMinimalProps> = ({
  categoryId,
  serviceId,
  feature,
  type,
  accentColor = "onruntime-blue"
}) => {
  const { t } = useTranslation(`constants/services/${categoryId}/${serviceId}`);
  const FeatureIcon = feature.icon;

  return (
    <div className="flex gap-4">
      {FeatureIcon && (
        <div className={`p-2 rounded-md bg-${accentColor}/10 text-${accentColor} h-fit shrink-0`}>
          <FeatureIcon className="w-5 h-5" />
        </div>
      )}
      <div>
        <h3 className="font-medium text-foreground mb-1">{t(`${type}.${feature.key}.title`)}</h3>
        <p className="text-sm text-muted-foreground">{t(`${type}.${feature.key}.description`)}</p>
      </div>
    </div>
  );
};

interface FeatureSectionProps {
  categoryId: string;
  serviceId: string;
  title: string;
  description: string;
  type: 'features' | 'benefits' | 'complementary';
  reversed?: boolean;
  className?: string;
  accentColor?: string;
  variant?: 'default' | 'cards' | 'minimal';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  categoryId,
  serviceId,
  title,
  description,
  type,
  reversed = false,
  className,
  accentColor = "onruntime-blue",
  variant = 'default'
}) => {
  // Look up features from Services constant
  const categoryData = Services.find(s => s.id === categoryId);
  const subService = categoryData?.subServices.find(s => s.id === serviceId);

  const features = type === 'features'
    ? subService?.features
    : type === 'benefits'
      ? subService?.benefits
      : subService?.complementaryServices;

  if (!features || features.length === 0) {
    return null;
  }

  const firstFeatureIcon = features[0]?.icon;

  const renderFeatures = () => {
    switch (variant) {
      case 'cards':
        return (
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                categoryId={categoryId}
                serviceId={serviceId}
                feature={feature}
                type={type}
                accentColor={accentColor}
              />
            ))}
          </div>
        );

      case 'minimal':
        return (
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureMinimal
                key={index}
                categoryId={categoryId}
                serviceId={serviceId}
                feature={feature}
                type={type}
                accentColor={accentColor}
              />
            ))}
          </div>
        );

      default:
        return (
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                categoryId={categoryId}
                serviceId={serviceId}
                feature={feature}
                type={type}
                accentColor={accentColor}
              />
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
          {firstFeatureIcon && React.createElement(
            firstFeatureIcon,
            { className: `w-32 h-32 text-${accentColor} opacity-10` }
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
