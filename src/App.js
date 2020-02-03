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
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            {/* 
            The exact attribute specifies that the URL
            needs to be exactly like that for it to be rendered.
            */}  
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={AboutUs}/>
            <Route path="/menu" exact component={Contact}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
