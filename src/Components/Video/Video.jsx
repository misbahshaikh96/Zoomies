import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div>
      <div className="section-two">
        <div className="h-p">
          <h className="tutorials">Tutorials</h>
          <p className="p-two">
            Learn how to use Zoomies to the best of its capabilities
          </p>
        </div>

        <div className="video">
          <img src={"./video.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
