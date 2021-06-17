import React from "react";
import NextHead from "next/head";
import { APPNAME } from "../../constants/main";

interface TitleProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const Head: React.FC<TitleProps> = ({
  title,
  subtitle,
  description,
}: TitleProps) => (
  <NextHead>
    {title && (
      <title>{`${
        subtitle ? `${subtitle} - ` : ""
      }${title} | ${APPNAME}`}</title>
    )}
    {description && <meta name="description" content={description} />}
  </NextHead>
);

export default Head;
