import React from 'react'
import "../styles/press.css"
import Row from 'react-bootstrap/Row'


class Press extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
          <Row>
              <div className='boxpress animate__animated animate__fadeInRight'>
                <h2 >Charte Graphique</h2>
              </div>

              <div className='boxpress animate__animated animate__fadeInRight'>
                <h2 >LFL 2020</h2>
              </div>

              <div className='boxpress animate__animated animate__fadeInRight'>
                <h2 >Katowice Minor 2019</h2>
              </div>

              <div className='boxpress animate__animated animate__fadeInRight'>
                <h2 >Lyon Esport 2019</h2>
              </div>

              <div className='boxpress animate__animated animate__fadeInRight'>
                <h2 >LOL Open Tour 2019</h2>
              </div>
          </Row>
  </>);
  }
}

export default Press; 