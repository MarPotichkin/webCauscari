import Tab from "./Tab";
import Tab2 from "./Tab2";
import baseRegulation from "../../assets/baseRegulation.png"

const Regulation = () => {

  return (
    <div className="containerRegulation">
      <div className="containerRegulationInfo">
        <div className="regulationInfo">
          <h4>Condiciones reglamentarias</h4>
          <p>
            La forma en que se distribuyen las diferentes actividades y
            equipamientos en un territorio se refleja en los patrones de
            asentamiento del suelo.
          </p>
          <p style={{marginTop: "10px"}}>
            La normativa actual establece dos niveles de zonificación: el
            primero, más general, identifica tres áreas principales: urbana,
            complementaria y rural, en función de esto se clasifica previendo la intensidad de ocupación,  usos predominantes
            conectividad, funciones de reserva y características naturales.
          </p>

          <div className="mapRegulation">
            <img src={baseRegulation} alt="Codigo de edificación"></img>
          </div>
        </div>
      </div>
      <div className="tabs">
        <Tab title={"RESIDENCIAL EU 3"} />
        <Tab2 title={"RESIDENCIAL EU 4"} />
      </div>
    </div>
  );
};

export default Regulation;
