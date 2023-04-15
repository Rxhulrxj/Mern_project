import React from "react";

import { sellenquires } from "../../../dummydata/datas";
import { Link } from "react-router-dom";
function Sellers() {
  return (
    <div className="admin-main-div">
      <div className="container mt-4 mb-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 h3">
            <p>Car Sellers Requests</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-bordered text-center mb-0 mt-2 ">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Car Name</th>
                <th>Vehicle Number</th>
                <th>Brand</th>
                <th>Model Year</th>
                <th>Date Published</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sellenquires.map((data, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.model_name}</td>
                  <td>{data.vehicle_registration_number}</td>
                  <td>{data.manufacture_name}</td>
                  <td>{data.model_year}</td>
                  <td>{data.created_date}</td>
                  <td>
                    <span
                      className={`btn ${
                        data.status.toLowerCase() == "completed" ||
                        data.status.toLowerCase() == "purchased"
                          ? "btn-success"
                          : data.status.toLowerCase() == "processing"
                          ? "btn-info"
                          : "btn-danger"
                      }`}
                    >
                      {data.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/employee/seller/${data.id}`}
                      state={data}
                      className="btn btn-warning"
                    >
                      Edit
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

export default Sellers;
