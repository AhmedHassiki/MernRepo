import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{background :"rgb(43, 43, 43)", color:"white", marginTop:'50px'}}>
      <Container style={{paddingTop :"60px", paddingBottom :"12px"}} >
        <Row md={3} xs={2}>
          <Col>
          <h4 style={{color :"white" , marginTop:'50px'}}><u>Information</u></h4>
          <Link to='/quisommesnous' style={{color :"white" , textDecoration: 'none'}}> Qui Sommes Nous ?</Link>
          <br />
          <Link to='/mention' style={{color :"white", textDecoration: 'none'}}> Mention Légale </Link>
          <br />
          <Link to='/politique' style={{color :"white", textDecoration: 'none'}}> Politique de remboursement </Link>
          </Col>
          <Col>
          <h4 style={{color :"white" , marginTop:'50px'}}><u>Réseaux Sociaux</u></h4>
          <Link to='https://www.facebook.com/Hassiki.services' style={{color :"white", textDecoration: 'none'}}> 
          <i className="fab fa-facebook-f"></i>  &nbsp; Facebook </Link>
          <br />
          <Link to='https://www.facebook.com/Hassiki.services' style={{color :"white", textDecoration: 'none'}}> 
          <i className="fab fa-instagram"></i>  &nbsp; Instagram</Link>
          </Col>
          <Col>
          <h4 style={{color :"white" , marginTop:'50px'}}><u>Nous Contacter</u></h4>
          <p><i className="fas fa-envelope"></i>  &nbsp; contact@authentikey.tn</p>
          <p><i className="fas fa-mobile-alt"></i> &nbsp; 00216 93 728 728</p>
          <p><i className="fas fa-map-marker-alt"></i> &nbsp; Immeuble du lac 1</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer