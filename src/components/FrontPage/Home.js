import React from 'react';
import ImageCarousel from './ImageCarousel';
import TextSection from './textSection';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import '../component.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        {
          overskrift: 'Lækre hjemmelavede sandwich',
          icon: 'sandwich',
          brødtext1:
            'Sams Salat har 12 forskellige sandwich lige fra laks til frikadelle eller vegetariske sandwich. Du bestemmer selv, hvilket brød, som du ønsker til din sandwich.',
          brødtext2:
            'Vi bruger altid friske råvarer bl.a. hjemmelavet dressing og pesto',
          button: false,
          image: '',
        },
        {
          overskrift: 'Udforsk vores menu',
          icon: 'menu',
          brødtext1:
            'Om du vælger salat eller sandwich, så bestemmer du selv, hvilke ingredienser, du vil have i.',
          brødtext2:
            'Udbuddet er varierende i salatbaren, om det er sommer, efterår, vinter eller forår, så bruger vi altid årtidens grøntsager.',
          button: true,
          image: '',
        },
        {
          overskrift: 'Stor salatbar',
          icon: 'salad',
          brødtext1:
            'Sams Salat laver lækker og sund mad. Salatbuffeten er nemt, sundt og hurtigt, man blander selv sin favorit salat.',
          brødtext2:
            'Når den er færdig bliver den vejet og man betaler efter vægt.',
          button: false,
          image: '',
        },
      ],
    };
  }

  render() {
    let i = 0;
    let textSection = this.state.text.map((object) => {
      return (
        <TextSection
          overskrift={object.overskrift}
          icon={object.icon}
          text1={object.brødtext1}
          text2={object.brødtext2}
          button={object.button}
          key={i++}
        />
      );
    });
    return (
      <div id='home-page'>
        <ImageCarousel />
        <div id='textSection'>
          <Container>
            {textSection}
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
