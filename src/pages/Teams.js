import React from 'react'
import ArticlesDisplay from "../component/articlesDisplay.js";


class Teams extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
                <ArticlesDisplay />
                <h1>Teams</h1>
  </>);
  }
}

export default Teams; 