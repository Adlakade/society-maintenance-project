import React from "react";
// import FacilityGridCard from "./FacilityGridCard.jsx";
import "../css/facilityGrid.css"; // Assuming you have a CSS file for styling
import { facilityData } from "../assets/images.js/";

const FacilityGrid = () => {
  return (
    <>
      <div className="facility-Grid">
        <h2>Facility photo</h2>
        <div className="facility-grid-container">
          {facilityData.map((item, index) => {
            return (
                <div key={index} className="facility-grid-item" id ={item.id}  >
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default FacilityGrid;
