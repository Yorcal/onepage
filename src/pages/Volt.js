import React from 'react'
import "../styles/voltandshop.css"
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import Volteuhgris from '../images/voltgris.png'


class Volt extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>

          <div className='global'>
            <img className='Arriere animate__animated animate__zoomInDown' src={Volteuhgris} />
              <div className="blocShopVolt animate__animated animate__fadeInRight">
              <Row>
                <Col lg={2} md={6}>
                  <h1 className="title ">VOLT</h1> 
                </Col>

                <Col lg={{span : 8, offset : 1}} md={{span : 4, offset : 1}}>
                  <h2 className="secondTitle">HIGH VOLTAGE, HUGE PERFORMANCE</h2> 
                </Col> 
              </Row>
              <Row>
                <p className="font">tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ttttttt</p>
              </Row>
              <Row>
                <Link to="/palmares" className=""><Button className="rounded-pill margin-button buttonVolt" variant="primary">PALMARES</Button></Link>
              </Row>
            
            </div>
          </div>
  </>);
  }
}

export default Volt; 