import moment from "moment";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Teamdetail() {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="admin-main-div customer-detail-main">
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

      <h5>
        <u>Employee Details</u>
      </h5>

      <div className="row">
        <div className="col-md-2 p-1 d-flex align-items-start">
          <div>
            <img
              src="employeeprofile.jpg"
              className="rounded border "
              style={{ width: "180px" }}
            />

            <span
              className="rounded-pill text-center"
              style={{ display: "block", backgroundColor: "white" }}
            >
              {data.Full_Name}
            </span>
          </div>
        </div>
        <div className="col-md-10 p-1">
          <div className="card c1 m-5 mt-0">
            <div className="card-body">
              <h5 className="card-title">
                <u>Personal Details</u>
              </h5>
              <form>
                <div className="row ">
                  <div className="col-md-5  p-3">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fullName"
                        value={data.Full_Name}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phoneNumber"
                        value={data.Phone_number}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="address"
                        rows="4"
                        value={data.Address}
                        disabled
                      ></textarea>
                    </div>

                    <br />
                  </div>

                  <div className="col-md-5 offset-md-1 p-3 ">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        value={data.Email_address}
                        disabled
                      />
                    </div>

                    <br />
                    <div className="form-group">
                      <label htmlFor="DateofBirth">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="DateofBirth"
                        value={moment(data.Dob).format("YYYY-MM-DD")}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="Datejoined">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="Datejoined"
                        value={moment(data.Dob).format("YYYY-MM-DD")}
                        disabled
                      />
                    </div>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="offset-md-2 col-md-10 p-1">
          <div className="card c1 m-5 mt-0">
            <div className="card-body">
              <h5 className="card-title">
                <u>Work Details</u>
              </h5>
              <form>
                <div className="row ">
                  <div className="col-md-5  p-3">
                    <div className="form-group">
                      <label htmlFor="role">Role</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="role"
                        value={data.role}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="empcode">Employee Code</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="empcode"
                        value={data.empcode}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="empcode"
                        value={data.department}
                        disabled
                      />
                    </div>

                    <br />
                  </div>

                  <div className="col-md-5 offset-md-1 p-3 ">
                    <div className="form-group">
                      <label htmlFor="Branch">Branch</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="Branch"
                        value={data.branch}
                        disabled
                      />
                    </div>

                    <br />
                    <div className="form-group">
                      <label htmlFor="DateofBirth">
                        No of Enquires Handled
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="DateofBirth"
                        value={data.no_of_enquires}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="Datejoined">Date Joined</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="Datejoined"
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
        </div>
      </div>
    </div>
  );
}

export default Teamdetail;
