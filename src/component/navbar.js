<<<<<<< HEAD
import React from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                Dank memes
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
=======
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
>>>>>>> a89ffc2e49976411f2f84369923767bd650e1f9a
    );
  }
  
  export default CustomNavbar;

