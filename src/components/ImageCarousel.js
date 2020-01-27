import React from 'react';
import { Carousel } from 'react-bootstrap';
import forside1 from './images/forside1.jpg';


class ImageCarousel extends React.Component{
  render(){
    return (
    <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={forside1}
              alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
              className="d-block w-100"
              src={forside1}
              alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>
      );
  }
}

export default ImageCarousel;