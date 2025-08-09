import React from "react";
// import "../css/about.css";
import HeroAbout from "../components/HeroAbout";
import { aboutData } from "../assets/heroComponent/Hero";

const About = () => {
  return (
    <>
      <HeroAbout  
        image={aboutData.image}
        title={aboutData.title}
        description={aboutData.description}
      />


      <div className="about-info">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless and efficient maintenance
          experience for all residents of the society.
        </p>
      </div>
      <div className="about-details">
        <h2>About Our Society</h2>
        <p>
          We are committed to maintaining a safe, clean, and enjoyable living
          environment for all our residents.
        </p>
        <p>
          For more information, please contact the society management office.
        </p>
      </div>
      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please reach out to us.
        </p>
        <p>Email: info@society.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </>
  );
};

export default About;


      // {/* about hero */}
      // {/* poster include image and text about the society */}
      // {/* mission and vision */}
      // {/* ownerinfo slider */}
