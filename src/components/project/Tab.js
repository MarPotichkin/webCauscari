import React, { useState } from 'react'
import { ReactComponent as Arrow } from "../../assets/arrow-start-svgrepo-com.svg";

const Tab = ({ title, isExpanded, setExpanded }) => {

    const [tabPosition, setTabPosition] = useState(false);

    const handleButtonClick = () => {
        setTabPosition(!tabPosition);
        const tab = document.querySelector(".tab");
        if (tab) {
          if (tabPosition) {
            tab.classList.remove("tab-visible");
            // setExpanded(false)
          } else {
            tab.classList.add("tab-visible");
            // setExpanded(true)
          }
        }
      };

  return (
    // <div className="tab" style={{ left: `${tabPosition}%` }}>
    <div className="tab">
      <h4>{title}</h4>
      <button onClick={handleButtonClick}>
        <Arrow style={{ height: "40px", transform: `rotate(${tabPosition ? 180 : 0}deg)` }} />
      </button>
    </div>
  )
}

export default Tab