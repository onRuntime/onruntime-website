import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themes from "@services/themes";
import GlobalStyle from "@components/Layout/GlobalStyle";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Head from "@components/Head";
import Script from "@components/Script";

import "remixicon/fonts/remixicon.css";
import InformationBanner from "@components/InformationBanner";
import useTranslation from "@hooks/useTranslation";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={themes.dark}>
      <Head
        description={
          "onRuntime is a French-Canadian studio that brings together teams of creators and develops applications, websites and game platforms."
        }
      />
      <GlobalStyle />

      <InformationBanner
        text={t("main.informationbanner")}
        onClick={() => {
          window.open("https://discord.gg/JNyy9cKpeM");
        }}
      />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Script />
    </ThemeProvider>
  );
};

export default App;
