import React, { useEffect, useRef, useState, } from 'react'
import HowIs from './HowIs'
import Presentation from './Presentation'
import WhatIs from './WhatIs'
import Where from './Where'
import WhyThis from './WhyThis'
import PaginationHome from '../pagination/PaginationHome'
import "../../styles/home.css";
// import { useLocation } from 'react-router-dom'

const Home = () => {

const [sectionInView, setSectionInView] = useState(0);

const sectionRefs = useRef([]);
console.log(sectionRefs);

const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionRefs.current.indexOf(entry.target);
        setSectionInView(index);
      }
    });
  };

useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
        <PaginationHome sectionRefs={sectionRefs} colorFill={sectionInView === 0 ? "red" : "white"}/>
        <div className='webSection'>
            <section ref={(ref) => sectionRefs.current[0] = ref}>     
                <Presentation />
            </section>
            <section ref={(ref) => sectionRefs.current[1] = ref}>
            
                <WhatIs/>
            </section>
            <section ref={(ref) => sectionRefs.current[2] = ref}>
                <WhyThis/>
            </section>
            <section ref={(ref) => sectionRefs.current[3] = ref}>
                <Where/>
            </section>
            <section ref={(ref) => sectionRefs.current[4] = ref}>
                <HowIs/>
            </section>
        </div>
    </div>
  )
}

export default Home