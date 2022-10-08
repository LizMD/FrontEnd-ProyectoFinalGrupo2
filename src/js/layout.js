import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Single } from "./views/single";
import SignupCard from "./views/signupcard";
import LoginCard from "./views/logincard";
import ForgotPasswordCard from "./views/forgotpasswordcard";
import NotFound from "./views/notfound";
import UserProfileEdit from "./views/userprofileedit";
import { Medicos } from "./views/medicos";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/Medicos">
							<Medicos />
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
            <Route exact path="/userprofileedit">
							<UserProfileEdit />
						</Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
