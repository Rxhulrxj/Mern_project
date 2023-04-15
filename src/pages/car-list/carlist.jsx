import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../components/header-component/header";
import Footer from "../../components/footer-component/footer";
function Carlist() {
  const [advancedsearch, setAdvancedSearch] = useState(false);
  const { userData } = useSelector((state) => state.MainApp);
  return (
    <>
      <HeaderComponent userData={userData} />
      <div className="mt-5">
        <center>
          <h1>FIND THE CAR YOU WANT,</h1>
        </center>
        <center>
          <h1 className="yellow">YOUR WAY</h1>
        </center>
      </div>
      <br />
      <br />
      <div className="col-md-10 mx-auto">
        <div className="input-group">
          <input
            className="form-control border-end-0 border border-dark"
            type="search"
            placeholder="Search from our huge collection of cars"
            id="example-search-input"
            title="searchbox"
          />
        </div>
        <p className="float-end pe-5">
          Wanted to search more customized?
          <span
            className="text-warning text-decoration-underline"
            style={{ cursor: "pointer" }}
            onClick={() => setAdvancedSearch(!advancedsearch)}
          >
            Advanced Search
          </span>
        </p>
      </div>
      <br />
      <br />
      <br />
      {advancedsearch ? (
        <>
          <div className="col-md-10 mx-auto">
            <h5 className="fw-bold">
              <u>Adavanced Search</u>
            </h5>
          </div>
          <br />
          <br />
          <br />
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="row">
                <div className="col-md-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      Brand
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Model</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col-md-4 ">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Price Range</option>
                      <option value="1">less than 1 lakh</option>
                      <option value="2">Range From 1 to 3 lakhs</option>
                      <option value="3">3 lakh and above</option>
                    </select>
                  </div>
                  <div className="offset-md-4 col-md-3">
                    <button className="btn btn-warning w-100" type="button">
                      Search Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </>
      ) : null}

      <div className="col-md-10 mx-auto">
        <h4>
          <b>101 Vehicles Found</b>
        </h4>
      </div>
      <br />
      <br />
      <br />
      <div className="container container-carlist">
        <div className="card col-md-10 col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 border-end">
                <img src="suvcar1.png" className="img-fluid" alt="" />
                <p className="color-white">Starting From 25,000,000</p>
              </div>

              <div className="col-md-6">
                <h4 className="color-white">BMW X1</h4>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="meter.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    20,000 km
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="spray-gun.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    White
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="gear-shift.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Automatic
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="placeholder.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Trivandram
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="booking.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    2021
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="fuel-pump.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Diesel
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="buttons float-end d-flex justify-content-end">
              <button className="btn btn-light m-lg-3">
                <img src="complain.png" width="30" height="30" alt="" />
                Contact Dealer
              </button>
              <button className="btn btn-warning m-lg-3">
                <img src="booking.png" width="30" height="30" alt="" />
                Book A Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container container-carlist">
        <div className="card col-md-10 col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 border-end">
                <img src="suvcar1.png" className="img-fluid" alt="" />
                <p className="color-white">Starting From 25,000,000</p>
              </div>

              <div className="col-md-6">
                <h4 className="color-white">BMW X1</h4>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="meter.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    20,000 km
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="spray-gun.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    White
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="gear-shift.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Automatic
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="placeholder.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Trivandram
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="booking.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    2021
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="fuel-pump.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Diesel
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="buttons float-end d-flex justify-content-end">
              <button className="btn btn-light m-lg-3">
                <img src="complain.png" width="30" height="30" alt="" />
                Contact Dealer
              </button>
              <button className="btn btn-warning m-lg-3">
                <img src="booking.png" width="30" height="30" alt="" />
                Book A Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container container-carlist">
        <div className="card col-md-10 col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 border-end">
                <img src="suvcar1.png" className="img-fluid" alt="" />
                <p className="color-white">Starting From 25,000,000</p>
              </div>

              <div className="col-md-6">
                <h4 className="color-white">BMW X1</h4>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="meter.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    20,000 km
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="spray-gun.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    White
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="gear-shift.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Automatic
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="placeholder.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Trivandram
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="booking.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    2021
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="fuel-pump.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Diesel
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="buttons float-end d-flex justify-content-end">
              <button className="btn btn-light m-lg-3">
                <img src="complain.png" width="30" height="30" alt="" />
                Contact Dealer
              </button>
              <button className="btn btn-warning m-lg-3">
                <img src="booking.png" width="30" height="30" alt="" />
                Book A Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Carlist;
