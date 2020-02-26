import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  timeline
    .from(node, .75, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

  return timeline;
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const text1 = node.querySelectorAll('#intro-text-one');
  const text2 = node.querySelectorAll('#intro-text-two');
  const text3 = node.querySelectorAll('#intro-text-three');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(text1, .7, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 2 )
    .staggerFrom(text2, 1, { autoAlpha: 0, x: -55, ease: Power1.easeOut }, 5, 3)
    .staggerFrom(text3, 3, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 5, 5 );

  return timeline;
}

const getAboutTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const octopusLeftSide = node.querySelectorAll('.about-block-left');
  const octopusRightSide = node.querySelectorAll('.about-block-right');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay })
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
    timeline = getDefaultTimeline(node, delay);

  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
}
