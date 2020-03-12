import React, { Component } from 'react'
import '../css/about.css';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { TimelineLite, CSSPlugin } from 'gsap';
import octopusRight from '../images/octopus-right.png';
import octopusLeft from '../images/octopus-left.png';
import rope from '../images/rope.png';
import bottle from '../images/bottle.svg';


class About extends Component {

	constructor(props){
		super(props);

		this.aboutTween = null;
	}
	
	componentDidMount() {
		this.aboutTween = new TimelineLite({ paused:true })
			.to(this.aboutContainerLeft, .5, { y: 1000, display: "none" })
			.to(this.aboutContainerRight, .5, { y: 1000, display: "none" }, '-=.5')
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
		    	<svg id="cloud-one" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 786.98 308.39">
		    	   <defs>
				      <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
					    <feGaussianBlur in="SourceAlpha" result="blur-out" stdDeviation="5" />
					    <feOffset in="blur-out" result="the-shadow" dx="7" dy="-7"/> 
					    <feColorMatrix in="the-shadow" result="color-out" type="matrix"
					      values="0 0 0 0   0
					              0 0 0 0   0 
					              0 0 0 0   0 
					              0 0 0 .3 0"/>
					    <feBlend in="SourceGraphic" in2="color-out" mode="normal"/>
					  </filter>
					</defs>
		    		<path filter="url(#drop-shadow)" d="M530.24,106.23c.83-1.51,1.26-2.87,2.14-3.81,17.89-19.13,39.91-24.75,65.1-19.56,17.08,3.52,29.9,13.53,39.48,27.6A57.79,57.79,0,0,1,647,137.84c.29,3.14.68,6.27,1,9.42.31,3.59,1.11,4.51,4.78,3.63,26-6.22,54.46,14.63,65.48,36.64,9.07,18.11,9.57,37.07,1.18,56-6.54,14.71-16.85,25.85-31.19,33a64.19,64.19,0,0,1-28.92,6.72q-209.46,0-418.94,0c-44.49,0-89,.15-133.48-.09-22.81-.12-41.06-9.6-54.25-28.44-10.37-14.81-13.82-31.21-10.77-48.86,4.61-26.64,20.5-43.69,45.9-52a77,77,0,0,1,16.54-3.36c4.4-.42,8.92.5,13.39.8.82,0,1.65,0,2.89,0,1.09-37.26,16.78-66.65,49.29-85.16s65.79-17.17,98.94.71c2.42-3.43,4.9-6.9,7.35-10.39C289.06,38,306.77,26.3,328.23,20.83a90.15,90.15,0,0,1,57.27,4.11,82,82,0,0,1,27.12,17.43,120.8,120.8,0,0,1,12.06,13.15,8.12,8.12,0,0,0,8,3.61,108,108,0,0,1,93.51,42.67C527.05,103,528.15,104,530.24,106.23Z"/>
		    	</svg>
		    	
		    	<svg className="cloud" id="cloud-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 763.47 402.44">
		    		<path filter="url(#drop-shadow)" d="M495.83,152.83c4.65-2.3,8.59-4.44,12.68-6.23,21.1-9.24,42.8-10.76,64.78-3.89a100.72,100.72,0,0,1,21.38,9.48,80.86,80.86,0,0,1,21.2,18c8.87,10.8,15.76,22.75,19.55,36.24a82.3,82.3,0,0,1,2.69,17.2c1,16.72-1.7,32.9-9.37,47.93a91.79,91.79,0,0,1-30.51,34.94c-16.25,11.07-34,16.21-53.54,16.21q-186.24,0-372.48,0c-15.53,0-28.09-6.23-37.12-18.91a39.36,39.36,0,0,1-6.66-17.59c-1.9-13.76,1.23-26.39,10.8-36.58a41.69,41.69,0,0,1,30.1-13.68c4.95-.1,6.43-2.63,8.14-6.3,2.73-5.86,5.38-11.87,9.05-17.13,9.4-13.48,22.78-21.74,38.35-26.24,5-1.44,10.53-1.28,15.83-1.52,6.05-.27,5.84-.14,6.62-6A128.49,128.49,0,0,1,257,143.24a127,127,0,0,1,25.45-37.91,127.43,127.43,0,0,1,80.43-37.8c43-4.11,89.7,16.88,114.6,52,6.11,8.62,10.59,18.41,15.74,27.71C494.1,148.83,494.76,150.52,495.83,152.83Z"/>
		    	</svg>

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

			    </div>

		    </div>
		  )
		}
}

export default About;