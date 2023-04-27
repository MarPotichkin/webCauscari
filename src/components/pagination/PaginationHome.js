import React from "react";
import "../../styles/pagination.css";
import { Link } from "react-router-dom";

const PaginationHome = ({ sectionsHome, activeSection, handleCLick }) => {
  function renderItems() {
    return sectionsHome.map((section) => {
      const activeView = section === activeSection;

      return (
        <Link key={section} id={section} onClick={() => handleCLick(section)}>
          {activeSection === "Causcari" 
          ? <span style={{fontFamily: "Montserrat", fontSize: "9px", fontWeight: "bold"}}> {section}</span>
          : <span style={{fontFamily: "Montserrat", fontSize: "9px", fontWeight: "bold"}}>{section}</span>
          }
          
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 2304 2304"
            // enableBackground="new 0 0 2304 2304"
          >
            <switch>
              <g>
                <g id="_x2018_ëîé_x5F_1_copia">
                  <g>
                    <path
                      fill={activeView ? "#E77C98" : "#FEFEFE"}
                      d="M1921,1243c44.832-61.162,123.141-172.154,141.545-245.402c18.557-73.791-3.683-135.555-57.545-196.598
					c-90-102-196.109-91.91-258-58c-79.864,43.827-117.375,130.278-151.334,234.128C1529,1181,1488,1391,1441.576,1588.568
					c-3.43,14.598-45.863,167.712-28.499,191.991C1631.332,1604.138,1836.51,1358.285,1921,1243z"
                    />
                    <path
                      fill={activeView ? "#E77C98" : "#FEFEFE"}
                      d="M1015,1818c8.361-19.787-16.759-78.329-17.626-81.019c-10.155-32.072-70.758-135.437-88.374-170.647
					c-67.151-195.85-117.171-432.373-98.892-633.233C820.694,816.572,769.724,720.895,652,741c-45.741,7.8-134.359,48.513-168,80
					c-73.633,69.008-111.501,198.742-99.871,299.592C415.427,1390.481,796.524,1698.977,1015,1818z"
                    />
                    <path
                      fill={activeView ? "#E77C98" : "#FEFEFE"}
                      d="M463.625,1534.571c-60.593-63.227-157.036-74.211-217.489-11.999C163,1567,162.191,1759.715,311,1849
					c230,138,514.403,114.446,726,56c-62.998-29.999-256.097-127.857-288.39-143.939
					C630.704,1702.373,555.264,1630.212,463.625,1534.571z"
                    />
                    <path
                      fill={activeView ? "#E77C98" : "#FEFEFE"}
                      d="M1511,663c-4.9-56.185-26-124-64-182c-66.594-101.643-174.825-162.487-305.409-71.373
					c-126,127.254-119.273,166.02-154.788,283.146c-89.718,295.893-70.954,624.552,48.004,909.091
					c31.376,75.072,141.365,229.281,213.021,288.029c52.648-95.332,92.963-307.696,111.011-402.04
					C1410.096,1219.923,1534.027,928.706,1511,663z"
                    />
                    <path
                      fill={activeView ? "#E77C98" : "#FEFEFE"}
                      d="M1888.554,1464.075C1781.563,1588.728,1584.87,1766.213,1453,1903c199.49,16.499,400,2,582-128
					c91.85-65.607,129.711-230.711,40-318C2008.121,1391.927,1917.513,1430.343,1888.554,1464.075z"
                    />
                    <path
                      fill="#1D1D1B"
                      d="M2128.779,1347.881c-36.512-32.381-42.177-65.369-13.686-108.264
					c37.569-56.559,61.758-120.387,77.859-186.25c60.934-250.052-114.843-472.329-372.075-473.807
					c-7.993-0.061-16.353,1.68-24.834,3.379c-93.48,24.678-150.479,12.678-191.603-86.847
					c-64.249-155.489-271.228-295.803-431.254-247.968c-1.712,0.512-2.396,0.792-4.896,2
					c-145.421,75.491-241.172,178.214-291.055,316.412c-22.956,63.475-53.44,74.444-117.276,64
					c-170.438-27.86-307.256,34.09-414.799,170.164c-99.386,125.814-118.005,265.96-81.672,415.026
					c17.57,72.059,15.514,117.139-54.164,168.777C93.826,1470.061,40.493,1594.807,76.9,1742.826
					c36.736,149.316,134.636,237.967,282.992,274.053c129.19,31.455,259.74,37.264,391.588,24.768
					c74.762-7.059,149.508-14.586,224.344-20.926c34.5-2.918,636.569-2.281,737.056-12.299
					c125.258-12.449,243.491-46.723,351.023-112.457c189.265-115.703,230.111-339.676,95.324-514.953
					C2150.095,1369.139,2139.921,1357.777,2128.779,1347.881z M484,821c33.641-31.487,122.259-72.2,168-80
					c117.724-20.105,168.694,75.572,158.108,192.101c-18.279,200.86,31.741,437.383,98.892,633.233
					c17.616,35.211,78.219,138.575,88.374,170.647c0.867,2.689,25.987,61.231,17.626,81.019
					c-218.476-119.023-599.573-427.519-630.871-697.408C372.499,1019.742,410.367,890.008,484,821z M311,1849
					c-148.809-89.285-148-282-64.864-326.428c60.453-62.212,156.896-51.228,217.489,11.999
					c91.639,95.641,167.079,167.802,284.985,226.489c32.293,16.082,225.392,113.94,288.39,143.939
					C825.403,1963.446,541,1987,311,1849z M1247.829,1889.894c-71.656-58.748-181.645-212.957-213.021-288.029
					c-118.958-284.539-137.723-613.198-48.004-909.091c35.514-117.126,28.788-155.892,154.788-283.146
					C1272.175,318.513,1380.406,379.357,1447,481c38,58,59.1,125.815,64,182c23.027,265.706-100.904,556.923-152.16,824.854
					C1340.792,1582.197,1300.478,1794.562,1247.829,1889.894z M1441.576,1588.568C1488,1391,1529,1181,1595.666,977.128
					C1629.625,873.278,1667.136,786.827,1747,743c61.891-33.91,168-44,258,58c53.862,61.043,76.102,122.807,57.545,196.598
					c-18.404,73.248-96.713,184.24-141.545,245.402c-84.49,115.285-289.668,361.138-507.923,537.56
					C1395.713,1756.28,1438.146,1603.166,1441.576,1588.568z M2035,1775c-182,130-382.51,144.499-582,128
					c131.87-136.787,328.563-314.272,435.554-438.925c28.959-33.732,119.567-72.148,186.446-7.075
					C2164.711,1544.289,2126.85,1709.393,2035,1775z"
                    />
                  </g>
                </g>
              </g>
            </switch>
          </svg>
        </Link>
      );
    });
  }

  return (
      <div className="contentPagination">
        <div className="pagination"> {renderItems()}</div>
        <div className="lineFlower l1"></div>
        <div className="lineFlower l2"></div>
        <div className="lineFlower l3"></div>
        {/* <div className="lineFlower l4"></div>  */}
        <div className="leafPagination"></div>
      </div>
  );
};

export default PaginationHome;
