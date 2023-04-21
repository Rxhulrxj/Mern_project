import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { baseapiurl } from "../../../common/api";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function Sellerdetails() {
  const [vehgood, setVehGood] = useState("");
  const { userData } = useSelector((state) => state.MainApp);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setVehGood(data.vehicle_ok);
  }, []);

  const onSubmit = async (data) => {
    await updateselllead(data);
  };
  const updateselllead = async (datas) => {
    let datastosend = {};
    datastosend.token = userData.token;
    datastosend.id = data.id;
    datastosend.email = data.email;
    datastosend.vehicle_ok = vehgood;

    if (vehgood == "yes") {
      datastosend.inspected_vehicle = datas.inspected_vehicle;
      datastosend.inspected_vehicle_with_techinican =
        datas.inspected_vehicle_with_techinican;
      datastosend.comments_employee = "";
    } else {
      datastosend.comments_employee = datas.comments_employee;
    }
    axios
      .post(baseapiurl + "/sellers/updateselllead", datastosend)
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.response);
          const myTimeout = setTimeout(navigate("/employee/sellers"), 5000);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.response);
      });
  };
  console.log(data);
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
              <div className="row ">
                <div className="col-md-5 p-5 ">
                  <div className="form-group">
                    <label for="fullName">Full Name</label>
                    <input
                      type="text"
                      value={data.full_Name}
                      className="form-control form-control-lg"
                      id="fullName"
                      readOnly
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      value={data.phoneNumber}
                      className="form-control form-control-lg"
                      id="phoneNumber"
                      readOnly
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="address">Address</label>
                    <textarea
                      className="form-control form-control-lg"
                      id="address"
                      value={data.address}
                      rows="3"
                      readOnly
                    ></textarea>
                  </div>
                  <br />
                </div>

                <div className="col-md-5 p-5 ">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      value={data.email}
                      className="form-control form-control-lg"
                      id="email"
                      readOnly
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="aadharnumber">Aadhar Number</label>
                    <input
                      type="text"
                      value={data.Aadhar}
                      className="form-control form-control-lg"
                      id="aadharnumber"
                      readOnly
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="dtjoined">Date Sell lead Created</label>
                    <input
                      type="datetime-local"
                      value={data.created_date}
                      className="form-control form-control-lg"
                      id="dtjoined"
                      readOnly
                    />
                  </div>
                  <br />
                </div>
              </div>
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
                      value={data.Manufacturename}
                      readOnly
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
                      readOnly
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
                      readOnly
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label for="ChasisNumber">Chasis Number</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="ChasisNumber"
                      value={data.engineNumber}
                      readOnly
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
                      readOnly
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
                      readOnly
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
                      value={data.ModelName}
                      readOnly
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
                      readOnly
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
                      readOnly
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
                      readOnly
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
                      readOnly
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
                      readOnly
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <br />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 ">
                  <img
                    src={baseapiurl + "/" + data.front_view}
                    className="card-img-bottom "
                    alt="front view"
                    title="front view"
                    height="200"
                  />
                </div>
                <div className="col-md-3 ">
                  <img
                    src={baseapiurl + "/" + data.rear_left_view}
                    className="card-img-bottom "
                    alt="rear left view "
                    title="rear left view"
                    height="200"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={baseapiurl + "/" + data.left_view}
                    className="card-img-bottom "
                    alt="left side"
                    title="left side"
                    height="200"
                  />
                </div>
                <div className="col-md-3">
                  <img
                    src={baseapiurl + "/" + data.rear_view}
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
                    src={baseapiurl + "/" + data.rc_book}
                    className="img"
                    alt="rc book"
                    title="rc book"
                    width="500"
                    height="200"
                  />
                </div>
                <div className="col-md-5">
                  <img
                    src={baseapiurl + "/" + data.pucc_image}
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="price">Price</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="price"
                        value={data.price}
                        readOnly
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
                        readOnly
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="vgood" className="form-label">
                        Is Vehicle good to buy?
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="vgood"
                        value={vehgood}
                        disabled={
                          data.current_status == "Completed" ||
                          data.current_status == "Purchased" ||
                          data.current_status == "Cancelled"
                            ? true
                            : false
                        }
                        onChange={(e) => setVehGood(e.target.value)}
                      >
                        <option>Choose a option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <br />
                    {vehgood == "yes" &&
                    (vehgood != "" || vehgood != "Choose a option") ? (
                      <div className="form-group">
                        <label for="iv" className="form-label">
                          Have you Inspected The Vehicle?
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="iv"
                          {...register("inspected_vehicle", {
                            required: "This field is required",
                            disabled:
                              data.current_status == "Completed" ||
                              data.current_status == "Purchased" ||
                              data.current_status == "Cancelled"
                                ? true
                                : false,
                          })}
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    ) : null}
                    <br />
                  </div>

                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="cmt">Comments(customers)</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="cmt"
                        value={data.Comments}
                        readOnly
                      ></textarea>
                    </div>
                    <br />
                    {vehgood == "yes" &&
                    (vehgood != "" || vehgood != "Choose a option") ? (
                      <div className="form-group">
                        <label for="ivpipt" className="form-label">
                          Have you inspected the Vehicle parts and the interior
                          properly with the technician?
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="ivpipt"
                          disabled={
                            data.current_status == "Completed" ||
                            data.current_status == "Purchased" ||
                            data.current_status == "Cancelled"
                              ? true
                              : false
                          }
                          {...register("inspected_vehicle_with_techinican", {
                            required: "This field is required",
                          })}
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    ) : null}
                    <br />
                    <br />
                    {vehgood == "no" &&
                    (vehgood != "" || vehgood != "Choose a option") ? (
                      <div className="form-group">
                        <label for="cmtm">
                          Comments(Explaination for the Cancellation)
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          id="cmtm"
                          rows="3"
                          {...register("comments_employee", {
                            required: "This field is required",
                            disabled:
                              data.current_status == "Completed" ||
                              data.current_status == "Purchased" ||
                              data.current_status == "Cancelled"
                                ? true
                                : false,
                          })}
                        ></textarea>
                      </div>
                    ) : null}
                    <br />
                    <div className="form-group">
                      {data.current_status == "Completed" ||
                      data.current_status == "Purchased" ||
                      data.current_status == "Cancelled" ? null : vehgood ==
                          "no" &&
                        (vehgood != "" || vehgood != "Choose a option") ? (
                        <button className="btn text-bg-primary float-end">
                          Update Vehicle
                        </button>
                      ) : null}
                      {data.current_status == "Completed" ||
                      data.current_status == "Purchased" ||
                      data.current_status == "Cancelled" ? null : vehgood ==
                          "yes" &&
                        (vehgood != "" || vehgood != "Choose a option") ? (
                        <button className="btn text-bg-success float-end">
                          Buy Vehicle
                        </button>
                      ) : null}
                    </div>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sellerdetails;
