import React from "react";
import { useSelector } from "react-redux";
import { baseapiurl } from "../../../common/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/loader";
import Recentenq from "./recentenq";
import Recentsell from "./recentsell";

function Dashboard() {
  const { userData } = useSelector((state) => state.MainApp);
  const getdashboarddata = async () => {
    const { data } = await axios.post(`${baseapiurl}/dashboard/staff`,{
      token:userData.token
    });

    return data;
  };
  const { data, error, isLoading } = useQuery(["getdashboarddata"], getdashboarddata, {
    enabled: true,
  });
  if (isLoading || error) return <Loader />;
  return (
    <div className="admin-main-div">
      <div className="row">
        <div clas="row">
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="row p-3">
                    <h3>👋 Hello {userData.name}</h3>
                  </div>
                  <div className="col-md-4 mb-1 mt-3 d-flex justify-content-center rounded align-items-center">
                    <div
                      className="card"
                      style={{
                        width: "14rem",
                        boxShadow: "1px 2px 3px",
                      }}
                    >
                      <div className="card-body d-flex flex-row align-items-center">
                        <div className="flex-column">
                          <img
                            src="schedule (2).png"
                            alt="schedule Icon"
                            className="mx-auto my-1"
                            width="70"
                          />
                          <p className="card-title h6">Success Bookings</p>
                        </div>
                        <span
                          className="h2"
                          style={{
                            textShadow: "0px 1px 3px",
                            marginLeft: "18px",
                          }}
                        >
                          {data.response[0].success_booking}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-1 mt-3 d-flex justify-content-center rounded align-items-center">
                    <div
                      className="card"
                      style={{
                        width: "14rem",
                        boxShadow: "1px 2px 3px",
                      }}
                    >
                      <div className="card-body d-flex flex-row align-items-center">
                        <div className="flex-column">
                          <img
                            src="file.png"
                            alt="File Icon"
                            className="mx-auto my-1"
                            width="70"
                          />
                          <p className="card-title h6">Pending Bookings</p>
                        </div>
                        <span
                          className="h2"
                          style={{
                            textShadow: "0px 1px 3px",
                            marginLeft: "18px",
                          }}
                        >
                          {data.response[0].pending_bookings}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-1 mt-3 d-flex justify-content-center rounded align-items-center">
                    <div
                      className="card"
                      style={{
                        width: "14rem",
                        boxShadow: "1px 2px 3px",
                      }}
                    >
                      <div className="card-body d-flex flex-row align-items-center">
                        <div className="flex-column">
                          <img
                            src="sales.png"
                            alt="Sales Icon"
                            className="mx-auto my-1"
                            width="70"
                          />
                          <p className="card-title h6">Total Sales</p>
                        </div>
                        <span
                          className="h2"
                          style={{
                            textShadow: "0px 1px 3px",
                            marginLeft: "18px",
                          }}
                        >
                          {data.response[0].total_sales}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-6 rounded">
                    <div className="card-box">
                      <h4 className="header-title">Recent Sell Enquiry</h4>

                     <Recentsell />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card-box">
                      <h4 className="header-title">Recent Enquires</h4>

                      <Recentenq />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
