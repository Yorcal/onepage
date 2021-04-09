import React from 'react'
import CustomNavbar from "../component/navbar.js";
import CustomVerticalNav from "../component/verticalNav.js";
import ArticlesDisplay from "../component/articlesDisplay.js";


class Teams extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
            <CustomNavbar article = {this.state.article} />
            <div id='MiddlePage'>
                <CustomVerticalNav article = {this.state.article} />
                <ArticlesDisplay article = {this.state.article} />
            </div>
  </>);
  }
}

export default Teams; 