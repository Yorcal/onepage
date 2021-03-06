import React from "react";
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
                            content: 'VISER LE SOMMET DES CIEUX',
                            miniature: 'https://www.forbes.fr/wp-content/uploads/2017/07/business-esport-e1499239743415.jpg',
                            link :'https://google.com'
                            },
                {   title : 'Twitter nous répond',
                            id: 4,
                            content: 'VISER LE SOMMET DES CIEUX',
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