import React from "react";
import "../css/footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div className="col-one">
            <div className="basic-info">
              <i className="fa-solid fa-city"></i>
              <h3>Society Name</h3>
            </div>
            <div className="footerdesc">
              <h3>Address: Manish Nager,Nagpur</h3>
              <h3>Contact Information:</h3>
              <ul>
                <li>Phone number (e.g., office, manager)</li>
                <li>Email ID (e.g., secretary@abcresidency.com)</li>
              </ul>
            </div>

            <div className="socialmedia">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="col-2">
            <div className="Quick-Links">
              <h3>Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Flats for Sale / Rent</li>
                <li>Maintenance Info / Payments</li>
                <li>Events / Announcements</li>
                <li>Login / Register</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="policies">
              <h3>Legal & Policies</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>

              {/* <Link className="admin-login" to="/adminlogin">
                <Button btnname="Admin login" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Society Maintenance. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
