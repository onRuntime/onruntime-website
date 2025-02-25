import React from 'react';
import { BreadcrumbJsonLd } from 'next-seo';

type BreadcrumbItem = {
  position: number;
  name: string;
  item: string;
};

type BreadcrumbSchemaProps = {
  useAppDir?: boolean;
  itemListElements: BreadcrumbItem[];
};

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({
  useAppDir = true,
  itemListElements,
}) => {
  return (
    <BreadcrumbJsonLd
      useAppDir={useAppDir}
      itemListElements={itemListElements}
    />
  );
};
