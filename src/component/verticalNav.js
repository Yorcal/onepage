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
                        <Link to="/news" ><li></li></Link>
                        <Link to="/volt" ><li></li></Link>
                        <Link to="/teams" ><li></li></Link>
                        <Link to="/webtv" ><li></li></Link>
                        <Link to="/shop" ><li></li></Link>
                        <Link to="/press"><li></li></Link>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default VerticalBar;