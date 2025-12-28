import React from 'react';
import { LocalBusinessJsonLd } from 'next-seo';
import { ORGANIZATION_DATA } from './constants';

type LocalBusinessSchemaProps = {
  useAppDir?: boolean;
  type?: string;
  id?: string;
  description?: string;
  geo?: {
    latitude: string;
    longitude: string;
  };
  images?: string[];
  priceRange?: string;
  openingHours?: Array<{
    opens: string;
    closes: string;
    dayOfWeek: string[];
    validFrom?: string;
    validThrough?: string;
  }>;
};

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  useAppDir = true,
  type = "DigitalAgency",
  id = "https://onruntime.com/#localbusiness",
  description = "Agence digitale spécialisée en développement web, mobile et design UI/UX. Notre équipe d'experts transforme vos idées en solutions digitales performantes.",
  geo = {
    latitude: "44.7506",
    longitude: "6.5772",
  },
  images = ["https://onruntime.com/static/images/onruntime-team.jpg"],
  priceRange = "€€",
  openingHours = [
    {
      opens: '09:00',
      closes: '18:00',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    },
  ],
}) => {
  return (
    <LocalBusinessJsonLd
      useAppDir={useAppDir}
      type={type}
      id={id}
      name={ORGANIZATION_DATA.name}
      description={description}
      url={ORGANIZATION_DATA.url}
      telephone={ORGANIZATION_DATA.contactPoint.telephone}
      address={ORGANIZATION_DATA.address}
      geo={geo}
      images={images}
      sameAs={ORGANIZATION_DATA.sameAs}
      openingHours={openingHours}
      priceRange={priceRange}
    />
  );
};