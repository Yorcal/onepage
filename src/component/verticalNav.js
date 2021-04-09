import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/verticalNavbar.css";
import {Link} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'

function VerticalBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <ul>
                        <li><Nav.Link><Link to="/"></Link></Nav.Link></li>
                        <li><Nav.Link eventKey="/home/volt"><Link to="/home/volt"></Link></Nav.Link></li>
                        <li><Nav.Link eventKey="link-2"><Link to="/home/teams"></Link></Nav.Link></li>
                        <li><Nav.Link eventKey="link-3"><Link to="/home/webtv"></Link></Nav.Link></li>
                        <li><Nav.Link eventKey="link-4"><Link to="/home/shop"></Link></Nav.Link></li>
                        <li><Nav.Link eventKey="link-5"><Link to="/home/press"></Link></Nav.Link></li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default VerticalBar;