import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="conatiner cart-main">
      {products.length > 0 ? (
        <div className="row me-0 ms-0 col-row">
          <h5>Cart Items</h5>
          {products.map((product) => (
            <div className="col-12 col-md-8 col-left" key={product.id}>
              <div className="row shadow-lg col-left-row">
                <div className="col-6 col-md-6 cart-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="col-6 col-md-2 cart-title">
                  <p>{product.title}</p>
                </div>
                <div className="col-6 col-md-2 cart-price">
                  <p>${product.price}</p>
                </div>

                <div className="col-6 col-md-2 cart-remove-btn">
                  <button onClick={() => handleRemove(product.id)}>
                    remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row empty_cart_main">
          <div className="empty_cart_div">
            <h3>Your Cart Is Empty</h3>
            <button onClick={() => navigate("/")}>go to home page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
