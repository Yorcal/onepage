import React from 'react'
import logoVolt from '../images/Logo_Volt.png'
import {NavLink} from 'react-router-dom';
import '../styles/darkintro.css'

class DarkIntro extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    changeClass() {
        document.querySelector('button').classList.add('animate__animated','animate__rotateOut');
        setTimeout(function(){
            window.location.href = '/news';
        }, 1000);
        
    }
    render(){
        return(<>
        <div className='Intro'>
            <button className='transparent' onClick={() => this.changeClass()}>
                <img className="App-logo logoIntro" src={logoVolt} alt='VoltLogo'></img>
            </button>
        </div>
  </>);
  }
}

export default DarkIntro; 