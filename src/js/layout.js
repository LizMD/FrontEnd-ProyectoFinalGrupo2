import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Especie } from "./component/especie";
import { Carru } from "./component/carru";
import { Footer } from "./component/footer";
import { Agenda } from "./component/agenda";
import { Medicos } from "./component/medicos";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div style={{ backgroundColor: "#fffcf6" }}>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Especie />
              <Home />
            </Route>
            <Route exact path="/registro">
              <Demo />
            </Route>
            <Route exact path="/medicos">
              <Medicos />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route></Route>
          </Switch>
          <Agenda />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
