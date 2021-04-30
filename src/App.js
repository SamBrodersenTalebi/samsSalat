import React from 'react';
//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
/*
BrowserRouter: renamed as Router, gives ability to use routing
Route: renders componend based on URL
Switch: as soon as one URL matches it stops searching through the routes
*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutPage/AboutUs';
import Menu from './components/MenuPage/Menu';
import Home from './components/FrontPage/Home';
import Footer from './components/Footer';
import swal from 'sweetalert';

class App extends React.Component {
  componentDidMount() {
    swal({
      title: 'Sams Salat holder lukket den 1. maj',
      text: 'Vi ønsker jer en god weekend',
      icon: 'success',
      button: 'OK',
      //dangerMode: true,
    });
  }
  
  render() {
    return (
      <Router>
        <div id='App'>
          <Navigation />
          <Switch>
            {/* 
            The exact attribute specifies that the URL
            needs to be exactly like that for it to be rendered.
            */}
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={AboutUs} />
            <Route path='/menu' exact component={Menu} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
