import React from 'react'
import Container from 'react-bootstrap/Container'
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
          <div className='containerwebtv animate__animated animate__fadeInRight'>
            <div className='backBlue left '>
              <h1 >PLAYER</h1>
            </div>
            <div className='backBlue right '>
              <h1>CHAT</h1>
            </div>
          </div>

  </>);
  }
}

export default Webtv; 