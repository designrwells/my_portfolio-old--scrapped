import React, { Component } from 'react';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Navbar from 'react-bootstrap/Navbar'
import { play, exit } from './timelines';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import waves from './images/waves.svg';
import bottle from './images/bottle.svg';



class App extends Component {
 

  render() {
    return (
  
      <BrowserRouter>
        <div className="app">

          <Navbar className="justify-content-end">
            <NavLink strict exact to='/' key='/'>Home</NavLink>
            <NavLink strict exact to='/about' key='/'>About</NavLink>
            <NavLink strict exact to='/skills' key='/'>Skills</NavLink>
            <NavLink strict exact to='/projects' key='/'>Projects</NavLink>
            <NavLink strict exact to='/contact' key='/'>Contact</NavLink>
          </Navbar>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(pathname, node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >

                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                  </Switch>

                </Transition>
              </TransitionGroup>
            )
          }}/>
          
          <svg className="oceanwave" id="oceanwave-five" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2990.97 236.52">
            <path d="M2991,133.65V53.22c-11.52,4.38-23.25,7.06-33.47,6q-13.93-2.73-25.22-13.77L2930,46.69a150.32,150.32,0,0,1-20.51,9.85,123.09,123.09,0,0,1-63.81,7.16,146.48,146.48,0,0,1-27.83-7.12c-31.56-13.83-45.33-24.46-45.3-24.65l0,.23-.18-.14c-.74.38-1.38.7-2,1-7,3.82-14,7.66-21.08,11.45A182.66,182.66,0,0,1,2708.46,61c-16,4.16-32.19,5-48.45,1.55-18.43-4-36.5-9.22-54.46-14.88-29.63-12.64-43.4-20.29-49.32-24l-1.08-.83a8.64,8.64,0,0,0-2.81-1.85.44.44,0,0,0-.1-.08l.05.06h-.05v-.05l0,0-.1,0c-2.11,1.6-4.33,3.21-6.53,4.9-14.05,9.94-47.62,31.7-74.68,33.53-1,0-2,0-3,0a46.5,46.5,0,0,1-6.27-.25h0a43.07,43.07,0,0,1-17.48-5.93c-3.91-2.34-7.86-4.58-11.91-6.93-2.32,1.27-4.4,2.46-6.52,3.57s-4.27,2.17-6.44,3.18c-24.57,11.5-50.2,15-76.9,10A147.53,147.53,0,0,1,2316,55.44c-21.25-9.48-34-17.32-39.47-21.09l-3.23-2.49c-1.42.84-2.73,1.6-4,2.38-12.65,7.54-25.57,14.55-39.29,20-15,5.94-30.43,9.75-46.59,10.25-13.87.43-27.39-2-40.74-5.5-12-3.18-23.67-7.26-35.42-11.18-31.42-13.4-45.12-21.22-50.53-24.72l-2.84-2.18-.14.09-.13-.11.1.13-.1.07v-.2s-8.35,6.12-20.79,13.48a256.23,256.23,0,0,1-34.51,17.17c-11.5,4.5-23.39,7.71-34.15,7.9a44.32,44.32,0,0,1-4.5-.22q-14.07-2.67-25.34-13.77l-.12.06-.08-.08-2.25,1.27a149.64,149.64,0,0,1-20.5,9.85,125.37,125.37,0,0,1-35.3,8.19l-.44,0c-1.2.09-2.39.17-3.59.23l-.89,0c-1.25,0-2.51.08-3.77.09s-2.47,0-3.71,0l-1,0c-1.21,0-2.42-.09-3.64-.16l-.85-.06c-1.31-.09-2.62-.19-3.93-.32l-.55-.06c-1.49-.15-3-.33-4.48-.53h0q-2.4-.33-4.8-.75a149.82,149.82,0,0,1-24-6.41c-31.84-13.92-45.73-24.64-45.7-24.83l0,.18a1.09,1.09,0,0,1-.19-.18l0,.13-.06-.05-.09.05,0,0c-.74.38-1.39.7-2,1-7,3.82-14,7.66-21.08,11.45A182.66,182.66,0,0,1,1710.3,61a114,114,0,0,1-21.1,3.48h-.06c-1.11.08-2.21.13-3.32.17a105.66,105.66,0,0,1-22.17-1.75l-1.8-.35q-3.31-.72-6.62-1.48c-15.72-3.88-31.31-8.26-47-13.13l-.31-.1c-30.12-12.83-44-20.55-49.85-24.26l-.43-.33a11.45,11.45,0,0,0-3.05-2.17v-.18l-.16.12-.11,0-.11-.09,0,.07-.16-.05h0l0,0,0,0,0,0h0v-.05l0,0-.09,0c-2.11,1.6-4.33,3.21-6.53,4.9-14.05,9.94-47.62,31.7-74.68,33.53h-.45c-2.68,0-5.36,0-8-.21l-.53-.06a2.94,2.94,0,0,0-.42,0l-.61-.07a43.51,43.51,0,0,1-5.23-1,58.45,58.45,0,0,1-14.14-6.43c-2.91-1.72-5.75-3.54-8.81-5.07l-.45-.25c-2.32,1.27-4.4,2.46-6.52,3.57s-4.28,2.17-6.45,3.18a124.58,124.58,0,0,1-56.88,12.17l-.56,0c-1.29,0-2.59-.1-3.88-.19l-1.14-.07q-1.7-.12-3.39-.3l-2.09-.22c-.56-.06-1.11-.14-1.67-.21l-1.57-.2a145.58,145.58,0,0,1-31.5-8.32c-22.15-9.87-35.1-18-40.33-21.61l-2.73-2.12-.11.06-.09-.07c-1.42.84-2.73,1.6-4,2.38-12.64,7.54-25.56,14.55-39.28,20-15,5.94-30.4,9.74-46.55,10.25h-.06l-1.56,0-1.27,0h-1.19l-1.51,0-1.26,0-1.43,0-1.18-.06-1.79-.12-.58,0c-.86-.07-1.71-.14-2.57-.23a184.41,184.41,0,0,1-33.27-7c-9.07-2.69-18-5.76-27-8.75-38.24-16.25-50.76-24.44-53.86-26.71-.29-.23-.57-.45-.87-.67l-.1.07-.07-.05-.14.09-.13-.11.09.13-.09.07v-.2s-55.16,40.43-93.14,38.49q-14.56-2.5-26.15-13.93c-2.75,1.5-5.25,2.94-7.8,4.25s-5.28,2.67-8,3.88C896.65,64.33,872,67.7,846.22,63.17a149.82,149.82,0,0,1-24-6.41c-31.84-13.92-45.73-24.64-45.7-24.83l0,.28-.25-.2c-4.64,2.52-9.16,4.92-13.62,7.4C750.4,46.18,738,52.53,724.86,57.15a128.53,128.53,0,0,1-32.19,7.22,107.4,107.4,0,0,1-34.25-3c-16.28-4-32.41-8.51-48.62-13.56-30.13-12.84-44-20.56-49.87-24.27l-.43-.33a11.62,11.62,0,0,0-3-2.17v-.18l-.17.12-.1,0-.11-.09,0,.07L556,20.9c-2.59,1.94-5.33,3.87-7.94,6l-1.54,1.21C531,38.73,500.17,57.64,475,59.31c-3,0-6,0-8.95-.21l-.52-.06a2.94,2.94,0,0,0-.42,0c-7.35-.68-13.76-3.83-20-7.51-3-1.79-6-3.7-9.19-5.26-.73.39-1.43.76-2.12,1.15a139.43,139.43,0,0,1-34.52,14.07,122.47,122.47,0,0,1-47.58,2.43,145.43,145.43,0,0,1-31.5-8.32c-22.15-9.87-35.1-18-40.33-21.61l-2.73-2.12L275,33.09c-4.42,2.57-8.81,5.2-13.28,7.69-14.21,7.92-28.88,14.76-44.64,19.06-14.55,4-29.32,5.67-44.38,4.12a184.23,184.23,0,0,1-33.27-7c-9.08-2.69-18-5.76-27-8.75C74.21,32,61.7,23.82,58.6,21.55c-.29-.23-.57-.45-.87-.67-.76.52-1.42,1-2.07,1.42-6.44,4.61-12.91,9.18-19.32,13.83-10.77,7.8-21.89,15-34.07,20.48A5.91,5.91,0,0,0,.05,57.94v49.91l0,0v23.68H.05v8.61s0,0,0,.07v26.65l.05,0v7.3H0v11.52h0v36.15H2991V133.65Z"/>
          </svg>
          <svg className="oceanwave" id="oceanwave-four" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2990.97 236.52">
          <path d="M0,133.65V53.22c11.53,4.38,23.25,7.06,33.47,6Q47.41,56.46,58.7,45.42l2.24,1.27a149.64,149.64,0,0,0,20.5,9.85,123.09,123.09,0,0,0,63.81,7.16,146.77,146.77,0,0,0,27.84-7.12c31.55-13.83,45.32-24.46,45.29-24.65l0,.23.18-.14c.74.38,1.39.7,2,1,7,3.82,14,7.66,21.07,11.45A182.93,182.93,0,0,0,282.52,61c16,4.16,32.18,5,48.44,1.55,18.43-4,36.5-9.22,54.47-14.88,29.62-12.64,43.4-20.29,49.32-24l1.07-.83A8.64,8.64,0,0,1,438.63,21l.1-.08-.05.06h.05v-.05l0,0,.09,0c2.12,1.6,4.34,3.21,6.53,4.9,14.05,9.94,47.62,31.7,74.69,33.53,1,0,2,0,3,0a46.43,46.43,0,0,0,6.27-.25h0a43,43,0,0,0,17.47-5.93c3.91-2.34,7.87-4.58,11.91-6.93,2.32,1.27,4.4,2.46,6.52,3.57S569.55,52,571.72,53c24.56,11.5,50.19,15,76.89,10A147.63,147.63,0,0,0,675,55.44c21.24-9.48,33.95-17.32,39.46-21.09l3.24-2.49c1.42.84,2.72,1.6,4,2.38,12.64,7.54,25.56,14.55,39.28,20,15,5.94,30.44,9.75,46.6,10.25,13.86.43,27.38-2,40.73-5.5,12-3.18,23.68-7.26,35.43-11.18,31.42-13.4,45.12-21.22,50.52-24.72l2.84-2.18.14.09.13-.11-.09.13.09.07v-.2s8.36,6.12,20.8,13.48a255.49,255.49,0,0,0,34.5,17.17c11.5,4.5,23.39,7.71,34.15,7.9a44,44,0,0,0,4.5-.22q14.07-2.67,25.34-13.77l.12.06.09-.08,2.24,1.27a149.2,149.2,0,0,0,20.51,9.85,125.38,125.38,0,0,0,35.29,8.19l.44,0c1.2.09,2.4.17,3.59.23l.89,0q1.89.08,3.78.09c1.23,0,2.46,0,3.7,0,.34,0,.68,0,1,0,1.21,0,2.43-.09,3.64-.16l.85-.06c1.31-.09,2.62-.19,3.94-.32l.55-.06c1.49-.15,3-.33,4.48-.53h0q2.4-.33,4.8-.75a149.82,149.82,0,0,0,24-6.41c31.85-13.92,45.73-24.64,45.7-24.83l0,.18c.13-.1.2-.17.19-.18l0,.13,0-.05.1.05,0,0c.74.38,1.38.7,2,1,7,3.82,14,7.66,21.07,11.45A182.93,182.93,0,0,0,1280.68,61a113.89,113.89,0,0,0,21.09,3.48h.07c1.1.08,2.2.13,3.31.17a105.81,105.81,0,0,0,22.18-1.75l1.79-.35c2.22-.48,4.42-1,6.62-1.48,15.73-3.88,31.32-8.26,47-13.13l.32-.1c30.11-12.83,44-20.55,49.84-24.26l.43-.33a11.62,11.62,0,0,1,3-2.17v-.18l.17.12.11,0,.1-.09,0,.07.16-.05h0l0,0,0,0,0,0h0v-.05l0,0,.1,0c2.11,1.6,4.33,3.21,6.52,4.9,14,9.94,47.62,31.7,74.69,33.53h.45c2.67,0,5.35,0,8-.21.17,0,.35,0,.52-.06a2.94,2.94,0,0,1,.42,0l.62-.07a43.35,43.35,0,0,0,5.22-1,58.35,58.35,0,0,0,14.15-6.43c2.9-1.72,5.75-3.54,8.81-5.07l.44-.25c2.32,1.27,4.4,2.46,6.52,3.57s4.28,2.17,6.45,3.18a124.58,124.58,0,0,0,56.88,12.17l.57,0c1.29,0,2.58-.1,3.88-.19l1.13-.07q1.7-.12,3.39-.3l2.1-.22,1.66-.21,1.57-.2a145.43,145.43,0,0,0,31.5-8.32c22.15-9.87,35.1-18,40.33-21.61l2.74-2.12.1.06.1-.07c1.42.84,2.72,1.6,4,2.38,12.64,7.54,25.56,14.55,39.28,20,15,5.94,30.41,9.74,46.55,10.25h.06c.52,0,1,0,1.57,0l1.27,0h1.18l1.51,0,1.26,0,1.44,0,1.18-.06c.59,0,1.19-.07,1.78-.12l.59,0c.85-.07,1.71-.14,2.56-.23a184.23,184.23,0,0,0,33.27-7c9.08-2.69,18-5.76,27-8.75,38.24-16.25,50.75-24.44,53.85-26.71l.87-.67.11.07.07-.05.13.09.14-.11-.1.13.1.07v-.2s55.16,40.43,93.14,38.49q14.55-2.5,26.14-13.93c2.75,1.5,5.25,2.94,7.8,4.25s5.28,2.67,8,3.88c23.75,10.76,48.45,14.13,74.18,9.6a150,150,0,0,0,24-6.41c31.85-13.92,45.73-24.64,45.7-24.83l.05.28.26-.2c4.64,2.52,9.15,4.92,13.61,7.4,12.17,6.77,24.53,13.12,37.71,17.74a128.53,128.53,0,0,0,32.19,7.22,107.49,107.49,0,0,0,34.26-3c16.28-4,32.41-8.51,48.62-13.56,30.13-12.84,44-20.56,49.86-24.27l.43-.33a11.51,11.51,0,0,1,3.06-2.17v-.18l.16.12.11,0,.11-.09,0,.07.15-.05c2.59,1.94,5.33,3.87,7.94,6l1.54,1.21c15.52,10.66,46.31,29.57,71.45,31.24,3,0,6,0,8.95-.21.17,0,.35,0,.52-.06a2.94,2.94,0,0,1,.42,0c7.35-.68,13.76-3.83,20-7.51,3-1.79,6-3.7,9.18-5.26.73.39,1.43.76,2.12,1.15a139.59,139.59,0,0,0,34.52,14.07,122.47,122.47,0,0,0,47.58,2.43,145.28,145.28,0,0,0,31.5-8.32c22.16-9.87,35.1-18,40.34-21.61l2.73-2.12,2.15,1.22c4.43,2.57,8.81,5.2,13.28,7.69,14.21,7.92,28.88,14.76,44.64,19.06,14.56,4,29.32,5.67,44.39,4.12a184.3,184.3,0,0,0,33.26-7c9.08-2.69,18-5.76,27-8.75,38.24-16.25,50.75-24.44,53.85-26.71l.87-.67c.76.52,1.43,1,2.07,1.42,6.45,4.61,12.91,9.18,19.32,13.83,10.77,7.8,21.9,15,34.07,20.48a5.91,5.91,0,0,1,2.22,1.33v49.91l0,0v23.68h0v8.61s0,0,0,.07v26.65l0,0v7.3h0v11.52h0v36.15H0V133.65Z"/>
          </svg>
          <svg className="oceanwave" id="oceanwave-three" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2990.97 236.52">
            <path d="M2991,133.65V53.22c-11.52,4.38-23.25,7.06-33.47,6q-13.93-2.73-25.22-13.77L2930,46.69a150.32,150.32,0,0,1-20.51,9.85,123.09,123.09,0,0,1-63.81,7.16,146.48,146.48,0,0,1-27.83-7.12c-31.56-13.83-45.33-24.46-45.3-24.65l0,.23-.18-.14c-.74.38-1.38.7-2,1-7,3.82-14,7.66-21.08,11.45A182.66,182.66,0,0,1,2708.46,61c-16,4.16-32.19,5-48.45,1.55-18.43-4-36.5-9.22-54.46-14.88-29.63-12.64-43.4-20.29-49.32-24l-1.08-.83a8.64,8.64,0,0,0-2.81-1.85.44.44,0,0,0-.1-.08l.05.06h-.05v-.05l0,0-.1,0c-2.11,1.6-4.33,3.21-6.53,4.9-14.05,9.94-47.62,31.7-74.68,33.53-1,0-2,0-3,0a46.5,46.5,0,0,1-6.27-.25h0a43.07,43.07,0,0,1-17.48-5.93c-3.91-2.34-7.86-4.58-11.91-6.93-2.32,1.27-4.4,2.46-6.52,3.57s-4.27,2.17-6.44,3.18c-24.57,11.5-50.2,15-76.9,10A147.53,147.53,0,0,1,2316,55.44c-21.25-9.48-34-17.32-39.47-21.09l-3.23-2.49c-1.42.84-2.73,1.6-4,2.38-12.65,7.54-25.57,14.55-39.29,20-15,5.94-30.43,9.75-46.59,10.25-13.87.43-27.39-2-40.74-5.5-12-3.18-23.67-7.26-35.42-11.18-31.42-13.4-45.12-21.22-50.53-24.72l-2.84-2.18-.14.09-.13-.11.1.13-.1.07v-.2s-8.35,6.12-20.79,13.48a256.23,256.23,0,0,1-34.51,17.17c-11.5,4.5-23.39,7.71-34.15,7.9a44.32,44.32,0,0,1-4.5-.22q-14.07-2.67-25.34-13.77l-.12.06-.08-.08-2.25,1.27a149.64,149.64,0,0,1-20.5,9.85,125.37,125.37,0,0,1-35.3,8.19l-.44,0c-1.2.09-2.39.17-3.59.23l-.89,0c-1.25,0-2.51.08-3.77.09s-2.47,0-3.71,0l-1,0c-1.21,0-2.42-.09-3.64-.16l-.85-.06c-1.31-.09-2.62-.19-3.93-.32l-.55-.06c-1.49-.15-3-.33-4.48-.53h0q-2.4-.33-4.8-.75a149.82,149.82,0,0,1-24-6.41c-31.84-13.92-45.73-24.64-45.7-24.83l0,.18a1.09,1.09,0,0,1-.19-.18l0,.13-.06-.05-.09.05,0,0c-.74.38-1.39.7-2,1-7,3.82-14,7.66-21.08,11.45A182.66,182.66,0,0,1,1710.3,61a114,114,0,0,1-21.1,3.48h-.06c-1.11.08-2.21.13-3.32.17a105.66,105.66,0,0,1-22.17-1.75l-1.8-.35q-3.31-.72-6.62-1.48c-15.72-3.88-31.31-8.26-47-13.13l-.31-.1c-30.12-12.83-44-20.55-49.85-24.26l-.43-.33a11.45,11.45,0,0,0-3.05-2.17v-.18l-.16.12-.11,0-.11-.09,0,.07-.16-.05h0l0,0,0,0,0,0h0v-.05l0,0-.09,0c-2.11,1.6-4.33,3.21-6.53,4.9-14.05,9.94-47.62,31.7-74.68,33.53h-.45c-2.68,0-5.36,0-8-.21l-.53-.06a2.94,2.94,0,0,0-.42,0l-.61-.07a43.51,43.51,0,0,1-5.23-1,58.45,58.45,0,0,1-14.14-6.43c-2.91-1.72-5.75-3.54-8.81-5.07l-.45-.25c-2.32,1.27-4.4,2.46-6.52,3.57s-4.28,2.17-6.45,3.18a124.58,124.58,0,0,1-56.88,12.17l-.56,0c-1.29,0-2.59-.1-3.88-.19l-1.14-.07q-1.7-.12-3.39-.3l-2.09-.22c-.56-.06-1.11-.14-1.67-.21l-1.57-.2a145.58,145.58,0,0,1-31.5-8.32c-22.15-9.87-35.1-18-40.33-21.61l-2.73-2.12-.11.06-.09-.07c-1.42.84-2.73,1.6-4,2.38-12.64,7.54-25.56,14.55-39.28,20-15,5.94-30.4,9.74-46.55,10.25h-.06l-1.56,0-1.27,0h-1.19l-1.51,0-1.26,0-1.43,0-1.18-.06-1.79-.12-.58,0c-.86-.07-1.71-.14-2.57-.23a184.41,184.41,0,0,1-33.27-7c-9.07-2.69-18-5.76-27-8.75-38.24-16.25-50.76-24.44-53.86-26.71-.29-.23-.57-.45-.87-.67l-.1.07-.07-.05-.14.09-.13-.11.09.13-.09.07v-.2s-55.16,40.43-93.14,38.49q-14.56-2.5-26.15-13.93c-2.75,1.5-5.25,2.94-7.8,4.25s-5.28,2.67-8,3.88C896.65,64.33,872,67.7,846.22,63.17a149.82,149.82,0,0,1-24-6.41c-31.84-13.92-45.73-24.64-45.7-24.83l0,.28-.25-.2c-4.64,2.52-9.16,4.92-13.62,7.4C750.4,46.18,738,52.53,724.86,57.15a128.53,128.53,0,0,1-32.19,7.22,107.4,107.4,0,0,1-34.25-3c-16.28-4-32.41-8.51-48.62-13.56-30.13-12.84-44-20.56-49.87-24.27l-.43-.33a11.62,11.62,0,0,0-3-2.17v-.18l-.17.12-.1,0-.11-.09,0,.07L556,20.9c-2.59,1.94-5.33,3.87-7.94,6l-1.54,1.21C531,38.73,500.17,57.64,475,59.31c-3,0-6,0-8.95-.21l-.52-.06a2.94,2.94,0,0,0-.42,0c-7.35-.68-13.76-3.83-20-7.51-3-1.79-6-3.7-9.19-5.26-.73.39-1.43.76-2.12,1.15a139.43,139.43,0,0,1-34.52,14.07,122.47,122.47,0,0,1-47.58,2.43,145.43,145.43,0,0,1-31.5-8.32c-22.15-9.87-35.1-18-40.33-21.61l-2.73-2.12L275,33.09c-4.42,2.57-8.81,5.2-13.28,7.69-14.21,7.92-28.88,14.76-44.64,19.06-14.55,4-29.32,5.67-44.38,4.12a184.23,184.23,0,0,1-33.27-7c-9.08-2.69-18-5.76-27-8.75C74.21,32,61.7,23.82,58.6,21.55c-.29-.23-.57-.45-.87-.67-.76.52-1.42,1-2.07,1.42-6.44,4.61-12.91,9.18-19.32,13.83-10.77,7.8-21.89,15-34.07,20.48A5.91,5.91,0,0,0,.05,57.94v49.91l0,0v23.68H.05v8.61s0,0,0,.07v26.65l.05,0v7.3H0v11.52h0v36.15H2991V133.65Z"/>
          </svg>
          <svg className="oceanwave" id="oceanwave-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2990.97 236.52">
          <path d="M0,133.65V53.22c11.53,4.38,23.25,7.06,33.47,6Q47.41,56.46,58.7,45.42l2.24,1.27a149.64,149.64,0,0,0,20.5,9.85,123.09,123.09,0,0,0,63.81,7.16,146.77,146.77,0,0,0,27.84-7.12c31.55-13.83,45.32-24.46,45.29-24.65l0,.23.18-.14c.74.38,1.39.7,2,1,7,3.82,14,7.66,21.07,11.45A182.93,182.93,0,0,0,282.52,61c16,4.16,32.18,5,48.44,1.55,18.43-4,36.5-9.22,54.47-14.88,29.62-12.64,43.4-20.29,49.32-24l1.07-.83A8.64,8.64,0,0,1,438.63,21l.1-.08-.05.06h.05v-.05l0,0,.09,0c2.12,1.6,4.34,3.21,6.53,4.9,14.05,9.94,47.62,31.7,74.69,33.53,1,0,2,0,3,0a46.43,46.43,0,0,0,6.27-.25h0a43,43,0,0,0,17.47-5.93c3.91-2.34,7.87-4.58,11.91-6.93,2.32,1.27,4.4,2.46,6.52,3.57S569.55,52,571.72,53c24.56,11.5,50.19,15,76.89,10A147.63,147.63,0,0,0,675,55.44c21.24-9.48,33.95-17.32,39.46-21.09l3.24-2.49c1.42.84,2.72,1.6,4,2.38,12.64,7.54,25.56,14.55,39.28,20,15,5.94,30.44,9.75,46.6,10.25,13.86.43,27.38-2,40.73-5.5,12-3.18,23.68-7.26,35.43-11.18,31.42-13.4,45.12-21.22,50.52-24.72l2.84-2.18.14.09.13-.11-.09.13.09.07v-.2s8.36,6.12,20.8,13.48a255.49,255.49,0,0,0,34.5,17.17c11.5,4.5,23.39,7.71,34.15,7.9a44,44,0,0,0,4.5-.22q14.07-2.67,25.34-13.77l.12.06.09-.08,2.24,1.27a149.2,149.2,0,0,0,20.51,9.85,125.38,125.38,0,0,0,35.29,8.19l.44,0c1.2.09,2.4.17,3.59.23l.89,0q1.89.08,3.78.09c1.23,0,2.46,0,3.7,0,.34,0,.68,0,1,0,1.21,0,2.43-.09,3.64-.16l.85-.06c1.31-.09,2.62-.19,3.94-.32l.55-.06c1.49-.15,3-.33,4.48-.53h0q2.4-.33,4.8-.75a149.82,149.82,0,0,0,24-6.41c31.85-13.92,45.73-24.64,45.7-24.83l0,.18c.13-.1.2-.17.19-.18l0,.13,0-.05.1.05,0,0c.74.38,1.38.7,2,1,7,3.82,14,7.66,21.07,11.45A182.93,182.93,0,0,0,1280.68,61a113.89,113.89,0,0,0,21.09,3.48h.07c1.1.08,2.2.13,3.31.17a105.81,105.81,0,0,0,22.18-1.75l1.79-.35c2.22-.48,4.42-1,6.62-1.48,15.73-3.88,31.32-8.26,47-13.13l.32-.1c30.11-12.83,44-20.55,49.84-24.26l.43-.33a11.62,11.62,0,0,1,3-2.17v-.18l.17.12.11,0,.1-.09,0,.07.16-.05h0l0,0,0,0,0,0h0v-.05l0,0,.1,0c2.11,1.6,4.33,3.21,6.52,4.9,14,9.94,47.62,31.7,74.69,33.53h.45c2.67,0,5.35,0,8-.21.17,0,.35,0,.52-.06a2.94,2.94,0,0,1,.42,0l.62-.07a43.35,43.35,0,0,0,5.22-1,58.35,58.35,0,0,0,14.15-6.43c2.9-1.72,5.75-3.54,8.81-5.07l.44-.25c2.32,1.27,4.4,2.46,6.52,3.57s4.28,2.17,6.45,3.18a124.58,124.58,0,0,0,56.88,12.17l.57,0c1.29,0,2.58-.1,3.88-.19l1.13-.07q1.7-.12,3.39-.3l2.1-.22,1.66-.21,1.57-.2a145.43,145.43,0,0,0,31.5-8.32c22.15-9.87,35.1-18,40.33-21.61l2.74-2.12.1.06.1-.07c1.42.84,2.72,1.6,4,2.38,12.64,7.54,25.56,14.55,39.28,20,15,5.94,30.41,9.74,46.55,10.25h.06c.52,0,1,0,1.57,0l1.27,0h1.18l1.51,0,1.26,0,1.44,0,1.18-.06c.59,0,1.19-.07,1.78-.12l.59,0c.85-.07,1.71-.14,2.56-.23a184.23,184.23,0,0,0,33.27-7c9.08-2.69,18-5.76,27-8.75,38.24-16.25,50.75-24.44,53.85-26.71l.87-.67.11.07.07-.05.13.09.14-.11-.1.13.1.07v-.2s55.16,40.43,93.14,38.49q14.55-2.5,26.14-13.93c2.75,1.5,5.25,2.94,7.8,4.25s5.28,2.67,8,3.88c23.75,10.76,48.45,14.13,74.18,9.6a150,150,0,0,0,24-6.41c31.85-13.92,45.73-24.64,45.7-24.83l.05.28.26-.2c4.64,2.52,9.15,4.92,13.61,7.4,12.17,6.77,24.53,13.12,37.71,17.74a128.53,128.53,0,0,0,32.19,7.22,107.49,107.49,0,0,0,34.26-3c16.28-4,32.41-8.51,48.62-13.56,30.13-12.84,44-20.56,49.86-24.27l.43-.33a11.51,11.51,0,0,1,3.06-2.17v-.18l.16.12.11,0,.11-.09,0,.07.15-.05c2.59,1.94,5.33,3.87,7.94,6l1.54,1.21c15.52,10.66,46.31,29.57,71.45,31.24,3,0,6,0,8.95-.21.17,0,.35,0,.52-.06a2.94,2.94,0,0,1,.42,0c7.35-.68,13.76-3.83,20-7.51,3-1.79,6-3.7,9.18-5.26.73.39,1.43.76,2.12,1.15a139.59,139.59,0,0,0,34.52,14.07,122.47,122.47,0,0,0,47.58,2.43,145.28,145.28,0,0,0,31.5-8.32c22.16-9.87,35.1-18,40.34-21.61l2.73-2.12,2.15,1.22c4.43,2.57,8.81,5.2,13.28,7.69,14.21,7.92,28.88,14.76,44.64,19.06,14.56,4,29.32,5.67,44.39,4.12a184.3,184.3,0,0,0,33.26-7c9.08-2.69,18-5.76,27-8.75,38.24-16.25,50.75-24.44,53.85-26.71l.87-.67c.76.52,1.43,1,2.07,1.42,6.45,4.61,12.91,9.18,19.32,13.83,10.77,7.8,21.9,15,34.07,20.48a5.91,5.91,0,0,1,2.22,1.33v49.91l0,0v23.68h0v8.61s0,0,0,.07v26.65l0,0v7.3h0v11.52h0v36.15H0V133.65Z"/>
          </svg>
          <div className="bottle"><a href="/" alt="My Resume"><img src={bottle} /></a></div>
          <svg className="oceanwave" id="oceanwave-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2990.97 236.52">
            <path d="M2991,133.65V53.22c-11.52,4.38-23.25,7.06-33.47,6q-13.93-2.73-25.22-13.77L2930,46.69a150.32,150.32,0,0,1-20.51,9.85,123.09,123.09,0,0,1-63.81,7.16,146.48,146.48,0,0,1-27.83-7.12c-31.56-13.83-45.33-24.46-45.3-24.65l0,.23-.18-.14c-.74.38-1.38.7-2,1-7,3.82-14,7.66-21.08,11.45A182.66,182.66,0,0,1,2708.46,61c-16,4.16-32.19,5-48.45,1.55-18.43-4-36.5-9.22-54.46-14.88-29.63-12.64-43.4-20.29-49.32-24l-1.08-.83a8.64,8.64,0,0,0-2.81-1.85.44.44,0,0,0-.1-.08l.05.06h-.05v-.05l0,0-.1,0c-2.11,1.6-4.33,3.21-6.53,4.9-14.05,9.94-47.62,31.7-74.68,33.53-1,0-2,0-3,0a46.5,46.5,0,0,1-6.27-.25h0a43.07,43.07,0,0,1-17.48-5.93c-3.91-2.34-7.86-4.58-11.91-6.93-2.32,1.27-4.4,2.46-6.52,3.57s-4.27,2.17-6.44,3.18c-24.57,11.5-50.2,15-76.9,10A147.53,147.53,0,0,1,2316,55.44c-21.25-9.48-34-17.32-39.47-21.09l-3.23-2.49c-1.42.84-2.73,1.6-4,2.38-12.65,7.54-25.57,14.55-39.29,20-15,5.94-30.43,9.75-46.59,10.25-13.87.43-27.39-2-40.74-5.5-12-3.18-23.67-7.26-35.42-11.18-31.42-13.4-45.12-21.22-50.53-24.72l-2.84-2.18-.14.09-.13-.11.1.13-.1.07v-.2s-8.35,6.12-20.79,13.48a256.23,256.23,0,0,1-34.51,17.17c-11.5,4.5-23.39,7.71-34.15,7.9a44.32,44.32,0,0,1-4.5-.22q-14.07-2.67-25.34-13.77l-.12.06-.08-.08-2.25,1.27a149.64,149.64,0,0,1-20.5,9.85,125.37,125.37,0,0,1-35.3,8.19l-.44,0c-1.2.09-2.39.17-3.59.23l-.89,0c-1.25,0-2.51.08-3.77.09s-2.47,0-3.71,0l-1,0c-1.21,0-2.42-.09-3.64-.16l-.85-.06c-1.31-.09-2.62-.19-3.93-.32l-.55-.06c-1.49-.15-3-.33-4.48-.53h0q-2.4-.33-4.8-.75a149.82,149.82,0,0,1-24-6.41c-31.84-13.92-45.73-24.64-45.7-24.83l0,.18a1.09,1.09,0,0,1-.19-.18l0,.13-.06-.05-.09.05,0,0c-.74.38-1.39.7-2,1-7,3.82-14,7.66-21.08,11.45A182.66,182.66,0,0,1,1710.3,61a114,114,0,0,1-21.1,3.48h-.06c-1.11.08-2.21.13-3.32.17a105.66,105.66,0,0,1-22.17-1.75l-1.8-.35q-3.31-.72-6.62-1.48c-15.72-3.88-31.31-8.26-47-13.13l-.31-.1c-30.12-12.83-44-20.55-49.85-24.26l-.43-.33a11.45,11.45,0,0,0-3.05-2.17v-.18l-.16.12-.11,0-.11-.09,0,.07-.16-.05h0l0,0,0,0,0,0h0v-.05l0,0-.09,0c-2.11,1.6-4.33,3.21-6.53,4.9-14.05,9.94-47.62,31.7-74.68,33.53h-.45c-2.68,0-5.36,0-8-.21l-.53-.06a2.94,2.94,0,0,0-.42,0l-.61-.07a43.51,43.51,0,0,1-5.23-1,58.45,58.45,0,0,1-14.14-6.43c-2.91-1.72-5.75-3.54-8.81-5.07l-.45-.25c-2.32,1.27-4.4,2.46-6.52,3.57s-4.28,2.17-6.45,3.18a124.58,124.58,0,0,1-56.88,12.17l-.56,0c-1.29,0-2.59-.1-3.88-.19l-1.14-.07q-1.7-.12-3.39-.3l-2.09-.22c-.56-.06-1.11-.14-1.67-.21l-1.57-.2a145.58,145.58,0,0,1-31.5-8.32c-22.15-9.87-35.1-18-40.33-21.61l-2.73-2.12-.11.06-.09-.07c-1.42.84-2.73,1.6-4,2.38-12.64,7.54-25.56,14.55-39.28,20-15,5.94-30.4,9.74-46.55,10.25h-.06l-1.56,0-1.27,0h-1.19l-1.51,0-1.26,0-1.43,0-1.18-.06-1.79-.12-.58,0c-.86-.07-1.71-.14-2.57-.23a184.41,184.41,0,0,1-33.27-7c-9.07-2.69-18-5.76-27-8.75-38.24-16.25-50.76-24.44-53.86-26.71-.29-.23-.57-.45-.87-.67l-.1.07-.07-.05-.14.09-.13-.11.09.13-.09.07v-.2s-55.16,40.43-93.14,38.49q-14.56-2.5-26.15-13.93c-2.75,1.5-5.25,2.94-7.8,4.25s-5.28,2.67-8,3.88C896.65,64.33,872,67.7,846.22,63.17a149.82,149.82,0,0,1-24-6.41c-31.84-13.92-45.73-24.64-45.7-24.83l0,.28-.25-.2c-4.64,2.52-9.16,4.92-13.62,7.4C750.4,46.18,738,52.53,724.86,57.15a128.53,128.53,0,0,1-32.19,7.22,107.4,107.4,0,0,1-34.25-3c-16.28-4-32.41-8.51-48.62-13.56-30.13-12.84-44-20.56-49.87-24.27l-.43-.33a11.62,11.62,0,0,0-3-2.17v-.18l-.17.12-.1,0-.11-.09,0,.07L556,20.9c-2.59,1.94-5.33,3.87-7.94,6l-1.54,1.21C531,38.73,500.17,57.64,475,59.31c-3,0-6,0-8.95-.21l-.52-.06a2.94,2.94,0,0,0-.42,0c-7.35-.68-13.76-3.83-20-7.51-3-1.79-6-3.7-9.19-5.26-.73.39-1.43.76-2.12,1.15a139.43,139.43,0,0,1-34.52,14.07,122.47,122.47,0,0,1-47.58,2.43,145.43,145.43,0,0,1-31.5-8.32c-22.15-9.87-35.1-18-40.33-21.61l-2.73-2.12L275,33.09c-4.42,2.57-8.81,5.2-13.28,7.69-14.21,7.92-28.88,14.76-44.64,19.06-14.55,4-29.32,5.67-44.38,4.12a184.23,184.23,0,0,1-33.27-7c-9.08-2.69-18-5.76-27-8.75C74.21,32,61.7,23.82,58.6,21.55c-.29-.23-.57-.45-.87-.67-.76.52-1.42,1-2.07,1.42-6.44,4.61-12.91,9.18-19.32,13.83-10.77,7.8-21.89,15-34.07,20.48A5.91,5.91,0,0,0,.05,57.94v49.91l0,0v23.68H.05v8.61s0,0,0,.07v26.65l.05,0v7.3H0v11.52h0v36.15H2991V133.65Z"/>
          </svg>

        </div>
      </BrowserRouter>
    
    )
  }
}
  
  export default App;
