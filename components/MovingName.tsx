'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion as m, useScroll, useTransform } from 'framer-motion';
function MovingName() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const firstText = useRef(null);

  const secondText = useRef(null);

  const slider = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    if (secondText.current) {
      const element = secondText.current as HTMLElement;
      gsap.set(element, {
        left: element.getBoundingClientRect().width,
      });
      requestAnimationFrame(animate);
    }
  }, []);

  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.03 * direction;
  };
  return (
    <m.div style={{ y }} className="absolute bottom-36 md:bottom-4">
      <div
        ref={slider}
        className="relative whitespace-nowrap text-[120px] pr-32 lg:text-[230px] lg:pr-36 text-white"
      >
        <p ref={firstText} className="relative m-0 ">
          Swaroop Dhungana -
        </p>
        <p ref={secondText} className="absolute left-[100%] top-0">
          Swaroop Dhungana -
        </p>
      </div>
    </m.div>
  );
}

export default MovingName;
