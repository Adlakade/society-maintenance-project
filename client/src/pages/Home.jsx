import React from 'react'
import Silder from '../components/Slider'
import AboutSociety from '../components/AboutSociety'
import Property from '../components/Property'
import Events from '../components/Events'
import Testimonial from '../components/Testimonial'


const Home = () => {
  return (
    <>
    <Silder/>
    <AboutSociety/>
    {/* <Property/>  */}
    <Events/>
    <Testimonial/>

    </>

  )
}

export default Home