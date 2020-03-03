import React from 'react';
import {Col, Row, Container, Button } from 'react-bootstrap';
import { MdRestaurantMenu } from "react-icons/md";
import { GiTomato } from "react-icons/gi";
import { GiSandwich } from "react-icons/gi";
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';
import ægOgRejser from './images/ægOgRejer.jpg';
import menu from './images/TjekMenu.jpg';
import salatBar from './images/salatbar.jpg';

class TextSection extends React.Component{
  render(){
      let icon; 
      let image;
      if(this.props.icon === "salad"){
           icon = <GiTomato/>;
           image = salatBar;
      } else if (this.props.icon ==="sandwich"){
           icon = <GiSandwich/>;
           image = ægOgRejser;
      }else{
           icon = <MdRestaurantMenu/>;
           image = menu;
      };

    if(this.props.button){
        return(
            <Row className="align-center align-items-center box">
                <Col md={6} xs={12} className="image-box">
                    <img className="home-image" src={image}></img>
                </Col>
                <Col md={6} xs={12} className="infoDiv">
                <h3>{this.props.overskrift}</h3>
                    <IconContext.Provider value={{ color: "#BAD127", size:"2em" }} >
                        <p>{icon}</p>
                    </IconContext.Provider>
                    <p>{this.props.text1}</p>
                    <p>{this.props.text2}</p>
                    <Link to="/menu">
                        <Button size="sm" variant="success">    
                            Menu
                        </Button>
                    </Link>  
                </Col>
            </Row>
        );
    }else{
        return(
            <Row className="align-center align-items-center box">
                <Col md={6} xs={12} className="infoDiv">
                    <h3>{this.props.overskrift}</h3>
                    <IconContext.Provider value={{ color: "#BAD127", size:"2em" }} >
                        <p>{icon}</p>
                    </IconContext.Provider>
                    <p>{this.props.text1}</p>
                    <p>{this.props.text2}</p>
                </Col>
                <Col md={6} xs={12} className="image-box"><img className="home-image" src={image}></img></Col>
            </Row>
    
        );
    }
  }
}

export default TextSection;