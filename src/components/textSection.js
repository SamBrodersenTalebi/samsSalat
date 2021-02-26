import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { MdRestaurantMenu } from 'react-icons/md';
import { GiTomato } from 'react-icons/gi';
import { GiSandwich } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import ægOgRejser from './images/ægOgRejer.jpg';
import menu from './images/TjekMenu.jpg';
import salatBar from './images/salatbar.jpg';

class TextSection extends React.Component {
  render() {
    let icon;
    let image;
    if (this.props.icon === 'salad') {
      icon = <GiTomato />;
      image = salatBar;
    } else if (this.props.icon === 'sandwich') {
      icon = <GiSandwich />;
      image = ægOgRejser;
    } else {
      icon = <MdRestaurantMenu />;
      image = menu;
    }

    if (this.props.button) {
      return (
        <Row className='align-center align-items-center box'>
          <Col
            md={12}
            style={{ display: 'none' }}
            className='textSection-image1'
          ></Col>

          <Col lg={6} md={12} className='image-box'>
            <img className='home-image' src={image} alt='home'></img>
          </Col>

          <Col lg={6} md={12} className='infoDiv textSection button-box'>
            <h3>{this.props.overskrift}</h3>
            <IconContext.Provider value={{ color: '#BAD127', size: '2em' }}>
              <p>{icon}</p>
            </IconContext.Provider>
            <p>{this.props.text1}</p>
            <p>{this.props.text2}</p>
            <Link to='/menu'>
              <Button
                size='sm'
                variant='success'
                style={{ backgroundColor: '#BAD127', border: 0 }}
              >
                Menu
              </Button>
            </Link>
          </Col>

          <Col
            md={12}
            style={{ display: 'none' }}
            className='textSection-image2'
          ></Col>
        </Row>
      );
    } else {
      return (
        <Row className='align-center align-items-center box'>
          <Col lg={6} md={12} className='infoDiv textSection'>
            <h3>{this.props.overskrift}</h3>
            <IconContext.Provider value={{ color: '#BAD127', size: '2em' }}>
              <p>{icon}</p>
            </IconContext.Provider>
            <p>{this.props.text1}</p>
            <p>{this.props.text2}</p>
          </Col>

          <Col lg={6} md={12} className='image-box'>
            <img className='home-image' src={image} alt='home'></img>
          </Col>
        </Row>
      );
    }
  }
}

export default TextSection;
