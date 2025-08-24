import React from "react";
import "../css/aboutinfo.css"; // Assuming you have a CSS file for styling

const AboutInfo = ({ title, description }) => {
  return (
    <div className="about-info">
      <h2>{title}</h2>
      <p>{description}</p>

    </div>
  );
};

export default AboutInfo;
