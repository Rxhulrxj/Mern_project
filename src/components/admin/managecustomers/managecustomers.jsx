import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { customers } from "../../../dummydata/datas";
import Moment from "react-moment";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Loader from "../../loader/loader";

function Managecustomers() {
  const { userData } = useSelector((state) => state.MainApp);
  const getCustomerData = async () => {
    const { data } = await axios.post(`${baseapiurl}/users/getAllusers`, {
      token: userData.token,
    });

    return data;
  };
  const { data, error, isLoading } = useQuery(["customers"], getCustomerData, {
    enabled: true,
  });

  if (isLoading) return <Loader />;
  return (
    <div className="admin-main-div">
      <div className="container-fluid">
        <h2 className="mt-5">
           <span>Customers</span>
        </h2>

        <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email Address</th>
                <th scope="col">Verified</th>
                <th scope="col">Date Joined</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.response.map((data, index) => (
                <tr key={data.user_id}>
                  <td>{index + 1}</td>
                  <td>{data.Full_Name}</td>
                  <td>{data.Phone_number}</td>
                  <td>{data.Email_address}</td>
                  <td className="na">{data.isVerified ? "YES" : "NO"}</td>
                  <td>
                    <Moment format="YYYY/MM/DD">{data.created_date}</Moment>
                  </td>
                  <td>
                    <Link
                      className="btn btn-warning btn-view"
                      to={`/admin/customers/${data.user_id}`}
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
  );
}

export default Managecustomers;
