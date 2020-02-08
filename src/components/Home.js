import React, { Component, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

 


function Home() {


	return (
		<div className="body-wrapper">
			<div id="carousel-wrapper" className="page-content-wrapper">

				<Carousel 
					pauseOnHover={true}
					touch={true}
					controls={false}
					wrap={true}
					>

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Hey, I'm Darrin</div>
			      	</div>
				    <Carousel.Caption>
				    	That is my name.
				    </Carousel.Caption>
				  </Carousel.Item>

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Web wizardry</div>
			      	</div>
				    <Carousel.Caption>
				    	That is my game.
				    </Carousel.Caption>
				  </Carousel.Item>

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Here's some text</div>
			      	</div>
				    <Carousel.Caption>
				    	And here's some more text.
				    </Carousel.Caption>
				  </Carousel.Item>

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Something else here</div>
			      	</div>
				    <Carousel.Caption>
				    	And one more thing here.
				    </Carousel.Caption>
				  </Carousel.Item>

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Final slide</div>
			      	</div>
				    <Carousel.Caption>
				    	Slide on man, slide on.
				    </Carousel.Caption>
				  </Carousel.Item>

				</Carousel>
			</div>
		</div>
			  )
			}
		
export default Home;