import React from 'react'
import ArticlesDisplay from "../component/articlesDisplay.js";


class Webtv extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
                <ArticlesDisplay  />
                <h1>WebTv</h1>
  </>);
  }
}

export default Webtv; 