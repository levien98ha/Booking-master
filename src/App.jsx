import React, {Component} from 'react';
import './App.css';
import './App.scss'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Admin from './pages/Admin';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import About from './pages/About';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// import { connect } from 'react-redux';
import Contact from './components/Contact';
import Test from './pages/Test'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'

class App extends Component {
  render(){
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/test" component={Test}/>
      <Route exact path = "/rooms" component={Rooms}/>
      <Route exact path = "/rooms/:id" render={({match}) => (
          <SingleRoom
            id={match.params.id}
          />  )}/>
      <Route exact path = "/blogs" component={Blog}/>
      <Route exact path = "/blogs/:id" render={({match}) => (
          <SingleBlog
            id={match.params.id}
          />  )}/>
      <Route exact path = "/about-us" component={About}/>
      <Route exact path = "/admin" component={Admin}/>
      <Route exact path = "/contact-us" component={Contact}/>
      <Route component={Error}/>
    </Switch>
    </Router>
  );
}}

export default App;
