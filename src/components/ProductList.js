import React, { useEffect } from "react";
import "./productList.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  if (status === STATUSES.LOADING) {
    return <h4 className="mt-2 me-2">Loading....</h4>;
  }

  return (
    <div className="container-fluid product-main">
      <div className="row product-row">
        {products?.map((item) => (
          <div
            className=" col-12 col-sm-2 col-md-3 col-lg-4 col-xl-2 mb-4"
            key={item.id}
          >
            <div className="product-col shadow-lg">
              <img src={item.image} alt="pro-1" />
              <div>
                <p className="p-title">{item.title}</p>
                <div className="d-flex justify-content-between align-items-center price-btn-div">
                  <span>${item.price}</span>
                  <button
                    className="add-to-cart bg-warning"
                    onClick={() => handleAdd(item)}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
