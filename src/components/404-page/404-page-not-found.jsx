import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <div className="d-flex flex-column  justify-content-center align-items-center">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_25qm2qe0.json"
        style={{ height: "70vh" }}
      ></Player>
      <Link to="/" className="btn btn-404">
        Back to Home
      </Link>
    </div>
  );
}

export default Pagenotfound;
