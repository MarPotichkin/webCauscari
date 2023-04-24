import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-start-svgrepo-com.svg";
import Tab from "./Tab";
import Tab2 from "./Tab2";

const Regulation = () => {
  // const [isExpanded, setExpanded] = useState(false);

  // const handleTag1Click = () => {
  //   setIsTag1Expanded(true);
  // };

  // const [openTab, setOpenTab] = useState(null);
  // const handleTabClick = (tabIndex) => {
  //   if (openTab === tabIndex) {
  //     setOpenTab(null);
  //   } else {
  //     setOpenTab(tabIndex);
  //   }
  // };

  // console.log("abierto", isExpanded);
  const tabs = ["RESIDENCIAL EU 3", "RESIDENCIAL EU 4"];

  return (
    <div className="containerRegulation">
      <div className="containerRegulationInfo">
        <div className="regulationInfo">
          <h4>Condiciones reglamentarias</h4>
          <p>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <div className="mapRegulation"></div>
        </div>
      </div>
      <div className="tabs">
        <Tab title={"RESIDENCIAL EU 3"} />
        <Tab2 title={"RESIDENCIAL EU 4"} />
      </div>
    </div>

    //   <div className="containerRegulation">
    //     <div className="containerRegulationInfo">
    //       <div className="regulationInfo">
    //         <h4>Condiciones reglamentarias</h4>
    //         <p>
    //           Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
    //           turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
    //           nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
    //           tellus elit sed risus. Maecenas eget condimentum velit, sit amet
    //           feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
    //           conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
    //           enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
    //           Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
    //           lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
    //           elementum tellus.
    //         </p>
    //         <div className="mapRegulation"></div>
    //       </div>
    //     </div>
    //     {/* <div className="containerRegulationCard"> */}
    //     <div className="tabs">
    //       {tabs.map((tab, index) => (
    //       <Tab
    //         key={index}
    //         title={tab[index]}
    //         isOpen={openTab === index}
    //         onClick={() => handleTabClick(index)}
    //       />
    //       ))}
    //     </div>
    //   </div>
    // );

    // return (
    //   <div className="containerRegulation">
    //     <div className="containerRegulationInfo">
    //       <div className="regulationInfo">
    //         <h4>Condiciones reglamentarias</h4>
    //         <p>
    //           Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
    //           turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
    //           nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
    //           tellus elit sed risus. Maecenas eget condimentum velit, sit amet
    //           feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
    //           conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
    //           enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
    //           Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
    //           lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
    //           elementum tellus.
    //         </p>
    //         <div className="mapRegulation"></div>
    //       </div>
    //     </div>
    //     {/* <div className="containerRegulationCard"> */}
    //       <div className={`tag1 ${isTag1Expanded ? "expanded" : ""}`}>
    //         <h4>RESIDENCIAL EU 3</h4>
    //         <button onClick={handleTag1Click}>
    //           <Arrow style={{ height: "40px"}}/>
    //         </button>
    //       </div>
    //       <div className="tag2">
    //         <h4>RESIDENCIAL EU 4</h4>
    //         <button>
    //           <Arrow style={{ height: "40px"}}/>
    //         </button>
    //       {/* </div> */}
    //     </div>
    //   </div>
  );
};

export default Regulation;
