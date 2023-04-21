import React from "react";
import { baseapiurl } from "../../common/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/loader";
import { Link } from "react-router-dom";

function Homepagesection2({topVehicles}) {

  return (
    <div className="homepage-section2-main-container">
      <div className="homepagesec2-heading">
        <h2>
          All the ways to find
          <br />
          <span style={{ color: "var(--btn_colr)" }}>Car Chemistry</span>
        </h2>
        <h4>🔥Top Trending</h4>
      </div>
      <div className="homepagesec2-carssec">
        {topVehicles.length !=0 ?topVehicles.slice(0,3).map((dat,index)=>(<div
          className="card"
          key={index}
          style={{ backgroundColor: "#DFDFDF", height: "500px" }}
        >
          <div className="card-body">
            <img src={`${baseapiurl}/${dat.thumbnail}`} alt="carimage1" width="450" />
            <h3><Link to={`detail/${dat.id}`} state={dat} className="text-decoration-none text-dark">{dat.manufacture_name.toUpperCase() + "  " + dat.model_name.toUpperCase()}</Link></h3>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="meter.png" width="30" />
                {dat.total_km_driven.toLocaleString('en-US')} K/M
              </span>
              <span className="box-shadow ">
                <img src="gear-shift.png" width="30" />
                {dat.transmission.toUpperCase()}
              </span>
            </div>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="date.png" width="30" />
                {dat.model_year}
              </span>
            </div>
            <div className="card-inner-rate">
              <h5>
                Starting From{" "}
                <span style={{ fontWeight: "700" }}>{dat.price.toLocaleString('en-US')}</span>
              </h5>
            </div>
          </div>
        </div>)):<div className="d-flex justify-content-center align-items-center text-light">No Vehicles Found</div>}
      </div>
      <div className="carsec-viewallbtn">
        <Link to={`carlist`} id="viewallbtn">
          View All
          <img src="right.png" alt="viewallimg" width="30" />
        </Link>
      </div>
    </div>
  );
}

export default Homepagesection2;
