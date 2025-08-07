import React from "react";
import "../css/property.css";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "./propertyCard.jsx";

import { propertyData } from "../assets/property/property.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Button from "./Button.jsx";

const Property = () => {
  console.log();

  return (
    <>
      <div className="property-section">
        <div className="titel">
          <h3>Find your dream property</h3>
          

          {/* <button>Sell all</button> */}
          <Button btnname="Show More" />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          // autoplay={{ delay: 2000 }}
          // loop={true}
          modules={[Pagination, Autoplay]}
          className="propertySwiper"
        >
          {propertyData.map((property, index) => {
            return (
              <SwiperSlide className="property-slide">
                <PropertyCard
                  key={index}
                  propertyimg={property.img}
                  propertytype={property.type}
                  propertyarea={property.area}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <PropertyCard/> */}
      </div>
    </>
  );
};

export default Property;
