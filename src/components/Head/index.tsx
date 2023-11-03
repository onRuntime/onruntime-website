import { APP_NAME, APP_URL } from "@constants/main";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const Head: React.FC<Props> = ({
  title,
  subtitle,
  description,
  keywords,
  thumbnailUrl,
  noIndex,
  noFollow,
}: Props) => {
  const { locales, asPath } = useRouter();

  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APP_NAME}`
    : APP_NAME;

  const finalThumbnailUrl =
    thumbnailUrl || "/static/images/open-graph-image.jpg";

  const languageAlternates =
    locales &&
    locales.map((locale) => ({
      hrefLang: locale,
      href: `${APP_URL}/${locale}${asPath}`,
    }));

  return (
    <NextSeo
      title={finalTitle}
      description={description}
      openGraph={{
        title: finalTitle,
        description,
        site_name: APP_NAME,
        images: [
          {
            url: finalThumbnailUrl,
            alt: finalTitle,
            type: "image/jpeg",
          },
        ],
      }}
      twitter={{
        handle: "@onruntime",
        site: "@onruntime",
        cardType: "summary_large_image",
      }}
      languageAlternates={languageAlternates}
      additionalMetaTags={[
        {
          property: "keywords",
          content: `onruntime, runtime, studio${
            keywords ? `, ${keywords.join(", ").toLowerCase()}` : ""
          }`,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
        },
      ]}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
};

export default Head;
