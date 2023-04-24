import React, { useState } from 'react'

const Analysis = () => {

  //ubicación
  const [isOnLocation, setIsOnLocation] = useState(false);
  const toggleSwitchLocation = () => {
    setIsOnLocation(!isOnLocation);
  };
   //dimensiones
   const [isOnDimension, setIsOnDimension] = useState(false);
   const toggleSwitchDimension = () => {
     setIsOnDimension(!isOnDimension);
   };
    //niveles
  const [isOnElevation, setIsOnElevation] = useState(false);
  const toggleSwitchElevation = () => {
    setIsOnElevation(!isOnElevation);
  };
   //entorno
   const [isOnEnvironment, setIsOnEnvironment] = useState(false);
   const toggleSwitchEnvironment = () => {
     setIsOnEnvironment(!isOnEnvironment);
   };
    //llenos y vacios
  const [isOnFull, setIsOnFull] = useState(false);
  const toggleSwitchFull = () => {
    setIsOnFull(!isOnFull);
  };
   //altura edificatoria
   const [isOnHeight, setIsOnHeight] = useState(false);
   const toggleSwitchHeight = () => {
     setIsOnHeight(!isOnHeight);
   };

  return (
    <div className='containerAnalysis'>
      <div className='containerMapSwitch'>
        <div className='map'></div>
        <div className='containerSwitchIndicators'>
          <div className='containerSwitchColumn analysis'>
            <label className="switch">
                <input type="checkbox" checked={isOnLocation} onChange={toggleSwitchLocation}/>
                <span className="slider"></span>
            </label>
            <p>Ubicación</p>
            <label className="switch">
                <input type="checkbox" checked={isOnDimension} onChange={toggleSwitchDimension}/>
                <span className="slider"></span>
            </label>
            <p>Dimensiones</p>
            <label className="switch">
                <input type="checkbox" checked={isOnElevation} onChange={toggleSwitchElevation}/>
                <span className="slider"></span>
            </label>
            <p>Niveles</p>
          </div>
          <div className='containerSwitchColumn analysis'>
          <label className="switch">
                <input type="checkbox" checked={isOnEnvironment} onChange={toggleSwitchEnvironment}/>
                <span className="slider"></span>
            </label>
            <p>Entorno</p>
            <label className="switch">
                <input type="checkbox" checked={isOnFull} onChange={toggleSwitchFull}/>
                <span className="slider"></span>
            </label>
            <p>Llenos y vacíos</p>
            <label className="switch">
                <input type="checkbox" checked={isOnHeight} onChange={toggleSwitchHeight}/>
                <span className="slider"></span>
            </label>
            <p>Altura edificatoria</p>
          </div>
        </div>
      </div>
      <div className='anal2'></div>
      <div className='mapSelectSection'>
        <p>Selecciona el sector de análisis:</p>
      </div>
    </div>
  )
}

export default Analysis