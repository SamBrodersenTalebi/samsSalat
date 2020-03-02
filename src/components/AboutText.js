import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import { FiSmile } from "react-icons/fi";
import { IoMdRestaurant } from "react-icons/io";
import { IconContext } from "react-icons";
import aboutTextImg from './images/aboutText1.jpg';
import smileyKontrol from './images/smiley_kontrol.gif';

class AboutText extends React.Component{
    render(){
        let icon; 
        if(this.props.icon === "FiSmile"){
             icon = <FiSmile/>;
        }else{
             icon = <IoMdRestaurant/>;
        };
  
      if(this.props.icon === "FiSmile"){
          return(
          <Container>
              <Row className="align-center align-items-center box">
                  <Col md={6} sm={12}>
                    <a href="https://www.findsmiley.dk/540007" target="_blank"><img className="about-image" src={smileyKontrol}></img></a>
                  </Col>
                  <Col md={6} sm={12} className="border">
                  <h3>{this.props.overskrift}</h3>
                      <IconContext.Provider value={{ color: "#BAD127", size:"2em" }} >
                          <p>{icon}</p>
                      </IconContext.Provider>
                      <p>{this.props.text1}</p>
                      <p>{this.props.text2}</p>
                  </Col>
              </Row>
          </Container>
          );
      }else{
          return(
          <Container>
              <Row className="align-center align-items-center box">
                  <Col md={6} sm={12} className="border">
                      <h3>{this.props.overskrift}</h3>
                      <IconContext.Provider value={{ color: "#BAD127", size:"2em" }} >
                          <p>{icon}</p>
                      </IconContext.Provider>
                      <p>{this.props.text1}</p>
                      <p>{this.props.text2}</p>
                  </Col>
                  <Col md={6} sm={12}><img className="about-image" src={aboutTextImg}></img></Col>
              </Row>
          </Container>    
          );
      }
    }
}

export default AboutText;