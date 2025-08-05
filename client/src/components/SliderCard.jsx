import React from "react";
import "../css/slidecard.css";

const SliderCard = ({ heading, para, img }) => {
  return (
    <>
      <div className="slidecard">
        <div className="text">
          <h2>{heading}</h2>
          <p className="desc">{para}</p>
        </div>
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default SliderCard;
