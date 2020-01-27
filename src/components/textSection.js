import React from 'react';
import {Col, Row, Container } from 'react-bootstrap';
import { MdRestaurantMenu } from "react-icons/md";
import { GiTomato } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";

class TextSection extends React.Component{
  render(){
      let icon; 
      
      if(this.props.text.icon === "salad"){
          icon = GiTomato;
      } else if (this.props.text.icon ==="sandwich"){
          icon = GiSandwich;
      }else{
          icon = MdRestaurantMenu;
      };

    return (
        <Container>
            <Row className="align-center box">
                <Col>1of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row className="align-center box">
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
  }
}

export default TextSection;