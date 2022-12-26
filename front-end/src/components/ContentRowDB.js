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
    fetch("http://localhost:3005/api/products/")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/products/movies")
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        console.log(products);
        setMovies(products.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/products/series")
      .then((response) => {
        return response.json();
      })
      .then((series) => {
        console.log(series);
        setSeries(series.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/actors")
      .then((response) => {
        return response.json();
      })
      .then((actors) => {
        console.log(actors);
        setActors(actors.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/directors")
      .then((response) => {
        return response.json();
      })
      .then((directors) => {
        console.log(directors);
        setDirectors(directors.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3005/api/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
        setUsers(users.data);
      })
      .catch((error) => console.log(error));
  }, []);

  /*  Cada set de datos es un objeto literal */

  /* <!-- Total products in DB --> */

  let prductsInDb = {
    title: "Total products in Data Base",
    color: "primary",
    cuantity: products.length,
    icon: "fa-clipboard-list",
  };

  /* <!-- Movies in DB --> */

  let moviesInDb = {
    title: "Movies In Data Base",
    color: "success",
    cuantity: movies.length,
    icon: "fa-award",
  };

  /* <!-- Series in DB --> */

  let seriesInDb = {
    title: "Series In Data Base",
    color: "success",
    cuantity: series.length,
    icon: "fa-award",
  };

  /* <!-- Actors in DB --> */

  let actorsInDb = {
    title: "Actors In Data Base",
    color: "warning",
    cuantity: actors.length,
    icon: "fa-user-check",
  };

  /* <!-- Directors in DB --> */

  let directorsInDb = {
    title: "Directors In Data Base",
    color: "warning",
    cuantity: directors.length,
    icon: "fa-user-check",
  };

   /* <!-- Users in DB --> */
  let usersInDb = {
    title: "Users In Data Base",
    color: "warning",
    cuantity: users.length,
    icon: "fa-user-check",
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
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowDB;
