import React from 'react';
import { ORGANIZATION_DATA } from './constants';
import { JsonLd } from 'next-seo/lib/jsonld/jsonld';

type ServiceSchemaProps = {
  useAppDir?: boolean;
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string[];
  audience?: string[];
};

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  useAppDir = true,
  name,
  description,
  serviceType = "Digital Service",
  areaServed = ["FR"],
  audience = ["Entreprises", "Startups", "PME"],
}) => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": ORGANIZATION_DATA.name,
      "url": ORGANIZATION_DATA.url
    },
    "serviceType": serviceType,
    "areaServed": areaServed,
    "audience": audience.map(a => ({
      "@type": "Audience",
      "name": a
    }))
  };

  return (
    <JsonLd
      useAppDir={useAppDir}
      type="Service"
      scriptKey='service'
      json={serviceData}
    />
  );
};