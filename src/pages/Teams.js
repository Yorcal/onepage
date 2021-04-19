import React from 'react'
import '../styles/teams.css'
import Row from 'react-bootstrap/Row'


class Teams extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<> 
          <Row>
            <div className='RL marginRight animate__animated animate__backInUp'>
              <div className='box '>
                <h1 >Rocket League</h1>
                </div>
            </div>

            <div className='LOL marginRight animate__animated animate__backInDown animate__delay-1s'>
              <div className='box '>
                <h1 >League of Legends</h1>
                </div>
            </div>

            <div className='CSGO marginRight animate__animated animate__backInUp'>
              <div className='box '>
                <h1 >CS:GO</h1>
                </div>
            </div>

            <div className='R6 marginRight animate__animated animate__backInDown animate__delay-1s'>
              <div className='box '>
                <h1 >Rainbow 6 Siege</h1>
                </div>
            </div>

            <div className='box animate__animated animate__backInUp'>
              <h1 >SOON</h1>
            </div>
          </Row>
  </>);
  }
}

export default Teams; 