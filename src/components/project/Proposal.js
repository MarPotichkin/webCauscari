import React, { useState } from "react";
import proposalData from "../../dates/proposalData.json";

const Proposal = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);

  function renderCircleItem() {
    return proposalData.map((proposal, index) => {
      const circleClasses = `circleProgress ${index === selectedCircle ? 'selected' : ''}`;
      return (
        <a key={index} onClick={() => setSelectedCircle(index)} disabled={index === 0}>
          <div className="infoCircle">
            <div className={circleClasses}></div>
            <div className="textCircle">{proposal.eje}</div>
          </div>
        </a>
      );
    });
  }

  return (
    <div className="containerProposal">
      <div className="containerTextProposal">
        <div className="textIndicators">
          <p className="numberSection">06</p>
          <h4>Propuesta</h4>
          <p className="descriptionIndicators">{proposalData[selectedCircle].name}:</p>
          <p className="descriptionIndicators">
            {proposalData[selectedCircle].description}
          </p>
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
