import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useSelector } from "react-redux";
import moment from "moment";
function Addcar({ edit }) {
  let navigate = useNavigate();
  const year = new Date().getFullYear();
  const location = useLocation();
  const data = location.state;
  const years = Array.from(new Array(10), (val, index) => year - index);
  const { userData } = useSelector((state) => state.MainApp);
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = async (datas) => {
    datas.token = userData.token;
    // console.log(datas);
    // console.log("data");
    if (edit) {
      if (datas.front_view_image.length == 0) {
        datas.front_view_image = data.front_view_image;
      } else {
        datas.front_view_image = datas.front_view_image[0];
      }
      if (datas.left_side_image.length == 0) {
        datas.left_side_image = data.left_side_image;
      } else {
        datas.left_side_image = datas.left_side_image[0];
      }
      if (datas.pucc_image.length == 0) {
        datas.pucc_image = data.pucc_image;
      } else {
        datas.pucc_image = datas.pucc_image[0];
      }
      if (datas.rear_left_view_image.length == 0) {
        datas.rear_left_view_image = data.rear_left_view_image;
      } else {
        datas.rear_left_view_image = datas.rear_left_view_image[0];
      }
      if (datas.rear_view_image.length == 0) {
        datas.rear_view_image = data.rear_view_image;
      } else {
        datas.rear_view_image = datas.rear_view_image[0];
      }
      if (datas.thumbnail.length == 0) {
        console.log("in length 0");
        datas.thumbnail = data.thumbnail;
      } else {
        console.log(datas.thumbnail[0]);
        datas.thumbnail = datas.thumbnail[0];
      }
      if (datas.rc_book_image.length == 0) {
        datas.rc_book_image = data.rc_book_image;
      } else {
        datas.rc_book_image = datas.rc_book_image[0];
      }
    }

    const formData = new FormData();
    for (const [key, value] of Object.entries(datas)) {
      if (
        key == "front_view_image" ||
        key == "rear_left_view_image" ||
        key == "rear_view_image" ||
        key == "pucc_image" ||
        key == "thumbnail" ||
        key == "rc_book_image" ||
        key == "left_side_image"
      ) {
        if (edit) {
          formData.append(key, value);
          // console.log(key);
        } else {
          formData.append(key, value[0]);
        }
      } else if (key == "model_year") {
        formData.append(key, moment(value).format("YYYY"));
      } else {
        formData.append(key, value);
      }
    }
    // console.log(datas);
    // console.log("datas");
    edit ? await updatevehicle(formData) : await addvehicle(formData);
  };

  // console.log(data);

  const addvehicle = async (formData) => {
    var response = await axios.post(
      `${baseapiurl}/vehicle/add-vehicle`,
      formData
    );
    if (response.data.status) {
      return navigate("/admin/managecars");
    }
  };
  const updatevehicle = async (formData) => {
    var response = await axios.post(
      `${baseapiurl}/vehicle/updatevehicle/${data.id}`,
      formData
    );
    if(response.data.status){
      return navigate("/admin/managecars");
    }
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
            encType="multipart/form-data"
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
                  <select
                    className="form-select"
                    id="modelyear"
                    defaultValue={edit ? data.model_year : ""}
                    {...register("model_year", {
                      required: "Model Year is required",
                    })}
                  >
                    <option disabled>Choose a Petrol Type</option>
                    {years.map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
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
                  <label htmlFor="fuelType" className="form-label">
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
                  <label htmlFor="extra_fittings" className="form-label">
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
                  <label htmlFor="tkmDriven">Total K/M Driven</label>
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
                  <label htmlFor="Published" className="form-label">
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
                  <label htmlFor="Description">Description</label>
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
                        src={baseapiurl + "/" + data.left_side_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="lsview" className="form-label">
                    Left Side View
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="lsview"
                    accept="image/*"
                    {...register("left_side_image", {
                      required: edit ? false : "Left Side Image is required",
                    })}
                  />
                </div>
                <br />

                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={baseapiurl + "/" + data.rc_book_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="rcbook" className="form-label">
                    Rc Book Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="rcbook"
                    accept="image/*"
                    {...register("rc_book_image", {
                      required: edit ? false : "Rc Book Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={baseapiurl + "/" + data.thumbnail}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="thumbn" className="form-label">
                    Thumbnail
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    id="thumbn"
                    {...register("thumbnail", {
                      required: edit ? false : "Thumbnail Image is required",
                    })}
                  />
                </div>
              </div>

              <div className="col-md-5 p-5">
                <div className="form-group">
                  <label htmlFor="ModelName">Model Name</label>
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
                  <label htmlFor="vehicleColor">vehicle Color</label>
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
                  <label htmlFor="ChasisNumber">Chasis Number</label>
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
                  <label htmlFor="transmission" className="form-label">
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
                  <label htmlFor="txvdate">Tax Valid Upto</label>
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
                  <label htmlFor="vrnumber">Vehicle Register Number</label>
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
                  <label htmlFor="sold" className="form-label">
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
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    defaultValue={edit ? data.price : ""}
                    {...register("price", {
                      required: "Price is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={baseapiurl + "/" + data.front_view_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="fvimg" className="form-label">
                    Front View Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="fvimg"
                    accept="image/*"
                    {...register("front_view_image", {
                      required: edit ? false : "Front View Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={baseapiurl + "/" + data.rear_left_view_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="rlvimg" className="form-label">
                    Rear Left View Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    id="rlvimg"
                    {...register("rear_left_view_image", {
                      required: edit
                        ? false
                        : "Rear Left View Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={baseapiurl + "/" + data.rear_view_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="rvimg" className="form-label">
                    Rear View Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="rvimg"
                    accept="image/*"
                    {...register("rear_view_image", {
                      required: edit ? false : "Rear  View Image is required",
                    })}
                  />
                </div>
                <br />
                <div className="form-group">
                  {edit ? (
                    <div className="mb-4 d-flex justify-content-center">
                      <img
                        src={baseapiurl + "/" + data.pucc_image}
                        alt="example placeholder"
                        style={{ width: "300px" }}
                      />
                    </div>
                  ) : null}
                  <label htmlFor="pucc" className="form-label">
                    Pucc
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="pucc"
                    accept="image/*"
                    {...register("pucc_image", {
                      required: edit ? false : "Pucc Image is required",
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
