import React from "react";
import NextHead from "next/head";
import { APPNAME } from "@constants/main";

interface IHead {
  title?: string;
  subtitle?: string;
  description?: string;
}

const Head: React.FC<IHead> = ({ title, subtitle, description }: IHead) => {
  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APPNAME}`
    : APPNAME;

  return (
    <NextHead>
      <title>{finalTitle}</title>
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta name="keywords" content="onruntime, runtime, studio" />

      <meta property="og:site_name" content={APPNAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://onruntime.com" />
      <meta property="og:title" content={APPNAME} />
      <meta
        property="og:image"
        content="/static/images/logo/onruntime-white-background.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://onruntime.com" />
      <meta name="twitter:site" content="@onRuntime" />
      <meta name="twitter:title" content={APPNAME} />
      <meta
        name="twitter:image"
        content="/static/images/open-graph-image.jpg"
      />
    </NextHead>
  );
};

export default Head;
