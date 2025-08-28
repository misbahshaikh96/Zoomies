import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";

import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import WhyUs from "./Components/WhyUs/Why";
import Footer from "./Components/Footer/Footer";
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";
export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <SimpleSlider />
      <Hero />
      <Stats />
      <WhyUs />
      <Footer />
    </div>
  );
}
