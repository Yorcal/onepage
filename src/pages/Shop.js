import React from 'react'
import '../styles/shop.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Shop extends React.Component {
    constructor(){
      super()
      this.state = { 
         
      }
    }
    render(){
        return(<>
              <div className="Background">
                <Container>
                  <Row>
                    <h1>SHOP</h1>
                  </Row>
                  <Row>
                    <p>lorem ipsum patatitata blabla ffsfsdfefessefsfefefgegegsgseggessegesgsegss sf s fd dsfq fe fesf es fes fs fe fs fs fef esf ef z fzef zf ze fz fz ef zef z fez ef e fezf ze fez fez fez fez fez </p>
                  </Row>
                  <Button variant="primary">GO SHOPPING</Button>
                </Container>
              </div>
  </>);
  }
}

export default Shop; 