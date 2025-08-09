import React from "react";
import "../css/testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { testinomialData } from "../assets/testinomial/testimonial.js";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <h3>Testimonial</h3>
        <div className="testimonial_swiper">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation ={false}
            modules={[EffectFlip, Pagination, Navigation]}
            className="testimonialMySwiper"
          >
            {testinomialData.map((data) => {
              return (
                <SwiperSlide className="testimonial_swiperSilder">
                  <TestimonialCard testimonialText = {data.Des} testimonialName = {data.name} testimonialPhoto = {data.image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

  // testimonialPhoto,
  // testimonialName,
  // testimonialText,
