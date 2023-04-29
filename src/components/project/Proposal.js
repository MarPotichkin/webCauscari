import React, { useState } from "react";
import proposalData from "../../dates/proposalData.json";
import { Link } from "react-router-dom";
import norte from "../../assets/Norte.png";

const Proposal = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);

  function renderCircleItem() {
    return proposalData.map((proposal, index) => {
      const circleClasses = `circleProgress ${
        index === selectedCircle ? "selected" : ""
      }`;
      return (
        <Link
          key={index}
          onClick={() => setSelectedCircle(index)}
          disabled={index === 0}
        >
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
          <p
            className="descriptionIndicators"
            style={{ textDecoration: "underline " }}
          >
            {proposalData[selectedCircle].name}:
          </p>
          <p className="descriptionIndicators">
            {" "}
            {proposalData[selectedCircle].description}{" "}
          </p>
          <p className="descriptionIndicators" style={{ marginTop: "1%" }}>
            {" "}
            {proposalData[selectedCircle].description2}{" "}
          </p>
        </div>
      </div>
      <div className="containerIconsProposal">
        {proposalData[selectedCircle] !== 5 &&
          proposalData[selectedCircle].icons?.map((icon, index) => (
            <div key={index}>
              <img 
                className="imgFinalProposal"
                src={require(`../../assets/mapsProposal/${proposalData[selectedCircle].icons[index]}`)}
                alt={proposalData[selectedCircle].eje}
              ></img>
              <p style={{fontSize: "10px", textAlign: "center"}}>{proposalData[selectedCircle].iconsDet[index]}</p>
            </div>
          ))}
          {proposalData[selectedCircle].name === "Causcarí" &&
            <img 
            className="imgProposalCauscari"
            src={require(`../../assets/mapsProposal/${proposalData[selectedCircle].imgFinal}`)}
            alt={proposalData[selectedCircle].eje}
          ></img>
          }
      </div>
      <div className="selectorProposal">
        <div className="imgProgress">
          <img src={norte} className="norte" alt="Norte"></img>
          {/* {proposalData[selectedCircle].img} */}
          <img
            className="imgFinalProposal"
            // src={require(`../../assets/mapsProposal/${proposalData[selectedCircle].img}`)}
            src={require(`../../assets/mapsProposal/${proposalData[selectedCircle].img}`)}
            alt={proposalData[selectedCircle].eje}
          ></img>
        </div>
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
