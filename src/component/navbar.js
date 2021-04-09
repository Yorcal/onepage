import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import logo from '../images/Logo_Volt.png';
import textLogo from '../images/unknown.png';
import {Link} from 'react-router-dom';
import "../styles/navbar.css"
import "../App.css"


class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
                <Navbar.Brand><Link to="/"><img className="App-logo logo" src={logo} alt='VoltLogo'></img></Link><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link id ='1'><Link to="/" className="fontStyle">NEWS</Link></Nav.Link>
                        <Nav.Link id = '2'><Link to="/home/volt" className="fontStyle">VOLT</Link></Nav.Link>
                        <Nav.Link id = '3'><Link to="/home/teams" className="fontStyle">TEAMS</Link></Nav.Link>
                        <Nav.Link id = '4'><Link to="/home/webtv" className="fontStyle">WEBTV</Link></Nav.Link>
                        <Nav.Link id = '5'><Link to="/home/shop" className="fontStyle">SHOP</Link></Nav.Link>
                        <Nav.Link id = '6'><Link to="/home/press" className="fontStyle">PRESS</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
  }
}
  export default CustomNavbar;