import React, { createRef, useEffect, useState } from 'react'
import Location from './Location';
import Indicators from './Indicators';
import Land from './Land';
import Analysis from './Analysis';
import Regulation from './Regulation';
import Premises from './Premises';
import Idea from './Idea';
import Proposal from './Proposal';
import PaginationProyect from '../pagination/PaginationProyect';
import "../../styles/proyect.css";


const Proyect = ({sectionsProyect, activeSectionProyect, setActiveSectionProyect}) => {

  const activeView = sectionsProyect.map((item) => {
    return item === activeSectionProyect ? "character-block--active" : "";
  });

  const [sectionRefs, setSectionRefs] = useState({});

  useEffect(() => {
    setSectionRefs(
      sectionsProyect.reduce((acc, section) => {
        acc[section] = acc[section] || createRef();
        return acc;
      }, {})
    );
  }, [sectionsProyect]);

  useEffect(() => {
    const observeConfig = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.3,
    };

    const handleIntersection = function (entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeSectionProyect && entry.isIntersecting) {
          setActiveSectionProyect(entry.target.id);
          console.log(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observeConfig
    );
    Object.values(sectionRefs).forEach(ref => observer.observe(ref.current));
    return () => observer.disconnect();
  }, [activeSectionProyect, setActiveSectionProyect, sectionRefs]);

  const handleCLick = (id) => {
    setActiveSectionProyect(id);
    sectionRefs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div>
      <div className="proyectContainer">
        <PaginationProyect
          sectionsProyect={sectionsProyect}
          activeSectionProyect={activeSectionProyect}
          handleCLick={handleCLick}
        />
        <div className="webSection">
          <section
            className={`character-block ${activeView[0]}`}
            id={sectionsProyect[0]}
            ref={sectionRefs[sectionsProyect[0]]}
          >
            <Location id="Guaymallén" />
          </section>
          <section
            className={`character-block ${activeView[1]}`}
            id={sectionsProyect[1]}
            ref={sectionRefs[sectionsProyect[1]]}
          >
            <Indicators id="Indicadores" />
          </section>
          <section
            className={`character-block ${activeView}`}
            id={sectionsProyect[2]}
            ref={sectionRefs[sectionsProyect[2]]}
          >
            <Land id="Terreno" />
          </section>
          <section
            className={`character-block ${activeView}`}
            id={sectionsProyect[3]}
            ref={sectionRefs[sectionsProyect[3]]}
          >
            <Analysis id="Análisis" />
          </section>
          <section
            className={`character-block ${activeView}`}
            id={sectionsProyect[4]}
            ref={sectionRefs[sectionsProyect[4]]}
          >
            <Regulation id="Código" />
          </section>
          <section
            className={`character-block ${activeView}`}
            id={sectionsProyect[5]}
            ref={sectionRefs[sectionsProyect[5]]}
          >
            <Premises id="Premisas" />
          </section>
          <section
            className={`character-block ${activeView}`}
            id={sectionsProyect[6]}
            ref={sectionRefs[sectionsProyect[6]]}
          >
            <Idea id="Idea" />
          </section>
          <section
            className={`character-block ${activeView}`}
            id={sectionsProyect[7]}
            ref={sectionRefs[sectionsProyect[7]]}
          >
            <Proposal id="Propuesta" />
            </section>
        </div>
      </div>
    </div>
  )
}

export default Proyect