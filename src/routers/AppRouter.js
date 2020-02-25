import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Showcase from "../components/Showcase";
import Footer from "../layouts/Footer";
import List from "../components/List";
import Faq from "../components/Faq";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsAndConditions from "../components/TermsAndConditions";

const AppRouter = () => (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Showcase} exact />
      <Route path="/list" component={List} exact />
      <Route path="/faq" component={Faq} exact />
      <Route path="/privacy" component={PrivacyPolicy} exact />
      <Route path="/terms" component={TermsAndConditions} exact />
    </Switch>
    <Footer />
    </BrowserRouter>
);

export default AppRouter;
