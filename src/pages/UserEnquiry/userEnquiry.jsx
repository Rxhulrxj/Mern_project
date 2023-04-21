import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header-component/header";
import { useSelector } from "react-redux";
import Footer from "../../components/footer-component/footer";
import axios from "axios";
import { baseapiurl } from "../../common/api";
import moment from "moment";

function UserEnquiry() {
  const { userData } = useSelector((state) => state.MainApp);
  const [enqdata, setEnqData] = useState([]);
  const [sellerdata, setSellerData] = useState([]);
  const getEnquires = async () => {
    await axios
      .post(`${baseapiurl}/enquiry/get-enq`, {
        token: userData.token,
      })
      .then((result) => {
        setEnqData(result.data.response);
      });
  };
  const getSellerList = async () => {
    await axios
      .post(`${baseapiurl}/sellers/usersellerlist`, {
        token: userData.token,
      })
      .then((result) => {
        setSellerData(result.data.response);
      });
  };
  useEffect(() => {
    getEnquires();
    getSellerList();
  }, []);
  return (
    <>
      <HeaderComponent userData={userData} />
      <div style={{ overflow: "hidden" }}>
        <div>
          <div className="row mt-5" style={{ marginLeft: "14px" }}>
            <div className="col-sm-6">
              <div className="row  h3" style={{ marginLeft: "10px" }}>
                Hello {userData.name},
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
              {enqdata.length == 0 ? <div className="d-flex justify-content-center align-items-center" style={{height:"200px"}}>
                <h4>No Enquires Found</h4>
              </div>:(
              enqdata && enqdata.map((data, index) => (
                <div className="row" key={index}>
                  <div className="col-sm-8">
                    <div className="card mt-4">
                      <div
                        className="row card-body"
                        style={{ flexDirection: "row" }}
                      >
                        <div className="col-sm-8">
                          <div className="row">
                            <div className="col-4">
                              <h5 className="card-title">{data.manufacture_name + " "+data.model_name}</h5>
                            </div>
                            <div className="col-4">
                              <div className="card-inner-box">
                                <span>
                                  <img src="gear-shift.png" width="30" />
                                  {data.transmission.toUpperCase()}
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
                                  {data.fuel_type.toUpperCase()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col fw-bold text-uppercase">
                              Enqiured date:
                            </div>
                            <div className="col">{moment(data.Enquiry_created).format("DD-MM-YYYY")}</div>
                            <div className="col fw-bold text-uppercase text-nowrap">
                              Enquired handle by:
                            </div>
                            <div className="col">{data.employee_name.toUpperCase()}</div>
                          </div>
                          <div className="row mt-3">
                            <div className="col fw-bold text-uppercase">
                              <p>
                                <span className="me-3">Current Status:</span>
                                <button
                                  type="button"
                                  className={`btn text-uppercase ${data.Current_Status == "Processing"? 'btn-primary':data.Current_Status == "Cancelled"? 'btn-danger': 'btn-success'}`}
                                >
                                  {data.Current_Status.toUpperCase()}
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <img
                          className="col-sm-4"
                          src={baseapiurl+ "/" + data.thumbnail}
                          alt="sans"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )))}
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              {sellerdata.length == 0 ? <div className="d-flex justify-content-center align-items-center" style={{height:"200px"}}>
                <h4>No Enquires Found</h4>
              </div>:(
              sellerdata.map((data)=><div className="row">
                <div className="col-sm-8">
                  <div className="card mt-4">
                    <div
                      className="row card-body"
                      style={{ flexDirection: "row" }}
                    >
                      <div className="col-sm-8">
                        <div className="row">
                          <div className="col-4">
                            <h5 className="card-title">{data.Manufacturename.toUpperCase() + " " + data.ModelName.toUpperCase()}</h5>
                          </div>
                          <div className="col-4">
                            <div className="card-inner-box">
                              <span>
                                <img src="gear-shift.png" width="30" />
                                {data.transmission.toUpperCase()}
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
                                {data.fuelType.toUpperCase()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col fw-bold text-uppercase">
                            Enqiured date:
                          </div>
                          <div className="col">{moment(data.created_date).format("DD-MM-YYYY")}</div>
                          <div className="col fw-bold text-uppercase text-nowrap">
                            Enquired handle by:
                          </div>
                          <div className="col">{data.employee_name}</div>
                        </div>
                        <div className="row mt-3">
                          <div className="col fw-bold text-uppercase">
                            <p>
                              <span className="me-3">Current Status:</span>
                              <button
                                type="button"
                                className={`btn ${data.current_status == "Processing"? 'btn-primary':data.current_status == "Cancelled"? 'btn-danger': 'btn-success'} text-uppercase`}
                              >
                                {data.current_status.toUpperCase()}
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                      <img className="col-sm-4" src={baseapiurl+"/"+ data.left_view} alt="sans" />
                    </div>
                  </div>
                </div>
              </div>))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserEnquiry;
