import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'

class Navigation extends React.Component{
    render(){
        return(
            
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              {/* Brand */}
              <a className="navbar-brand" href="#">
                  <Link to="/">
                    <img src={logo} alt="Sams Salat Logo"></img>
                  </Link>
              </a>
        
             {/* collapsing button */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
        
             {/* Links */}
              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <Link to="/">
                    <li className="nav-item">
                        <a className="nav-link">Forside</a>
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="nav-item">
                        <a className="nav-link">Om Os</a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="nav-item">
                        <a className="nav-link">Kontakt</a>
                    </li>
                  </Link>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Navigation;