import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";
import {About} from './About';
import { Welcome } from './Welcome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Games } from './Games';
import { Insect } from './Insect';

export const Header = () => {
    return (
        <div className="container">
            <Router>
                <Navbar collapseOnSelect expand="lg" className="mt-4 nbar" style={{fontSize:"1.5rem"}}>
                    <Nav className="mr-auto">
                        <Navbar.Brand href="/home">
                            <img
                                src="/favicon.ico"
                                width="30"
                                height="30"
                                className="d-inline-block align-top bradius mt-1"
                                alt="logo"
                            />{'  '}
                        <span style={{fontSize:'1.5rem'}}>Lakshman</span>
                    </Navbar.Brand>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/insectphotography">Insectphotography</Nav.Link>
                            <Nav.Link href="/games">Games</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <Switch>
                    <Route path="/insectphotography">
                        <Insect />
                    </Route>
                    <Route path="/games">
                        <Games />
                    </Route>
                    <Route path="/">
                        <Welcome />
                        <hr />
                        <About />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
