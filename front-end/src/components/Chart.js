import React, { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

/* let tableRowsData = [
  {
    Title: "Billy Elliot ",
    Length: "123",
    Rating: "5",
    Categories: ["Drama", "Comedia"],
    Awards: 2,
  },
  {
    Title: "Alicia en el país de las maravillas",
    Length: "142",
    Rating: "4.8",
    Categories: ["Drama", "Acción", "Comedia"],
    Awards: 3,
  },
]; */

function ChartCopy() {
  const [products, setProducts] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/products")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        console.log(product.data);
        console.log(product.data[0].genre1.name);
        setProducts(product.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/products/firstMovies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        /* console.log(movies); */
        setMovies(movies.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/products/firstSeries")
      .then((response) => {
        return response.json();
      })
      .then((series) => {
        /* console.log(series); */
        setSeries(series.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    /* <!-- DataTales Example --> */
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
                {/*  {products.map((row, i) => {
            return <ChartRow {...row} key={i} />;
          })} */}
                {movies.map((row, i) => {
                  return (
                    <tr key={i}>
                      <td>{row.name}</td>
                      <td>{row.length}</td>
                      <td>{row.imdb_score}</td>
                      <td>{row.genre1.name}</td>
                      <td>{row.release_year}</td>
                    </tr>
                  );
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
                {/*  {products.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })} */}
                {series.map((row, i) => {
                  return (
                    <tr key={i}>
                      <td>{row.name}</td>
                      <td>{row.length}</td>
                      <td>{row.imdb_score}</td>
                      <td>{row.genre1.name}</td>
                      <td>{row.release_year}</td>
                    </tr>
                  );
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
