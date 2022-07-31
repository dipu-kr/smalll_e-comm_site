import React from "react";
import "../css/testimonial.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { BiBarChartAlt } from "react-icons/bi";

export default function Testimonial() {
  return (
    <div className="container-fluid testimonial-main">
      <div className="row testimonial-row">
        <div className="col-12 col-md-4 testimonial-col">
          <div className="testimonial-div shadow-lg">
            <p className="testimonial-p1">
              <BiBarChartAlt />
            </p>
            <p className="testimonial-p2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
            <div className="testimonial-star-div">
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStar className="testimonial-star" />
            </div>
            <div className="testimonial-img-div">
              <img src="../images/user-1.png" alt="test-img" />
              <h6>sean parker</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 testimonial-col">
          <div className="testimonial-div shadow-lg">
            <p className="testimonial-p1">
              <BiBarChartAlt />
            </p>
            <p className="testimonial-p2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
            <div className="testimonial-star-div">
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStar className="testimonial-star" />
            </div>
            <div className="testimonial-img-div">
              <img src="../images/user-2.png" alt="test-img" />
              <h6>mike smith</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 testimonial-col">
          <div className="testimonial-div shadow-lg">
            <p className="testimonial-p1">
              <BiBarChartAlt />
            </p>
            <p className="testimonial-p2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
            <div className="testimonial-star-div">
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStarFill className="testimonial-star" />
              <BsStar className="testimonial-star" />
            </div>
            <div className="testimonial-img-div">
              <img src="../images/user-3.png" alt="test-img" />
              <h6>mabel joe</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row testimonial-row-2">
        <div className="col-6 col-md-2 brand-logo">
          <img src="../images/logo-coca-cola.png" alt="barnd-logo" />
        </div>
        <div className="col-6 col-md-2 brand-logo">
          <img src="../images/logo-godrej.png" alt="barnd-logo" />
        </div>
        <div className="col-12 col-md-2 brand-logo">
          <img src="../images/logo-paypal.png" alt="barnd-logo" />
        </div>
        <div className="col-6 col-md-2 brand-logo">
          <img src="../images/logo-philips.png" alt="barnd-logo" />
        </div>
        <div className="col-6 col-md-2 brand-logo">
          <img src="../images/logo-oppo.png" alt="barnd-logo" />
        </div>
      </div>
    </div>
  );
}
