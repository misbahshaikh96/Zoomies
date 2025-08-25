import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import Video from "./Components/Video/Video";
import Hero from "./Components/Hero/Hero";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Video />
      <Hero />
    </div>
  );
}
