import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import logo from '../images/Logo_Volt.png';
import textLogo from '../images/unknown.png';
import "../styles/navbar.css"
import "../App.css"


class CustomNavbar extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {

        }
      }

    ChangeActive(props) {
        if (this.props.article) {

        }
    }
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" className="colorNavbar" variant="dark">
                <Navbar.Brand href="#home"><img className="App-logo logo" src={logo} alt='VoltLogo'></img><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="#features" className="fontStyle" id ='1'>NEWS</Nav.Link>
                        <Nav.Link href="#pricing" className="fontStyle" id = '2'>VOLT</Nav.Link>
                        <Nav.Link href="#deets" className="fontStyle" id = '3'>TEAMS</Nav.Link>
                        <Nav.Link href="#deets" className="fontStyle" id = '4'>WEBTV</Nav.Link>
                        <Nav.Link href="#deets" className="fontStyle" id = '5'>SHOP</Nav.Link>
                        <Nav.Link href="#deets" className="fontStyle" id = '6'>PRESS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
  }
}
  export default CustomNavbar;