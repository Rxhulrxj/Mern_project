import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../../../dummydata/datas";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/loader";

function Managecars() {
  const getVehicleData = async () => {
    const { data } = await axios.get(`${baseapiurl}/vehicle/getVehicle`);

    return data;
  };
  const { data, error, isLoading } = useQuery(["getVehicle"], getVehicleData, {
    enabled: true,
  });

  if (isLoading || error) return <Loader />;
  return (
    <div className="admin-main-div">
      <div className="container mt-4 mb-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 h3">
            <p>Manage Cars</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/admin/cars/add" className="btn btn-primary">
              Add Vehicle
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
                <th>Car Name</th>
                <th>Vehicle Number</th>
                <th>Brand</th>
                <th>Model Year</th>
                <th>Published</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.response.map((data, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.model_name}</td>
                  <td>{data.vehicle_registration_number}</td>
                  <td>{data.manufacture_name}</td>
                  <td>{data.model_year}</td>
                  <td>{data.published}</td>
                  <td>
                    <Link
                      to={`/admin/cars/edit/${data.id}`}
                      state={data}
                      className="btn btn-primary"
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

export default Managecars;
