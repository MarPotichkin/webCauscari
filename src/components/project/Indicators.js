import React, { useState } from "react";
import norte from "../../assets/Norte.png";
import baseIndicators from "../../assets/baseIndicadores.png";
import nameDistritos from "../../assets/indicadoresDistritos.png";
import viasTerreno from "../../assets/indicadoresVias.png";
import callesIndicadores from "../../assets/callesIndicadores.png";
import biciIndicadores from "../../assets/biciIndicadores.png";
// import busIndicadores from "../../assets/busIndicadores.png"
import espPublicoIndicadores from "../../assets/espPublicoIndicadores.png";
import culturaIndicadores from "../../assets/culturaIndicadores.png";
import municipioIndicadores from "../../assets/municipioIndicadores.png";
import deporteIndicadores from "../../assets/deporteIndicadores.png";
import cultoIndicadores from "../../assets/cultoIndicadores.png";
import policiaIndicadores from "../../assets/policiaIndicadores.png";
import educacionIndicadores from "../../assets/educacionIndicadores.png";
import saludIndicadores from "../../assets/saludIndicadores.png";
// import comercioIndicadores from "../../assets/comercioIndicadores.png"

const Indicators = () => {
  // vías
  const [isOnRailway, setIsOnRailway] = useState(false);
  const toggleSwitchRailway = () => {
    setIsOnRailway(!isOnRailway);
  };

  // distritos
  const [isOnDistrict, setIsOnDistrict] = useState(false);
  const toggleSwitchDistrict = () => {
    setIsOnDistrict(!isOnDistrict);
  };

  //calles
  const [isOnStreet, setIsOnStreet] = useState(false);
  const toggleSwitchStreet = () => {
    setIsOnStreet(!isOnStreet);
  };

  // bicisendas
  const [isOnBicycle, setIsOnBicycle] = useState(false);
  const toggleSwitchBicycle = () => {
    setIsOnBicycle(!isOnBicycle);
  };

  // micros
  // const [isOnBus, setIsOnBus] = useState(false);
  // const toggleSwitchBus = () => {
  //   setIsOnBus(!isOnBus);
  // };

  // espacio publico
  const [isOnPublicSpace, setIsOnPublicSpace] = useState(false);
  const toggleSwitchPublicSpace = () => {
    setIsOnPublicSpace(!isOnPublicSpace);
  };

  // cultural
  const [isOnCulture, setIsOnCulture] = useState(false);
  const toggleSwitchCulture = () => {
    setIsOnCulture(!isOnCulture);
  };

  // municipal
  const [isOnMunicipal, setIsOnMunicipal] = useState(false);
  const toggleSwitchMunicipal = () => {
    setIsOnMunicipal(!isOnMunicipal);
  };

  // deportivo
  const [isOnSporty, setIsOnSporty] = useState(false);
  const toggleSwitchSporty = () => {
    setIsOnSporty(!isOnSporty);
  };

  // culto
  const [isOnWorship, setIsOnWorship] = useState(false);
  const toggleSwitchWorship = () => {
    setIsOnWorship(!isOnWorship);
  };

  // policia
  const [isOnPolice, setIsOnPolice] = useState(false);
  const toggleSwitchPolice = () => {
    setIsOnPolice(!isOnPolice);
  };

  // educación
  const [isOnEducation, setIsOnEducation] = useState(false);
  const toggleSwitchEducation = () => {
    setIsOnEducation(!isOnEducation);
  };

  // salud
  const [isOnHealth, setIsOnHealth] = useState(false);
  const toggleSwitchHealth = () => {
    setIsOnHealth(!isOnHealth);
  };

  // comercio
  // const [isOnStore, setIsOnStore] = useState(false);
  // const toggleSwitchStore = () => {
  //   setIsOnStore(!isOnStore);
  // };

  return (
    <div className="containerIndicators">
      <div className="containerTextIndicators">
        <div className="textIndicators">
          <p className="numberSection">02</p>
          <h4>Indicadores urbanos</h4>
          <p className="descriptionIndicators">
            Los indicadores urbanos permiten comprender la situación actual y
            las tendencias de desarrollo en términos de crecimiento poblacional,
            uso del suelo, calidad de vida y otros aspectos relevantes. 
          </p>
          <p className="descriptionIndicators" style={{marginTop: "10px"}}>
            La finalidad de los mismos es promover intervenciones con un carácter sostenible y que mejoren la calidad de
            vida de los habitantes.</p>
        </div>
      </div>
      <div className="containerSwitchIndicators">
        <div className="containerSwitchColumn">
          <p className="switchTitle">Zona de intervención</p>
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
              checked={isOnRailway}
              onChange={toggleSwitchRailway}
            />
            <span className="slider"></span>
          </label>
          <p>Zona intervención</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnStreet}
              onChange={toggleSwitchStreet}
            />
            <span className="slider"></span>
          </label>
          <p>Calles y FFCC</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnDistrict}
              onChange={toggleSwitchDistrict}
            />
            <span className="slider"></span>
          </label>
          <p>Distritos</p>
          <p className="switchTitle">Transporte</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnBicycle}
              onChange={toggleSwitchBicycle}
            />
            <span className="slider"></span>
          </label>
          <p>Bicisendas</p>
          {/* <label className="switch">
            <input
              type="checkbox"
              checked={isOnBus}
              onChange={toggleSwitchBus}
            />
            <span className="slider"></span>
          </label>
          <p>Recorrido de micros</p> */}
          <p className="switchTitle">Áreas verdes</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnPublicSpace}
              onChange={toggleSwitchPublicSpace}
            />
            <span className="slider"></span>
          </label>
          <p>Espacio público</p>
        </div>
        <div className="containerSwitchColumn">
          <p className="switchTitle">Equipamiento</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnCulture}
              onChange={toggleSwitchCulture}
            />
            <span className="slider"></span>
          </label>
          <p>Cultural</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnMunicipal}
              onChange={toggleSwitchMunicipal}
            />
            <span className="slider"></span>
          </label>
          <p>Municipal</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnSporty}
              onChange={toggleSwitchSporty}
            />
            <span className="slider"></span>
          </label>
          <p>Deportivo</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnWorship}
              onChange={toggleSwitchWorship}
            />
            <span className="slider"></span>
          </label>
          <p>Culto</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnPolice}
              onChange={toggleSwitchPolice}
            />
            <span className="slider"></span>
          </label>
          <p>Policía</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnEducation}
              onChange={toggleSwitchEducation}
            />
            <span className="slider"></span>
          </label>
          <p>Educación</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOnHealth}
              onChange={toggleSwitchHealth}
            />
            <span className="slider"></span>
          </label>
          <p>Salud</p>
          {/* <label className="switch">
            <input
              type="checkbox"
              checked={isOnStore}
              onChange={toggleSwitchStore}
            />
            <span className="slider"></span>
          </label>
          <p>Comercio PPAL</p> */}
        </div>
        <div className="containerSwitchColumn2">
          <p className="switchTitle">Referencias</p>
          <div className="recReference ref10"></div>
          <p>Espacio Público</p>
          <div className="recReference ref11"></div>
          <p>Cultural</p>
          <div className="recReference ref12"></div>
          <p>Municipal</p>
          <div className="recReference ref13"></div>
          <p>Deportivo</p>
          <div className="recReference ref14"></div>
          <p>Culto</p>
          <div className="recReference ref15"></div>
          <p>Policía</p>
          <div className="recReference ref16"></div>
          <p>Educación</p>
          <div className="recReference ref17"></div>
          <p>Salud</p>
          {/* <div className="recReference ref2"></div>
              <p>Comercio</p> */}
        </div>
      </div>
      <div className="mapsIndicators">
        <div className="positionImg02">
          <img
            src={norte}
            style={{ height: "auto", width: "1.5%" }}
            className="norteIndicadores" alt="Norte"
          ></img>
          <img
            src={baseIndicators}
            style={{ height: "auto", width: "85%" }}
            className="baseImg" alt="Plano base"
          ></img>
          {isOnDistrict && (
            <img
              src={nameDistritos}
              alt="Distritos"
              style={{ height: "auto", width: "85%" }}
              className="distIndicadoresImg"
            />
          )}
          {isOnRailway && (
            <img
              src={viasTerreno}
              alt="Terreno"
              style={{ height: "auto", width: "85%" }}
              className="viasIndicadoresImg"
            />
          )}
          {isOnStreet && (
            <img
              src={callesIndicadores}
              alt="Calles - ubicación"
              style={{ height: "auto", width: "85%" }}
              className="callesIndImg"
            />
          )}
          {isOnBicycle && (
            <img
              src={biciIndicadores}
              alt="Bicisendas"
              style={{ height: "auto", width: "85%" }}
              className="biciIndImg"
            />
          )}
          {/* {isOnBus && (<img src={busIndicadores} alt="My Image" style={{height: "auto", width:"85%"}} className="busIndImg"/>)} */}
          {isOnPublicSpace && (
            <img
              src={espPublicoIndicadores}
              alt="Espacio público"
              style={{ height: "auto", width: "85%" }}
              className="espPubIndImg"
            />
          )}
          {isOnCulture && (
            <img
              src={culturaIndicadores}
              alt="Espacios culturales"
              style={{ height: "auto", width: "85%" }}
              className="culturaIndImg"
            />
          )}
          {isOnMunicipal && (
            <img
              src={municipioIndicadores}
              alt="Equipamiento municipal"
              style={{ height: "auto", width: "85%" }}
              className="municipioIndImg"
            />
          )}
          {isOnSporty && (
            <img
              src={deporteIndicadores}
              alt="Equipamiento deportivo"
              style={{ height: "auto", width: "85%" }}
              className="deporteIndImg"
            />
          )}
          {isOnWorship && (
            <img
              src={cultoIndicadores}
              alt="Equipamiento de culto"
              style={{ height: "auto", width: "85%" }}
              className="cultoIndImg"
            />
          )}
          {isOnPolice && (
            <img
              src={policiaIndicadores}
              alt="Policía"
              style={{ height: "auto", width: "85%" }}
              className="policiaIndImg"
            />
          )}
          {isOnEducation && (
            <img
              src={educacionIndicadores}
              alt="Educación"
              style={{ height: "auto", width: "85%" }}
              className="educacionIndImg"
            />
          )}
          {isOnHealth && (
            <img
              src={saludIndicadores}
              alt="Salud"
              style={{ height: "auto", width: "85%" }}
              className="saludIndImg"
            />
          )}
          {/* {isOnStore && (<img src={comercioIndicadores} alt="My Image" style={{height: "auto", width:"85%"}} className="comercioIndImg"/>)} */}
        </div>
      </div>
    </div>
  );
};

export default Indicators;
