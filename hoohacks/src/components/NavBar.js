// import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/LogoNew.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <Navbar expand="md" className="fixed-top">
            <Container className="navbar-container">
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className='navbar-link'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='navbar-link'>About</Nav.Link>
                        <Nav.Link as={Link} to="/faq" className='navbar-link'>FAQ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};