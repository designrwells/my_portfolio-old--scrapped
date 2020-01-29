import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import ProjectItem from './ProjectItem.js'; // Import the Thumbnail component
import '../App.css';
 
class Projects extends Component {
  render() {
    return (
      // Render a Thumbnail component
      <div className="body-wrapper">
        <h1 className="header">PROJECTS</h1>
        <CardDeck>
          <ProjectItem
            link="/ulysses"
            image="http://darrinwells.com/img/ulysses.jpg"
            title="Ulysses"
            category="Photoshop"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectItem
            link="/mendedmoments"
            image="http://darrinwells.com/img/thumbnails/mendedmoments_thumb.jpg"
            title="Mended Moments"
            category="Website Design"
            category="Graphic Design"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectItem
            link="/airbnb"
            image="http://airbnb-image-url.jpg"
            title="Airbnb Experiences"
            category="Website"
          />
          <ProjectItem
            link="/airbnb"
            image="http://airbnb-image-url.jpg"
            title="Airbnb Experiences"
            category="Website"
          />
        </CardDeck>
      </div>
      
    )
  }
}
export default Projects;