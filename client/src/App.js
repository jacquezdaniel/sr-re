import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Gallery from "./pages/gallery";
import positionStatement from "./pages/positionStatement";
import NoMatch from "./pages/noMatch";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route
            exact
            path="/positionstatements"
            component={positionStatement}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
