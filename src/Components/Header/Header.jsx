import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="nav-section">
      <nav>
        <div className="logo-nav-li">
          <div className="logo">
            <img className="logo-zomies" src={"./logo.svg"} alt="" />
          </div>
          <div className="nav-li">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-nav">
          <button className="l">Login</button>
          <button className="s">Sign-up</button>
        </div>
      </nav>
      {/* section-one */}
      <div className="section-one">
        <div className="flex">
          <div className="p-h-b">
            <p className="p-one">YOUR PATH TO QUIZ BRILIANCE</p>
            <h className="h-one">
              Zommies <br />
              where learning levels up.
            </h>
            <div className="btn-section">
              <button className="dq">Demo Quiz</button>
              <button className="gfc">Get Free Coupons</button>
            </div>
          </div>
          <div className="img">
            <img src={"./zomies-books.png"} alt="" />
          </div>
        </div>
        <div className="img-chair">
          <img src={"./zomies-chair.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
