/* eslint-disable @typescript-eslint/no-var-requires */
import { useRouter } from "next/router";

const useTranslation = (
  namespace = "common"
): { t: any; locale: string | undefined } => {
  const router = useRouter();
  const { locale } = router;
  const translation = require(`../locales/${locale || "en"}/${namespace}`);
  const translate = (key: string) => {
    const keyList = key.split(".");
    let parent = translation;
    keyList.forEach((w) => (parent = parent[w] ?? key));
    return parent || key;
  };

  return { t: translate, locale };
};

export default useTranslation;
