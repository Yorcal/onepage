import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import "../styles/news.css"


class Home extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
            <div className="margin-top">
                <h2>My Image Gallery</h2>
                {/* <Carousel showArrows={false} renderIndicator={false} showStatus ={false}>
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" />
                        <p className="legend">My Classic Still 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=4" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=5" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel> */}
            </div>

  </>);
  }
}

export default Home; 