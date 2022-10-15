import { useEffect } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);



function useScrollSnap(scrollerClass, mainViewClass, triggerClass) {

    useEffect(() => {
        gsap.to(scrollerClass, {
            scale: 4,
            duration: 2,
            ease: 'back',
            delay: 0.5,
            scrollTrigger: {
                trigger: triggerClass,
                scroller:  mainViewClass,
                start: 'center 55%',
                markers: false,
                toggleActions: 'play complete restart reverse'
          }
        });
      }, [])
}

export default useScrollSnap;