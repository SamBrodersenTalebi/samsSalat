import React from 'react';
import { Carousel } from 'react-bootstrap';
import forside1 from '../images/sandwichforside.jpg';
import forside3 from '../images/salatbar1.jpg';

class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className='carousel' src={forside1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousel' src={forside3} alt='Third slide' />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ImageCarousel;
