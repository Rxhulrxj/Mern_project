import React from "react";
import { Link, useLocation } from "react-router-dom";
import { baseapiurl } from "../../../common/api";
import moment from "moment";

function Sellerdetail() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="admin-main-div">
      <div className="container-fluid">
        <div className="row">
          <span>
            <Link to={"/admin/managesellers"} className="btn logout">
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
        <div className="container">
          <h5>Enquiry</h5>

          <div className="card c1 m-5 ">
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
                        value={data.full_Name}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phoneNumber"
                        value={data.phoneNumber}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="address">Address</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="address"
                        rows="4"
                        value={data.address}
                        disabled
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
                        value={data.email}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="Aadhar">Aadhar Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="Aadhar"
                        value={data.Aadhar}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="dtjoined">Date Requested</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="dtjoined"
                        value={moment(data.created_date).format("YYYY-MM-DD")}
                        disabled
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
              <form>
                <div className="row ">
                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="bmName">Brand/Manufacture Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="bmName"
                        value={data.Manufacturename}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="modelyear">Model Year</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="modelyear"
                        value={data.modelyear}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="engineNumber">Engine Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="engineNumber"
                        value={data.engineNumber}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="ChasisNumber">Chasis Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="ChasisNumber"
                        value={data.ChasisNumber}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="transmission">Transmission</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="transmission"
                        value={data.transmission}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="taxvalid">Tax Valid Upto</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="taxvalid"
                        value={data.taxvalid}
                        disabled
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
                        value={data.Extrafitting}
                        disabled
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
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
                        value={data.ModelName}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="vehicleColor">Vehicle Color</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="altPhoneNumber"
                        value={data.vehicleColor}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="kmdriven">Total K/M Driven</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="kmdriven"
                        value={data.kmdriven}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="fuelType">Fuel Type</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fuelType"
                        value={data.fuelType}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="vlocation">Vehicle Location</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="vlocation"
                        value={data.vlocation}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="vlocation">Vehicle Registration Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="vlocation"
                        value={data.vehicle_registration_number}
                        disabled
                      />
                    </div>
                    <br />
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-3 ">
                  <img
                    src={baseapiurl+"/"+data.front_view}
                    className="card-img-bottom "
                    alt="front view"
                    title="front view"
                    height="200"
                  />
                </div>
                <div className="col-md-3 ">
                  <img
                    src={baseapiurl+"/"+ data.rear_left_view}
                    className="card-img-bottom "
                    alt="rear left view "
                    title="rear left view"
                    height="200"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={baseapiurl+"/"+ data.left_view}
                    className="card-img-bottom "
                    alt="left side"
                    title="left side"
                    height="200"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={baseapiurl+"/"+ data.rear_view}
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
                    src={baseapiurl+"/"+ data.rc_book}
                    className="img"
                    alt="rc book"
                    title="rc book"
                    width="500"
                    height="200"
                  />
                </div>
                <div className="col-md-5">
                  <img
                    src={baseapiurl +"/"+ data.pucc_image}
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
                <u>Vehicle Price</u>{" "}
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
                        value={data.price}
                        disabled
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
                        value={data.employee_name}
                        disabled
                      />
                    </div>
                    <br />
                    
                    
                  </div>

                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="cmt">Comments(By Customer)</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="cmt"
                        rows="3"
                        value={data.Comments}
                        disabled
                      ></textarea>
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="cmtm">Comments By Team</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="cmtm"
                        rows="3"
                        value={data.comments_employee}
                        disabled
                      ></textarea>
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
                <u>Status</u>{" "}
              </h5>
              <form>
                <div className="row ">
                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="vi">Vehicle Inspected</label>
                      <select
                        className="form-select form-select-lg"
                        id="vi"
                        name="vi"
                        value={data.inspected_vehicle}
                        disabled
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <br />
                  </div>

                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="licenseNumber">Status</label>
                      <br />
                      {data.current_status.toLowerCase() == "completed" ||
                      data.current_status.toLowerCase() == "purchased" ? (
                        <span className="btn text-bg-success">Purchased</span>
                      ) : data.current_status.toLowerCase() == "cancelled" ? (
                        <span className="btn text-bg-danger">Cancelled</span>
                      ) : (
                        <span className="btn text-bg-info">Processing</span>
                      )}
                    </div>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellerdetail;
