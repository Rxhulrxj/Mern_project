import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sellerdetails() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="admin-main-div">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <span>
              <Link to={`/employee/sellers`} className="btn   logout">
                <img
                  src="backbtn.png"
                  alt="Logout Icon"
                  className="img-fluid mx-auto my-1"
                  width="30"
                />
                Sellers
              </Link>
            </span>
          </div>

          <h5>Car sell Request</h5>
          <div className="card c1 m-5 ">
            <div className="card-body">
              <h5 className="card-title">
                <u>Seller Personal Details</u>{" "}
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
                        placeholder="Enter your full name"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phoneNumber"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="address">Address</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="address"
                        rows="3"
                        placeholder="Enter your address"
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
                        placeholder="Enter your email"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="altPhoneNumber">
                        Alternative Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="altPhoneNumber"
                        placeholder="Enter your alternative phone number"
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="dtjoined">Date Joined</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="dtjoined"
                      />
                    </div>
                    <br />
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

              <div className="row ">
                <div className="col-md-5 p-5 ">
                  <div className="form-group">
                    <label for="bmName">Brand/Manufacture Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="bmName"
                      placeholder="Enter your Brand name"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="modelyear">Model Year</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="modelyear"
                      placeholder="Enter year of model"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="engineNumber">Engine Number</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="engineNumber"
                      placeholder="Enter year Engine Number"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="ChasisNumber">Chasis Number</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="ChasisNumber"
                      placeholder="Enter year Chasis Number"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="transmission">Transmission</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="transmission"
                      placeholder="Enter year transmission type"
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
                </div>

                <div className="col-md-5 p-5 ">
                  <div className="form-group">
                    <label for="ModelName">Model Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="ModelName"
                      placeholder="Enter your Model"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="vehicleColor">Vehicle Color</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="altPhoneNumber"
                      placeholder="Enter your alternative phone number"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="kmdriven">Total K/M Driven</label>
                    <input
                      type="number"
                      className="form-control form-control-lg"
                      id="kmdriven"
                      placeholder="Total kilometers driven"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="fuelType">Fuel Type</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fuelType"
                      placeholder="Enter your Fuel type"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="vlocation">Vehicle Location</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="vlocation"
                      placeholder="Enter Vehicle's Location"
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
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 ">
                  <img
                    src={data.front_view_image}
                    className="card-img-bottom "
                    alt="front view"
                    title="front view"
                    height="200"
                  />
                </div>
                <div className="col-md-3 ">
                  <img
                    src={data.rear_left_view_image}
                    className="card-img-bottom "
                    alt="rear left view "
                    title="rear left view"
                    height="200"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={data.left_side_image}
                    className="card-img-bottom "
                    alt="left side"
                    title="left side"
                    height="200"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={data.rear_view_image}
                    className="card-img-bottom "
                    alt="rear view"
                    title="rear view"
                    height="200"
                  />
                </div>
              </div>
              <br />
              <br />
              <div className="row snd">
                <div className="offset-md-2 col-md-5">
                  <img
                    src={data.rc_book_image}
                    className="img"
                    alt="rc book"
                    title="rc book"
                    width="500"
                    height="200"
                  />
                </div>
                <div className="col-md-5">
                  <img
                    src={data.pucc_image}
                    className="img "
                    alt="pucc"
                    title="pucc"
                    height="300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card c3 m-5 ">
            <div className="card-body">
              <h5 className="card-title">
                <u>Vehicle Price Quote</u>{" "}
              </h5>

              <div className="row ">
                <div className="col-md-5 p-5 ">
                  <div className="form-group">
                    <label for="price">Price(customers)</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="price"
                      placeholder="Price"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="vassignedto" className="form-label">
                      Vehicle Assigned to
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="price"
                      placeholder="assigned to.."
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="iv" className="form-label">
                      Have you Inspected The Vehicle?
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="iv"
                      name="iv"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="lpq" className="form-label">
                      Late Price Quote
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="lpq"
                      placeholder="latest price quote"
                    />
                  </div>
                  <br />
                </div>

                <div className="col-md-5 p-5 ">
                  <div className="form-group">
                    <label for="cmt">Comments(customers)</label>
                    <textarea
                      className="form-control form-control-lg"
                      id="cmt"
                      rows="3"
                      placeholder="Enter your Comments.."
                    ></textarea>
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="ivpipt" className="form-label">
                      Have you inspected the Vehicle parts and the interior
                      properly with the technician?
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="ivpipt"
                      name="ivpipt"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div className="form-group">
                    <label for="cmtm">
                      Comments(Explaination for the new price)
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="cmtm"
                      rows="3"
                      placeholder="Enter your Comments.."
                    ></textarea>
                  </div>
                  <br />
                  <div className="form-group">
                    <button className="btn text-bg-primary float-end">
                      Update Vehicle
                    </button>
                    <button className="btn text-bg-success float-end me-3">
                      Buy Vehicle
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellerdetails;
