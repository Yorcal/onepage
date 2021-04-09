import React from 'react'
import ArticlesDisplay from "../component/articlesDisplay.js";



class Press extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
                <ArticlesDisplay  />
                <h1>Press</h1>
  </>);
  }
}

export default Press; 