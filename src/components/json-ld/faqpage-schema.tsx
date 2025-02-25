import React from 'react';
import { FAQPageJsonLd } from 'next-seo';

type FAQItem = {
  questionName: string;
  acceptedAnswerText: string;
};

type FAQPageSchemaProps = {
  useAppDir?: boolean;
  mainEntity: FAQItem[];
};

export const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({
  useAppDir = true,
  mainEntity,
}) => {
  return (
    <FAQPageJsonLd
      useAppDir={useAppDir}
      mainEntity={mainEntity}
    />
  );
};