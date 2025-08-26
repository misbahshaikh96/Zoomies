import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex-six">
        <div className="img-footer">
          <img className="img-foot" src={"./logo.svg"} alt="" />
          <p className="p-footer">LOREM IPSUM</p>
        </div>
        <div className="links">
          <h3 className="h-footer">Quiz Links</h3>
          <div className="flex-sub">
            <div className="link">About</div>
            <div className="link">Blog</div>
            <div className="link">Quizes</div>
            <div className="link">Contact</div>
          </div>
        </div>
        <div className="contact">
          <h3 className="h-footer">Contact us</h3>
          <div className="p-t">
            <img src={"./phone.svg"} alt="" className="phone" />
            <h3 className="h-text">000 123 -4567</h3>
          </div>
          <div className="e-t">
            <img src={"./email.svg"} alt="" className="email" />
            <h3 className="h-text">ww.result@gmaail.com</h3>
          </div>
        </div>

        <div className="location">
          <img src={"./location.svg"} alt="" className="location" />
          <h3 className="h-f">xyz, xyz,xyz</h3>
        </div>
      </div>
    </div>
  );
}
