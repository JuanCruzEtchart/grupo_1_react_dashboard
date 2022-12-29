import React, { useState, useEffect } from "react";
import image from "../assets/images/Logo.png";
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./GenresInDb";
import LastProductInDb from "./LastProductInDb";
import ContentRowDB from "./ContentRowDB";
import SearchProducts from "./SearchProducts";
import NotFound from "./NotFound";
import { Link, Route, Routes } from "react-router-dom";

function SideBar() {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products/lastItem")
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
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-dark sidebar sidebar-dark accordion principalSidebar text-white"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="The Cinephile" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - The Cinephile</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item text-white">
          <Link className="nav-link" to="/GenresInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Genres</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProductInDb">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Products</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContentRowMovies">
            <i className="fas fa-fw fa-table"></i>
            <span>Database data</span>
          </Link>
        </li>

        {/*<!-- Buscador -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/SearchMoviesCinephile">
            <i className="fas fa-search"></i>
            <span>Search a movie</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Routes>
        <Route path="/" element={<ContentWrapper />} />
        <Route path="/GenresInDb" element={<GenresInDb />} />
        {/* <Route path="/LastProductInDb" element={<LastProductInDb />} /> */}
        <Route
          path="/LastProductInDb"
          element={lastProduct.map((product, index) => {
            return <LastProductInDb {...product} key={index} />;
          })}
        />
        <Route path="/ContentRowMovies" element={<ContentRowDB />} />
        <Route path="/SearchMoviesCinephile" element={<SearchProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}
export default SideBar;
/*   <div className="row">
    {genres.map((genre, index) => {
      return <Genre {...genre} key={index} />;
    })}
  </div>*/
