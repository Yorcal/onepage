import React from 'react'
import CustomNavbar from "../component/navbar.js";
import CustomVerticalNav from "../component/verticalNav.js";
import ArticlesDisplay from "../component/articlesDisplay.js";


class Volt extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
            <CustomNavbar />
            <div id='MiddlePage'>
                <CustomVerticalNav />
                <ArticlesDisplay />
            </div>
  </>);
  }
}

export default Volt; 