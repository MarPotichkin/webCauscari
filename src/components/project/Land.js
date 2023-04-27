import React from "react";
import entorno from "../../assets/entorno.png";
import dimensiones from "../../assets/dimensiones.png";
import niveles from "../../assets/niveles.png";
import reglamento from "../../assets/reglamento.png";

const Land = () => {
  return (
    <div className="containerLand">
      <div className="containerIconsLand">
        <div className="inconsLand">
          <div className="recImg">
            <img
              src={entorno}
              alt="Icono entorno"
              className="recImg"
              style={{ width: "auto", height: "auto" }}
            ></img>
            <p>Entorno</p>
          </div>
          <div className="recImg">
            <img src={dimensiones} alt="Icono dimensiones" className="recImg"></img>
            <p>Dimensiones</p>
          </div>
          <div className="recImg">
            <img src={niveles} alt="Icono niveles" className="recImg"></img>
            <p>Niveles</p>
          </div>
          <div className="recImg">
            <img src={reglamento} alt="Icono reglamento" className="recImg"></img>
            <p>Condiciones Reglamentarias</p>
          </div>
        </div>
      </div>
      <div className="containerTextLand">
        <div className="textLand">
          <p className="numberSection">03</p>
          <h4>Análisis de terreno</h4>
          <p className="descriptionLocation">
            Luego de haber realizado el análisis urbano macro, se procede a
            efectuar un análisis detallado de las condiciones específicas de
            cada sector de intervención que abarca desde los terrenos de la estación ferrocarril Belgrano
            hasta el cruce con el ramal San Martín.
          </p>
          <p className="descriptionLocation" style={{marginTop: "10px"}}>
            Durante este proceso de análisis, se consideran diferentes factores
            que influyen en la viabilidad de la intervención, tales como
            el entorno urbano, las dimensiones de los terrenos, las cotas de
            nivel, el código de edificación aplicable y los factores críticos que deben ser considerados. </p>
        </div>
      </div>
    </div>
  );
};

export default Land;
