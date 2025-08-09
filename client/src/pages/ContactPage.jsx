import React from 'react'
import "../css/contactPage.css";

const ContactPage = () => {
  return (
   <>
      {/* Contact Us Hero Section */}
      {/* contact form */}
      {/* contact details */}
      {/* map location */}
   <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Welcome to the Contact Us page of our society maintenance application.</p>
    </div>
    <div className="contact-info">
      <h2>Get in Touch</h2>
      <p>Email: contact@society.com</p>
    </div>
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
   </>
  )
}

export default ContactPage