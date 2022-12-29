import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowDB() {
  const [products, setProducts] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products/")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        /* console.log(products); */
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/products/movies")
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
    fetch("http://localhost:3030/api/products/series")
      .then((response) => {
        return response.json();
      })
      .then((series) => {
        /* console.log(series); */
        setSeries(series.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/actors")
      .then((response) => {
        return response.json();
      })
      .then((actors) => {
        /* console.log(actors); */
        setActors(actors.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/directors")
      .then((response) => {
        return response.json();
      })
      .then((directors) => {
        /* console.log(directors); */
        setDirectors(directors.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        /* console.log(users); */
        setUsers(users.data);
      })
      .catch((error) => console.log(error));
  }, []);

  /* <!-- Total products in DB --> */

  let prductsInDb = {
    title: "Total products in Data Base",
    color: "warning",
    cuantity: products.length,
    icon: "fa-database",
  };

  /* <!-- Movies in DB --> */

  let moviesInDb = {
    title: "Movies",
    color: "success",
    cuantity: movies.length,
    icon: "fa-film",
  };

  /* <!-- Series in DB --> */

  let seriesInDb = {
    title: "Series",
    color: "success",
    cuantity: series.length,
    icon: "fa-video",
  };

  /* <!-- Actors in DB --> */

  let actorsInDb = {
    title: "Actors",
    color: "primary",
    cuantity: actors.length,
    icon: "fa-user",
  };

  /* <!-- Directors in DB --> */

  let directorsInDb = {
    title: "Directors",
    color: "primary",
    cuantity: directors.length,
    icon: "fa-clapperboard",
  };

   /* <!-- Users in DB --> */
  let usersInDb = {
    title: "Users",
    color: "danger",
    cuantity: users.length,
    icon: "fa-users",
  };

  let cartProps = [
    prductsInDb,
    moviesInDb,
    seriesInDb,
    actorsInDb,
    directorsInDb,
    usersInDb,
  ];

  return (
    <div className="container-fluid row bg-secondary">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowDB;
