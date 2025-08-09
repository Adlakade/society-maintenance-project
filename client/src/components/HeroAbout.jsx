import React from "react";
import "../css/heroabout.css";


const HeroAbout = ({image, title, description}) => {
  return (
    <>
      <div
        className="hero-about"
        style={{ backgroundImage: `url(${image})`,  }}
      >
        <div className="about-page">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>      
      </div>
    </>
  );
};

export default HeroAbout;
