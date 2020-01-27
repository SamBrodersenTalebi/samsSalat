import React from 'react';
import {Link} from 'react-router-dom';


class Navigation extends React.Component{
    render(){
        return(
            
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              
              <a className="navbar-brand" href="#"><img></img></a>
        
             
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
        
             
              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link">Forside</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Om Os</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Kontakt</a>
                  </li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Navigation;