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
                            id: 1,
                            content: 'VOLT FOR THE NEXT CS:GO MAJOR',
                            miniature: 'https://iem.imgix.net/season-13/katowice/wp-content/uploads/2018/07/IEM-katowice-by-bart-oerbekke-1.jpg?auto=format%2Ccompress',
                            link :'https://google.com'
                            },
                {   title : 'VOLT for the next CS:GO Major',
                            id : 2,
                            content: 'OUR LATEST TWEET OF THE DAY',
                            miniature: 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2020/2/24/photo-3-158251488316787443375.jpg',
                            link :'https://google.com'
                            },
                {   title : 'Bip Boup Article', 
                            id : 3,
                            content: 'neggpopoqd  qdzdqdzdqd !!!!!',
                            miniature: 'http://www3.poitiers-jeunes.com/wp-content/uploads/2016/10/Expressifs-Morgan-Bisson-84.jpg',
                            link :'https://google.com'
                            },
                {   title : 'Twitter nous répond',
                            id: 4,
                            content: 'oui ou nan ou oui ou nan',
                            miniature: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg',
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