import React from "react";
import "../css/propertyCard.css";

const PropertyCard = ({ propertyimg, propertytype, propertyarea }) => {
  return (
    <>
      <div className="propertyCard">
        <div className="propertyimg">
          <img src={propertyimg} alt="" />
        </div>
        <div className="propertytext">
          <p>{propertytype}</p>
          <p>Area:{propertyarea} sqft</p>
          <p>Price: $</p>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
