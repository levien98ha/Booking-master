import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import { connect } from 'tls';

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
      <Route component={Error}/>
    </Switch>
    </Router>
  );
}}

export default App;
