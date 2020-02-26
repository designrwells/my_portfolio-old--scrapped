import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines';
import PortNav from './PortNav';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import waveOne from './images/wave1-01.png';
import waveTwo from './images/wave2-01.png';
import waveThree from './images/wave3-01.png';
import waveFour from './images/wave4-01.png';
import bottle from './images/bottle.svg';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">

          <PortNav/>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >

                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects}/>
                    <Route path="/skills" component={Skills} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                  </Switch>

                </Transition>
              </TransitionGroup>
            )
          }}/>


          <img src={waveFour} className="oceanwave-four" />
          <img src={waveThree} className="oceanwave-three" />
          <img src={waveTwo} className="oceanwave-two " />
          <div className="bottle"><a href="/" alt="My Resume"><img src={bottle} /></a></div>
          <img src={waveOne} className="oceanwave-one" />

        </div>
      </BrowserRouter>
    )
  }
}
  
  export default App;
