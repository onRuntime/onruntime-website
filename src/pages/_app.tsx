import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themes from "@services/themes";
import GlobalStyle from "@components/Layout/GlobalStyle";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

import "remixicon/fonts/remixicon.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
