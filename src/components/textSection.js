import React from 'react';
import {Col, Row, Container } from 'react-bootstrap';
import { MdRestaurantMenu } from "react-icons/md";
import { GiTomato } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";
import { IconContext } from "react-icons";

class TextSection extends React.Component{
  render(){
      let icon; 
      if(this.props.icon === "salad"){
           icon = <GiTomato/>;
      } else if (this.props.icon ==="sandwich"){
           icon = <GiSandwich/>;
      }else{
           icon = <MdRestaurantMenu/>;
      };

    return (
      
        <Container>
            <Row className="align-center box">
                <Col>
                    <h3>{this.props.overskrift}</h3>
                    <IconContext.Provider value={{ color: "green", size:"2em" }} >
                        <p>{icon}</p>
                    </IconContext.Provider>
                    <p>{this.props.text1}</p>
                    <p>{this.props.text2}</p>
                </Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    );
  }
}

export default TextSection;