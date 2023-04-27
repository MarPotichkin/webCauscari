import React, { useRef, useState } from "react";
import analysisData from "../../dates/analysisData.json";
import baseAnalysis from "../../assets/baseAnalysis2.png";
import norte from "../../assets/Norte.png";
import sec1 from "../../assets/mapsAnalysis/boton1.png";
import sec1d from "../../assets/mapsAnalysis/boton1des.png";
import sec2 from "../../assets/mapsAnalysis/boton2.png";
import sec2d from "../../assets/mapsAnalysis/boton2des.png";
import sec3 from "../../assets/mapsAnalysis/boton3.png";
import sec3d from "../../assets/mapsAnalysis/boton3des.png";
import sec4 from "../../assets/mapsAnalysis/boton4.png";
import sec4d from "../../assets/mapsAnalysis/boton4des.png";
import sec5 from "../../assets/mapsAnalysis/boton5.png";
import sec5d from "../../assets/mapsAnalysis/boton5des.png";
import sec6 from "../../assets/mapsAnalysis/boton6.png";
import sec6d from "../../assets/mapsAnalysis/boton6des.png";
import sec7 from "../../assets/mapsAnalysis/boton7.png";
import sec7d from "../../assets/mapsAnalysis/boton7des.png";
import { ReactComponent as LeftChevron } from "../../assets/chevron-left-svgrepo-com.svg";
import { ReactComponent as RightChevron } from "../../assets/chevron-right-svgrepo-com.svg";

const Analysis = () => {
  const [activeButton, setActiveButton] = useState(0);
  const handleButtonClick = (index) => {
    setActiveButton(index);
    if (!isOnLocation) {
      setIsOnLocation(!isOnLocation);
      setIsOnDimension(false);
      setIsOnElevation(false);
      setIsOnEnvironment(false);
      // setIsOnFull(false);
      // setIsOnHeight(false);
    }
  };

  //ubicación
  const [isOnLocation, setIsOnLocation] = useState(true);
  const toggleSwitchLocation = () => {
    setIsOnLocation(!isOnLocation);
    setIsOnDimension(false);
    setIsOnElevation(false);
    setIsOnEnvironment(false);
    // setIsOnFull(false);
    // setIsOnHeight(false);
  };

  //dimensiones
  const [isOnDimension, setIsOnDimension] = useState(false);
  const toggleSwitchDimension = () => {
    setIsOnDimension(!isOnDimension);
    setIsOnLocation(false);
    setIsOnElevation(false);
    setIsOnEnvironment(false);
    // setIsOnFull(false);
    // setIsOnHeight(false);
  };

  //niveles
  const [isOnElevation, setIsOnElevation] = useState(false);
  const toggleSwitchElevation = () => {
    setIsOnElevation(!isOnElevation);
    setIsOnLocation(false);
    setIsOnDimension(false);
    setIsOnEnvironment(false);
    // setIsOnFull(false);
    // setIsOnHeight(false);
  };

  //entorno
  const [isOnEnvironment, setIsOnEnvironment] = useState(false);
  const toggleSwitchEnvironment = () => {
    setIsOnEnvironment(!isOnEnvironment);
    setIsOnLocation(false);
    setIsOnDimension(false);
    setIsOnElevation(false);
    // setIsOnFull(false);
    // setIsOnHeight(false);
  };

  //llenos y vacios
  // const [isOnFull, setIsOnFull] = useState(false);
  // const toggleSwitchFull = () => {
  //   setIsOnFull(!isOnFull);
  //   setIsOnLocation(false);
  //   setIsOnDimension(false);
  //   setIsOnElevation(false);
  //   setIsOnEnvironment(false);
  //   setIsOnHeight(false);
  // };

  //altura edificatoria
  // const [isOnHeight, setIsOnHeight] = useState(false);
  // const toggleSwitchHeight = () => {
  //   setIsOnHeight(!isOnHeight); 
  //   setIsOnLocation(false);
  //   setIsOnDimension(false);
  //   setIsOnElevation(false);
  //   setIsOnEnvironment(false);
  //   setIsOnFull(false);
  // };

  if (
    isOnLocation === false &&
    !isOnDimension &&
    !isOnElevation &&
    !isOnEnvironment 
    // && !isOnFull &&
    // !isOnHeight
  ) {
    setIsOnLocation(true);
  }

  const stateButtonSec1 = `buttonAnalysis ${
    activeButton === 0 ? "show" : "hide"
  }`;
  const stateButtonSec2 = `buttonAnalysis ${
    activeButton === 1 ? "show" : "hide"
  }`;
  const stateButtonSec3 = `buttonAnalysis ${
    activeButton === 2 ? "show" : "hide"
  }`;
  const stateButtonSec4 = `buttonAnalysis ${
    activeButton === 3 ? "show" : "hide"
  }`;
  const stateButtonSec5 = `buttonAnalysis ${
    activeButton === 4 ? "show" : "hide"
  }`;
  const stateButtonSec6 = `buttonAnalysis ${
    activeButton === 5 ? "show" : "hide"
  }`;
  const stateButtonSec7 = `buttonAnalysis ${
    activeButton === 6 ? "show" : "hide"
  }`;

  const slideshow = useRef(null);

  const positionLeft = () => {
    if (slideshow.current?.children.length > 0) {
      //se obtiene el primer elemento
      const index = slideshow.current?.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";

      const lengthReasons = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${lengthReasons}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      });
    }
  };

  const positionRight = () => {
    if (slideshow.current?.children.length > 0) {
      //se obtiene el primer elemento
      const firstElement = slideshow.current.children[0];

      //transición para el slideshow
      slideshow.current.style.transition = `300ms ease-out all`;

      //obtengo el tamaño de pantalla que ocupa el card
      const lengthReasons = slideshow.current.children[0].offsetWidth;

      //movimiento a derecha
      slideshow.current.style.transform = `translateX(-${lengthReasons}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //cambiar de posición el 1er elemento y lo  pasa al final
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      //una vez que se mueve la card se ejecuta la función transition
      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  return (
    <div className="containerAnalysis">
      <div className="containerMapSwitch">
        <div className="map">
          <img
            src={norte}
            style={{ height: "10%", width: "auto" }}
            className="norteAnalysis" alt="Norte"
          ></img>
          {isOnLocation && (
            <img
              className="imgHeightAnalysis"
              src={require(`../../assets/mapsAnalysis/${analysisData[activeButton].ubicacion}`)}
              alt="ubicacion"
            ></img>
          )}
          {isOnDimension && (
            <img
              className="imgHeightAnalysis"
              src={require(`../../assets/mapsAnalysis/${analysisData[activeButton].dimensiones}`)}
              alt="dimensiones"
            ></img>
          )}
          {isOnElevation && (
            <img
              className="imgHeightAnalysis"
              src={require(`../../assets/mapsAnalysis/${analysisData[activeButton].niveles}`)}
              alt="cortes"
            ></img>
          )}
          {isOnEnvironment && (
            <img
              className="imgHeightAnalysis"
              src={require(`../../assets/mapsAnalysis/${analysisData[activeButton].entorno}`)}
              alt="entorno"
            ></img>
          )}
          <div className="supAnalysis" style={{ display: "flex" }}>
            {analysisData[activeButton]?.superficie.length > 1 ? (
              <>
                {analysisData[activeButton].superficie.map((sup, index) => (
                  <p style={{ fontSize: "10px" }} key={index}>
                    Superficie {index + 1}: {sup}
                    <sup>2</sup>
                  </p>
                ))}
              </>
            ) : (
              <p style={{ fontSize: "10px" }}>
                Superficie: {analysisData[activeButton].superficie}
                <sup>2</sup>
              </p>
            )}
          </div>
        </div>
        <div
          className="containerSwitchIndicators"
          style={{ marginTop: "10px" }}
        >
          <div className="containerSwitchColumn analysis">
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnLocation}
                onChange={toggleSwitchLocation}
              />
              <span className="slider"></span>
            </label>
            <p>Ubicación</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnDimension}
                onChange={toggleSwitchDimension}
              />
              <span className="slider"></span>
            </label>
            <p>Dimensiones</p>
            {/* <label className="switch">
              <input
                type="checkbox"
                checked={isOnElevation}
                onChange={toggleSwitchElevation}
              />
              <span className="slider"></span>
            </label>
            <p>Niveles</p> */}
          </div>
          <div className="containerSwitchColumn analysis">
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnElevation}
                onChange={toggleSwitchElevation}
              />
              <span className="slider"></span>
            </label>
            <p>Niveles</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnEnvironment}
                onChange={toggleSwitchEnvironment}
              />
              <span className="slider"></span>
            </label>
            <p>Entorno</p>
            {/* <label className="switch">
              <input
                type="checkbox"
                checked={isOnFull}
                onChange={toggleSwitchFull}
              />
              <span className="slider"></span>
            </label>
            <p>Llenos y vacíos</p>
            <label className="switch">
              <input
                type="checkbox"
                checked={isOnHeight}
                onChange={toggleSwitchHeight}
              />
              <span className="slider"></span>
            </label>
            <p>Altura edificatoria</p> */}
          </div>
        </div>
      </div>
      <div className="individualAnalysis">
        {/* {isOnLocation && <div>{analysisData[activeButton].ubicacion}</div>} */}
        {/* {isOnLocation && <img src={require(`../../assets/mapsAnalysis/${analysisData[activeButton].ubicacion}`)} alt="ubicacion 1"></img>} */}
        {/* {isOnDimension && <div>{analysisData[activeButton].dimensiones}</div>} */}
        {/* {isOnElevation && <div>{analysisData[activeButton].niveles}</div>} */}
        {/* {isOnEnvironment && <div>{analysisData[activeButton].entorno}</div>} */}
        {isOnEnvironment && (
          <div className="picturesEnvironment">
            <div className="contenedorPicturesEnvironment" ref={slideshow}>
              {analysisData[activeButton].fotos.map((foto, index) => (
                // <div key={index} className="imagenReferenciada">
                <div className="imagenReferenciada">
                  <img
                    key={index}
                    src={require(`../../assets/pictures/${analysisData[activeButton].fotos[index]}`)}
                    className="picture"
                    alt="fotos"
                  ></img>
                  <p className="picturesDescription">
                    {analysisData[activeButton].descripcion[index]}
                  </p> 
                 
                  </div>
              ))}
            </div>
            <div className="controlsAnalysis">
              <button onClick={positionLeft} className="buttonAnalysisChevron">
                <LeftChevron style={{ height: "30px", width: "auto" }} />
              </button>
              <button onClick={positionRight} className="buttonAnalysisChevron">
                <RightChevron style={{ height: "30px", width: "auto" }} />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mapSelectSection">
        <p>Selecciona el sector de análisis:</p>
        <div className="imgRecorteAnalysis">
          <img
            src={norte}
            style={{ height: "10%", width: "auto" }}
            className="norteAnalysis"
            alt="Norte"
          ></img>
          <img
            src={baseAnalysis}
            style={{ height: "100%", width: "auto" }}
            className="baseImg"
            alt="Plano Base"
          ></img>
          <button
            className={`sec1 ${activeButton === 0 ? "active" : ""}`}
            onClick={() => handleButtonClick(0)}
          >
            {activeButton === 0 ? (
              <img src={sec1} className={stateButtonSec1} alt="Seccion 1"></img>
            ) : (
              <img src={sec1d} className="buttonAnalysis" alt="Seccion 1d"></img>
            )}
          </button>
          <button
            className={`sec2 ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            {activeButton === 1 ? (
              <img src={sec2} className={stateButtonSec2} alt="Seccion 2"></img>
            ) : (
              <img src={sec2d} className="buttonAnalysis" alt="Seccion 2d"></img>
            )}
          </button>
          <button
            className={`sec3 ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            {activeButton === 2 ? (
              <img src={sec3} className={stateButtonSec3} alt="Seccion 3"></img>
            ) : (
              <img src={sec3d} className="buttonAnalysis" alt="Seccion 3d"></img>
            )}
          </button>
          <button
            className={`sec4 ${activeButton === 3 ? "active" : ""}`}
            onClick={() => handleButtonClick(3)}
          >
            {activeButton === 3 ? (
              <img src={sec4} className={stateButtonSec4} alt="Seccion 4"></img>
            ) : (
              <img src={sec4d} className="buttonAnalysis" alt="Seccion 4"></img>
            )}
          </button>
          <button
            className={`sec5 ${activeButton === 4 ? "active" : ""}`}
            onClick={() => handleButtonClick(4)}
          >
            {activeButton === 4 ? (
              <img src={sec5} className={stateButtonSec5} alt="Seccion 5"></img>
            ) : (
              <img src={sec5d} className="buttonAnalysis" alt="Seccion 5"></img>
            )}
          </button>
          <button
            className={`sec6 ${activeButton === 5 ? "active" : ""}`}
            onClick={() => handleButtonClick(5)}
          >
            {activeButton === 5 ? (
              <img src={sec6} className={stateButtonSec6} alt="Seccion 6"></img>
            ) : (
              <img src={sec6d} className="buttonAnalysis" alt="Seccion 6"></img>
            )}
          </button>
          <button
            className={`sec7 ${activeButton === 6 ? "active" : ""}`}
            onClick={() => handleButtonClick(6)}
          >
            {activeButton === 6 ? (
              <img src={sec7} className={stateButtonSec7} alt="Seccion 7"></img>
            ) : (
              <img src={sec7d} className="buttonAnalysis" alt="Seccion 7"></img>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
