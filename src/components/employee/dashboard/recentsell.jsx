import React from "react";
import { useSelector } from "react-redux";
import { baseapiurl } from "../../../common/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/loader";

function Recentsell() {
  const { userData } = useSelector((state) => state.MainApp);
  const getRecentsell = async () => {
    const { data } = await axios.post(
      `${baseapiurl}/sellers/recentsellleadstaff`,
      {
        token: userData.token,
      }
    );

    return data;
  };
  const { data, error, isLoading } = useQuery(
    ["getRecentsell"],
    getRecentsell,
    {
      enabled: true,
    }
  );

  if (isLoading || error) return <Loader />;
  return (
    <div className="table-responsive">
      <table className="table table-bordered text-center mb-0 mt-2">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Customer Name</th>
            <th>Car Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.response.map((dat, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{dat.full_Name}</td>
              <td>{dat.ModelName}</td>
              <td>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    dat.current_status == "Processing"
                      ? "btn-primary"
                      : dat.current_status == "Cancelled"
                      ? "btn-danger"
                      : "btn-success"
                  }`}
                >
                  {dat.current_status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recentsell;
