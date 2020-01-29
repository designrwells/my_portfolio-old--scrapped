import React from 'react'; // Import the Component component from React
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'; // Import the Link component
import '../App.css';
 
function ProjectItem(props) {
  return (

        <Card style={{ width: '18rem' }}>
          <div className="project">
            <Link to={props.link}>
              <Card.Img variant="top" className="project-img" src={props.image} />
              <Card.Body>
                <Card.Title className="project-title">{props.title}</Card.Title>
                <Card.Text className="project-text">{props.text}</Card.Text>
              </Card.Body> 
              <Card.Body>
                <Card.Text>{props.category}</Card.Text>
              </Card.Body>   
            </Link>
          </div>  
        </Card>

  );
}
 
export default ProjectItem;