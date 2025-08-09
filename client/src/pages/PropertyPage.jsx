import React from "react";
import "../css/propertypage.css";
import HeroAbout from "../components/HeroAbout";
// import { propertyData } from "../assets/heroComponent/Hero";

const Propertypage = () => {
  return (
    <>
      {/* Property Hero Section */}
      <HeroAbout
        image={propertyData.image}
        title={propertyData.title}
        description={propertyData.description}
      />
      {/* property cards list all available properties*/}
      {/* { property testimonials} */}

      <HeroAbout/>
      property
      <h1>Property Page</h1>
      <p>This page will display all the properties available in the society.</p>
      <div className="property-list">
        <h2>Available Properties</h2>
        <ul>
          <li>2BHK Apartment</li>
          <li>3BHK Apartment</li>
          <li>4BHK Villa</li>
          <li>Studio Apartment</li>
        </ul>
      </div>
      <div className="property-details">
        <h2>Property Details</h2>
        <p>
          Each property is equipped with modern amenities and is designed for
          comfortable living.
        </p>
        <p>
          For more information, please contact the property management office.
        </p>
      </div>
      <div className="property-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, please reach out to us.
        </p>
        <p>Email: info@society.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="property-form">
        <h2>Property Inquiry Form</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
      <div className="property-map">
        <h2>Property Location</h2>
        <p>Map will be displayed here.</p>
      </div>
      <div className="property-gallery">
        <h2>Property Gallery</h2>
        <p>Images of properties will be displayed here.</p>
      </div>
      <div className="property-reviews">
        <h2>Reviews</h2>
        <p>User reviews and ratings will be displayed here.</p>
      </div>
      <div className="property-faq">
        <h2>Frequently Asked Questions</h2>
        <p>Common questions and answers will be displayed here.</p>
      </div>
      <div className="property-news">
        <h2>Latest News</h2>
        <p>Updates and news related to properties will be displayed here.</p>
      </div>
      <div className="property-events">
        <h2>Upcoming Events</h2>
        <p>Information about upcoming property-related events will be displayed here.</p>
      </div>
      <div className="property-feedback">
        <h2>Feedback</h2>
        <p>Feedback from residents about properties will be displayed here.</p>
      </div>
      <div className="property-support">
        <h2>Support</h2>
        <p>Support information for property-related issues will be displayed here.</p>
      </div>  
      <div className="property-terms">
        <h2>Terms and Conditions</h2>
        <p>Terms and conditions related to property usage will be displayed here.</p>
      </div>
      <div className="property-privacy">
        <h2>Privacy Policy</h2>
        <p>Privacy policy related to property data will be displayed here.</p>
      </div>
      <div className="property-sitemap">
        <h2>Sitemap</h2>
        <p>A sitemap for easy navigation of the property page will be displayed here.</p>
      </div>
      <div className="property-legal">
        <h2>Legal</h2>
        <p>Legal information related to properties will be displayed here.</p>
      </div>
    </>
  );
};

export default Propertypage;
