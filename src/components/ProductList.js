import React, { useEffect, useState } from "react";
import "../css/productList.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductList() {
  const [products, setProducts] = useState([]);
  // --------api call---------
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid product-main">
      <h3>Product List</h3>
      <div className="product-list-div">
        {products.map((item) => (
          <div className="product-div" key={item.id}>
            <Card className="cards">
              <div className="img-div">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="card-img"
                  alt="card-img"
                />
              </div>
              <Card.Body className="card-body">
                <Card.Text className="product-name">{item.title}</Card.Text>
                <p>${item.price}</p>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
