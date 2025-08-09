import React from 'react'
import "../css/facilityPage.css"; 
import HeroAbout from '../components/HeroAbout';
import { facilityData } from '../assets/heroComponent/Hero';

const FacilityPage = () => {
  return (
    <>
      {/* Facility Hero Section */}
      <HeroAbout image={facilityData.image} title={facilityData.title} description={facilityData.description} />

      {/* facility cards list all available facilities */}
      {/* { facility testimonials} */}
     
      
        <div className="facility-page">
      <h1>Our Facilities</h1>
      <p>Welcome to the Facilities page of our society maintenance application.</p>
    </div>
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
      <p>Each facility is designed to enhance the living experience of our residents.</p>
      <p>For more information, please contact the management office.</p>
    </div>
    <div className="facility-contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, please reach out to us.</p>
      <p>Email: info@society.com</p>
      <p>Phone: +1234567890</p>
    </div>
    </>
  );
};

export default FacilityPage;




  


