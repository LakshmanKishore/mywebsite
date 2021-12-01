import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar collapseOnSelect variant="dark" expand="lg" className="nbar py-4">
                <Nav>
                    <Navbar.Brand href="/">
                        <img
                            src="/favicon.ico"
                            width="30"
                            height="30"
                            className="d-inline-block align-top bradius mt-1"
                            alt="logo"
                        />{'  '}
                        <span style={{ fontSize: '1.5rem', opacity:"0.9" }}>Lakshman</span>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="mr-4">
                        <Nav.Link style={{ fontSize: "0.8em" }} href="/">Home</Nav.Link>
                        <Nav.Link style={{ fontSize: "0.8em" }} href="/projects">Projects</Nav.Link>
                        <Nav.Link style={{ fontSize: "0.8em" }} href="/games">Games</Nav.Link>
                        <Nav.Link style={{ fontSize: "0.8em" }} href="/insectphotography">Insectphotography</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
