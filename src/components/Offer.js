import React from "react";
import "./offer.css";
import { BsFillForwardFill } from "react-icons/bs";

export default function Offer() {
  return (
    <div className="container-fluid offer-main">
      <div className="row offer-row">
        <div className="col-12 col-md-6 offer-img-div">
          <img src="../images/exclusive.png" alt="offer-p" />
        </div>
        <div className="col-12 col-md-6 offer-content-div">
          <p className="p1">exclusively available on redStore</p>
          <h4>smart band 4</h4>
          <p className="p2">
            the mi smart band 4 features a 39.9% larger (than mi brand 3) AMOLED
            color <br />
            full-touch display with adjustable brightness so everything is clear
            as can be.{" "}
          </p>
          <button>
            buy now <BsFillForwardFill className="btn-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
