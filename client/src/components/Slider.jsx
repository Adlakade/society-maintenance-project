import { SliderImg } from "../assets/images.js";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SliderCard from "./SliderCard.jsx";

const Silder = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // navigation = {true}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard
            heading={"lorem ipsum dorem lorem ipsum"}
            para={
              "sdlorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsumlorem ipsum dorem lorem ipsum "
            }
            img={SliderImg.atharvnagri1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            heading={"lorem ipsum dorem lorem ipsum"}
            para={
              "sdlorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsumlorem ipsum dorem lorem ipsum "
            }
            img={SliderImg.atharvnagri2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            heading={"lorem ipsum dorem lorem ipsum"}
            para={
              "sdlorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsumlorem ipsum dorem lorem ipsum "
            }
            img={SliderImg.atharvnagri3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            heading={"lorem ipsum dorem lorem ipsum"}
            para={
              "sdlorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsum lorem ipsum dorem lorem ipsumlorem ipsum dorem lorem ipsum "
            }
            img={SliderImg.SliderImg4}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Silder;
