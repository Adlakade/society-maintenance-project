import React from "react";
import "../css/aboutsociety.css";
import FacilityCard from "./FacilityCard";
import {facilityData } from "../assets/images.js";


const AboutSociety = () => {
  return (
    <>
      <div className="about">
        <h2 className="aboutheading">About Our Society</h2>
        <p className="aboutpara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          veritatis ipsa laboriosam. Voluptatum deleniti, et impedit repudiandae
          possimus id cupiditate autem nam corporis voluptatem dolore rerum,
          minima perferendis eligendi ratione.impedit repudiandae possimus id
          cupiditate autem nam corporis voluptatem dolore rerum, minima
          perferendis eligendi rationeimpedit repudiandae possimus id cupiditate
          autem nam corporis voluptatem dolore rerum, minima perferendis
          eligendi rationeimpedit repudiandae possimus id cupiditate autem nam
          corporis voluptatem dolore rerum, minima perferendis eligendi
          rationeimpedit repudiandae possimus id cupiditate autem nam corporis
          voluptatem dolore rerum, minima perferendis eligendi ratione
        </p>
        <h3 className="facility">Facility</h3>
        <div className="aboutcontainer">
          {facilityData.map((data,index) => {
            return <FacilityCard key={index} facilityname = {data.name} faciltyimg = {data.image} facilityicon= {data.icon}/>;  
          })}
        </div>
      </div>
    </>
  );
};

export default AboutSociety;
