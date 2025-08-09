import React from "react";
import Header from "./components/Header";
import Silder from "./components/Slider";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import FacilityPage from "./pages/FacilityPage.jsx";
import CelebrationPage from "./pages/CelebrationPage.jsx";  
import Propertypage from "./pages/Propertypage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Propertypage />} />
        <Route path="/celebration" element={<CelebrationPage />} />
        <Route path="/facility" element={<FacilityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
