import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

class App extends Component {
 render() {
  return (
    
  <BrowserRouter>
    <div className="App">
        <Navbar>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="portfolio-nav">
              <Link to="/" className="nav-item">Projects</Link>
              <Link to="/articles" className="nav-item">Articles</Link>
              <Link to="about" className="nav-item">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </Switch>
    </div>
  </BrowserRouter>
   
  );
 }
}

export default App;
