import React from 'react'
import '../styles/teams.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Teams extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<> 
        <div className='TeamListe'>
          <Row>
            
              <Col lg={2} md={4}>
                <div className='RL marginRight animate__animated animate__backInUp'>
                  <div className='box '>
                    <h1 >Rocket League</h1>
                    </div>
                </div>
              </Col>

              <Col lg={2} md={4}>
                <div className='LOL marginRight animate__animated animate__backInDown animate__delay-1s'>
                  <div className='box '>
                    <h1 >League of Legends</h1>
                    </div>
                </div>
              </Col>

              <Col lg={2} md={4}>
                <div className='CSGO marginRight animate__animated animate__backInUp'>
                  <div className='box '>
                    <h1 >CS:GO</h1>
                    </div>
                </div>
              </Col>

              <Col lg={2} md={6}>
                <div className='R6 marginRight animate__animated animate__backInDown animate__delay-1s'>
                  <div className='box '>
                    <h1 >Rainbow 6 Siege</h1>
                    </div>
                </div>
              </Col>

              <Col lg={2} md={6}>
                <div className='box marginRight animate__animated animate__backInUp'>
                  <h1 >SOON</h1>
                </div>
              </Col>
            
          </Row>
          </div>
  </>);
  }
}

export default Teams; 