import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../App.css";

export const NavbarComponent = () => {
    return (
        <div className="pb-5">
            <Navbar fixed="top" collapseOnSelect variant="dark" expand="lg" className="nbar" style={{ fontSize: "1.5rem" }}>
                <Nav className="mr-auto ml-2">
                    <Navbar.Brand href="/">
                        <img
                            src="/favicon.ico"
                            width="30"
                            height="30"
                            className="d-inline-block align-top bradius mt-1"
                            alt="logo"
                        />{'  '}
                        <span className="colorwhite" style={{ fontSize: '1.5rem' }}>Lakshman</span>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-4">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>
                        <Nav.Link href="/insectphotography">Insectphotography</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
