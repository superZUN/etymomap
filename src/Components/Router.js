import React from "react";
import {
  BrowserRouter as Router,
  Route,
  //   Redirect,
  Switch
} from "react-router-dom";
import EtymoMap from "../Routes/EtymoMap/index";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={EtymoMap} />
        {/* <Route path="/tv" component={Tv} /> */}
      </Switch>
    </>
  </Router>
);
