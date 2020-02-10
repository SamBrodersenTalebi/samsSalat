import React from 'react';
import MapComponent from './MapComponent.js';
import AboutText from './AboutText.js';

class AboutUs extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      "text":[
        {
          "overskrift": "Om Sams Salat",
          "text1":"Sams Salat er kvalitetsbevidst og vi holder hygiejnen høj.Derfor skal man også spritte sine hænder af før ta' selv.",
          "text2": "Vi stræber efter kun at bruge de bedste råvarer. Har du forslag til hvordan vi kan forbedre os er du velkommen til at sende en mail.",
          "image":"",
          "icon":"IoMdRestaurant"
        },
        {
          "overskrift":"Se kontrol rapport",
          "text1":"adsadsa a dsa dsad asd sa dsa a dsa",
          "text2":"asda",
          "image":"",
          "icon":"FiSmile" 
        }
      ]
    }
  }
  render(){
    let i = 0;
    let text = this.state.text.map((object)=>{
        return(<AboutText overskrift = {object.overskrift} icon={object.icon} text1={object.text1} text2= {object.text2} key={i++}/>)
    });

    return (
        <div>
            <div className="about-text">
                {text}
            </div>
            <MapComponent/>
        </div>
      );
  }
}

export default AboutUs;