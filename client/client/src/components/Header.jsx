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
          <Link to="/bout">About</Link>
          <Link to="/">Property</Link>
          <Link to="/">Celebration</Link>
          <Link to="/">Facility</Link>
          <Link to="/">Contact</Link>
        </nav>
        <a href="">
          <button className="navbtn">owner login</button>
        </a>
      </header>
    </>
  );
};

export default Header;
