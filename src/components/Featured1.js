import React from "react";
import "./featured1.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Featured1() {
  return (
    <div className="container-fluid featured-1-main">
      <div className="row featured-1-div">
        <div className="col-12 col-md-3 featured-1-col pe-2 ps-2">
          <img src="../images/product-1.jpg" alt="pro-1" />
          <p className="p-title">red printed t-shirt</p>
          <p className="p-star">
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStar className="star" />
          </p>
          <p>$50.00</p>
        </div>
        <div className="col-12 col-md-3 featured-1-col pe-2 ps-2">
          <img src="../images/product-2.jpg" alt="pro-2" />
          <p className="p-title">black printed shoes</p>
          <p className="p-star">
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarHalf className="star" />
          </p>
          <p>$50.00</p>
        </div>
        <div className="col-12 col-md-3 featured-1-col pe-2 ps-2">
          <img src="../images/product-3.jpg" alt="pro-3" />
          <p className="p-title">gray printed trouser</p>
          <p className="p-star">
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarHalf className="star" />
            <BsStar className="star" />
          </p>
          <p>$50.00</p>
        </div>
        <div className="col-12 col-md-3 featured-1-col pe-2 ps-2">
          <img src="../images/product-4.jpg" alt="pro-4" />
          <p className="p-title">blue printed t-shirt</p>
          <p className="p-star">
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarHalf className="star" />
          </p>
          <p>$50.00</p>
        </div>
      </div>
      <h4 className="title">latest products</h4>
    </div>
  );
}
