import React from 'react'
import ArticlesDisplay from "../component/articlesDisplay.js"

class Home extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
              <ArticlesDisplay  />
              <h1>Home</h1>

  </>);
  }
}

export default Home; 