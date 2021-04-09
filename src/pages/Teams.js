import React from 'react'
import '../styles/teams.css'


class Teams extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
                
          <div className='containerteams'>
            <div className='RL marginRight'>
              <div className='box '>
                <h1 >Rocket League</h1>
                </div>
            </div>
            <div className='LOL marginRight'>
              <div className='box '>
                <h1 >League of Legends</h1>
                </div>
            </div>
            <div className='CSGO marginRight'>
              <div className='box '>
                <h1 >CS:GO</h1>
                </div>
            </div>
            <div className='R6 marginRight'>
              <div className='box '>
                <h1 >Rainbow 6 Siege</h1>
                </div>
            </div>
            <div className='box'>
              <h1 >SOON</h1>
            </div>
          </div>
  </>);
  }
}

export default Teams; 