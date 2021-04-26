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
               
            <Row className='rauw'>
              <Col>
                <Link to="/volt" className="fontStyle"><p className='pp'>«</p></Link>
              </Col>
            </Row>
            <Row className='rauw'>
                <Col className='colonne'>
                    <div className='palmabox'>
                        <h2 className='animate__animated animate__rotateIn'>2021</h2>
                        <div className='palmaliste animate__animated animate__fadeInRight'>
                        <Row>
                            <h3>CS:GO</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rainbow Six</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rocket League</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col className='colonne'>
                    <div className='palmabox'>
                        <h2 className='animate__animated animate__rotateIn animate__delay-1s'>2020</h2>
                        <div className='palmaliste animate__animated animate__fadeInRight animate__delay-1s'>
                        <Row>
                            <h3>CS:GO</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rainbow Six</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rocket League</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        </div>
                    </div>
                </Col>
                <Col className='colonne'>
                    <div className='palmabox'>
                        <h2 className='animate__animated animate__rotateIn animate__delay-2s'>2019</h2>
                        <div className='palmaliste animate__animated animate__fadeInRight animate__delay-2s'>
                                                <Row>
                            <h3>CS:GO</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rainbow Six</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        <Row>
                            <h3>Rocket League</h3>
                        </Row>
                        <Row>
                            <p><span className='blue'>3rd </span>DreamHack Open Atlanta</p>
                        </Row>
                        </div>
                    </div>
                </Col>
            </Row>
          
  </>);
  }
}

export default Palmares; 