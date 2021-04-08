// import logo from './images/Logo_Volt.png';
import React from 'react';
import './App.css';
import CustomNavbar from "./component/navbar.js";
import CustomVerticalNav from "./component/verticalNav.js"
import ArticlesDisplay from "./component/articlesDisplay.js"



class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      article: 1,
      activePage: 1, 
    }
  }
  
  ArticleDisplay = () => {

    
  }



  render(){
  return (<>
    <CustomNavbar article = {this.state.article} />
    <div id='MiddlePage'>
      <CustomVerticalNav article = {this.state.article} />
      <ArticlesDisplay article = {this.state.article} />
    </div>
  </>);
  }
}
export default App;

