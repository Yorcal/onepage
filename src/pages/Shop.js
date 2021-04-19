import React from 'react'
import "../styles/volt.css"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Shop extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
            <img src='./images/Maillot.png' />
            <div className="backGroundMaillot blocShopVolt animate__animated animate__fadeInRight">
              <Row>
                <Col lg={2} md={6}>
                  <h1 className="title">SHOP</h1> 
                </Col>
                <Col lg={1} md={1}>
                  <p></p>
                </Col> 
              </Row>
              <Row><p></p></Row>
              <Row>
                <p className="font">tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ttttttt</p>
              </Row>
              <Row>
                <Button className="rounded-pill margin-button" variant="primary">GO SHOPPING</Button>
              </Row>
            
            </div>
  </>);
  }
}

export default Shop; 