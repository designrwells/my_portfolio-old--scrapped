import React, { Component } from 'react'
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { TimelineLite, CSSPlugin } from 'gsap';
import octopusRight from '../images/octopus-right.png';
import octopusLeft from '../images/octopus-left.png';

class About extends Component {

	constructor(props){
		super(props);

		this.aboutTween = null;
	}

	componentDidMount() {
		this.aboutTween = new TimelineLite({ paused:true })
			.to(this.aboutContainerLeft, 1.3, { opacity: 0, x: -350 })
			.to(this.aboutContainerRight, 1.3, { opacity: 0, x: 350 }, '-=1.3')
			.to(this.aboutHeader, 1.5, { opacity: 1, y: 150 }, '-=.3' );
	}

	render() {
		  return (
		    <div className="body-wrapper">
		    	<div className="about-wrapper" onClick={ () => this.aboutTween.play() }>
		    		<img src={octopusLeft} className="about-block-left" ref={ img  => this.aboutContainerLeft = img } />
		    		<h1 className="about-header" ref={ h1 => this.aboutHeader = h1 }>ABOUT</h1>
		    		<img src={octopusRight} className="about-block-right" ref={ img  => this.aboutContainerRight = img } />
			    </div>
		    </div>
		  )
		}
}

export default About;