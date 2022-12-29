import React, { useState, useEffect } from "react";
import Genre from "./Genre";

function GenresInDb() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/genres")
      .then((response) => {
        return response.json();
      })
      .then((genres) => {
        /*console.log(genres);*/
        setGenres(genres.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function background() {
    let container = document.querySelector(".backgroundContainer");
    container.classList.toggle("bg-secondary");
  }

  return (
    <React.Fragment>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4 bg-secondary">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6
              className="m-0 font-weight-bold text-gray-800"
              onMouseOver={() => {
                background();
              }}
            >
              Genres in Data Base
            </h6>
          </div>
          {genres.length === 0 && (
            <div className="card-body backgroundContainer">Loading...</div>
          )}
          <div className="card-body backgroundContainer">
            {
              <div className="row">
                {genres.map((genre, index) => {
                  return <Genre {...genre} key={index} />;
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GenresInDb;
