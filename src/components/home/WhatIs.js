import React from "react";
import whatIsImg from "../../assets/whatIs.JPG";

const WhatIs = () => {
  return (
    <div className="whatIsResponse">
      <div className="contentSection">
        <div className="rectangleWhatIs">
          <div className="rectangleYellow">
            <h4>¿En qué consiste?</h4>
            <p>
              La propuesta se basa en la revitalización del borde urbano
              conformado por las vías del ex Ferrocarril Belgrano que atravieza
              los distritos más poblados de Guaymallén y quedó en deshuso luego
              de la privatización del ferrocarril.
            </p>
          </div>
          <div className="rectangleWhite">
            <img src={whatIsImg} alt="Que es"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
