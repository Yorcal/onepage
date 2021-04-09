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
                        <li><Link to="/"></Link></li>
                        <li><Link to="/home/volt"></Link></li>
                        <li><Link to="/home/teams"></Link></li>
                        <li><Link to="/home/webtv"></Link></li>
                        <li><Link to="/home/shop"></Link></li>
                        <li><Link to="/home/press"></Link></li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default VerticalBar;