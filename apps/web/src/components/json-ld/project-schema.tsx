import React from "react";
import { WebPageJsonLd } from "next-seo";
import { ORGANIZATION_DATA } from "./constants";

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
        headline: name,
      }}
    />
  );
};

type ProjectTeamSchemaProps = {
  team: Array<{
    name: string;
    role: string;
    website?: string;
    avatar?: string;
    github?: string;
    linkedin?: string;
  }>;
};

export const ProjectTeamSchema: React.FC<ProjectTeamSchemaProps> = ({
  team,
}) => {
  const schemas = team.map((member) => {
    const sameAs: string[] = [];
    if (member.github) sameAs.push(member.github);
    if (member.linkedin) sameAs.push(member.linkedin);

    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      ...(member.website && { url: member.website }),
      ...(member.avatar && {
        image: member.avatar.startsWith("http")
          ? member.avatar
          : `${ORGANIZATION_DATA.url}${member.avatar}`,
      }),
      ...(sameAs.length > 0 && { sameAs }),
      worksFor: {
        "@type": "Organization",
        name: ORGANIZATION_DATA.name,
        url: ORGANIZATION_DATA.url,
      },
    };
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
};