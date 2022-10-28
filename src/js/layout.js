import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import SignupCard from "./views/signupcard";
import LoginCard from "./views/logincard";
import ForgotPasswordCard from "./views/forgotpasswordcard";
import NotFound from "./views/notfound";
import UserProfileEdit from "./views/userprofileedit";
import PerfilUsuario from "./views/perfilusuario";
import { Medicos } from "./views/medicos";
import {Recuperar} from "./views/recuperar"
import { Recuperar2 } from "./views/recuperar2";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Especie } from "./component/especie";
import { Footer } from "./component/footer";
import { Agenda } from "./component/agenda";



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
            <Route exact path="/Medicos/:especialidad">
              <Medicos />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/signupcard">
              <SignupCard />
            </Route>
            <Route exact path="/logincard">
              <LoginCard />
            </Route>
            <Route exact path="/forgotpasswordcard">
              <ForgotPasswordCard />
            </Route>
            <Route exact path="/recuperar">
              <Recuperar />
            </Route>
            <Route exact path="/recuperar2">
              <Recuperar2 />
            </Route>
            <Route exact path="/userprofileedit">
							<UserProfileEdit />
						</Route>
            <Route exact path="/perfilusuario">
							<PerfilUsuario />
						</Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Agenda />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
