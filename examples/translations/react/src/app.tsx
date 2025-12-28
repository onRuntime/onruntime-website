import { TranslationProvider } from "@onruntime/translations/react";
import { createViteLoader } from "@onruntime/translations/vite";

import { Demo } from "./components/demo";
import { LocaleSwitcher } from "./components/locale-switcher";

const modules = import.meta.glob("./locales/**/*.json", { eager: true });
const load = createViteLoader(modules);

const App = () => {
  return (
    <TranslationProvider
      defaultLocale="en"
      locales={["en", "fr"]}
      load={load}
    >
      <Demo />
      <LocaleSwitcher />
    </TranslationProvider>
  );
};

export default App;
