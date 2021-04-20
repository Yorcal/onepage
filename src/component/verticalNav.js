import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/verticalNavbar.css";
import {NavLink} from 'react-router-dom';
// import Container from 'react-bootstrap/Container'

function VerticalBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <ul>
                        <NavLink activeClassName="active-li" to="/news" ><li/></NavLink>
                        <NavLink activeClassName="active-li" to="/volt" ><li/></NavLink>
                        <NavLink activeClassName="active-li" to="/teams" ><li/></NavLink>
                        <NavLink activeClassName="active-li" to="/webtv" ><li/></NavLink>
                        <NavLink activeClassName="active-li" to="/shop" ><li/></NavLink>
                        <NavLink activeClassName="active-li" to="/press"><li/></NavLink>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
  
  export default VerticalBar;