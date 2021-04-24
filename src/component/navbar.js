import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import logo from '../images/Logo_Volt.png';
import textLogo from '../images/unknown.png';
import LogoTv from '../images/logo_tv.png'
import {NavLink} from 'react-router-dom';
import "../styles/navbar.css"
import "../App.css"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom'

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }  
    }

    
    render(){
        return (
            <Navbar collapseOnSelect expand="xl" className="colorNavbar" variant="dark">
                <Switch>
                    <Route exact path='/webtv'>
                        <Navbar.Brand><NavLink to="/news"><img className="App-logo logo" src={logo} alt='VoltLogo'></img></NavLink></Navbar.Brand>
                        <Navbar.Brand><img className="textLogo" src={textLogo} alt='VoltText'></img><img className="textLogoTV animate__animated animate__lightSpeedInRight" src={LogoTv} alt='.TV'></img></Navbar.Brand>
                    </Route>
                    <Route exact path='/teams'>
                    
                        <Navbar.Brand className='animate__animated animate__fadeInBottomRight'><NavLink to="/news"><img className="App-logo logo" src={logo} alt='VoltLogo'></img></NavLink></Navbar.Brand>
                        <Navbar.Brand><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
                    </Route>
                    <Route exact path='/palmares'>
                        <Navbar.Brand className='animate__animated animate__fadeInBottomRight'><NavLink to="/news"><img className="App-logo logo" src={logo} alt='VoltLogo'></img></NavLink></Navbar.Brand>
                        <Navbar.Brand><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
                        </Route>
                    <Route>
                        <Navbar.Brand><NavLink to="/news"><img className="App-logo logo" src={logo} alt='VoltLogo'></img></NavLink></Navbar.Brand>
                        <Navbar.Brand><img className="textLogo" src={textLogo} alt='VoltText'></img></Navbar.Brand>
                    </Route>
                </Switch>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link id ='1' ><NavLink to="/news" activeClassName="active-page" className="fontStyle" >NEWS</NavLink></Nav.Link>
                        <Nav.Link id = '2'><NavLink to="/volt" activeClassName="active-page" className="fontStyle" >VOLT</NavLink></Nav.Link>
                        <Nav.Link id = '3'><NavLink to="/teams" activeClassName="active-page" className="fontStyle" >TEAMS</NavLink></Nav.Link>
                        <Nav.Link id = '4'><NavLink to="/webtv" activeClassName="active-page" className="fontStyle">WEBTV</NavLink></Nav.Link>
                        <Nav.Link id = '5'><NavLink to="/shop" activeClassName="active-page" className="fontStyle" >SHOP</NavLink></Nav.Link>
                        <Nav.Link id = '6'><NavLink to="/press" activeClassName="active-page" className="fontStyle" >PRESS</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

  export default CustomNavbar;