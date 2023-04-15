import React from "react";
import HeaderComponent from "../../components/header-component/header";
import { useSelector } from "react-redux";
import Footer from "../../components/footer-component/footer";
import { Link } from "react-router-dom";

function Userupload() {
  const { userData } = useSelector((state) => state.MainApp);
  return (
    <>
      <HeaderComponent userData={userData} />
      <div>
        <div className="container-fluid">
          <div className="row">
            <span>
              <Link to={"/"} className="btn logout">
                <img
                  src="backbtn.png"
                  alt="Logout Icon"
                  className="img-fluid mx-auto my-1"
                  width="30"
                />
                Back to Home
              </Link>
            </span>
          </div>
          <div className="container">
            <h5 className="display-5">Sell Your Car</h5>

            <div className="card c1 m-5">
              <div className="card-body">
                <h5 className="card-title">
                  <u>Customer Personal Details</u>
                </h5>
                <form>
                  <div className="row ">
                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="fullName">Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="fullName"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="phoneNumber"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="address">Address</label>
                        <textarea
                          className="form-control form-control-lg"
                          id="address"
                          rows="4"
                        ></textarea>
                      </div>
                      <br />
                    </div>

                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="Aadhar">Aadhar Number</label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="Aadhar"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="card c2 m-5 ">
              <div className="card-body">
                <h5 className="card-title">
                  <u>Vehicle Details</u>{" "}
                </h5>
                <form>
                  <div className="row ">
                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="bmName">Brand/Manufacture Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="bmName"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="modelyear">Model Year</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="modelyear"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="engineNumber">Engine Number</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="engineNumber"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="ChasisNumber">Chasis Number</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="ChasisNumber"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="transmission">Transmission</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="transmission"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="taxvalid">Tax Valid Upto</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="taxvalid"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="Extrafitting" className="form-label">
                          Extra Fittings
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="Extrafitting"
                          name="Extrafitting"
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="left_view" className="form-label">
                          Left Side View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="left_view"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="rear_view" className="form-label">
                          Rear View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="rear_view"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="pucc" className="form-label">
                          Pucc
                        </label>
                        <input className="form-control" type="file" id="pucc" />
                      </div>
                      <br />
                    </div>

                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="ModelName">Model Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="ModelName"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="vehicleColor">Vehicle Color</label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="altPhoneNumber"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="kmdriven">Total K/M Driven</label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="kmdriven"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="fuelType">Fuel Type</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="fuelType"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="vlocation">Vehicle Location</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="vlocation"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="vlocation">
                          Vehicle Registration Number
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="vlocation"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="front_view" className="form-label">
                          Front View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="front_view"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="front_view" className="form-label">
                          Rear Left View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="front_view"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="rc_book" className="form-label">
                          Vehicle Rc Book
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="rc_book"
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="card c3 m-5 ">
              <div className="card-body">
                <h5 className="card-title">
                  <u>Vehicle Price Quote</u>{" "}
                </h5>
                <form>
                  <div className="row ">
                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="price">Price</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="price"
                        />
                      </div>
                      <br />
                    </div>

                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="cmt">Comments(if any)</label>
                        <textarea
                          className="form-control form-control-lg"
                          id="cmt"
                          rows="3"
                        ></textarea>
                      </div>
                      <br />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row m-5">
              <div className="d-flex justify-content-between ">
                <div>
                  <p className="text-muted">
                    By clicking the submit button, I hereby agree to and accept
                    the following terms and conditions.
                  </p>
                </div>
                <div>
                  <button className="btn btn-warning border border-dark ps-3 pe-3">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Userupload;
