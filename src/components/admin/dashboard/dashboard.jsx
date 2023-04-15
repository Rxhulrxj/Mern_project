import React from "react";

function Dashboard() {
  return (
    <div className="admin-main-div">
      <div className="row">
        <div clas="row">
          <div className="container">
            <div className="row">
              <div
                className="row"
                style={{ paddingTop: "70px", paddingLeft: "30px" }}
              >
                <h3>👋 Hello Admin</h3>
              </div>
              <br />
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
                      style={{ textShadow: "0px 1px 3px", marginLeft: "18px" }}
                    >
                      3
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
                      style={{ textShadow: "0px 1px 3px", marginLeft: "18px" }}
                    >
                      3
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
                      style={{ textShadow: "0px 1px 3px", marginLeft: "18px" }}
                    >
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-6 rounded">
                <div className="card-box">
                  <h4 className="header-title">Recent Sell Enquiry</h4>

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
                        <tr>
                          <th scope="row">1</th>
                          <td>Rahul Raj</td>
                          <td>Baleno</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Varsha R</td>
                          <td>xUV100</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Jishnu</td>
                          <td>xUV100</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-danger"
                            >
                              Rejected
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Jacob</td>
                          <td>safari</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-success"
                            >
                              Success
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>John</td>
                          <td>Harrier</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card-box">
                  <h4 className="header-title">Recent Enquires</h4>

                  <div className="table-responsive">
                    <table className="table table-bordered text-center mb-0 mt-2">
                      <thead>
                        <tr>
                          <th>Sl.No</th>
                          <th>Customer Name</th>
                          <th>Data Booked</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Rahul Raj</td>
                          <td>27-02-2023</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Varsha R</td>
                          <td>27-02-2023</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-success"
                            >
                              Success
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Jishnu</td>
                          <td>27-02-2023</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Jacob</td>
                          <td>27-02-2023</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-danger"
                            >
                              Cancelled
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>John</td>
                          <td>27-02-2023</td>
                          <td>
                            <button
                              type="button"
                              className="btn  btn-sm btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
