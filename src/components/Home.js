import React, { Component, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

 


function Home() {


	return (
		<div className="body-wrapper">
			<div className="page-content-wrapper">

				<Carousel 
					pauseOnHover={true}
					touch={true}
					controls={false}
					wrap={true}
					>

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

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Test4</div>
			      	</div>
				    <Carousel.Caption>
				    </Carousel.Caption>
				  </Carousel.Item>

				  <Carousel.Item>
				    <div className="pulsate-bck">
			      		<div className="anim-text">Test5</div>
			      	</div>
				    <Carousel.Caption>
				    </Carousel.Caption>
				  </Carousel.Item>

				</Carousel>
			</div>
		</div>
			  )
			}
		
export default Home;