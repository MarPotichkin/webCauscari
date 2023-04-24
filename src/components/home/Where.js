import React, { useState } from "react";
import mapamundi from "../../assets/mapamundi.png";
import argentina from "../../assets/argentina.png";
import mendoza from "../../assets/mendoza.png";
import guaymallen from "../../assets/guaymallen.png";

const Where = ({whereView}) => {

  // const viewWhere = "where" === activeSection ? "running" : "paused";
  // const [animationPlayState, setAnimationPlayState] = useState('running');

  // console.log(viewWhere);
  // console.log(whereView);

  // const pauseAnimation = () => {
  //   setAnimationPlayState('paused');
  // };

  // const resumeAnimation = () => {
  //   setAnimationPlayState('running');
  // };


  return (
    <div className="whereResponse">
      <div className="contentSection">
        <p className={`p1 ${whereView ? "show" : "hide"}`}>Argentina</p>
        <img className={`mapamundi ${whereView ? "show" : "hide"}`} src={mapamundi}></img>
        <div className={`circlePosition1 ${whereView ? "show" : "hide"}`}></div>

        <p className={`p2 ${whereView ? "show" : "hide"}`}>Mendoza</p>
        <img className={`argentina ${whereView ? "show" : "hide"}`} src={argentina}></img>
        <div className={`circlePosition2 ${whereView ? "show" : "hide"}`}></div>

        <svg viewBox="0 0 500 500" className={`line1 ${whereView ? "show" : "hide"}`}>
          <path
            strokeDasharray="3, 3"
            stroke="black"
            strokeWidth="2"
            fill="none"
            d="M219,286 Q240,520 450,438"
          />
          {/* d="M219,286 Q217,454 450,438"/> */}
        </svg>

        <p className={`p3 ${whereView ? "show" : "hide"}`}>Guaymallén</p>
        <img className={`mendoza ${whereView ? "show" : "hide"}`} src={mendoza}></img>
        <div className={`circlePosition3 ${whereView ? "show" : "hide"}`}></div>

        <svg viewBox="0 0 500 500" className={`line2 ${whereView ? "show" : "hide"}`}>
          <path
            strokeDasharray="3, 3"
            stroke="black"
            strokeWidth="2"
            fill="none"
            d="M325,430 Q420,330 624,395"
          />
        </svg>

        <p className={`p4 ${whereView ? "show" : "hide"}`}>Vías ferrocarril Belgrano</p>
        <img className={`guaymallen ${whereView ? "show" : "hide"}`} src={guaymallen}></img>
        <div className={`circlePosition4 ${whereView ? "show" : "hide"}`}></div>

        <svg viewBox="0 0 500 500" className={`line3 ${whereView ? "show" : "hide"}`}>
          <path
            strokeDasharray="3, 3"
            stroke="black"
            strokeWidth="2"
            fill="none"
            d="M371,396 Q550,370 472,217"
          />
        </svg>

        <div className="location">
          <div className="locationText">
            <h4>Localización</h4>
            <p>Tramo del ramal A-10 que cruza Guaymallén de Este a Oeste.</p>
            <p>Se encuentra en estado de abandono desde la privatización.</p>
          </div>
          <div className="locationLine"></div>
        </div>
      </div>
    </div>
  );
};

export default Where;
