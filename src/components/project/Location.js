import React, { useState } from "react";

const Location = () => {
  const [isOnGuaymallen, setIsOnGuaymallen] = useState(false);

  const toggleSwitchGuaymallen = () => {
    setIsOnGuaymallen(!isOnGuaymallen);
  };

  const [isOnPopulation, setIsOnPopulation] = useState(false);

  const toggleSwitchPopulation = () => {
    setIsOnPopulation(!isOnPopulation);
  };

  const [isOnZoning, setIsOnZoning] = useState(false);

  const toggleSwitchZoning = () => {
    setIsOnZoning(!isOnZoning);
  };

  return (
    <div className="containerLocation">
      <div className="containerTextLocation">
        <div className="textLocation">
          <p className="numberSection">01</p>
          <h4>Análisis de la ubicación</h4>
          <p className="descriptionLocation">
            {" "}
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <div className="containerSwitch">
            <label className="switch" style={{ cursor: "default" }}>
              <input
                type="checkbox"
                checked="checked"
                disabled="disabled"
                style={{ cursor: "default" }}
              />
              <span className="slider" style={{ cursor: "default" }}></span>
            </label>
            {/* <label className="switch">
              <input type="checkbox" checked={isOnGuaymallen} onChange={toggleSwitchGuaymallen} />
              <span className="slider"></span>
            </label> */}
            <p>Guaymallén</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnPopulation}
                onChange={toggleSwitchPopulation}
              />
              <span className="slider"></span>
            </label>
            <p>Densidad poblacional</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnZoning}
                onChange={toggleSwitchZoning}
              />
              <span className="slider"></span>
            </label>
            <p>Zonificación</p>
          </div>
        </div>
      </div>
      <div className="mapsLocation">
        {/* {isOnGuaymallen && (
        <img src="https://example.com/myimage.jpg" alt="My Image" />
      )}
       {isOnPopulation && (
        <img src="https://example.com/myimage.jpg" alt="My Image" />
      )}
       {isOnZoning && (
        <img src="https://example.com/myimage.jpg" alt="My Image" />
      )} */}
        <div className="containerReferences">
          <div className="referencesPopulation">
            <p>Densidad poblacional (hab/km2)</p>
            <div className="structureReference">
              <div className="recReference ref1"></div>
              <p>0,01 - 1</p>
              <div className="recReference ref2"></div>
              <p>1,01 - 45</p>
              <div className="recReference ref3"></div>
              <p>45,01 - 530</p>
              <div className="recReference ref4"></div>
              <p>530,01 - 2500</p>
              <div className="recReference ref5"></div>
              <p>2500,01 - 6000</p>
              <div className="recReference ref6"></div>
              <p>6000,01 - 11259,13</p>
            </div>
          </div>
          <div className="referencesZoning">
            <p>Zonificación</p>
            <div className="structureRefZoning">
              <div className="recReference ref7"></div>
              <div>
                <p>Área Urbana</p>
                <p>Población: 71,5%</p>
                <p>Superficie: 26%</p>
              </div>

              <div className="recReference ref8"></div>
              <div>
                <p>Área Complementaria</p>
                <p>Población: 20,1%</p>
                <p>Superficie: 28%</p>
              </div>
              <div className="recReference ref9"></div>
              <div>
                <p>Área Urbana</p>
                <p>Población: 8,4%</p>
                <p>Superficie: 46%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
