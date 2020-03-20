import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import {Navbar, Nav} from 'react-bootstrap';


class Navigation extends React.Component{
    render(){
        return(
          <Navbar id="nav-color" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <Link to="/" style={{paddingLeft:20}}>
                <img src={logo} alt="Sams Salat Logo"></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav style={{paddingRight:20}}>
                <Nav.Link ><Link to="/">Forside</Link></Nav.Link>
                <Nav.Link><Link to="/about">Om Os</Link></Nav.Link>
                <Nav.Link><Link to="/menu">Menu</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Navigation;
