import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

import Services from "./pages/services";
import Contact from "./pages/contact";
import projects from "./pages/projects";

function App() {
  return (
   
    <Router>
      
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/services" component={Services} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/projects" component={projects} />
      </Switch>
   
    </Router>
   
  );
}

export default App;
