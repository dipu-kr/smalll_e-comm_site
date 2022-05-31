import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-main">
      <div className="row footer-row">
        <div className="col-12 col-md-4 footer-col">
          <h6>download our app</h6>
          <p>download app for android and ios mobile phone.</p>
          <div className="footer-img">
            <img src="../images/play-store.png" alt="play-store" />
            <img src="../images/app-store.png" alt="app-store" />
          </div>
        </div>
        <div className="col-12 col-md-4 footer-col footer-col-2">
          <img
            src="../images/logo-white.png"
            alt="logo-img"
            className="footer-brand"
          />
          <p>
            our purpose to sustainably make the pleasure and benefits of sports
            accessible to the many
          </p>
        </div>
        <div className="col-6 col-md-2 footer-col">
          <h6>useful links</h6>
          <p>
            coupons <br /> blog post <br />
            return policy <br />
            join affiliate
          </p>
        </div>
        <div className="col-6 col-md-2 footer-col">
          <h6>follow us</h6>
          <p>
            facebook <br /> twitter <br />
            instagram <br />
            youtube
          </p>
        </div>
        <hr />
        <p className="copyright">copyright 2022- easy tutorials</p>
      </div>
    </div>
  );
}

export default Footer;
