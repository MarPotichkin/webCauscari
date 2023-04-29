import React, { useState } from "react";
import baseGuaymallen from "../../assets/baseGuaymallen.png";
import distritos from "../../assets/GuaymallenDistritos.png";
import population from "../../assets/densidadPobl.png";
import zoning from "../../assets/zonificacion.png";
import norte from "../../assets/NorteVertical.png";

const Location = () => {
  const [isOnDistritos, setIsOnDistritos] = useState(false);

  const toggleSwitchDistritos = () => {
    setIsOnDistritos(!isOnDistritos);
  };

  const [isOnPopulation, setIsOnPopulation] = useState(false);

  const toggleSwitchPopulation = () => {
    setIsOnPopulation(!isOnPopulation);
    setIsOnZoning(false);
  };

  const [isOnZoning, setIsOnZoning] = useState(false);

  const toggleSwitchZoning = () => {
    setIsOnZoning(!isOnZoning);
    setIsOnPopulation(false);
  };

  return (
    <div className="containerLocation">
      <div className="containerTextLocation">
        <div className="textLocation">
          <p className="numberSection">01</p>
          <h4>Análisis de la ubicación</h4>
          <p className="descriptionLocation">
            Como se ha podido observar previamente, el departamento de
            Guaymallén se posiciona como el de mayor densidad poblacional en la
            provincia de Mendoza. Con base en esta premisa, se ha llevado a cabo
            un análisis exhaustivo de las zonas donde se concentra la población,
            el cual ha permitido determinar que dichas áreas se encuentran
            distribuidas a lo largo de dos ejes lineales principales. Uno de
            estos ejes se extiende a lo largo del Acceso Este, mientras que el
            otro se ubica en las zonas contiguas a las vías del ramal A-10.
            Estas zonas de alta densidad poblacional se caracterizan por su
            dinamismo y actividad constante, lo que las convierte en puntos
            estratégicos para el desarrollo económico y social del departamento.
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
            <p>Guaymallén</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnDistritos}
                onChange={toggleSwitchDistritos}
              />
              <span className="slider"></span>
            </label>
            <p>Distritos</p>
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
        <div className="positionImg01">
          <img
            src={baseGuaymallen}
            alt="Plano Base"
            style={{ height: "auto", width: "100%" }}
            className="baseImg"
          ></img>
          <img src={norte} alt="Norte" className="norteVertical"></img>
          {isOnDistritos && (
            <img
              src={distritos}
              alt="Distritos"
              style={{ height: "auto", width: "100%" }}
              className="distImg"
            />
          )}
          {isOnPopulation && (
            <img
              src={population}
              alt="Población"
              style={{ height: "auto", width: "100%" }}
              className="populationImg"
            />
          )}
          {isOnZoning && (
            <img
              src={zoning}
              alt="Zonificación"
              style={{ height: "auto", width: "100%" }}
              className="zoningImg"
            />
          )}
        </div>
        <div className="containerReferences">
          <div className="referencesPopulation">
            <p>Densidad poblacional (hab/km<sup>2</sup>)</p>
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
                <p>Área Rural</p>
                <p>Población: 8,4%</p>
                <p>Superficie: 46%</p>
              </div>
            </div>
          </div>
          <div className="referencesRailway">
            <p>Vías Ramal A-10</p>
            <div className="structureRefZoning">
              <div className="recReference ref19"></div>
              <div>
                <p>Ferrocarril Belgrano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
