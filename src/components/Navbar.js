import React from "react";
import "./navbar.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="container-fluid nav-div">
      <div className="row ms-0 me-0">
        <div className=" col-6 col-sm-2 order-1 order-sm-1">
          <div className="logo">
            <Link to="/">
              <img src="../images/logo.png" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-sm-9 order-3  order-sm-2 ul-div">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-6 col-sm-1 order-2  order-sm-3 cart-main-div">
          <Link to="/cart">
            <div className="me-0 me-sm-4 cart-div">
              <BsFillCartCheckFill className="cart" />
              {cartItems.length >= 1 ? (
                <div className="cart-no">
                  <span>{cartItems.length}</span>
                </div>
              ) : (
                " "
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
