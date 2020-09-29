import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiSmile } from 'react-icons/fi';
import { IoMdRestaurant } from 'react-icons/io';
import { IconContext } from 'react-icons';

class AboutText extends React.Component {
  render() {
    let icon;
    if (this.props.icon === 'FiSmile') {
      icon = <FiSmile />;
    } else {
      icon = <IoMdRestaurant />;
    }

    if (this.props.icon === 'FiSmile') {
      return (
        <Row className='align-center align-items-center'>
          <Col md={12} lg={5}>
            <a
              href='https://www.findsmiley.dk/540007'
              className='anchor-smiley'
            >
              <div className='about-image-smiley'></div>
            </a>
          </Col>

          <Col md={12} lg={{ span: 5, offset: 2 }} className='infoDiv'>
            <h3>{this.props.overskrift}</h3>
            <IconContext.Provider value={{ color: '#BAD127', size: '2em' }}>
              <p>{icon}</p>
            </IconContext.Provider>
            <p>{this.props.text1}</p>
            <p>
              {this.props.text2}{' '}
              <a
                className='samsArtikel'
                href='https://www.findsmiley.dk/540007'
              >
                her
              </a>
            </p>
          </Col>

          <Col
            md={12}
            className='about-image-mobile'
            style={{ display: 'none' }}
          >
            <a
              href='https://www.findsmiley.dk/540007'
              className='anchor-smiley'
            >
              <div className='about-image-smiley-mobile'></div>
            </a>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className='align-center align-items-center'>
          <Col md={12} lg={5} className='infoDiv'>
            <h3>{this.props.overskrift}</h3>
            <IconContext.Provider value={{ color: '#BAD127', size: '2em' }}>
              <p>{icon}</p>
            </IconContext.Provider>
            <p>{this.props.text1}</p>
            <p>
              {this.props.text2}:{' '}
              <a
                className='samsArtikel'
                href='https://hsfo.dk/artikel/birgit-var-med-til-at-bygge-storeb%C3%A6ltsbroen-nu-hitter-hun-med-bland-selv-salat-i-horsens'
                target='_blank'
                rel='noopener noreferrer'
              >
                Læs
              </a>
            </p>
          </Col>
          <Col md={12} lg={{ span: 5, offset: 2 }}>
            <div className='about-image-salad box-image'></div>
          </Col>
        </Row>
      );
    }
  }
}

export default AboutText;
