import React from 'react';
import ImageCarousel from './ImageCarousel';
import TextSection from './textSection';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            "text":[
                {
                   "overskrift":"Lækre sandwich til enhver",
                   "icon":"sandwich",
                   "brødtext1": "Nullam auctor congue aliquet. In et blandit mauris. Interdum et malesuada fames ac ante ipsum.",
                   "brødtext2":"Mauris sollicitudin velit sit amet tellus posuere, non interdum felis tincidunt. Quisque non pharetra ipsum, id mollis quam. Nulla.",
                   "button": false
                },
                {
                    "overskrift":"Stor salatbar",
                    "icon":"salad",
                    "brødtext1": "Nullam auctor congue aliquet. In et blandit mauris. Interdum et malesuada fames ac ante ipsum.",
                    "brødtext2":"Mauris sollicitudin velit sit amet tellus posuere, non interdum felis tincidunt. Quisque non pharetra ipsum, id mollis quam. Nulla.",
                    "button": false
                },
                {
                    "overskrift":"Udforsk vores menu",
                    "icon":"menu",
                    "brødtext1": "Nullam auctor congue aliquet. In et blandit mauris. Interdum et malesuada fames ac ante ipsum.",
                    "brødtext2":"Mauris sollicitudin velit sit amet tellus posuere, non interdum felis tincidunt. Quisque non pharetra ipsum, id mollis quam. Nulla.",
                    "button": true
                }
            ],
            textSection:null
        };
    }


  render(){
    let i = 0;
    let textSection = this.state.text.map((object)=>{
        return(<TextSection overskrift = {this.state.text.overskrift} icon={this.state.text.icon} text1={this.state.text.brødtext1} text2= {this.state.text.brødtext2} button={this.state.text.button} key={i++}/>)
    });
    return (
        <div id="home-page">
            <ImageCarousel/>
            <div id ="textSection">
                {textSection}
            </div>
        </div>
      );
  }
}

export default Home;