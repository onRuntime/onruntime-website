import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themes from "@services/themes";
import GlobalStyle from "@components/Layout/GlobalStyle";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Head from "@components/Head";

import "remixicon/fonts/remixicon.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={themes.dark}>
      <Head
        description={
          "onRuntime is a French-Canadian studio that brings together teams of creators and develops applications, websites and game platforms."
        }
      />
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
