import React from "react";
import { ORGANIZATION_DATA } from "./constants";

type PersonSchemaProps = {
  name: string;
  jobTitle?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
};

export const PersonSchema: React.FC<PersonSchemaProps> = ({
  name,
  jobTitle,
  url,
  image,
  sameAs = [],
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(jobTitle && { jobTitle }),
    ...(url && { url }),
    ...(image && {
      image: image.startsWith("http") ? image : `${ORGANIZATION_DATA.url}${image}`,
    }),
    ...(sameAs.length > 0 && { sameAs }),
    worksFor: {
      "@type": "Organization",
      name: ORGANIZATION_DATA.name,
      url: ORGANIZATION_DATA.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
