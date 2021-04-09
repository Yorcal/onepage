import React from 'react'
import ArticlesDisplay from "../component/articlesDisplay.js";


class Volt extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
                <ArticlesDisplay />
                <h1>Volt</h1>
  </>);
  }
}

export default Volt; 