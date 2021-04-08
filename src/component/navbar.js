<<<<<<< HEAD
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import logo from '../images/Logo_Volt.png';
import textLogo from '../images/unknown.png';
import "../styles/navbar.css"


function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
            <Navbar.Brand href="#home"><img className="logo" src={logo} alt='VoltLogo'></img><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Link href="#features" className="fontStyle">NEWS</Nav.Link>
                    <Nav.Link href="#pricing" className="fontStyle">VOLT</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">TEAMS</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">WEBTV</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">SHOP</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">PRESS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default CustomNavbar;

=======
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import logo from '../images/Logo_Volt.png';
import textLogo from '../images/unknown.png';
import "../styles/navbar.css"


function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
            <Navbar.Brand href="#home"><img className="logo" src={logo} alt='VoltLogo'></img><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Link href="#features" className="fontStyle">NEWS</Nav.Link>
                    <Nav.Link href="#pricing" className="fontStyle">VOLT</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">TEAMS</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">WEBTV</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">SHOP</Nav.Link>
                    <Nav.Link href="#deets" className="fontStyle">PRESS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default CustomNavbar;

>>>>>>> 13d39af02c2a14362c29455cecb344db75bb0480
