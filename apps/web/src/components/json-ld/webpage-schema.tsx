import React from 'react';
import { WebPageJsonLd } from 'next-seo';
import { ORGANIZATION_DATA } from './constants';

type WebPageSchemaProps = {
  useAppDir?: boolean;
  id: string;
  description: string;
  lastReviewed?: string;
};

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  useAppDir = true,
  id,
  description,
  lastReviewed,
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
    />
  );
};