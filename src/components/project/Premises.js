import React from "react";
import iconPremisa from "../../assets/iconPremisa.png";

const Premises = () => {
  return (
    <div className="containerPremises">
      <div className="containerTextPremises">
        <div className="textPremises">
          <p className="numberSection">04</p>
          <h4>Premisas</h4>
          <p className="descriptionLocation">
            El objetivo principal de la propuesta consiste en proporcionar a la
            zona áreas para el desarrollo de actividades de la comunidad por
            medio de tres ejes: Ambiental, Recreacional y Social, generando
            espacios de cohesión, continuidad y revalorización del área.
          </p>
          <img
            src={iconPremisa} alt="Ejes de acción"
            style={{ width: "40%", height: "auto", margin: "2% 0" }}
          ></img>
          <p className="descriptionLocation">
            Las premisas para "Causcarí" son:{" "}
          </p>
        </div>
      </div>
      <div className="containerPoints">
        <div className="prem">
          <p className="numberPremise">1</p>
          <p className="textPremise">
            Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className="prem">
          <p className="numberPremise">2</p>
          <p className="textPremise">
            Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className="prem">
          <p className="numberPremise">3</p>
          <p className="textPremise">
            Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premises;
