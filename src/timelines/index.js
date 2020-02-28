import { TimelineMax as Timeline, Power1 } from 'gsap';

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const bodyHome = document.querySelector('body');
  const text1 = node.querySelector('#intro-text-one');
  const text2 = node.querySelector('#intro-text-two');
  const text3 = node.querySelector('#intro-text-three');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .to(bodyHome, 2, { backgroundColor: '#444444' }, '-=2')
    .staggerFrom(text1, .7, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 2 )
    .staggerFrom(text2, 1, { autoAlpha: 0, x: -55, ease: Power1.easeOut }, 5, 3)
    .staggerFrom(text3, 3, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 5, 5 );

  return timeline;
}

const getAboutTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const octopusLeftSide = node.querySelector('.about-block-left');
  const octopusRightSide = node.querySelector('.about-block-right');
  const bodyAbout = document.querySelector('body');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .to(bodyAbout, 2, { backgroundColor: '#0C0C21' }, '-=2' )
    .from(octopusLeftSide, 0.275, { autoAlpha: 0, y: 650 , ease: Power1.easeOut } )
    .from(octopusRightSide, 0.275, { autoAlpha: 0, y: 650 , ease: Power1.easeOut }, '-=0.275');

  return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay);
  else if (pathname === '/about')
    timeline = getAboutTimeline(node, delay);
  else
    timeline = getHomeTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
