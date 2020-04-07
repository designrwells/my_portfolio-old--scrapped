import { TimelineMax as Timeline, Power1, Linear } from 'gsap';

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const body = document.querySelector('body');
  const sun = node.querySelector('#sun');
  const wave1 = document.querySelector('#oceanwave-one');
  const wave2 = document.querySelector('#oceanwave-two');
  const wave3 = document.querySelector('#oceanwave-three');
  const wave4 = document.querySelector('#oceanwave-four');
  const wave5 = document.querySelector('#oceanwave-five');
  const underwater1 = document.querySelector('#underwater-one');
  const underwater2 = document.querySelector('#underwater-two');
  const text1 = node.querySelector('#intro-text-one');
  const text2 = node.querySelector('#intro-text-two');
  const text3 = node.querySelector('#intro-text-three');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .from(sun, 3, { y: 800 }, '-=2.2')
    .to(body, 2, { backgroundColor: '#E08724' }, '-=2')
    .to(wave5, 2, { fill: '#FBFCBA' }, '-=2')
    .to(wave4, 2, { fill: '#F5C649' }, '-=2')
    .to(wave3, 2, { fill: '#E08724' }, '-=2')
    .to(wave2, 2, { fill: '#BE641C' }, '-=2')
    .to(wave1, 2, { fill: '#4C230C' }, '-=2')
    .to(underwater2, 2, { backgroundColor: '#BE641C' }, '-=2')
    .to(underwater1, 2, { backgroundColor: '#4C230C' }, '-=2')
    .staggerFrom(text1, .3, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 4 )
    .staggerFrom(text2, 1, { autoAlpha: 0, x: -55, ease: Power1.easeOut }, 5, 4)
    .staggerFrom(text3, 3, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 5, 5 );

  return timeline;
}

const getAboutTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const wave1 = document.querySelector('#oceanwave-one');
  const wave2 = document.querySelector('#oceanwave-two');
  const wave3 = document.querySelector('#oceanwave-three');
  const wave4 = document.querySelector('#oceanwave-four');
  const wave5 = document.querySelector('#oceanwave-five');
  const underwater1 = document.querySelector('#underwater-one');
  const underwater2 = document.querySelector('#underwater-two');
  const cloud1 = node.querySelector('#cloud-one');
  const cloud2 = node.querySelector('#cloud-two');
  const octopusLeftSide = node.querySelector('.about-block-left');
  const octopusRightSide = node.querySelector('.about-block-right');
  const body = document.querySelector('body');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .to(body, 2, { backgroundColor: '#3F223A' }, '-=2' )
    .to(wave5, 2, { fill: '#1F152A' }, '-=2')
    .to(wave4, 2, { fill: '#C65A3A' }, '-=2')
    .to(wave3, 2, { fill: '#7E393C' }, '-=2')
    .to(wave2, 2, { fill: '#362960' }, '-=2')
    .to(wave1, 2, { fill: '#09123B' }, '-=2')
    .to(underwater2, 2, { backgroundColor: '#362960' }, '-=2')
    .to(underwater1, 2, { backgroundColor: '#09123B' }, '-=2')
    .to(cloud1, 35, { x: 700 }, '-=2')
    .to(cloud2, 35, { x: 500 }, '-=35')
    .from(octopusLeftSide, 0.4, { autoAlpha: 0, y: 650 , ease: Power1.easeOut }, '-=32.4')
    .from(octopusRightSide, 0.4, { autoAlpha: 0, y: 650 , ease: Power1.easeOut }, '-=32.4');

  return timeline;
}


const getSkillsTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const wave1 = document.querySelector('#oceanwave-one');
  const wave2 = document.querySelector('#oceanwave-two');
  const wave3 = document.querySelector('#oceanwave-three');
  const wave4 = document.querySelector('#oceanwave-four');
  const wave5 = document.querySelector('#oceanwave-five');
  const underwater1 = document.querySelector('#underwater-one');
  const underwater2 = document.querySelector('#underwater-two');
  const body = document.querySelector('body');
  const moon = node.querySelector('#moon');
  const star1 = node.querySelector('#star-one');
  const star2 = node.querySelector('#star-two');
  const star3 = node.querySelector('#star-three');
  const star4 = node.querySelector('#star-four');
  const star5 = node.querySelector('#star-five');
  const star6 = node.querySelector('#star-six');
  const star7 = node.querySelector('#star-seven');
  const star8 = node.querySelector('#star-eight');
  const star9 = node.querySelector('#star-nine');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .to(body, 2, { backgroundColor: '#040D1C' }, '-=2')
    .from(moon, 3, { y: 1400 }, '-=1.75')
    .from(star1, 3, { y:-450 }, '-=3')
    .from(star2, 3, { y:-940 }, '-=3')
    .from(star3, 3, { y:-500 }, '-=3')
    .from(star4, 3, { y:-860 }, '-=3')
    .from(star5, 3, { y:-740 }, '-=3')
    .from(star6, 3, { y:-920 }, '-=3')
    .from(star7, 3, { y:-480 }, '-=3')
    .from(star8, 3, { y:-960 }, '-=3')
    .from(star9, 3, { y:-560 }, '-=3')
    .to(wave5, 2, { fill: '#0A2C3D' }, '-=2')
    .to(wave4, 2, { fill: '##145163' }, '-=2')
    .to(wave3, 2, { fill: '#37768A' }, '-=2')
    .to(wave2, 2, { fill: '#5090A6' }, '-=2')
    .to(wave1, 2, { fill: '#8FD7EA' }, '-=2')
    .to(underwater2, 2, { backgroundColor: '#5090A6' }, '-=2')
    .to(underwater1, 2, { backgroundColor: '#8FD7EA' }, '-=2');

  return timeline;
}

const getProjectsTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const wave1 = document.querySelector('#oceanwave-one');
  const wave2 = document.querySelector('#oceanwave-two');
  const wave3 = document.querySelector('#oceanwave-three');
  const wave4 = document.querySelector('#oceanwave-four');
  const wave5 = document.querySelector('#oceanwave-five');
  const underwater1 = document.querySelector('#underwater-one');
  const underwater2 = document.querySelector('#underwater-two');
  const underwaterWrap1 = document.querySelector('#underwater-wrapper-one');
  const underwaterWrap2 = document.querySelector('#underwater-wrapper-two');
  const bottle = document.querySelector('.bottle');
  const body = document.querySelector('body');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .to(body, 1, { backgroundColor: '#777'}, '-=1')
    .to(bottle, 1, { css:{left:"-260px", opacity: 0 }, ease: Power1.easeOut }, '-=.5')
    .to(wave2, .01, { css:{filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,.0))'}, ease: Power1.easeOut})
    .to(wave1, .01, { css:{filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,.0))'}, ease: Power1.easeOut}, '-=.01')
    .to(wave5, .5, { autoAlpha: 0, ease: Power1.easeOut }, '-=.5')
    .to(wave4, .5, { autoAlpha: 0, ease: Power1.easeOut }, '-=.5')
    .to(wave3, .5, { autoAlpha: 0, ease: Power1.easeOut }, '-=.5')
    .to(underwaterWrap1, 1.5, {css:{bottom:"-800px"} })
    .to(underwaterWrap2, 1.5, {css:{bottom:"-800px"} }, '-=1.5')
    ;


  return timeline;
}

const getProjectsExit = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const bottle = document.querySelector('.bottle');
  const wave1 = document.querySelector('#oceanwave-one');
  const wave2 = document.querySelector('#oceanwave-two');
  const wave3 = document.querySelector('#oceanwave-three');
  const wave4 = document.querySelector('#oceanwave-four');
  const wave5 = document.querySelector('#oceanwave-five');
  const underwaterWrap1 = document.querySelector('#underwater-wrapper-one');
  const underwaterWrap2 = document.querySelector('#underwater-wrapper-two');
  const body = document.querySelector('body');

  timeline
    .to(underwaterWrap1, 2, {css:{bottom:"-2120px"} })
    .to(underwaterWrap2, 2, {css:{bottom:"-2055px"} }, '-=2')
    .to(wave2, 1.5, { css:{filter: 'drop-shadow(7px 0px 5px rgba(0,0,0,.6))'}}, '-=1.5' )
    .to(wave1, 1.5, { css:{filter: 'drop-shadow(7px 0px 5px rgba(0,0,0,.6))'}}, '-=1.5')
    .to(wave5, 1, { autoAlpha: 1, ease: Power1.easeOut }, '-=.5' )
    .to(wave4, 1, { autoAlpha: 1, ease: Power1.easeOut }, '-=1')
    .to(wave3, 1, { autoAlpha: 1, ease: Power1.easeOut }, '-=1')


    .to(bottle, 2, { css:{left:"120px", opacity: 1 }, autoAlpha: 1, ease: Power1.easeOut }, '-=2');

  return timeline;
}

const getPageExit = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  timeline
    .to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    
  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else if (pathname === '/about')
    timeline = getAboutTimeline(node, delay);
  else if (pathname === '/skills')
    timeline = getSkillsTimeline(node, delay);
  else if (pathname === '/projects')
    timeline = getProjectsTimeline(node, delay);
  else
    timeline = getHomeTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (pathname, node) => {
  let timeline

  if (pathname === '/projects')
    timeline = getProjectsExit(node);

  else 
   timeline= getPageExit(node);
  timeline.play();
}
