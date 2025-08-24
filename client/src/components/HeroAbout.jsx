import React from "react";
import "../css/heroabout.css";

const HeroAbout = ({ image, title, description }) => {
  return (
    <>
      <div className="hero-about">
        <div className="childimg">
          <img src={image} alt={title} />
        </div>
        <div className="childtext">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;


