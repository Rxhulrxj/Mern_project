import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../components/header-component/header";
import Footer from "../../components/footer-component/footer";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function Detailpage() {
  const { userData } = useSelector((state) => state.MainApp);
  const images = [
    {
      original: "demo_car_baleno_front_view.jpg",
      thumbnail: "demo_car_baleno_front_view.jpg",
      originalTitle: "Front View",
      originalHeight: "350",
      description: "Front View",
    },
    {
      original: "demo_car_baleno_left_view.jpg",
      thumbnail: "demo_car_baleno_left_view.jpg",
      description: "Left View",
      originalHeight: "350",
    },
    {
      original: "demo_car_baleno_rear_left_view.jpg",
      thumbnail: "demo_car_baleno_rear_left_view.jpg",
      description: "Rear Left View",
      originalHeight: "350",
    },
    {
      original: "demo_car_baleno_rear_view.jpg",
      thumbnail: "demo_car_baleno_rear_view.jpg",
      description: "Rear View",
      originalHeight: "350",
    },
  ];
  return (
    <div>
      <HeaderComponent userData={userData} />
      <div className="container mt-5">
        <div className="row">
          <div className="col" style={{ height: "500px" }}>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              autoPlay={false}
              additionalClass="slide-class"
            />
          </div>
          <div className="col">
            <div className="row">
              <h1>Car Name</h1>
            </div>
            <br />
            <div className="row">
              <p>
                <span className="text-muted">Starting from </span> <br />
                <span className="h3">25,00,000</span>
              </p>
            </div>
            <div className="row">
              <div className="col">
                <img src="fuel-pump.png" alt="fuel icon" width="25" />
                Diesel
              </div>
              <div className="col">
                <img src="meter.png" alt="meter icon" width="25" />
                50,000 k/m
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src="gear-shift.png" alt="gear-shift icon" width="25" />
                Automatic
              </div>
              <div className="col">
                <img src="date.png" alt="date icon" width="25" />
                2022
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src="placeholder.png" alt="location icon" width="25" />
                Trivandrum
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <a href="tel:1234567890" className="btn btn-dark w-100">
                  Contact the dealer
                </a>
              </div>
              <div className="col">
                <button
                  className="btn btn-warning  w-100 "
                  data-bs-toggle="modal"
                  data-bs-target="#booktestdrivemodal"
                >
                  Book a test Drive Now
                </button>
                <div
                  className="modal fade"
                  id="booktestdrivemodal"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="booktestdrivemodalabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Book a Test Drive Now
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="row g-3">
                          <div className="col">
                            <label htmlFor="licnumber" className="form-label">
                              License Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="License Number"
                              aria-label="licnumber"
                              id="licnumber"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="licexpdate" className="form-label">
                              License Expiry Date
                            </label>
                            <input
                              type="date"
                              id="licexpdate"
                              className="form-control"
                              placeholder="License Expiry Date"
                              aria-label="licexpdate"
                            />
                          </div>
                        </div>
                        <br />

                        <div className="row g-3">
                          <div className="col">
                            <label htmlFor="aadharnum" className="form-label">
                              Aadhar Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Aadhar Number"
                              aria-label="aadharnum"
                              id="aadharnum"
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="testdate" className="form-label">
                              Test Drive Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Test Drive Date"
                              aria-label="testdate"
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row g-3">
                          <div className="col">
                            <label htmlFor="timeslot" className="form-label">
                              Test Drive Timeslot
                            </label>
                            <select id="timeslot" className="form-select">
                              <option disabled>Choose a timeslot</option>
                              <option value="11am to 1pm">11am to 1pm</option>
                              <option value="1pm to 3pm">1pm to 3pm</option>
                              <option value="3pm to 5pm">3pm to 5pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-dark"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-warning">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>
            <u>Other Details</u>
          </h3>
          <br />
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">Brand</div>
            <div className="col-md-6">Car Brand Name</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Model Name</div>
            <div className="col-md-6">Car Model Name</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Color</div>
            <div className="col-md-6">Car Color</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Number of Owners</div>
            <div className="col-md-6">Car Owner Num</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Engine Number</div>
            <div className="col-md-6">Car Engine Number</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Chasis Number</div>
            <div className="col-md-6">Car Chasis Number</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Extra fittings</div>
            <div className="col-md-6">No</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Tax Valid Upto</div>
            <div className="col-md-6">2024-05-23</div>
          </div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detailpage;
