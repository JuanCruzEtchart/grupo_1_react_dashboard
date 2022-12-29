import React, { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

function ChartCopy() {
  /*   const [products, setProducts] = useState([]); */
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  /*   useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        console.log(product.data);
        setProducts(product.data);
      })
      .catch((error) => console.log(error));
  }, []); */

  useEffect(() => {
    fetch("http://localhost:3030/api/products/firstMovies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        setMovies(movies.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/products/firstSeries")
      .then((response) => {
        return response.json();
      })
      .then((series) => {
        setSeries(series.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <div className="m-0 font-weight-bold text-gray-800">Movies:</div>
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Length</th>
                  <th>Rating</th>
                  <th>Genre</th>
                  <th>Release Year</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Title</th>
                  <th>Length</th>
                  <th>Rating</th>
                  <th>Genre</th>
                  <th>Release Year</th>
                </tr>
              </tfoot>
              <tbody>
                {movies.map((row, i) => {
                  return <ChartRow {...row} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <div className="m-0 font-weight-bold text-gray-800">Series:</div>
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Length</th>
                  <th>Rating</th>
                  <th>Genre</th>
                  <th>Release Year</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Title</th>
                  <th>Length</th>
                  <th>Rating</th>
                  <th>Genre</th>
                  <th>Release Year</th>
                </tr>
              </tfoot>
              <tbody>
                {series.map((row, i) => {
                  return <ChartRow {...row} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartCopy;
