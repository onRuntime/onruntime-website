/* eslint-disable @typescript-eslint/no-var-requires */
import { useRouter } from "next/router";

const useTranslation = (
  namespace = "common"
): {
  t: (key: string, variables?: string[]) => any;
  locale: string | undefined;
} => {
  const router = useRouter();
  const { locale, locales } = router;
  let translation: any;
  try {
    translation = require(`../locales/${locale}/${namespace}.json`);
  } catch (err) {
    console.error(
      `An error occurred while loading the translation file: ${namespace}`
    );
  }

  if (!translation) {
    try {
      translation = require(`../locales/${
        locales && locales.length > 0 ? locales[0] : "en"
      }/${namespace}.json`);
    } catch (err) {
      console.error(
        `An error occurred while loading the fallback translation file: ${namespace}`
      );
    }
  }

  const translate = (key: string, variables: string[] = []) => {
    const keyList = key.split(".");
    let parent = translation;
    keyList.forEach((k) => (parent = parent[k] ?? key));

    // replace %s with variables
    if (variables.length > 0) {
      const regex = new RegExp("%s", "g");
      return parent.replace(regex, (match: any) => variables.shift() ?? match);
    }

    console.log(`handle translation for ${key} => ${parent}`);

    return parent || key;
  };

  return { t: translate, locale };
};

export default useTranslation;
