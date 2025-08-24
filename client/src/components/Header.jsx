import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <i className="fa-solid fa-city"></i>
          <span>logo</span>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/property">Property</Link> */}
          <Link to="/celebration">Celebration</Link>
          <Link to="/facility">Facility</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <a href="">
          <button className="navbtn">Admin login</button>
        </a>
        <div className="hamburgermanu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
