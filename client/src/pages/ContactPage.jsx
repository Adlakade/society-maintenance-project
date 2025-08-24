import React from "react";
import "../css/contactPage.css";
import AboutInfo from "../components/AboutInfo";

const ContactPage = () => {
  return (
    <>
      {/* Contact Us Hero Section */}
      {/* contact form */}
      {/* contact details */}
      {/* map location */}
      {/* <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to assist you with any inquiries or issues.</p>
      </div> */}

      <AboutInfo
        title="Contact Us"
        description=" Welcome to the Contact Us page of our society maintenance application.  (We strive to provide top-notch maintenance services and)
         For more information, please contact the society management office."
      />
<div className="contactFormDiv">
      <div className="contact-form">
        <h2>Contact Form</h2>
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
          <button type="submit">Send Message</button>
        </form>
      </div>
      </div>
      <div className="contact-us">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions or need assistance, please reach out to us.
        </p>
        <p>Email: info@society.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </>
  );
};

export default ContactPage;
