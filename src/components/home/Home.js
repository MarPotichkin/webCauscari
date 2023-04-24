import React, { createRef, useEffect, useRef, useState } from "react";
import HowIs from "./HowIs";
import Presentation from "./Presentation";
import WhatIs from "./WhatIs";
import Where from "./Where";
import WhyThis from "./WhyThis";
import PaginationHome from "../pagination/PaginationHome";
import "../../styles/home.css";

const Home = ({ sectionsHome, activeSection, setActiveSection }) => {
  const [whereView, setWhereView] = useState(false);

  const activeView = sectionsHome.map((item) => {
    return item === activeSection ? "character-block--active" : "";
  });

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
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.3,
    };

    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeSection && entry.isIntersecting) {
          setActiveSection(entry.target.id);
          if (entry.target.id === "where") {
            setWhereView(true);
          } else {
            setWhereView(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observeConfig
    );
    Object.values(sectionRefs).forEach((ref) => observer.observe(ref.current));
    return () => observer.disconnect();
  }, [activeSection, setActiveSection, sectionRefs]);

  const handleCLick = (id) => {
    setActiveSection(id);
    sectionRefs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="homeContainer">
      <PaginationHome
        sectionsHome={sectionsHome}
        activeSection={activeSection}
        handleCLick={handleCLick}
      />
      <div className="webSection">
        <section
          className={`character-block ${activeView[0]}`}
          id={sectionsHome[0]}
          ref={sectionRefs[sectionsHome[0]]}
        >
          <Presentation id="presentation" />
        </section>
        <section
          className={`character-block ${activeView[1]}`}
          id={sectionsHome[1]}
          ref={sectionRefs[sectionsHome[1]]}
        >
          <WhatIs id="whatIs" />
        </section>
        <section
          className={`character-block ${activeView}`}
          id={sectionsHome[2]}
          ref={sectionRefs[sectionsHome[2]]}
        >
          <Where id="where" whereView={whereView} />
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
