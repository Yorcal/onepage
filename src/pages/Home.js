import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import "../styles/news.css"
import SemiCarousel from '../component/semicarousel.js'

class Home extends React.Component {
    constructor(){
      super()
      this.state = { 
         news : [ { title : 'News Du Jour',
                                content: 'Voici venu le temps des haricots',
                                miniature: 'https://upload.wikimedia.org/wikipedia/fr/f/fb/Google_Chrome_logo2.png',
                                link :'https://google.com'
                            },
                {   title : 'VOLT for the next CS:GO Major',
                                content: 'Bonjour les amis',
                                miniature: 'https://upload.wikimedia.org/wikipedia/fr/f/fb/Google_Chrome_logo2.png',
                                link :'https://google.com'
                            }
                          ]
                        }
      }
    
    render(){
        return(<>
            <SemiCarousel news = {this.state.news} />

  </>);
  }
}

export default Home; 