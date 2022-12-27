import React, { useState, useEffect } from "react";

function LastProductInDb() {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/products/lastItem")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        /* console.log(products); */
        setLastProduct(product.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-lg-6 mb-4 bg-secondary">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last movie in Data Base
          </h5>
        </div>
        {lastProduct.length === 0 && (
          <div className="card-body backgroundContainer">Loading...</div>
        )}
        {lastProduct.map((product, i) => {
          return (
            <div key={i} className="card-body">
              <h6 className="m-0 font-weight-bold text-gray-800">
                {product.name}
              </h6>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 40 + "rem" }}
                  src={product.product_image}
                  alt={product.name}
                />
              </div>
              <p>{product.synopsis}</p>
              {/*    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastProductInDb;
