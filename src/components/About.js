import React, { Component } from 'react'
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { TimelineLite, CSSPlugin } from 'gsap';
 
class About extends Component {

	constructor(props){
		super(props);

		this.aboutContainer = null;

		this.aboutTween = null;
	}

	componentDidMount() {
		this.aboutTween = new TimelineLite({ paused:true })
			.to(this.aboutContainerLeft, 1.4, { opacity: 0, x: -350 })
			.to(this.aboutContainerRight, 1.4, { opacity: 0, x: 350 }, '-=1.4');
	}

	render() {
		  return (
		    <div className="body-wrapper">
		    	<div className="about-wrapper" onClick={ () => this.aboutTween.play() }>
		    		<div className="about-block-left" ref={ div  => this.aboutContainerLeft = div }>Block Left</div>
		    		<h1 className="about-header">ABOUT</h1>
		    		<div className="about-block-right" ref={ div  => this.aboutContainerRight = div }>Block Right</div>
			    </div>
		    </div>
		  )
		}
}

export default About;