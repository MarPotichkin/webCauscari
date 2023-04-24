import React, { useEffect, useRef, useState, } from 'react'
import HowIs from './HowIs'
import Presentation from './Presentation'
import WhatIs from './WhatIs'
import Where from './Where'
import WhyThis from './WhyThis'
import PaginationHome from '../pagination/PaginationHome'
import "../../styles/home.css";

const Home = () => {

// Estado para guardar qué sección está actualmente en pantalla
const [sectionInView, setSectionInView] = useState(0);

// const sectionRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null)
// ]

// const sectionRefs = Array.from({ length: 5 }, () => useRef(null));


// const sectionRefs = [];

// console.log(sectionRefs);

// Función para cambiar el estado de la sección actualmente en pantalla
// const handleIntersection = (entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         const index = sectionRefs.indexOf(entry.target.id);
//         console.log(entry.target.id)
//         console.log("index",index);
//         if (index !== -1 && entry.isIntersecting) {
//             setSectionInView(index);
//             console.log('entry:', entry);
//             console.log('sectionRefs:', sectionRefs);
//             console.log('index:', index);
//       }
//     });    
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     });
//     sectionRefs.current.forEach((section) => {
//       console.log(section);
//       observer.observe(section);
//     });
//     return () => observer.disconnect();
//   }, []);

// useEffect(() => {
//     sectionRefs.forEach((section, index) => {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.target !== null) {
//             setSectionInView(index);
//           }
//         });
//       }, { threshold: 0.5 });

//       observer.observe(section);
//     })

//     return () => {
//       sectionRefs.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//     // return () => observer.disconnect();
//   }, []);


// useEffect(() => {
//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     });

//     sectionRefs.forEach((section) => observer.observe(section.current));

//     return () => observer.disconnect();
//   }, []);


// console.log('sectionInView:', sectionInView);
// const sectionRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null)
//   ]

    const sectionRefs = [];
    const observer = useRef(null); // <-- agregar esta línea

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const index = sectionRefs.indexOf(entry.target);
      console.log("target", entry.target);
      console.log("index", index);
      if (index !== -1 && entry.isIntersecting) {
        setSectionInView(index);
      }
    });
  };

  useEffect(() => {
    // console.log(observer.current.observe(section.current));
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    sectionRefs.forEach((section) => 
        // observer.current.observe(section.current)
        console.log(observer.current.observe(section.current)));    
    
    return () => {
      sectionRefs.forEach((section) => observer.current.unobserve(section.current));
      observer.current.disconnect();
    };
  }, []);

  return (
    
    <div>
        {/* <PaginationHome sectionRefs={sectionRefs} colorFill={colorFill}/> */}
        <PaginationHome sectionRefs={sectionRefs} colorFill={sectionInView === 0 ? "red" : "white"}/>
        <div className='webSection'>
            <section id='0'  ref={sectionRefs[0]}>     
                <Presentation />
            </section>
            <section id='1' ref={sectionRefs[1]}>
            
                <WhatIs/>
            </section>
            <section id='2' ref={sectionRefs[2]}>
                <WhyThis/>
            </section>
            <section id='3' ref={sectionRefs[3]}>
                <Where/>
            </section>
            <section id='4' ref={sectionRefs[4]}>
                <HowIs/>
            </section>
        </div>
    </div>
  )
}

export default Home