import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-start-svgrepo-com.svg";

const Tab2 = ({ title, isExpanded, setExpanded }) => {
  const [tabPosition2, setTabPosition2] = useState(false);
  const tabClass = tabPosition2 ? "tab2 tab-visible2" : "tab2";

  const handleButtonClick2 = () => {
    setTabPosition2(!tabPosition2);
    // if (tabPosition2) {
    //   setExpanded(false);
    // } else {
    //   setExpanded(true);
    // }
    // const tab = document.querySelector(".tab2");
    // if (tab) {
    //   if (tabPosition2) {
    //     tab.classList.remove("tab-visible2");
    //   } else {
    //     tab.classList.add("tab-visible2");
    //   }
    // }
  };

  return (
    <div className={tabClass}>
      <h4>{title}</h4>
      <button onClick={handleButtonClick2}>
        <Arrow
          style={{
            height: "40px",
            transform: `rotate(${tabPosition2 ? 180 : 0}deg)`,
          }}
        />
      </button>
    </div>
  );
};

export default Tab2;
