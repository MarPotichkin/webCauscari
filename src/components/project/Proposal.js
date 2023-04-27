import React, { useState } from "react";
import proposalData from "../../dates/proposalData.json";
import { Link } from "react-router-dom";

const Proposal = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);

  function renderCircleItem() {
    return proposalData.map((proposal, index) => {
      const circleClasses = `circleProgress ${index === selectedCircle ? 'selected' : ''}`;
      return (
        <Link key={index} onClick={() => setSelectedCircle(index)} disabled={index === 0}>
          <div className="infoCircle">
            <div className={circleClasses}></div>
            <div className="textCircle">{proposal.eje}</div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="containerProposal">
      <div className="containerTextProposal">
        <div className="textProposal">
          <p className="numberSection">06</p>
          <h4>Propuesta</h4>
          <p className="descriptionIndicators" style={{textDecoration: "underline "}}>{proposalData[selectedCircle].name}:</p>
          <p className="descriptionIndicators"> {proposalData[selectedCircle].description} </p>
          <p className="descriptionIndicators" style={{marginTop: "1%"}}> {proposalData[selectedCircle].description2} </p>
        </div>
      </div>
      <div className="containerIconsProposal">
        {proposalData[selectedCircle].icons.map((icon, index) => (
          <div key={index}>
            <p>{icon}</p>
          </div>
        ))}
      </div>
      <div className="selectorProposal">
        <div className="imgProgress"></div>
          <p>Seleccione el eje de acción:</p>
        <div className="progressBar">
        <div className="lineProgress"></div>
          {renderCircleItem()}
        </div>
      </div>
    </div>
  );
};

export default Proposal;
