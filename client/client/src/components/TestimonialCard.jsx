import React from "react";
import "../css/testimonialCard.css";
import { testinomialData } from "../assets/testinomial/testimonial.js";

const TestimonialCard = ({
  testimonialPhoto,
  testimonialName,
  testimonialText,
}) => {
  // console.log(testinomialData);

  return (
    <div className="testimonialCard">
      <div className="text">{testimonialText}</div>
      <div className="info">
        <div className="testimonialimage">
          <img src={testimonialPhoto} alt="" />
        </div>
        <h3>{testimonialName}</h3>
        <i className="fa-solid fa-quote-right fa-bounce"></i>
      </div>
    </div>
  );
};

export default TestimonialCard;
