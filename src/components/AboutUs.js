import React from 'react';
import MapComponent from './MapComponent.js';
import AboutText from './AboutText.js';
import { Container } from 'react-bootstrap';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [
        {
          overskrift: 'Om Sams Salat',
          text1:
            'Vi stræber efter kun at bruge de bedste råvarer. Har du forslag til hvordan vi kan forbedre os er du velkommen til at sende en mail.',
          text2:
            'Find mere information om Sams Salat ved at læse denne artikel',
          image: '',
          icon: 'IoMdRestaurant'
        },
        {
          overskrift: 'Se kontrol rapport',
          text1:
            "Sams Salat er kvalitetsbevidst og vi holder hygiejnen høj. Derfor skal man også spritte sine hænder af før ta' selv.",
          text2:
            'For mere information kan du tjekke vores fødevarekontrol rapport',
          image: '',
          icon: 'FiSmile'
        }
      ]
    };
  }
  render() {
    let i = 0;
    let text = this.state.text.map(object => {
      return (
        <AboutText
          overskrift={object.overskrift}
          icon={object.icon}
          text1={object.text1}
          text2={object.text2}
          key={i++}
        />
      );
    });

    return (
      <div>
        <Container>{text}</Container>
        <MapComponent />
      </div>
    );
  }
}

export default AboutUs;
