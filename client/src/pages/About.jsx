import React from "react";
import "../css/about.css";
import HeroAbout from "../components/HeroAbout";
import { aboutData } from "../assets/heroComponent/Hero";
import SocietyMemberSlider from "../components/SocietyMemberSlider";
import AboutInfo from "../components/AboutInfo";

const About = () => {
  return (
    <>
      <HeroAbout
        image={aboutData.image}
        title={aboutData.title}
        description={aboutData.description}
      />
      <AboutInfo
        title="About Our Society"
        description="We are committed to maintaining a safe, clean, and enjoyable living
        environment for all our residents.  (We strive to provide top-notch maintenance services and)
         For more information, please contact the society management office."
      />
      <SocietyMemberSlider />
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a seamless and efficient maintenance
          experience for all residents of the society.
        </p>
        <ul>
          <li>To enhance the quality of life for all residents.</li>
          <li>To ensure timely and effective maintenance services.</li>
          <li>To foster a sense of community and belonging. </li>
        </ul>
      </div>
    </>
  );
};

export default About;

// {/* about hero */}
// {/* poster include image and text about the society */}
// {/* mission and vision */}
// {/* ownerinfo slider */}

// ================================

// <div className="about-contact">
//   <h2>Contact Us</h2>
//   <p>
//     If you have any questions or need assistance, please reach out to us.
//   </p>
//   <p>Email: info@society.com</p>
//   <p>Phone: +1234567890</p>
// </div>
