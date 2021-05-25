import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, RouteProps, Switch } from "react-router-dom";

import themes from "./services/themes";
import GlobalStyle from "components/Layout/GlobalStyle";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import screens from "screens";

import "remixicon/fonts/remixicon.css";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={themes.dark}>
            <GlobalStyle />
            <Router>
                <header>
                    <Navbar />
                </header>
                <Switch>
                    {screens.map((routeProps: RouteProps, index: number) => (
                        <Route key={index} {...routeProps} />
                    ))}
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
