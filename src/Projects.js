import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
class Projects extends Component {
  render() {
    return (
      // Render a Thumbnail component
      <div>
        <h1>Projects</h1>
        <Thumbnail
          link="/twitter"
          image="http://twitter-image-url.jpg"
          title="Twitter Newsfeed"
          category="Mobile  App"
        />

        <Thumbnail
          link="/airbnb"
          image="http://airbnb-image-url.jpg"
          title="Airbnb Experiences"
          category="Website"
        />
      </div>
    )
  }
}
export default Projects;