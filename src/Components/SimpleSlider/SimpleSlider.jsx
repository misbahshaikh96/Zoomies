// import React from "react";
//
// export default function Video() {
//   return (
//     <div>
//       <div className="section-two">
//         <div className="h-p">
//           <h className="tutorials">Tutorials</h>
//           <p className="p-two">
//             Learn how to use Zoomies to the best of its capabilities
//           </p>
//         </div>
//          <Slider {...settings}>
//         <div className="video">
//           <img src={"./video.png"} alt="" />
//         </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }
// /////////////////////////////
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="video-section">
      <div className="section-two">
        <div className="h-p">
          <h className="tutorials">Tutorials</h>
          <p className="p-two">
            Learn how to use Zoomies to the best of its capabilities
          </p>
        </div>

        <div className="circle">
          <img src={"./Ellipse 118.svg"} alt="" className="circle-v" />
        </div>
        <div className="pur-circle">
          <img src={"./Ellipse 8322.svg"} alt="" className="pur-circle-v" />
        </div>
        <div className="curve">
          <img src={"./Ellipse 1217.svg"} alt="" className="curve-v" />
        </div>

        <Slider {...settings}>
          <div className="video">
            <img src={"./video.png"} alt="" />
          </div>
          <div className="video">
            <img src={"./video.png"} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
