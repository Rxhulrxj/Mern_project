import React from "react";
import { sellenquires } from "../../../dummydata/datas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/loader";
import moment from "moment";

function Managesellers() {
  const { userData } = useSelector((state) => state.MainApp);
  const getAdminSell = async () => {
    const { data } = await axios.post(`${baseapiurl}/sellers/listsellleadadmin`,{
      token:userData.token
    });

    return data;
  };
  const { data, error, isLoading } = useQuery(["getAdminSell"], getAdminSell, {
    enabled: true,
  });

  if (isLoading || error) return <Loader />;
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
              {data.response.map((data, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.ModelName}</td>
                  <td>{data.vehicle_registration_number}</td>
                  <td>{data.Manufacturename}</td>
                  <td>{data.modelyear}</td>
                  <td>{moment(data.created_date).format("DD-MM-YYYY")}</td>
                  <td>
                    <span
                      className={`btn ${
                        data.current_status.toLowerCase() == "completed" ||
                        data.current_status.toLowerCase() == "purchased"
                          ? "btn-success"
                          : data.current_status.toLowerCase() == "processing"
                          ? "btn-info"
                          : "btn-danger"
                      }`}
                    >
                      {data.current_status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/admin/seller/${data.id}`}
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

export default Managesellers;
