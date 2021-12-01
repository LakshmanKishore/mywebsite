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
import { Games } from './myComponents/Games';
import { Insect } from './myComponents/Insect';
import { Projects } from "./myComponents/Projects";
import { Leftbar } from "./myComponents/Leftbar";
import { Rightbar } from "./myComponents/Rightbar";
import { HomePage } from "./myComponents/HomePage";


function App() {
  return (
    <div className="App bg-black">
      <Header />
        <Leftbar />
        <Rightbar />
        <Router>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/insectphotography">
              <Insect />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
