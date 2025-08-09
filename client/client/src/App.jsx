import React from "react";
import Header from "./components/Header";
import Silder from "./components/Slider";
import Home from "./pages/Home.jsx"
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>


    </>
  );
};

export default App;
