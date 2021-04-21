import React from 'react'
import "../styles/press.css"


class SemiCarousel extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        
      }
    }

    
    
    render(){

      const news = this.props.news
        return(<>
        
            
          {/* <h1>{this.props.news.Article_1.title}</h1> */}
          <div>
            {news.map((article) => (
              <img src={article.miniature} />
            ))}
          </div>
        
        </>)
    }
}
export default SemiCarousel; 