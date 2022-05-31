import React from "react";
import "./featured.css";

function Productadd() {
  return (
    <div className="container-fluid feature-main">
      <div className="row feature-div">
        <div className="col-12 col-md-4  col-div ps-1 pe-1">
          <img
            src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="img-1"
            className="image-fluid"
          />
        </div>
        <div className="col-12 col-md-4  col-xxl-4 col-div ps-1 pe-1">
          <img
            src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="img-2"
            className="image-fluid"
          />
        </div>
        <div className="col-12 col-md-4  col-xxl-4 col-div ps-1 pe-1">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="img-3"
          />
        </div>
      </div>
      <h4 className="title">featured products</h4>
    </div>
  );
}

export default Productadd;
