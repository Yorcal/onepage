import React from 'react'
import '../styles/teams.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RL from '../images/RL_team.png'
import LOL from '../images/Lol_team.png'
import CSGO from '../images/CSGO_team.png'
import R6 from '../images/R6_team.png'


class Teams extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<> 
        <div className='TeamListe'>
          <Row className='teamsrow'>
            
              <Col lg={2} md={4}>
                <div className='RL marginRight animate__animated animate__backInUp'>
                  <div className='box '>
                    <img src={RL} />
                    </div>
                </div>
              </Col>

              <Col lg={2} md={4}>
                <div className='LOL marginRight animate__animated animate__backInDown animate__delay-1s'>
                  <div className='box '>
                    <img src={LOL} />
                    </div>
                </div>
              </Col>

              <Col lg={2} md={4}>
                <div className='CSGO marginRight animate__animated animate__backInUp'>
                  <div className='box '>
                    <img src={CSGO} />
                    </div>
                </div>
              </Col>

              <Col lg={2} md={6}>
                <div className='R6 marginRight animate__animated animate__backInDown animate__delay-1s'>
                  <div className='box '>
                    <img src={R6} />
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