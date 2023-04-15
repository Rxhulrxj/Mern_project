import React from "react";
import HeaderComponent from "../../components/header-component/header";
import { useSelector } from "react-redux";
import Footer from "../../components/footer-component/footer";

function UserEnquiry() {
  const { userData } = useSelector((state) => state.MainApp);
  return (
    <>
      <HeaderComponent userData={userData} />
      <div style={{ overflow: "hidden" }}>
        <div>
          <div className="row mt-5" style={{ marginLeft: "14px" }}>
            <div className="col-sm-6">
              <div className="row  h3" style={{ marginLeft: "10px" }}>
                Hello Rahul,
              </div>
              <div className="card ">
                <div className="row card-body">
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-6">
                        <h5 className="card-title">
                          <u>Did you Know?</u>
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        """ The most expensive car was the Bugatti Royale
                        Kellner Coupe
                      </div>
                    </div>
                    <div className="col-12  ">and sold at $8.7 Million."""</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="div2" className="row mt-5" style={{ marginLeft: "14px" }}>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                My Enquiry
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Sell Cars
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <div className="row">
                <div className="col-sm-8">
                  <div className="card mt-4">
                    <div
                      className="row card-body"
                      style={{ flexDirection: "row" }}
                    >
                      <div className="col-sm-8">
                        <div className="row">
                          <div className="col-4">
                            <h5 className="card-title">BMW X1</h5>
                          </div>
                          <div className="col-4">
                            <div className="card-inner-box">
                              <span>
                                <img src="gear-shift.png" width="30" />
                                AUTOMATIC
                              </span>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="card-inner-box">
                              <span>
                                <img
                                  src="fuel-pump.png"
                                  alt="fuel icon"
                                  width="25"
                                />
                                Diesel
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col fw-bold text-uppercase">
                            Enqiured date:
                          </div>
                          <div className="col">23-03-2023</div>
                          <div className="col fw-bold text-uppercase text-nowrap">
                            Enquired handle by:
                          </div>
                          <div className="col">varsha</div>
                        </div>
                        <div className="row mt-3">
                          <div className="col fw-bold text-uppercase">
                            <p>
                              <span className="me-3">Current Status:</span>
                              <button
                                type="button"
                                className="btn btn-primary text-uppercase"
                              >
                                In progress
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <img className="col-sm-4" src="suvcar1.png" alt="sans" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              <div className="row">
                <div className="col-sm-8">
                  <div className="card mt-4">
                    <div
                      className="row card-body"
                      style={{ flexDirection: "row" }}
                    >
                      <div className="col-sm-8">
                        <div className="row">
                          <div className="col-4">
                            <h5 className="card-title">BMW X1</h5>
                          </div>
                          <div className="col-4">
                            <div className="card-inner-box">
                              <span>
                                <img src="gear-shift.png" width="30" />
                                AUTOMATIC
                              </span>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="card-inner-box">
                              <span>
                                <img
                                  src="fuel-pump.png"
                                  alt="fuel icon"
                                  width="25"
                                />
                                Diesel
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col fw-bold text-uppercase">
                            Enqiured date:
                          </div>
                          <div className="col">23-03-2023</div>
                          <div className="col fw-bold text-uppercase text-nowrap">
                            Enquired handle by:
                          </div>
                          <div className="col">varsha</div>
                        </div>
                        <div className="row mt-3">
                          <div className="col fw-bold text-uppercase">
                            <p>
                              <span className="me-3">Current Status:</span>
                              <button
                                type="button"
                                className="btn btn-primary text-uppercase"
                              >
                                In progress
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <img className="col-sm-4" src="suvcar1.png" alt="sans" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserEnquiry;
