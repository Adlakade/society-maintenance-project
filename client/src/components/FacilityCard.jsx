import React from "react";
import "../css/facilitycard.css";

const FacilityCard = ({ faciltyimg, facilityname, facilityicon }) => {
  return (
    <>
      <div className="facilityCard">
        <div className="facilityimg">
          <img src={faciltyimg} alt="" />
        </div>
        <div className="desc">
          <img src={facilityicon} alt="" />
          <h3 className="facilityName">{facilityname}</h3>
        </div>
      </div>
    </>
  );
};

export default FacilityCard;
