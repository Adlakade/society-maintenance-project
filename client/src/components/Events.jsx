import React from "react";
import "../css/event.css";
import { eventData } from "../assets/property/property.js";

const Events = () => {

  // console.log(eventData[0].evtimg);

  return (
    <>
      <div className="eventsection">
        <h3 className="eventhead">Events</h3>
        <div className="eventgrid">
          {eventData.map((data,index) => {
            return (
              <div className={data.id} key={index}>
                <img className="gridimg"  src={data.evtimg} alt={data.evtname} />
              </div>
            );
          })}

          {/* next */}

          {/* <div className="img2">
            <img src="" alt="" />
          </div>
          <div className="img3">
            <img src="" alt="" />
          </div>
          <div className="img4">
            <img src="" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Events;
