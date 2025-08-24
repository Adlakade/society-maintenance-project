import React from "react";

const FacilityGridCard = ({image,name}) => {
  return (
    <>
      <div className="grid-item">
        <img src={image} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
};

export default FacilityGridCard;
