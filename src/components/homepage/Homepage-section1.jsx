import React from "react";
import { Link } from "react-router-dom";

function Homepagesection1({ branddata, modeldata }) {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(10), (val, index) => year - index);
  return (
    <div className="homepage-section1-main-container">
      <div className="section1-first">
        <img src="bannerimage.jpg" alt="Section1 Car logo" />
        <h2>
          With a community of network of 10,000 + Agents,
          <br /> CarExpertz is ready to help you find your dream car
        </h2>
      </div>
      <div className="section1-second">
        <div className="section1-second-box box-shadow border">
          <h2>
            FIND THE CAR <br />
            YOU WANT,<span style={{ color: "#ffa800" }}>YOUR WAY</span>
          </h2>
          <div className="d-flex select-section">
            <select className="form-select">
              <option disabled defaultValue selected>
                Brand
              </option>
              {branddata.map((e, index) => (
                <option key={index} value={e.manufacture_name}>
                  {e.manufacture_name}
                </option>
              ))}
            </select>
            <select className="form-select">
              <option defaultValue disabled selected>
                Model
              </option>
              {modeldata.map((e, index) => (
                <option key={index} value={e.model_name}>
                  {e.model_name}
                </option>
              ))}
            </select>
            <select className="form-select">
              {years.map((year, index) => {
                return (
                  <option key={`year${index}`} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <button className="search-btn">
              <span>100 Cars Listed</span>{" "}
              <span className="searchtext">
                <span>search Now</span>
                <img src="right-arrow.png" alt="searchicon" width="30" />
              </span>
            </button>
          </div>
          <div className="adv-search-text">
            <p>
              Wanted to search more customized?
              <Link to="carlist" style={{ color: "#ffa800" }}>
                Advanced Search
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepagesection1;
