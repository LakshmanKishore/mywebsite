import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './myComponents/Header'
import { Footer } from './myComponents/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { About } from './myComponents/About';
import { Games } from './myComponents/Games';
import { Insect } from './myComponents/Insect';
import { Welcome } from "./myComponents/Welcome";
import { Projects } from "./myComponents/Projects";


function App() {
  return (
    <div className="App colorwhite background">
      <Header />
      <Router>
        <Switch>
          <Route path="/insectphotography">
            <div className="py-2"/>
            <Insect />
          </Route>
          <Route path="/games">
            <div className="py-2"/>
            <Games />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Welcome />
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
