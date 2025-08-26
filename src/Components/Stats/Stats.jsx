import React from "react";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="stats-section">
      <div className="flex-three-stats">
        <div className="stats-img">
          <img src={"./stats.png"} alt="" />
        </div>
        <div className="h-p-sp-b">
          <h2 className="h-four">
            Smart Studying, <span className="span-h">Bright Results</span>
          </h2>
          <p className="p-four">
            Lorem ipsum dolor sit amet consectetur adipisic onsectetu
          </p>
          <p className="p-sec">Lorem ipsum dolor sit.</p>
          <p className="sp">
            Lorem ipsum dolor sit amet consectetur onsectetu.
          </p>

          <div className="btn-stats">
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
