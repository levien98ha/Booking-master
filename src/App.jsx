import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Admin from './pages/Admin';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import { connect } from 'tls';
import Contact from './components/Contact';
>>>>>>> pull develop

class App extends Component {
  render(){
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/rooms" component={Rooms}/>
      <Route exact path = "/rooms/:id" component={SingleRoom} /> 
      <Route exact path = "/about-us" component={About}/>
<<<<<<< HEAD
      <Route exact path = "/admin" component={Admin}/>
=======
      <Route exact path = "/contact-us" component={Contact}/>
>>>>>>> pull develop
      <Route component={Error}/>
    </Switch>
    </Router>
  );
}}

export default App;
