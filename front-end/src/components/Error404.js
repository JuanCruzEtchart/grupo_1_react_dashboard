import React from "react";
import ErrorImg from "../assets/images/error404.jpg";

function Error404() {
  return (
    <React.Fragment>
      <img src={ErrorImg} alt="Imágen de error 404" />
    </React.Fragment>
  );
}
export default Error404;
