import React from "react";
import { Link } from "react-router-dom";
import { enquires } from "../../../dummydata/datas";

function EnquiresEmployee() {
  return (
    <div className="admin-main-div">
      <div className="container-fluid">
        <div className="container mt-4 mb-2">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 h3">
              <p>Enquires</p>
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
                  <th>Test Drive Date</th>
                  <th>Enquired By</th>
                  <th>Enquired On</th>
                  <th>License No.</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {enquires.map((data, index) => (
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.Full_Name}</td>
                    <td>{data.test_drive_date}</td>
                    <td>{data.assigned_to}</td>
                    <td>{data.enquired_date}</td>
                    <td>{data.license_no}</td>
                    <td>
                      <span
                        className={`btn ${
                          data.current_status.toLowerCase() == "purchased" ||
                          data.current_status.toLowerCase() == "completed"
                            ? "btn-success"
                            : "btn-info"
                        } cancelled`}
                      >
                        {data.current_status}
                      </span>
                    </td>
                    <td>
                      <Link
                        to={`/employee/enquires/${data.id}`}
                        className="btn btn-warning btn-view"
                        state={data}
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
    </div>
  );
}

export default EnquiresEmployee;
