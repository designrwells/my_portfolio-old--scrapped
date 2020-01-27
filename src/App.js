import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navbar">
          <div className="navbar-sub">

            <Link to="/" className="nav-item">Projects</Link>
            <Link to="/articles" className="nav-item">Articles</Link>
            <Link to="about" className="nav-item">About</Link>
          
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
