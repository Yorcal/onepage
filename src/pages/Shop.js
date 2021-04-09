import React from 'react'
import ArticlesDisplay from "../component/articlesDisplay.js";



class Shop extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
                <ArticlesDisplay />
                <h1>Shop</h1>
  </>);
  }
}

export default Shop; 