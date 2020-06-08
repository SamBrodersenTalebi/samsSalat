import React from 'react';
//import sandwich from './images/sandwich.jpg';
import salad from './images/salad.JPG';
import { Col, Row, Container } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    let sandwiches = [
      'Kylling/Bacon',
      'Spicy Kylling',
      'Kylling/Humus',
      'Laks med feta',
      'Æg og rejer',
      'Frikadelle',
      'Skinke med ost',
      'Hjemmelavet tunsalat',
      'Salami',
      'Falafel/Feta',
      'Hjemmelavet humus',
      'Mozzarella',
    ];
    let liSandwich = sandwiches.map((item) => {
      return (
        <li key={item}>
          <a>{item}</a>
        </li>
      );
    });
    return (
      <div id='menu'>
        <div className='background-menu' id='menu-background-image'></div>
        <Container id='menu-container'>
          <Row className='align-items-center text-center menu-row'>
            <Col md={6} sm={12} className='menu-image-col'>
              <img className='menu-image' alt='salad' src={salad}></img>
            </Col>
            <Col md={6} sm={12}>
              <h3>Salatbaren</h3>
              <p className='menu-text'>
                Det er nemt, sundt og hurtigt at blande sin egen salat. Det er
                op til dig selv at sammensætte din helt egen lækre salat. <br />{' '}
                <br />
                Du kan enten spise den her hos os eller tage den med på farten.
                I vores salatbuffet finder du et stort udvalg af årstiden
                grøntsager/salater og hjemmelavet delikatesser såsom humus,
                tzatziki, oliven, fetadip mm.
              </p>
            </Col>
            <Col md={6} sm={12} className='menu-img-mobile'>
              <img className='gulerødsalat' alt='salad' src={salad}></img>
            </Col>
          </Row>

          <Row className='align-items-center text-center menu-row'>
            <Col md={6} sm={12}>
              <h3>Om vores sandwich</h3>
              <p className='menu-text'>
                <i>
                  Alle vores sandwich indeholder salat, tomat, agurk,
                  peberfrugt, rucola, krydderurter og rødløg. Men du kan
                  naturligvis fravælge ingredienser.
                </i>{' '}
                <br /> <br />
                Store bestillinger modtages gerne, hvis I mangler sandwich eller
                salatbuffet til et stort arrangement står vi gerne til rådighed.{' '}
                <br /> <br />
                <strong>Ring og bestil på tlf 75 61 04 04.</strong>
              </p>
            </Col>

            <Col md={6} sm={12} className='sandwiches'>
              <ol class='rounded-list'>{liSandwich}</ol>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Menu;
