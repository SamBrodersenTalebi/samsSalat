import React from 'react';
import sandwich from '../images/sandwichråvarer2.jpeg';

import { Col, Row, Container, Table } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    let sandwiches = [
      {
        navn: 'Kylling Bacon',
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Spicy Kylling',
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt, hjemmelavet chilisovs og jalepenos',
      },
      {
        navn: 'Kylling Haydari',
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Laks Feta',
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt og hjemmelavet pesto',
      },
      {
        navn: 'Æg rejer',
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Humus',
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt, gulerødder og hjemmelavet pesto',
      },
      {
        navn: 'Skinke Ost',
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Frikadelle',
        indhold:
          'Salat, tomat, løg, rucola, krydderurter, syltede agurker og rødkål',
      },
      {
        navn: 'Tunsalat',
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt og hjemmelavet pesto',
      },
      {
        navn: 'Falafel Haydari',
        indhold: 'Salat, tomat, agurk, løg, rucola, krydderurter og peberfrugt',
      },
      {
        navn: 'Salami',
        indhold:
          'Salat, tomat, agurk, løg, rucola, krydderurter, peberfrugt, revet gulerod, feta og hjemmelavet pesto',
      },
    ];
    let liSandwich = sandwiches.map((item, index) => {
      return (
        <tr key={index}>
          <td style={{ fontWeight: '500' }}>{item.navn}</td>
          <td style={{ width: '450px' }}>
            <i>{item.indhold}</i>
          </td>
        </tr>
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
                Prisen for en salat er <strong>10.95 kr per 100 gram </strong>{' '}
                <br />
                Prisen for en sandwich er <strong>50 kr</strong> <br />
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

          <Row className='align-items-center text-center menu-row'>
            <Col md={12} sm={12} className='sandwiches'>
              <Table striped bordered hover responsive='md'>
                <thead>
                  <tr>
                    <th>Sandwich</th>
                    <th>Indhold</th>
                  </tr>
                </thead>
                <tbody>{liSandwich}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Menu;
