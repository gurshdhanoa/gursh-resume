import React from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

function useAnimation(durationValue, xValue, movingClass, triggerClass) {

        useEffect(() => {
            gsap.to(movingClass, {
              x: xValue,
              duration: durationValue,
              ease: "none",
              delay: 0.5,
              scrollTrigger: {
                trigger: triggerClass
              }
            });
          }, [])
}

export default useAnimation;