import React, { useState } from "react";
import "./team.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { baseapiurl } from "../../../common/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { compose } from "@reduxjs/toolkit";
function AddUpdateTeam({ edit }) {
  const [customerror,setCustomError] = useState({})
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const { userData } = useSelector((state) => state.MainApp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (datas) => {
    datas.token = userData.token;
    edit ? await updateemployee(datas) : await addemployee(datas);
  };
  // console.log(data);

  const updateemployee = async (formData) => {
    var response = await axios.post(
      `${baseapiurl}/employee/update-employee/${data.user_id}`,
      formData
    );
    if (response.data.status) {
      return navigate("/admin/manageteam");
    }
  };
  const addemployee = async (formData) => {
    var response = await axios.post(
      `${baseapiurl}/employee/add-employee`,
      formData
    ).catch((error)=>{
      if(error.response.data.response == "Employee Already exists"){
        setCustomError({field:"empcode",error:error.response.data.response})
      }
      if(error.response.data.response == "Email Already exists"){
        setCustomError({field:"email",error:error.response.data.response})
      }
      
    }).then((data)=>{
      if (data && data.data.status) {
        return navigate("/admin/manageteam");
      }
    })
    
   
  };
  // console.log(errors)
  return (
    <div className="admin-main-div">
      <section className="h-100 h-custom gradient-custom-2">
        <div className="row">
          <span>
            <Link to="/admin/manageteam" className="btn logout">
              <img
                src="backbtn.png"
                alt="back Icon"
                className=" mx-auto my-1"
                width="30"
              />
              Manage Team
            </Link>
          </span>
        </div>
        <div className="container py-1 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card1 card-registration card-registration-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="p-3">
                        <h3
                          className="fw-normal mt-2 mb-3"
                          style={{ color: "#0e0e0f" }}
                        >
                          <u>{edit ? "Update Employee" : "Add Employee"}</u>
                        </h3>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                              defaultValue={edit ? data.Full_Name : ""}
                              {...register("Full_Name", {
                                required: edit
                                  ? false
                                  : "Full Name is required",
                              })}
                            />
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.Full_Name?.message}
                            </small>
                          </div>
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea3"
                            >
                              Branch
                            </label>
                            <select
                              className="form-select"
                              id="form3Examplea3"
                              defaultValue={edit ? data.branch : ""}
                              {...register("branch", {
                                required: edit ? false : "Brand is required",
                              })}
                            >
                              <option>Choose a branch</option>
                              <option value="Thiruvananthapuram">
                                Thiruvananthapuram
                              </option>
                              <option value="kochi">Kochi</option>
                              <option value="Palakkad">Palakkad</option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.branch?.message}
                            </small>
                          </div>
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea5"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="form3Examplea5"
                              className="form-control form-control-lg"
                              defaultValue={edit ? data.Phone_number : ""}
                              {...register("Phone_number", {
                                required: edit
                                  ? false
                                  : "Phone Number is required",
                                  minLength: {
                                    message: 'Mobile Number should 10 digits',
                                    value:   10,
                                  },
                                  maxLength: {
                                    message: 'Mobile Number should 10 digits',
                                    value:   10,
                                  },
                              })}
                            />
                          </div>
                          <div className="col-sm-4">
                            <small id="passwordHelp" className="text-danger">
                              {errors.Phone_number?.message}
                            </small>
                          </div>
                        </div>

                        <div className="mb-4 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea6"
                            >
                              Department
                            </label>
                            <select
                              className="form-select"
                              id="form3Examplea6"
                              defaultValue={edit ? data.department : ""}
                              {...register("department", {
                                required: edit ? false : "Brand is required",
                              })}
                            >
                              <option disabled>Choose a department</option>
                              <option value="sales">Sales</option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.department?.message}
                            </small>
                          </div>
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-group">
                            <label htmlFor="exampleTextarea">Address</label>
                            <textarea
                              className="form-control"
                              id="exampleTextarea"
                              rows="3"
                              defaultValue={edit ? data.Address : ""}
                              {...register("Address", {
                                required: "Address is required",
                              })}
                            ></textarea>
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.Address?.message}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Role
                            </label>
                            <select
                              className="form-select"
                              id="form3Examplea2"
                              defaultValue={edit ? data.role : ""}
                              {...register("role", {
                                required: edit ? false : "Role is required",
                              })}
                            >
                              <option>Choose a Department</option>
                              <option value="Marketing Executive">
                                Marketing Executive
                              </option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.role?.message}
                            </small>
                          </div>
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea3"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              id="form3Examplea3"
                              className="form-control form-control-lg"
                              defaultValue={edit ? data.Email_address : ""}
                              {...register("Email_address", {
                                required: edit
                                  ? false
                                  : "Email address is required",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "invalid email address",
                                },
                              })}
                            />
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.Email_address?.message}
                            </small>
                          </div>
                          {customerror && customerror.field == "email"?
                          <div className="col-sm-3">
                          <small id="passwordHelp" className="text-danger">
                            {customerror.error}
                          </small>
                        </div>:null}
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea4"
                            >
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              id="form3Examplea4"
                              className="form-control form-control-lg"
                              defaultValue={edit ? data.Dob : ""}
                              {...register("Dob", {
                                required: edit ? false : "Dob is required",
                              })}
                            />
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.Dob?.message}
                            </small>
                          </div>
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <div className="form-outline form-white">
                            <label
                              className="form-label"
                              htmlFor="form3Examplea5"
                            >
                              Employee Code
                            </label>
                            <input
                              type="text"
                              id="form3Examplea5"
                              className="form-control form-control-lg"
                              defaultValue={edit ? data.empcode : ""}
                              readOnly={edit ? true : false}
                              {...register("empcode")}
                            />
                          </div>
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {errors.empcode?.message}
                            </small>
                          </div>
                          {/* {console.log(customerror)} */}
                          {customerror && customerror.field == "empcode"?
                          <div className="col-sm-3">
                            <small id="passwordHelp" className="text-danger">
                              {customerror.error}
                            </small>
                          </div>:null}
                        </div>

                        <div className="mb-2 pb-2 pe-4">
                          <button
                            type="submit"
                            className="btn btn-primary float-end mt-5"
                          >
                            {edit ? "Update Employee" : "Add Employee"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddUpdateTeam;
