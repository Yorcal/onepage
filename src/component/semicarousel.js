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
      document.getElementById('Michael').classList.replace("animate__fadeInTopRight", "animate__fadeOutBottomLeft");
      document.getElementById('Jackson').classList.replace("animate__fadeInRight", "animate__fadeOutLeft");
      setTimeout(() => {
        this.setState({index},() =>{
          document.getElementById('Michael').classList.replace("animate__fadeOutBottomLeft", "animate__fadeInTopRight");
          document.getElementById('Jackson').classList.replace("animate__fadeOutLeft","animate__fadeInRight");
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
                <img id="Michael" className='Arriere grando animate__animated animate__fadeInTopRight' src={newsSelected.miniature} />
                <div id="Jackson" className="content blocShopVolt animate__animated animate__fadeInRight">

                  <Row>
                    <Col lg={1}>
                      

                    <Button id="down" onClick={()=>this.changeClass(this.state.index -1, newslength)} className="fontStyle next_news"><p className='pp'>«</p></Button>
                    <Button id="up" onClick={()=>this.changeClass(this.state.index +1, newslength)} className="fontStyle next_news"><p className='pp'>»</p></Button>

                    
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
                <a onClick={()=>this.changeClass(article.id, newslength)}><img src={article.miniature} className='miniature'/></a>
              ))}
            </div>
          </div>
        
        </>)
    }
}
export default SemiCarousel; 