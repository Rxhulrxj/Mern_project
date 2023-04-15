import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="loader-main">
      <figure className="loader">
        <div className="car">
          <span className="body"></span>
          <span className="wheels"></span>
        </div>
        <div className="strikes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </figure>
      <h1>Loading ..</h1>
    </div>
  );
}

export default Loader;
