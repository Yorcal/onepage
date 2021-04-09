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
                        <Link to="/" ><li></li></Link>
                        <Link to="/home/teams" ><li></li></Link>
                        <Link to="/home/volt" ><li></li></Link>
                        <Link to="/home/webtv" ><li></li></Link>
                        <Link to="/home/shop" ><li></li></Link>
                        <Link to="/home/press"><li></li></Link>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default VerticalBar;