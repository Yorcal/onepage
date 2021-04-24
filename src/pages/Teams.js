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
        <div className='teamContainer'>
          <Row>
            <div className='RL margin-box animate__animated animate__backInUp'>
              <div className='box'>
                <img src={RL} />
                </div>
            </div>
            <div className='LOL margin-box animate__animated animate__backInDown animate__delay-1s'>
              <div className='box '>
                <img src={LOL} />
                </div>
            </div>
            <div className='CSGO margin-box animate__animated animate__backInUp'>
              <div className='box '>
                <img src={CSGO} />
                </div>
            </div>
            <div className='R6 margin-box animate__animated animate__backInDown animate__delay-1s'>
              <div className='box '>
                <img src={R6} />
                </div>
            </div>
            <div className='box margin-box animate__animated animate__backInUp'>
              <h1 className="fontTeams">SOON</h1>
            </div>
              
            </Row>
          </div>
  </>);
  }
}

export default Teams; 