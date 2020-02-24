import React, { Component } from 'react'
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { TimelineLite, CSSPlugin } from 'gsap';
import octopusRight from '../images/octopus-right.png';
import octopusLeft from '../images/octopus-left.png';
import rope from '../images/rope.png';
import waveOne from '../images/wave1-01.png';
import waveTwo from '../images/wave2-01.png';
import waveThree from '../images/wave3-01.png';
import waveFour from '../images/wave4-01.png';
import bottle from '../images/bottle.svg';

class About extends Component {

	constructor(props){
		super(props);

		this.aboutTween = null;
	}
	
	componentDidMount() {
		this.aboutTween = new TimelineLite({ paused:true })
			.to(this.aboutContainerLeft, 2, { opacity: 0, x: -320, y: 90, rotation: -20, display: "none" })
			.to(this.aboutContainerRight, 2, { opacity: 0, x: 320, y:90, rotation: 20, display: "none" }, '-=2')
			.to(this.ropeLineTop, 1.5, { opacity: .8, y: -20 }, '-=.7' )
			.to(this.ropeLineBottom, 1.5, { opacity: .8, y: -20 }, '-=1.5' )
			.to(this.aboutHeader, 2, { opacity: 1, y: 10 }, '-=.4' )
			.to(this.aboutBackground, 2, { backgroundColor:"rgba(0, 0, 0, .35)" }, '-=2' )
			.to(this.aboutTextOne, 2, { opacity: 1, y: -17 }, '-=1' )
			.to(this.aboutTextTwo, 2, { opacity: 1, y: -20 }, '-=1' );
	}

	render() {
		  return (
		    <div className="body-wrapper">
		    	<div className="about-wrapper" onClick={ () => this.aboutTween.play() }>
		    		<img src={octopusLeft} className="about-block-left" ref={ img  => this.aboutContainerLeft = img } />
		    		
		    		<img src={rope} className="rope-line" ref={ img => this.ropeLineTop = img } />
		    		
		    		<div className="about-text-wrapper" ref={ div => this.aboutBackground = div }>
						<h1 className="about-header" ref={ h1 => this.aboutHeader = h1 }>YE INTRUDERS BEWARE,</h1>
		    			<div className="about-text" ref={ div => this.aboutTextOne = div } >
			    		Born and raised in Oklahoma, and currently residing in the Oklahoma City metro area, I grew up as someone
			    		who always thought a little differently. I took pride in that, and thus found interests in things outside of 
			    		the norm. As time passed and I developed as a person, I found a passion to simply do one thing: <b>create</b>.
			    		</div>
			    		<div className="about-text" ref={ div => this.aboutTextTwo = div } >
						Today, I strive to combine my creative instincts with my growing knowledge and experience of design theory to fill the creative 
						gap and put what's in my head out into the real world. I like to do work that is interesting, intelligent, thought-invoking, and emotional. 
						If something I create causes someone to stop in awe, even if just for a moment, then I consider that a success, whether personal or 
						professional. I hope to give back as much inspiration as I take in - and you can never have too much. That being said, what inspires me 
						most is music and the artwork of others. Whether a simple painting or a handcrafted piece of furniture, all fields of creation are 
						fascinating. With 3+ years in the design field, and over 7 years of essential software and web experience, 
						I am more prepared than ever to translate your ideas into a visual identity. So come on, let's create something together.
						</div>
		    		</div>
		    		
		    		<img src={rope} className="rope-line" ref={ img => this.ropeLineBottom = img } />

		    		<img src={octopusRight} className="about-block-right" ref={ img  => this.aboutContainerRight = img } />

		    		<img src={waveFour} className="oceanwave-four" style={{ bottom: "125px" }} />
		    		<img src={waveThree} className="oceanwave-three" style={{ bottom: "75px" }} />
		    		<img src={waveTwo} className="oceanwave-two " style={{ bottom: "-35px" }} />
		    		<a href="/"><img src={bottle} className="bottle" /></a>
		    		<img src={waveOne} className="oceanwave-one" style={{ bottom: "-120px" }} />
		    		

			    </div>

		    </div>
		  )
		}
}

export default About;