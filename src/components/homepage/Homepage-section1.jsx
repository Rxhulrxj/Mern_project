import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Homepagesection1({ branddata, modeldata }) {
  const [selectedbrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const year = new Date().getFullYear();
  const navigator = useNavigate();
  const years = Array.from(new Array(10), (val, index) => year - index);
  const searchnow = () => {
    if (selectedbrand == "") {
      toast.error("Please choose a Brand");
    } else if (selectedYear == "") {
      toast.error("Please choose a Year");
    } else if (selectedModel == "") {
      toast.error("Please choose a Model");
    } else {
      navigator("/customsearchedcarlist", {
        state: [{
          selectedbrand: selectedbrand,
          selectedModel: selectedModel,
          selectedYear: selectedYear,
        }],
      });
    }
  };
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
            <div className="col-md-4 me-3">
              <select
                className="form-select"
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option disabled defaultValue selected>
                  Brand
                </option>
                {branddata.map((e, index) => (
                  <option key={index} value={e.manufacture_name}>
                    {e.manufacture_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 me-3">
              <select
                className="form-select"
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option defaultValue disabled selected>
                  Model
                </option>
                {selectedbrand != "" &&
                  modeldata.map((e, index) =>
                    e.manufacture_name == selectedbrand ? (
                      <option key={index} value={e.model_name}>
                        {e.model_name}
                      </option>
                    ) : null
                  )}
              </select>
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option defaultValue disabled selected>
                  Year
                </option>
                {selectedbrand != "" &&
                  years.map((year, index) => {
                    return (
                      <option key={`year${index}`} value={year}>
                        {year}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div>
            <button className="search-btn" onClick={searchnow}>
              <span>Search your Desired Vehicle</span>
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
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Homepagesection1;
