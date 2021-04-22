// import logo from './images/Logo_Volt.png';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import CustomNavbar from "./component/navbar.js"; 
import CustomVerticalNav from "./component/verticalNav.js";
import Footer from "./component/footer.js";
import Home from "./pages/Home.js";
import Volt from "./pages/Volt.js";
import Teams from "./pages/Teams.js";
import Webtv from "./pages/Webtv.js";
import Shop from "./pages/Shop.js";
import Press from "./pages/Press.js";
import Palmares from "./pages/Palmares.js";
import DarkIntro from './pages/DarkIntro.js';



class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      article : 'news',
    }
  }
  
  
  // ChangerArticle = (article, NewArticle) => {
  //   this.setState((article:NewArticle))
    
  // }



  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => (
            <DarkIntro {...props} />
                )} />
          <Route>
          <CustomNavbar  />
            <div id='MiddlePage'>
                <CustomVerticalNav  />
                <Switch>
                  
                  <Route exact path='/news'  render={(props) => (
                      <Home {...props} article = {this.state.article} />
                      )} /> 
                  <Route exact path='/volt' render={(props) => (
                    <Volt {...props} />
                        )} />
                  <Route exact path='/palmares' render={(props) => (
                    <Palmares {...props} />
                        )} />
                  <Route exact path='/teams' render={(props) => (
                    <Teams {...props} />
                        )} />
                  <Route exact path='/webtv' render={(props) => (
                    <Webtv {...props} />
                        )} />
                  <Route exact path='/shop' render={(props) => (
                    <Shop {...props} />
                        )} />
                  <Route exact path='/press' render={(props) => (
                    <Press {...props} />
                        )} />
                </Switch>
              </div>
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

