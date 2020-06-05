import React from 'react';
import { Carousel } from 'react-bootstrap';
import forside1 from './images/forside1.jpg';
import forside2 from './images/forside2.jpg';

class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className='carousel' src={forside1} alt='First slide' />
          <Carousel.Caption className='carouselbox'>
            <h3 className='carousel-header'>Velkommen til Sams Salat</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='carousel' src={forside2} alt='Second slide' />
          <Carousel.Caption className='carouselbox'>
            <h3 className='carousel-header'>Find os på Torvet</h3>
            <p className='carousel-text'>Lækkerier i hverdagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ImageCarousel;
