import React from "react";
import "./Why.css";

export default function Why() {
  return (
    <div className="whyus-section">
      <div className="h-p-why">
        <h className="h-five">
          Why <span className="span-five">Zoomies?</span>
        </h>
        <p className="p-five">
          Lorem, ipsum to an
          <span className="span-p-five">
            Lorem ipsum dolor sit amet consectetur.
          </span>
          or sit amet consectetur.
        </p>
        <p className="p-sec-five">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum
          necessitatibus nemo fugit quos?
        </p>
      </div>
      <div className="flex-five">
        <div className="y">
          <img className="i-why" src={"./challenge-icon.svg"} alt="" />
          <h2 className="h-why">01.Challenge</h2>
          <p className="p-why">
            Lorem ipsum dolor sit amet
            <span className="p-s-why">Lorem, ipsum dolor.</span>Lorem ipsum
            dolor sit amet consectetur.
          </p>
        </div>

        <div className="y">
          <img className="i-why" src={"./elevate-icon.svg"} alt="" />
          <h2 className="h-why">01.Challenge</h2>
          <p className="p-why">
            Lorem ipsum dolor sit amet
            <span className="p-s-why">Lorem, ipsum dolor.</span>Lorem ipsum
            onsectetur.
          </p>
        </div>

        <div className="y">
          <img className="i-why" src={"./improvise-icon.svg"} alt="" />
          <h2 className="h-why">01.Challenge</h2>
          <p className="p-why">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            <span className="p-s-why">Lorem, ipsum dolor.</span>
            dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
}
