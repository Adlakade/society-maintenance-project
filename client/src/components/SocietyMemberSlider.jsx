import React from 'react'
import members from '../assets/memberData/member.js'; 
import "../css/SocietyMemberSlider.css"; // Assuming you have a CSS file for styling
import SocietyMemberCard from './SocietyMemberCard'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination ,Navigation,Autoplay} from 'swiper/modules';

const SocietyMemberSlider = () => {
  return (
    <div className="SocietyMemberSlider">
      <h2>Our Society Members</h2>
      <div className="SwiperSocietyMember">
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}  
        // Autoplay = {true}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiperMember"
      >{
        members.map((data,index)=>{
          return (
            <SwiperSlide className='SliderSocietyMember' key={index}>
              <SocietyMemberCard name={data.name} image={data.image} role={data.role}/>
            </SwiperSlide>
          )
        })
      }
        {/* <SwiperSlide className='SliderSocietyMember'><SocietyMemberCard/></SwiperSlide>
        <SwiperSlide className='SliderSocietyMember'><SocietyMemberCard/></SwiperSlide>
        <SwiperSlide className='SliderSocietyMember'><SocietyMemberCard/></SwiperSlide>
        <SwiperSlide className='SliderSocietyMember'><SocietyMemberCard/></SwiperSlide> */}
    

      </Swiper>


        {/* Add your slider implementation here */}
      </div>
    </div>
  )
}

export default SocietyMemberSlider