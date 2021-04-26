import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/webtv.css'

class Webtv extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>     
          <div className='containerWebTV animate__animated animate__fadeInRight'>
            <Row>
              <Col lg={9} md={12}>
                <div className='styleWebTV'>
                  <h1 >PLAYER</h1>
                </div>
              </Col>
              <Col lg={3} md={12}>
                <div className='styleWebTV'>
                  <h1>CHAT</h1>
                </div>
              </Col>
            </Row>
          </div>

  </>);
  }
}

export default Webtv; 