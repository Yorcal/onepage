import React from 'react'
import "../styles/semicarousel.css"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SemiCarousel extends React.Component {
    constructor(props){
      super(props)
      this.state = { 
        index : 1
      }
    }
    
    // changeIndex = index => this.setState({index})

    

    sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
  }

  changeClass(index) {
      document.querySelector('Arriere').classList.remove('animate__animated',' animate__fadeInTopRight');
      document.querySelector('Arriere').classList.add('animate__animated','animate__fadeOutBottomLeft');
      setTimeout(function(){
        this.setState({index});
      }, 200);
  }

    render(){

      const news = this.props.news
      console.log(news);
        const newsSelected = news.find(n => n.id===this.state.index);
        return(<>

          <div>
              <div className='global'>
                <img className='Arriere grando animate__animated animate__fadeInTopRight' src={newsSelected.miniature} />
                <div className="content blocShopVolt animate__animated animate__fadeInRight">

                  <Row>
                    <Col lg={1}>
                      <Button className="rounded-pill margin-button" variant="primary">-</Button>
                      <Button className="rounded-pill margin-button" variant="primary">+</Button>
                    </Col>
                    <Col lg={10} md={6}>
                      <h1 className="title">{newsSelected.content}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Button className="rounded-pill margin-button ButtonNews" variant="primary">GO TO ARTICLE</Button>
                  </Row>
                
                </div>
            </div>

            <div className='div'>
              {news.map((article) => (
                <a onClick={()=>this.changeClass(article.id)}><img src={article.miniature} className='miniature'/></a>
              ))}
            </div>
          </div>
        
        </>)
    }
}
export default SemiCarousel; 