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
    
  changeIndex = index => this.setState({index})


  changeClass = (index, length) => {

    var newindex = this.state.index;

    if (newindex !== index && index > 0 && index < length) { 
      document.getElementById('img-carousel').classList.replace("animate__fadeInTopRight", "animate__fadeOutBottomLeft");
      document.getElementById('text-carousel').classList.replace("animate__fadeInRight", "animate__fadeOutLeft");
      setTimeout(() => {
        this.setState({index},() =>{
          document.getElementById('img-carousel').classList.replace("animate__fadeOutBottomLeft", "animate__fadeInTopRight");
          document.getElementById('text-carousel').classList.replace("animate__fadeOutLeft","animate__fadeInRight");
        })
      }, 350);
    }
}

    render(){

      const news = this.props.news
    
      const newsSelected = news.find(n => n.id===this.state.index);

      const newslength = news.length+1
      
        
        return(<>

          <div>
              <div className='global'>
                <img id="img-carousel" className="img-size animate__animated animate__fadeInTopRight" src={newsSelected.miniature} />
                <div id="text-carousel" className="content bloc animate__animated animate__fadeInRight">

                  <Row>
                    <Col lg={1} md={6} xs={6}>
                      

                    <Button onClick={()=>this.changeClass(this.state.index -1, newslength)} className="fontStyle next_news"><p className='pp'>«</p></Button>
                    </Col>
                    <Col lg={1} md={6} xs={6}>
                    <Button onClick={()=>this.changeClass(this.state.index +1, newslength)} className="fontStyle next_news"><p className='pp'>»</p></Button>

                    
                    </Col>
                    <Col lg={10} md={6} xs={12}>
                      <h1 className="restitle">{newsSelected.content}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Button className="rounded-pill margin-button ButtonNews" variant="primary">GO TO ARTICLE</Button>
                  </Row>
                
                </div>
            </div>

            <div className='div'>
              {news.map((article) => (
                <a onClick={()=>this.changeClass(article.id, newslength)}><img src={article.miniature} className='miniature'/></a>
              ))}
            </div>
          </div>
        
        </>)
    }
}
export default SemiCarousel; 