import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import Video from "./Components/Video/Video";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import WhyUs from "./Components/WhyUs/Why";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Video />
      <Hero />
      <Stats />
      <WhyUs />
      <Footer />
    </div>
  );
}
