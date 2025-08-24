import React from "react";
import "../css/celebrationgallaryCard.css"; // Assuming you have a CSS file for styling


const CelebrationgallaryCard = ({ evtimg, evtname }) => {
  return (
    <>
      <div className="celebration-item">
        <img src={evtimg} alt="" />
        <p>{evtname}</p>
      </div>
    </>
  );
};

export default CelebrationgallaryCard;
