import React from "react";

function Homepagesection3() {
  return (
    <div className="homepagesec3maincontainer">
      <div className="sec3subcontainer1">
        <h3>
          Selling or{" "}
          <span style={{ color: "var(--btn_colr)" }}>Trading In?</span>
        </h3>
        <h5 style={{ fontWeight: "700", color: "grey" }}>
          In Simple, Fast & Convenient
        </h5>
      </div>
      <div className="sec3container2 container">
        <div className="sec3cardmain">
          <div className="card">
            <div className="card-body">
              <div className="card-inner-body">
                <div className="card-inner-body-sec">
                  <img src="schedule.png" alt="scheduleimage" />
                  <div>
                    <h3>Create a Schedule</h3>
                    <h5 style={{ fontWeight: "700", color: "grey" }}>
                      Filling data will take only 2 minutes, we will arrange the
                      schedule
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <div className="card-inner-body">
                <div className="card-inner-body-sec">
                  <img src="check-list.png" alt="check-list" />
                  <div>
                    <h3>Free Car Inspection</h3>
                    <h5 style={{ fontWeight: "700", color: "grey" }}>
                      Our team will start the car inspection process Not long,
                      only 30 minutes.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-body">
              <div className="card-inner-body">
                <div className="card-inner-body-sec">
                  <img src="shopping.png" alt="shopping" />
                  <div>
                    <h3>Sell your car</h3>
                    <h5 style={{ fontWeight: "700", color: "grey" }}>
                      You can sell your car ,for the best value in the market
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3-imgsec">
          <img
            src="carselling.jpg"
            alt="section3 bannerimage"
            className="section3bannerimg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepagesection3;
