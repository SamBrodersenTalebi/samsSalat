import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import { FiSmile } from "react-icons/fi";
import { IoMdRestaurant } from "react-icons/io";
import { IconContext } from "react-icons";

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
              <Row className="align-center box">
                  <Col md={6} xs={12}>
                      1 of 2
                  </Col>
                  <Col md={6} xs={12} className="border">
                  <h3>{this.props.overskrift}</h3>
                      <IconContext.Provider value={{ color: "green", size:"2em" }} >
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
              <Row className="align-center box">
                  <Col md={6} xs={12} className="border">
                      <h3>{this.props.overskrift}</h3>
                      <IconContext.Provider value={{ color: "green", size:"2em" }} >
                          <p>{icon}</p>
                      </IconContext.Provider>
                      <p>{this.props.text1}</p>
                      <p>{this.props.text2}</p>
                  </Col>
                  <Col md={6} xs={12}>2 of 2</Col>
              </Row>
          </Container>    
          );
      }
    }
}

export default AboutText;