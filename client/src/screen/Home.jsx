import React from 'react'
import TheProductList from '../Components/TheProductList'
import Slider from './Slider'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <>
        <Slider />
          <Container style={{padding:"5px"}}>
            <Row>
              <Col style={{margin:"40px"}}>
                <h4>LIVRAISON</h4>
                <h6>Livraison rapide sur toute la Tunisie ou instantané par mail</h6>
              </Col>
              <Col style={{margin:"40px"}}>
                <h4>SERVICE GARANTIE</h4>
                <h6>Tous nos produits sont satisfaits ou remboursés.</h6>
              </Col>
              <Col style={{margin:"40px"}}>
                <h4>SUPPORT ONLINE</h4>
                <h6>service client 7/7 via notre page Facebook ou par téléphone au 93728728</h6>
                </Col>
            </Row>
          </Container>
        <TheProductList />
    </>
  )
}

export default Home