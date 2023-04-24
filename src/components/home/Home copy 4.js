import React, { createRef, useEffect, useRef, useState } from "react";
import HowIs from "./HowIs";
import Presentation from "./Presentation";
import WhatIs from "./WhatIs";
import Where from "./Where";
import WhyThis from "./WhyThis";
import PaginationHome from "../pagination/PaginationHome";
import "../../styles/home.css";

const Home = ({ sectionsHome, activeSection, setActiveSection }) => {

    const activeView = sectionsHome.map((item) => {
      return item === activeSection ? "character-block--active" : "";
    });

    // const sectionRefs = useRef(
    //   sectionsHome.reduce((acc, section) => {
    //     acc[section] = sectionRefs.current[section] || createRef();
    //     return acc;
    //   }, {})
    // );
    const [sectionRefs, setSectionRefs] = useState({});

    useEffect(() => {
      setSectionRefs(
        sectionsHome.reduce((acc, section) => {
          acc[section] = acc[section] || createRef();
          return acc;
        }, {})
      );
    }, [sectionsHome]);
    useEffect(() => {
      const observeConfig = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
  
      const handleIntersection = function (entries) {
        entries.forEach((entry) => {
          console.log(entry.target.id);
          if (entry.target.id !== activeSection && entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };
      const observer = new IntersectionObserver(
        handleIntersection,
        observeConfig
      );
      Object.values(sectionRefs.current).map(ref => observer.observe(ref.current));
      return () => observer.disconnect();
    }, [activeSection, setActiveSection, sectionsHome, sectionRefs]);
  
    const refs = sectionsHome.reduce((refsObj, sectionHome) => {
      refsObj[sectionHome] = createRef();
      return refsObj;
    }, {});
  
    const handleCLick = (id) => {
      setActiveSection(id);
      sectionRefs.current[id].current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
  
    return (
      <div>
        <PaginationHome
          sectionsHome={sectionsHome}
          activeSection={activeSection}
          handleCLick={handleCLick}
        />
        <div className="webSection">
          <section
            className={`character-block ${activeView[0]}`}
            id={sectionsHome[0]}
            ref={sectionRefs.current[sectionsHome[0]]}
          >
            <Presentation id="presentation" />
          </section>
          <section
            className={`character-block ${activeView[1]}`}
            id={sectionsHome[1]}
            ref={sectionRefs.current[sectionsHome[1]]}
          >
            <WhatIs id="whatIs" />
            </section>
        <section
          className={`character-block ${activeView}`}
          id={sectionsHome[2]}
          ref={sectionRefs[sectionsHome[2]]}
        >
          <Where id="where" />
        </section>
        <section
          className={`character-block ${activeView}`}
          id={sectionsHome[3]}
          ref={sectionRefs[sectionsHome[3]]}
        >
          <WhyThis id="whyThis" />
        </section>
        <section
          className={`character-block ${activeView}`}
          id={sectionsHome[4]}
          ref={sectionRefs[sectionsHome[4]]}
        >
          <HowIs id="HowIs" />
        </section>
      </div>
    </div>
  );
};

export default Home;