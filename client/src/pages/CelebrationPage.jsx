import React from "react";
import HeroAbout from "../components/HeroAbout";
import { celebrationData } from "../assets/heroComponent/Hero.js";
import AboutInfo from "../components/AboutInfo.jsx";
import "../css/celebrationPage.css"; // Assuming you have a CSS file for styling
import CelebrationFlex from "../components/CelebrationFlex.jsx";


const CelebrationPage = () => {
  return (
    <>
      <HeroAbout
        image={celebrationData.image}
        title={celebrationData.title}
        description={celebrationData.description}
      />
      <AboutInfo
        title="Celebration Events"
        description="Explore the various celebrations organized by our society.Explore the various celebrations organized by our society. Welcome to the Celebration Events page of our society maintenance
          application."
      />
      <CelebrationFlex/>
      <div className="celebration-info">
        <h2>Upcoming Celebrations</h2>
        <ul>
          <li>New Year's Party</li>
          <li>Independence Day Celebration</li>
          <li>Diwali Festival</li>
          <li>Christmas Gathering</li>
        </ul>
      </div>
      <div className="celebration-details">
        <h2>Event Details</h2>
        <p>
          Join us in celebrating these special occasions with fun activities and
          community bonding.
        </p>
        <p>For more information, please contact the event coordinator.</p>
      </div> 
    </>
  );
};

export default CelebrationPage;

{
  /* <div className="celebration-page">
        
        <h1>Celebration Events</h1>
        <p>
          Welcome to the Celebration Events page of our society maintenance
          application.
        </p>
      </div>
      
}

{
  /* Celebration and Events hero */
}
{
  /* celebration and event card  */
}
{
  /* upcoming events */
}
{
  /*event testimonials */
}
