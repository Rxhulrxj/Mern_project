import React from "react";
import { employees } from "../../../dummydata/datas";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function Manageteam() {
  return (
    <div className="admin-main-div">
      <div className="container mt-4 mb-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 h3">
            <p>Teams</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/admin/team/add" className="btn btn-warning">
              Add Employee
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-bordered text-center mb-0 mt-2 ">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Email Address</th>
                <th>Phone No</th>
                <th>Date Joined</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((data, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.Full_Name}</td>
                  <td>{data.role}</td>
                  <td>{data.branch}</td>
                  <td>{data.Email_address}</td>
                  <td>{data.Phone_number}</td>
                  <td>
                    <Moment format="YYYY/MM/DD">{data.created_date}</Moment>
                  </td>
                  <td>
                    <Link
                      to={`/admin/team/edit/${data.user_id}`}
                      state={data}
                      type="button"
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/admin/team/${data.user_id}`}
                      state={data}
                      type="button"
                      className="btn btn-warning"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Manageteam;
