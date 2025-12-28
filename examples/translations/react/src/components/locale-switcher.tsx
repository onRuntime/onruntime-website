import { useLocale } from "@onruntime/translations";

export const LocaleSwitcher = () => {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "fr" : "en")}
      style={{ margin: "0 2rem", padding: "0.5rem 1rem" }}
    >
      Switch to {locale === "en" ? "French" : "English"}
    </button>
  );
};
