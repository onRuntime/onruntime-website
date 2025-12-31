import React from 'react';
import { OrganizationJsonLd } from 'next-seo';
import { ORGANIZATION_DATA } from './constants';

type OrganizationSchemaProps = {
  useAppDir?: boolean;
  type?: string;
  id?: string;
  customData?: Partial<typeof ORGANIZATION_DATA>;
};

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  useAppDir = true,
  type = "NonProfit",
  id = `${ORGANIZATION_DATA.url}/#organization`,
  customData = {},
}) => {
  const data = { ...ORGANIZATION_DATA, ...customData };

  return (
    <OrganizationJsonLd
      useAppDir={useAppDir}
      type={type}
      id={id}
      name={data.name}
      legalName={data.legalName}
      url={data.url}
      logo={data.logo}
      address={data.address}
      contactPoint={[data.contactPoint]}
      sameAs={data.sameAs}
    />
  );
};