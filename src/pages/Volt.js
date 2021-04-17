import React from 'react'
import "../styles/volt.css"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';


class Volt extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
            <div className="margin-top">
              <Row>
                <Col lg={2} md={6}>
                  <h1 className="title">VOLT</h1> 
                </Col>
                <Col lg={1} md={1}>
                  <p></p>
                </Col>
                <Col lg={8} md={4}>
                  <h2 className="secondTitle">HIGH VOLTAGE, HUGE PERFORMANCE</h2> 
                </Col> 
              </Row>
              <Row><p></p></Row>
              <Row>
                <p className="font">tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ttttttt</p>
              </Row>
              <Row>
                <Link to="/home/palmares" className="fontStyle"><Button className="rounded-pill margin-button" variant="primary">PALMARES</Button></Link>
              </Row>
            
            </div>
  </>);
  }
}

export default Volt; 