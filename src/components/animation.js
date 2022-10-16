import { useEffect } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function useAnimation(durationValue, xValue, yValue, movingClass, triggerClass) {

        useEffect(() => {
            gsap.to(movingClass, {
              x: xValue,
              y: yValue,
              duration: durationValue,
              ease: "none",
              delay: 0.5,
              scrollTrigger: {
                trigger: triggerClass,
                toggleActions: 'play complete restart reverse'
              }
            });
          }, [])
}

export default useAnimation;