import react from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FB from '../images/logo_fb.png';
import IG from '../images/logo_instagram.png';
import Twitter from '../images/logo_twitter.png'
import "../styles/footer.css"

function Footer(){
    return(
        <footer>
            <Row className=''>
                <Col>
                    <img className="logo_rs" src={FB} alt=''></img>
                    <img className="logo_rs" src={IG} alt=''></img>
                    <img className="logo_rs" src={Twitter} alt=''></img>
                </Col>
                <Col>
                    <p className='legale'>Mentions Légales • CGU • Données Personnelles •<span className='blue'> © VOLT 2021</span></p>
                </Col>
            </Row>
        </footer>


    );

}

export default Footer;