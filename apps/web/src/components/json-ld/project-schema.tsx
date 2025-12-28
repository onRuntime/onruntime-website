import React from 'react';
import { WebPageJsonLd } from 'next-seo';
import { ORGANIZATION_DATA } from './constants';

type ProjectSchemaProps = {
  useAppDir?: boolean;
  id: string;
  name: string;
  description: string;
  lastReviewed?: string;
};

export const ProjectSchema: React.FC<ProjectSchemaProps> = ({
  useAppDir = true,
  id,
  name,
  description,
  lastReviewed = new Date().toISOString(),
}) => {
  return (
    <WebPageJsonLd
      useAppDir={useAppDir}
      id={id}
      description={description}
      lastReviewed={lastReviewed}
      reviewedBy={{
        type: "Organization",
        name: ORGANIZATION_DATA.name,
      }}
      additionalProperties={{
        name: name,
        headline: name
      }}
    />
  );
};