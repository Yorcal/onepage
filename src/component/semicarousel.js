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
    
    render(){

      const news = this.props.news
      console.log(news);
        const newsSelected = news.find(n => n.id===this.state.index);
        return(<>

          <div>
              <div className='global'>
                <img className='Arriere grando animate__animated animate__jello' src={newsSelected.miniature} />
                <div className="content blocShopVolt animate__animated animate__fadeInRight">
                  <Row>
                    <Col lg={10} md={6}>
                      <h1 className="title">{newsSelected.content}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <p className="font indeex">tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ttttttt</p>
                  </Row>
                  <Row>
                    <Button className="rounded-pill margin-button" variant="primary">GO SHOPPING</Button>
                  </Row>
                
                </div>
            </div>

            <div className='div'>
              {news.map((article) => (
                <a onClick={()=>this.changeIndex(article.id)}><img src={article.miniature} className='miniature'/></a>
              ))}
            </div>
          </div>
        
        </>)
    }
}
export default SemiCarousel; 