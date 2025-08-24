import React from "react";
import "../css/celebrationFlex.css";
import { eventData } from "../assets/property/property.js"; // Adjust the import path as necessary
import CelebrationgallaryCard from "./CelebrationgallaryCard.jsx";


const CelebrationFlex = () => {
  return (
    <>
    <div className="celebration-flex-photo">
        <h1>Celebration Gallery</h1>
    </div>
      <div className="celebration-flex">
        {eventData.map((event,index)=>{
            return(
                <CelebrationgallaryCard key={index}evtimg={event.evtimg} evtname={event.evtname}/>
            )
        })}

      </div>
    </>
  );
};

export default CelebrationFlex;
