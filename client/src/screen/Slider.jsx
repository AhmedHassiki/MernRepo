import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banniere from './banniere.png'
import office365 from './office365.png';
import win11 from './win11.png';


const Slider = () => {
  return (
    <div>
        <Carousel style={{marginBottom : "20px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banniere}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={office365}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={win11}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider