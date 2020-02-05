import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

 
class Home extends Component {



render() {


	  return (
<div className="body-wrapper">
	<div className="page-content-wrapper">
		<Carousel>

		  <Carousel.Item>
		    <div className="pulsate-bck">
	      		<div className="anim-text">Test1</div>
	      	</div>
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
		    <div className="pulsate-bck">
	      		<div className="anim-text">Test2</div>
	      	</div>
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>

		  <Carousel.Item>
		    <div className="pulsate-bck">
	      		<div className="anim-text">Test3</div>
	      	</div>
		    <Carousel.Caption>
		    </Carousel.Caption>
		  </Carousel.Item>

		</Carousel>
	</div>
</div>
	  )
	}
}
export default Home;