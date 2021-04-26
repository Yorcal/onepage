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
            <img className='backgroundImage animate__animated animate__zoomInDown' src={Volteuhgris} />
              <div className="blocShopVolt animate__animated animate__fadeInRight">
              <Row>
                <h1 className="font title">VOLT</h1>
                <h2 className="font secondTitle">HIGH VOLTAGE, HUGE PERFORMANCE</h2> 
              </Row>
              <Row>
                <p className="font voltshop-content">tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ttttttt</p>
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