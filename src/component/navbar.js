import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../images/Logo_Volt.png';
import textLogo from '../images/unknown.png';
import "../styles/navbar.css"


function CustomNavbar() {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
                <Navbar.Brand href="#home"><img className="logo" src={logo}></img><img className="textLogo" src={textLogo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">News</Nav.Link>
                        <Nav.Link href="#pricing">Volt</Nav.Link>
                        <Nav.Link href="#deets">Teams</Nav.Link>
                        <Nav.Link href="#deets">WebTV</Nav.Link>
                        <Nav.Link href="#deets">Shop</Nav.Link>
                        <Nav.Link href="#deets">Press</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
  }
  
  export default CustomNavbar;

