import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LecturerPage from "views/ProfilePage/LecturerPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/curriculum" component={Components} />
      <Route path="/lecturers" component={LecturerPage} />
      <Route path="/lecture_files" component={Components} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
