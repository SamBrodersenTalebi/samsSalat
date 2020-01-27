import React from 'react';
//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
/*
BrowserRouter: renamed as Router, gives ability to use routing
Route: renders componend based on URL
Switch: as soon as one URL matches it stops searching through the routes
*/
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* 
          The exact attribute specifies that the URL
          needs to be exactly like that for it to be rendered.
          */}  
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
