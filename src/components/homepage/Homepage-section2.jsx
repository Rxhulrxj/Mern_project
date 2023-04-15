import React from "react";

function Homepagesection2() {
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
        <div
          className="card"
          style={{ backgroundColor: "#DFDFDF", height: "500px" }}
        >
          <div className="card-body">
            <img src="suvcar1.png" alt="carimage1" width="450" />
            <h3>BMW x1</h3>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="meter.png" width="30" />
                20,000 K/M
              </span>
              <span className="box-shadow ">
                <img src="gear-shift.png" width="30" />
                AUTOMATIC
              </span>
            </div>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="date.png" width="30" />
                2021
              </span>
            </div>
            <div className="card-inner-rate">
              <h5>
                Starting From{" "}
                <span style={{ fontWeight: "700" }}>25,00,000</span>
              </h5>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundColor: "#DFDFDF", height: "500px" }}
        >
          <div className="card-body">
            <img src="suvcar1.png" alt="carimage1" width="450" />
            <h3>BMW x1</h3>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="meter.png" width="30" />
                20,000 K/M
              </span>
              <span className="box-shadow ">
                <img src="gear-shift.png" width="30" />
                AUTOMATIC
              </span>
            </div>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="date.png" width="30" />
                2021
              </span>
            </div>
            <div className="card-inner-rate">
              <h5>
                Starting From{" "}
                <span style={{ fontWeight: "700" }}>25,00,000</span>
              </h5>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{ backgroundColor: "#DFDFDF", height: "500px" }}
        >
          <div className="card-body">
            <img src="suvcar1.png" alt="carimage1" width="450" />
            <h3>BMW x1</h3>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="meter.png" width="30" />
                20,000 K/M
              </span>
              <span className="box-shadow ">
                <img src="gear-shift.png" width="30" />
                AUTOMATIC
              </span>
            </div>
            <div className="card-inner-box">
              <span className="box-shadow ">
                <img src="date.png" width="30" />
                2021
              </span>
            </div>
            <div className="card-inner-rate">
              <h5>
                Starting From{" "}
                <span style={{ fontWeight: "700" }}>25,00,000</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="carsec-viewallbtn">
        <button>
          View All
          <img src="right.png" alt="viewallimg" width="30" />
        </button>
      </div>
    </div>
  );
}

export default Homepagesection2;
