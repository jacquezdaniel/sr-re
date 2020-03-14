import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/positionstatements" component={positionStatement} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/gallery" component={Gallery} />
      <Redirect to="/" />
      <Footer />
    </Router>
  );
}

export default App;
