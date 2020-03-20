import React from 'react';
import sandwich from './images/sandwich.jpg';
import salad from './images/salad.JPG';
import {Col, Row, Container, Button } from 'react-bootstrap';

class Menu extends React.Component{

  render(){
    let sandwiches = ["Kylling/Bacon", "Spicy Kylling", "Kylling/Humus", "Laks med feta",  "Æg og rejer", "Frikadelle", "Skinke med ost", "Hjemmelavet tunsalat", "Salami","Falafel/Feta", "Hjemmelavet humus", "Mozzarella"];
    let liSandwich = sandwiches.map(item =>{
      return(<li key={item}><a>{item}</a></li>)
    })
    return (
      <div id="menu">
        <div id="menu-background-image">

        </div>
        <Container id="menu-container">
        <Row className="align-items-center text-center menu-row">
          <Col md={6} sm={12} className="menu-image-col">
            <img className="menu-image" alt="salad image" src={salad}></img>
          </Col>

          <Col md={6} sm={12}>
            <h3>Salatbaren</h3>
            <p className="menu-text">
              Salatbaren er meget lækker Nunc vitae erat mi. Curabitur luctus, tortor in porttitor semper, lectus neque pulvinar turpis, sit amet aliquet ante felis a mi. Etiam vitae odio eros. 
              Curabitur rhoncus leo erat, eget mollis leo bibendum eget. Vivamus consectetur ornare convallis. Proin elementum orci vel turpis blandit auctor.
            </p>
          </Col>

          <Col sm={12} style={{display:"none"}} className="menu-mobile">
  
          </Col>
        </Row>

        <Row className="align-items-center text-center menu-row">

          <Col md={6} sm={12}>
            <h3>Om vores sandwich</h3>
            <p className="menu-text"> 
              Alle vores sanwich indeholder salat, tomat, agurk, peberfrugt, rucola, krydderurter og rødløg. Det bruges altid friske råvarer osv.
            </p>
          </Col>

          <Col md={6} sm={12} className="menu-image-col">
            <img className="menu-image" alt ="sandwich image" src={sandwich}>
            </img>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={{ span: 6, offset: 0 }}>
            <ol class="rounded-list">
              {liSandwich}
            </ol>
          </Col>
        </Row>
        
        </Container>
      </div>
      
      );
  }
  
}

export default Menu;