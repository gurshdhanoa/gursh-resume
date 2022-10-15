import { useEffect } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function useAnimation(durationValue, xValue, movingClass, triggerClass) {

        useEffect(() => {
            gsap.to(movingClass, {
              x: xValue,
              duration: durationValue,
              ease: "none",
              delay: 0.5,
              scrollTrigger: {
                trigger: triggerClass,
                // toggleActions: 'play complete restart reverse'
              }
            });
          }, [])
}

export default useAnimation;