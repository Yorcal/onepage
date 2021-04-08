// import logo from './images/Logo_Volt.png';
import { Component } from 'react';
import './App.css';
import CustomNavbar from "./component/navbar.js"
import CustomVerticalNav from "./component/verticalNav.js"
import Container from 'react-bootstrap/Container'


function App() {
  return (<>
    <CustomNavbar />
    <Container maxWidth="sm">
      <CustomVerticalNav />
    </Container>
  </>);
}

export default App;
