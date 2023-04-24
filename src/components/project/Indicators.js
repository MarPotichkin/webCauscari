import React, { useState }  from "react";

const Indicators = () => {
  // distritos
  const [isOnDistrict, setIsOnDistrict] = useState(false);
  const toggleSwitchDistrict = () => {
    setIsOnDistrict(!isOnDistrict);
  };

  // bicisendas
  const [isOnBicycle, setIsOnBicycle] = useState(false);
  const toggleSwitchBicycle = () => {
    setIsOnBicycle(!isOnBicycle);
  };

  // micros
  const [isOnBus, setIsOnBus] = useState(false);
  const toggleSwitchBus = () => {
    setIsOnBus(!isOnBus);
  };

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

  return (
    <div className="containerIndicators">
      <div className="containerTextIndicators">
        <div className="textIndicators">
          <p className="numberSection">02</p>
          <h4>Indicadores urbanos</h4>
          <p className="descriptionIndicators">
            {" "}
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
      <div className="containerSwitchIndicators">
        <div className="containerSwitchColumn">
          <p className="switchTitle">Zona de intervención</p>
          <label className="switch" style={{ cursor: "default" }}>
              <input type="checkbox" checked="checked" disabled="disabled" style={{ cursor: "default" }}/>
              <span className="slider" style={{ cursor: "default" }}></span>
          </label>
            <p>Terrenos - vías ramal A-10 </p>
          <label className="switch">
            <input type="checkbox" checked={isOnDistrict} onChange={toggleSwitchDistrict}/>
            <span className="slider"></span>
          </label>
          <p>Distritos de Guaymallén</p>
          <p className="switchTitle">Transporte</p>
          <label className="switch">
            <input type="checkbox" checked={isOnBicycle} onChange={toggleSwitchBicycle}/>
            <span className="slider"></span>
          </label>
          <p>Bicisendas</p>
          <label className="switch">
            <input type="checkbox" checked={isOnBus} onChange={toggleSwitchBus}/>
            <span className="slider"></span>
          </label>
          <p>Recorrido de micros</p>
          <p className="switchTitle">Áreas verdes</p>
          <label className="switch">
            <input type="checkbox" checked={isOnPublicSpace} onChange={toggleSwitchPublicSpace}/>
            <span className="slider"></span>
          </label>
          <p>Espacio público</p>
        </div>
        <div className="containerSwitchColumn">
          <p className="switchTitle">Equipamiento</p>
          <label className="switch">
            <input type="checkbox" checked={isOnCulture} onChange={toggleSwitchCulture}/>
            <span className="slider"></span>
          </label>
          <p>Cultural</p>
          <label className="switch">
            <input type="checkbox" checked={isOnMunicipal} onChange={toggleSwitchMunicipal}/>
            <span className="slider"></span>
          </label>
          <p>Municipal</p>
          <label className="switch">
            <input type="checkbox" checked={isOnSporty} onChange={toggleSwitchSporty}/>
            <span className="slider"></span>
          </label>
          <p>Deportivo</p>
          <label className="switch">
            <input type="checkbox" checked={isOnWorship} onChange={toggleSwitchWorship}/>
            <span className="slider"></span>
          </label>
          <p>Culto</p>
          <label className="switch">
            <input type="checkbox" checked={isOnPolice} onChange={toggleSwitchPolice}/>
            <span className="slider"></span>
          </label>
          <p>Policía</p>
          <label className="switch">
            <input type="checkbox" checked={isOnEducation} onChange={toggleSwitchEducation}/>
            <span className="slider"></span>
          </label>
          <p>Educación</p>
          <label className="switch">
            <input type="checkbox" checked={isOnHealth} onChange={toggleSwitchHealth}/>
            <span className="slider"></span>
          </label>
          <p>Salud</p>
        </div>
      </div>
      <div className="row1"></div>
    </div>
  );
};

export default Indicators;
