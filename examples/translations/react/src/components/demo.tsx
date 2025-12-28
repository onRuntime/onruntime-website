import { useTranslation } from "@onruntime/translations";

export const Demo = () => {
  const { t, locale } = useTranslation();
  const count: number = 5;

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>{t("greeting", { name: "John" })}</h1>
      <p>{t(count === 1 ? "messages.one" : "messages.other", { count })}</p>
      <p style={{ color: "#666" }}>Current locale: {locale}</p>
    </div>
  );
};
