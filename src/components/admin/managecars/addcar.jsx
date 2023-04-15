import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useSelector } from "react-redux";
function Addcar({ edit }) {
  const { userData } = useSelector((state) => state.MainApp);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (datas) => {
    datas.token = userData.token;
    console.log(datas);
    addvehicle(datas);
  };
  const location = useLocation();
  const data = location.state;

  const addvehicle = async (data) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    var response = await axios.post(
      `${baseapiurl}/vehicle/add-vehicle`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(response);
  };

  return (
    <div className="admin-main-div">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <span>
              <Link to="/admin/managecars" className="btn logout">
                <img
                  src="backbtn.png"
                  alt="back Icon"
                  className="img-fluid mx-auto my-1"
                  width="30"
                />
                Manage Cars
              </Link>
            </span>
          </div>
          {edit ? (
            <h4>
              <u>Edit Vehicle</u>
            </h4>
          ) : (
            <h4>
              <u>Add Vehicle</u>
            </h4>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="needs-validation"
            noValidate
          >
            <div className="row">
              <div className="col-md-5 p-5">
                <div className="form-group">
                  <label htmlFor="bmName">Brand/Manufacture Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bmName"
                    defaultValue={edit ? data.manufacture_name : ""}
                    {...register("manufacture_name", {
                      required: "Manufacture Name is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="modelyear">Model Year</label>
                  <input
                    type="month"
                    className="form-control"
                    id="modelyear"
                    defaultValue={edit ? data.model_year : ""}
                    {...register("model_year", {
                      required: "Model Year is required",
                    })}
                  />
                  {/* <Datetime
                    dateFormat="YYYY"
                    timeFormat={false}
                    {...register("model_year", {
                      required: "Model Year is required",
                    })}
                    initialValue={edit ? data.model_year : ""}
                  /> 
                  // <DatePicker
                  //   selected={startDate}
                  //   onChange={(date) => setStartDate(date)}
                  //   showYearPicker
                  //   endDate={new Date()}
                  //   dateFormat="yyyy"
                  //   withPortal={true}
                  // />*/}
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="engineNumber">Engine Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="engineNumber"
                    readOnly={edit ? true : false}
                    defaultValue={edit ? data.Engine_number : ""}
                    {...register("Engine_number", {
                      required: "Engine Number is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="fuelType" className="form-label">
                    Fuel Type
                  </label>
                  <select
                    className="form-select"
                    id="fuelType"
                    name="fuelType"
                    defaultValue={edit ? data.fuel_type : ""}
                    {...register("fuel_type", {
                      required: "Fuel type is required",
                    })}
                  >
                    <option disabled>Choose a Petrol Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="CNG">CNG</option>
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label for="extra_fittings" className="form-label">
                    Extra Fittings
                  </label>
                  <select
                    className="form-select"
                    id="extra_fittings"
                    name="extra_fittings"
                    defaultValue={edit ? data.extra_fittings : "no"}
                    {...register("extra_fittings")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <br />

                <div className="form-group">
                  <label for="tkmDriven">Total K/M Driven</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tkmDriven"
                    defaultValue={edit ? data.total_km_driven : ""}
                    {...register("total_km_driven", {
                      required: "Total K/M Driven is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="Published" className="form-label">
                    Published
                  </label>
                  <select
                    className="form-select"
                    id="Published"
                    name="Published"
                    defaultValue={edit ? data.published : "yes"}
                    {...register("published")}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <br />

                <div className="form-group">
                  <label for="Description">Description</label>
                  <textarea
                    className="form-control"
                    id="Description"
                    rows="5"
                    defaultValue={edit ? data.description : ""}
                    {...register("description")}
                  ></textarea>
                </div>
                <br />

                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.left_side_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="lsview" className="form-label">
                    Left Side View
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="lsview"
                    accept="image/*"
                    {...register("leftsideview", {
                      required: "Left Side Image is required",
                    })}
                  />
                </div>
                <br />

                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.rc_book_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="rcbook" className="form-label">
                    Rc Book Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="rcbook"
                    accept="image/*"
                    {...register("rcbook", {
                      required: "Rc Book Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.thumbnail}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="thumbnail" className="form-label">
                    Thumbnail
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    id="thumbnail"
                    {...register("thumbnail", {
                      required: "Thumbnail Image is required",
                    })}
                  />
                </div>
              </div>

              <div className="col-md-5 p-5">
                <div className="form-group">
                  <label for="ModelName">Model Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ModelName"
                    defaultValue={edit ? data.model_name : ""}
                    {...register("model_name", {
                      required: "Model Name is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="vehicleColor">vehicle Color</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vehicleColor"
                    defaultValue={edit ? data.Vehicle_color : ""}
                    {...register("Vehicle_color", {
                      required: "Vehicle Color is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="ChasisNumber">Chasis Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ChasisNumber"
                    readOnly={edit ? true : false}
                    defaultValue={edit ? data.chasis_number : ""}
                    {...register("chasis_number", {
                      required: "Chasis Number is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="transmission" className="form-label">
                    Transmission
                  </label>
                  <select
                    className="form-select"
                    id="transmission"
                    name="transmission"
                    defaultValue={edit ? data.transmission : ""}
                    {...register("transmission")}
                  >
                    <option>Choose a transmission</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label for="txvdate">Tax Valid Upto</label>
                  <input
                    type="date"
                    className="form-control"
                    id="txvdate"
                    defaultValue={edit ? data.tax_valid : ""}
                    {...register("tax_valid", {
                      required: "Tax Valid Date is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="vrnumber">Vehicle Register Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="vrnumber"
                    defaultValue={edit ? data.vehicle_registration_number : ""}
                    {...register("vehicle_registration_number", {
                      required: "Vehicle Registration Number is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label for="sold" className="form-label">
                    Sold
                  </label>
                  <select
                    className="form-select"
                    id="sold"
                    name="sold"
                    defaultValue={edit ? data.sold : ""}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.front_view_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="fvimg" className="form-label">
                    Front View Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="fvimg"
                    accept="image/*"
                    {...register("frontview", {
                      required: "Front View Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.rear_left_view_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="rlvimg" className="form-label">
                    Rear Left View Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    id="rlvimg"
                    {...register("rearleftview", {
                      required: "Rear Left View Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.rear_view_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="rvimg" className="form-label">
                    Rear View Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="rvimg"
                    accept="image/*"
                    {...register("rearview", {
                      required: "Rear  View Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={data.pucc_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label for="pucc" className="form-label">
                    Pucc
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="pucc"
                    accept="image/*"
                    {...register("pucc", {
                      required: "Pucc Image is required",
                    })}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn-primary form-control-sm float-end btn"
                >
                  {edit ? "Update Vehicle" : "Add Vehicle"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addcar;
