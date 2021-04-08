import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../styles/verticalNavbar.css"
// import Container from 'react-bootstrap/Container'

function VerticalBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <ul>
                        <li><Nav.Link href="/home"></Nav.Link></li>
                        <li><Nav.Link eventKey="link-1"></Nav.Link></li>
                        <li><Nav.Link eventKey="link-2"></Nav.Link></li>
                        <li><Nav.Link eventKey="link-3"></Nav.Link></li>
                        <li><Nav.Link eventKey="link-4"></Nav.Link></li>
                        <li><Nav.Link eventKey="link-5"></Nav.Link></li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default VerticalBar;