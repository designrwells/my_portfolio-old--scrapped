import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import ProjectItem from './ProjectItem.js'; // Import the Thumbnail component
import '../App.css';
 
class Projects extends Component {
  render() {
    return (
      // Render a Thumbnail component
      <div className="body-wrapper">
        <h1 className="heading">Projects</h1>
        <CardDeck>
          <ProjectItem
            link="/twitter"
            image="http://darrinwells.com/img/ulysses.jpg"
            title="Ulysses"
            category="Photoshop"
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