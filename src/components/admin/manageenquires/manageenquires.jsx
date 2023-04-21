import React from "react";
import { enquires } from "../../../dummydata/datas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/loader";
import moment from "moment";

function Manageenquires() {
    const { userData } = useSelector((state) => state.MainApp);
    const getAdminEnq = async () => {
      const { data } = await axios.post(`${baseapiurl}/enquiry/list-enq-admin`,{
        token:userData.token
      });
  
      return data;
    };
    const { data, error, isLoading } = useQuery(["getAdminEnq"], getAdminEnq, {
      enabled: true,
    });
  
    if (isLoading || error) return <Loader />;
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
                  {data.response.map((data, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{data.manufacture_name +" "+ data.model_name}</td>
                      <td>{data.test_drive_date}</td>
                      <td>{data.employee_name}</td>
                      <td>{moment(data.Enquiry_created).format("DD-MM-YYYY")}</td>
                      <td>{data.license_no}</td>
                      <td>
                        <span
                          className={`btn ${
                            data.Current_Status.toLowerCase() == "purchased" ||
                            data.Current_Status.toLowerCase() == "completed"
                              ? "btn-success"
                              : "btn-info"
                          } cancelled`}
                        >
                          {data.Current_Status}
                        </span>
                      </td>
                      <td>
                        <Link
                          to={`/admin/enquires/${index +1}`}
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

export default Manageenquires;
