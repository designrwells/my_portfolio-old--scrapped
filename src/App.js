import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import About from './components/About.js';
import './App.css';

class App extends Component {
 render() {
  return (
    
  <BrowserRouter>
    <div className="App">

        <Navbar expand="lg" bg="dark" sticky="top">
          <Navbar.Brand href="#home">React-Bootstrap Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">

            <Nav>
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
