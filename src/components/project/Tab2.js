import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-start-svgrepo-com.svg";

const Tab2 = ({ title }) => {
  const [tabPosition2, setTabPosition2] = useState(false);
  const tabClass = tabPosition2 ? "tab2 tab-visible2" : "tab2";

  const handleButtonClick2 = () => {
    setTabPosition2(!tabPosition2);
  };

  return (
    <div className={tabClass}>
      <h4 className="posicionVertical">{title}</h4>
      <button onClick={handleButtonClick2}>
        <Arrow
          style={{
            height: "40px",
            transform: `rotate(${tabPosition2 ? 180 : 0}deg)`,
          }}
        />
      </button>
      {tabPosition2 && (
        <div className="containerExpandedTab2">
          <h4>Residencial EU 4</h4>
          <ul style={{fontFamily: "Montserrat", fontSize: "14px", margin: "10px 0px 20px", paddingLeft: "5%"}}>
            <li>
              Superficie mínima: 200<sup>2</sup>
            </li>
            <li>Frente mínimo: 10</li>
          </ul>

          <table className="table2">
            <thead>
              <tr>
                <th rowSpan={2}>
                  Area
                </th>
                <th rowSpan={2} >
                  Edificabilidad
                </th>
                <th rowSpan={2}>
                  Sup. Terreno m<sup>2</sup>
                </th>
                <th colSpan={2}>
                  FOS
                </th>
                <th colSpan={2}>
                  FOT
                </th>
              </tr>
              <tr>
                <td >MIN</td>
                <td >MAX</td>
                <td >MIN</td>
                <td >MAX</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Urbana</td>
                <td>EU 4</td>
                <td>Hasta 400m<sup>2</sup></td>
                <td>0.2</td>
                <td>0.8</td>
                <td>0.3</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td>Urbana</td>
                <td>EU 4</td>
                <td>401 a 1000m<sup>2</sup></td>
                <td>0.2</td>
                <td>0.75</td>
                <td>0.3</td>
                <td>2.4</td>
              </tr>
              <tr>
                <td>Urbana</td>
                <td>EU 4</td>
                <td>Más de 1001m<sup>2</sup></td>
                <td>0.2</td>
                <td>0.7</td>
                <td>0.3</td>
                <td>2.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tab2;
