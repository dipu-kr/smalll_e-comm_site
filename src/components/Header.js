import React from "react";
import "./header.css";
import { BsFillForwardFill } from "react-icons/bs";

function Header() {
  return (
    <div className="container-fluid header ps-0 pe-0">
      <div className="row ms-0 me-0">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 order-2 order-md-1 col-div-1">
          <h2>
            give your workout <br /> a new style!
          </h2>
          <p>
            Success isn't always about greatness. it's about consistency.
            Consistent <br />
            hard work gains success. greatness will come
          </p>
          <button>
            explore Now <BsFillForwardFill className="btn-arrow" />
          </button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 order-1 order-md-2 header-img-div">
          <img src="../images/image1.png" alt="header-img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
