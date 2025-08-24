import React from "react";
import "../css/facilityPage.css";
import HeroAbout from "../components/HeroAbout";
import { facilityData } from "../assets/heroComponent/Hero";
import AboutInfo from "../components/AboutInfo";
import Event from "../components/Events.jsx";
import FacilityGrid from "../components/FacilityGrid.jsx";

const FacilityPage = () => {
  return (
    <>
      {/* Facility Hero Section */}
      <HeroAbout
        image={facilityData.image}
        title={facilityData.title}
        description={facilityData.description}
      />

      <AboutInfo
        title="Our Facilities"
        description="Welcome to the Facilities page of our society maintenance application.Explore the various celebrations organized by our society. Welcome to the Celebration Events page of our society maintenance
          application."
      />
  <FacilityGrid/>
      <div className="facility-info">
        <h2>Available Facilities</h2>
        <ul>
          <li>Swimming Pool</li>
          <li>Gymnasium</li>
          <li>Community Hall</li>
          <li>Children's Play Area</li>
          <li>Parking Space</li>
        </ul>
      </div>
      <div className="facility-details">
        <h2>Facility Details</h2>
        <p>
          Each facility is designed to enhance the living experience of our
          residents.
        </p>
        <p>For more information, please contact the management office.</p>
      </div>
    </>
  );
};

export default FacilityPage;

{
  /* facility cards list all available facilities */
}
{
  /* { facility testimonials} */
}
