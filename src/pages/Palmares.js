import React from 'react'
import "../styles/palmares.css"
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';


class Palmares extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
               
            <Row>
              <Col>
                <Link to="/home/volt" className="fontStyle"><Button className="rounded-pill margin-button" variant="primary">Retour</Button></Link>
              </Col>
            </Row>
            <Row>
                <Col>
                    <div className='palmabox '>
                        <h2 >2021</h2>
                        <div className='palmaliste'>
                        <Row>
                            <h3>CS:GO</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rainbow Six</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rocket League</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='palmabox '>
                        <h2 >2020</h2>
                        <div className='palmaliste'>
                        <Row>
                            <h3>CS:GO</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rainbow Six</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rocket League</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='palmabox '>
                        <h2 >2019</h2>
                        <div className='palmaliste'>
                        <Row>
                            <h3>CS:GO</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rainbow Six</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rocket League</h3>
                            <p>3rd DreamHack Open Atlanta</p>
                        </Row>
                        </div>
                    </div>
                </Col>
            </Row>
          
  </>);
  }
}

export default Palmares; 