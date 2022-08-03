import React from 'react';
import sandwich from '../images/sandwichråvarer2.jpeg';
import kaffe from '../images/kaffe.jpg';
// import kaffepriser from '../images/kaffepriser.jpg';
import kb from '../images/sandwiches web/kb.png';
import spicy from '../images/sandwiches web/spicyk.png';
import kh from '../images/sandwiches web/kh.png';
import laks from '../images/sandwiches web/laks.png';
import egg from '../images/sandwiches web/eggshrimp.png';
import humus from '../images/sandwiches web/humus.png';
import skinke from '../images/sandwiches web/skinkeost.png';
import frikadelle from '../images/sandwiches web/frikadelle.png';
import tun from '../images/sandwiches web/tun.png';
import falafel from '../images/sandwiches web/falafel.png';
import salami from '../images/sandwiches web/salami.png';
import { Col, Row, Container, Card } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    let sandwiches = [
      {
        navn: 'Kylling Bacon',
        image: kb,
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Spicy Kylling',
        image: spicy,
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt, hjemmelavet chilisovs og jalepenos',
      },
      {
        navn: 'Kylling Haydari',
        image: kh,
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Laks Feta',
        image: laks,
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt og hjemmelavet pesto',
      },
      {
        navn: 'Æg rejer',
        image: egg,
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Humus',
        image: humus,
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt, gulerødder, feta og hjemmelavet pesto',
      },
      {
        navn: 'Skinke Ost',
        image: skinke,
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Frikadelle',
        image: frikadelle,
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt syltede agurker og rødkål',
      },
      {
        navn: 'Tunsalat',
        image: tun,
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Falafel Haydari',
        image: falafel,
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Salami',
        image: salami,
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt og hjemmelavet pesto',
      },
    ];
    let liSandwich = sandwiches.map((item, index) => {
      const { navn, indhold, image } = item;
      let size = 4;
      if (index === 10 || index === 9) {
        size = 6;
      }
      return (
        <Col md={size} sm={12} key={index}>
          <Card className='card-sandwich'>
            <Card.Img
              variant='top'
              src={image}
              style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '310px',
                margin: 'auto',
              }}
            />
            <Card.Body>
              <Card.Title>{navn}</Card.Title>
              <Card.Text>{indhold}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <div id='menu'>
        <Container id='menu-container'>
          <Row className='align-items-center text-center menu-row'>
            <Col md={6} sm={12} className='menu-image-col'>
              <img
                className='menu-image'
                alt='billede af salat'
                src={sandwich}
              ></img>
            </Col>
            <Col md={6} sm={12}>
              <h3>Salat og Sandwich</h3>
              <p className='menu-text'>
                Prisen for en salat er <strong>13.95 kr per 100 gram </strong>{' '}
                <br />
                
                Prisen for en sandwich er fra <strong>62 kreg</strong> <br />

                <br />
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
              <img
                className='gulerødsalat'
                alt='billede af salat'
                src={sandwich}
              ></img>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>

              <div className="kaffe-div-container kaffe-text">
                <h3>Kaffe</h3>
                <p className='menu-text'>
                  Nyd din friskmalet kaffe ved Sams Salat eller tag den med dig på farten. <br /> <br />
                  Vælg mellem 5 varianter – americano, kakao, cafe latté, cappuccino eller espresso.
                </p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="kaffe-div-container kaffe-img">
                <img
                  className='menu-image img-kaffe'
                  alt='billede af salat'
                  src={kaffe}
                ></img>
              </div>

            </Col>
          </Row>
          <Row>{liSandwich}</Row>
        </Container>
      </div>
    );
  }
}

export default Menu;
