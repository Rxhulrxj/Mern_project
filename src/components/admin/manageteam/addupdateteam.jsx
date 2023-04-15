import React from "react";
import "./team.css";
import { Link, useLocation } from "react-router-dom";
function AddUpdateTeam({ edit }) {
  const location = useLocation();
  const data = location.state;
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
                          <label className="form-label" for="form3Examplea2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            value={edit ? data.Full_Name : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea3">
                            Branch
                          </label>
                          <input
                            type="text"
                            id="form3Examplea3"
                            className="form-control form-control-lg"
                            value={edit ? data.branch : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea5">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="form3Examplea5"
                            className="form-control form-control-lg"
                            value={edit ? data.Phone_number : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-4 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea6">
                            Department
                          </label>
                          <input
                            type="text"
                            id="form3Examplea6"
                            className="form-control form-control-lg"
                            value={edit ? data.department : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-group">
                          <label for="exampleTextarea">Address</label>
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="3"
                            value={edit ? data.Address : ""}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea2">
                            Role
                          </label>
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            value={edit ? data.role : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea3">
                            Email
                          </label>
                          <input
                            type="text"
                            id="form3Examplea3"
                            className="form-control form-control-lg"
                            value={edit ? data.Email_address : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea4">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            id="form3Examplea4"
                            className="form-control form-control-lg"
                            value={edit ? data.Dob : ""}
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <div className="form-outline form-white">
                          <label className="form-label" for="form3Examplea5">
                            Employee Code
                          </label>
                          <input
                            type="text"
                            id="form3Examplea5"
                            className="form-control form-control-lg"
                            value={edit ? data.empcode : ""}
                            disabled
                          />
                        </div>
                      </div>

                      <div className="mb-2 pb-2 pe-4">
                        <button
                          type="button"
                          className="btn btn-primary float-end mt-5"
                        >
                          Add Employee
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddUpdateTeam;
