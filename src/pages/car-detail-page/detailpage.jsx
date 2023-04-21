import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../components/header-component/header";
import Footer from "../../components/footer-component/footer";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router-dom";
import { baseapiurl } from "../../common/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Detailpage() {
  const { userData } = useSelector((state) => state.MainApp);
  const [hasData, setHasData] = useState(false);
  const [licenseno, setLicenseno] = useState("");
  const [licenseexpiry, setLicenseExpiry] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [testdrivedate, setTestDriveDate] = useState("");
  const [timeslot, setTimeSlot] = useState("");
  const [customerr, setCustomerr] = useState("");
  const location = useLocation();
  const data = location.state;
  var closeModalRef = React.createRef();
  const images = [
    {
      original: baseapiurl + "/" + data.front_view_image,
      thumbnail: baseapiurl + "/" + data.front_view_image,
      originalTitle: "Front View",
      originalHeight: "350",
      description: "Front View",
    },
    {
      original: baseapiurl + "/" + data.left_side_image,
      thumbnail: baseapiurl + "/" + data.left_side_image,
      description: "Left View",
      originalHeight: "350",
    },
    {
      original: baseapiurl + "/" + data.rear_left_view_image,
      thumbnail: baseapiurl + "/" + data.rear_left_view_image,
      description: "Rear Left View",
      originalHeight: "350",
    },
    {
      original: baseapiurl + "/" + data.rear_view_image,
      thumbnail: baseapiurl + "/" + data.rear_view_image,
      description: "Rear View",
      originalHeight: "350",
    },
  ];
  const getUserProfile = async () => {
    await axios
      .post(`${baseapiurl}/users/getprofile`, {
        token: userData.token,
      })
      .then((res) => {
        console.log(res.data);
        setLicenseno(res.data.response.license_no ?? "");
        setLicenseExpiry(res.data.response.license_expiry ?? "");
        setAadhar(res.data.response.aadhar_no ?? "");
        if (
          res.data.response.hasOwnProperty("license_no") ||
          res.data.response.hasOwnProperty("license_expiry") ||
          res.data.response.hasOwnProperty("aadhar_no")
        ) {
          setHasData(true);
        }
      });
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  const addenq = async() => {
    if (testdrivedate == "") {
      setCustomerr("Please Choose a test drive Date");
    } else if (timeslot == "" || timeslot == "Choose a timeslot") {
      setCustomerr("Please Choose a test drive Timeslot");
    } else if (licenseno == "") {
      setCustomerr("Please type your License No");
    } else if (licenseexpiry == "") {
      setCustomerr("Please Choose your License Expiry Date");
    } else if (aadhar == "") {
      setCustomerr("Please type your Aadhar No");
    } else {
      setCustomerr("");
      if(!hasData){
        await addProfile();
      }
      await addEnquiry();
    }
  };
  const addProfile = async () => {
    await axios
      .post(`${baseapiurl}/users/addprofile`, {
        token: userData.token,
        license_no: licenseno,
        license_expiry: licenseexpiry,
        aadhar_no: aadhar,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const addEnquiry = async () => {
    await axios.post(`${baseapiurl}/enquiry/add-enquiry`, {
      token:userData.token,
      vehicleid:data.id,
      testdrivedate:testdrivedate,
      timeslot:timeslot,
    }).then((res)=>{
      console.log(res.data);
      document.getElementById('closeModal').click();
      toast.success("Test Drive Booked Successfully")
    }).catch((err)=>{
      console.log(err)
      if(err.response.data.status == false){
        toast.error(err.response.data.response)
      }
    });
  };
  const dataclear = () =>{
    setTestDriveDate("");
    setTimeSlot("");
  }
  return (
    <div>
      <HeaderComponent userData={userData} />
      <div className="container mt-5">
        <div className="row">
          <div className="col" style={{ height: "500px" }}>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              autoPlay={false}
              additionalClass="slide-class"
            />
          </div>
          <div className="col">
            <div className="row">
              <h1>
                {data.manufacture_name.toUpperCase() +
                  "  " +
                  data.model_name.toUpperCase()}
              </h1>
            </div>
            <br />
            <div className="row">
              <p>
                <span className="text-muted">Starting from </span> <br />
                <span className="h3">{data.price.toLocaleString("en-US")}</span>
              </p>
            </div>
            <div className="row">
              <div className="col">
                <img src="fuel-pump.png" alt="fuel icon" width="25" />
                {data.fuel_type}
              </div>
              <div className="col">
                <img src="meter.png" alt="meter icon" width="25" />
                {data.total_km_driven.toLocaleString("en-US")} k/m
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src="gear-shift.png" alt="gear-shift icon" width="25" />
                {data.transmission.toUpperCase()}
              </div>
              <div className="col">
                <img src="date.png" alt="date icon" width="25" />
                {data.model_year}
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <img src="placeholder.png" alt="location icon" width="25" />
                Trivandrum
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col">
                <a href="tel:1234567890" className="btn btn-dark w-100">
                  Contact the dealer
                </a>
              </div>
              <div className="col">
                <button
                  className="btn btn-warning  w-100 "
                  data-bs-toggle="modal"
                  data-bs-target="#booktestdrivemodal"
                >
                  Book a test Drive Now
                </button>
                <div
                  className="modal fade"
                  id="booktestdrivemodal"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="booktestdrivemodalabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Book a Test Drive Now
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {customerr && (
                          <div className="row g-3">
                            <div className="col text-center">
                              <span className="text-danger">{customerr}</span>
                            </div>
                          </div>
                        )}
                        <div className="row g-3">
                          <div className="col">
                            <label htmlFor="licnumber" className="form-label">
                              License Number
                            </label>
                            <input
                              value={licenseno}
                              type="text"
                              className="form-control"
                              placeholder="License Number"
                              aria-label="licnumber"
                              id="licnumber"
                              readOnly={hasData == true ? true : false}
                              onChange={(e) => setLicenseno(e.target.value)}
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="licexpdate" className="form-label">
                              License Expiry Date
                            </label>
                            <input
                              value={licenseexpiry}
                              type="date"
                              id="licexpdate"
                              className="form-control"
                              placeholder="License Expiry Date"
                              aria-label="licexpdate"
                              min={new Date().toISOString().split("T")[0]}
                              readOnly={hasData == true ? true : false}
                              onChange={(e) => setLicenseExpiry(e.target.value)}
                            />
                          </div>
                        </div>
                        <br />

                        <div className="row g-3">
                          <div className="col">
                            <label htmlFor="aadharnum" className="form-label">
                              Aadhar Number
                            </label>
                            <input
                              value={aadhar}
                              type="text"
                              className="form-control"
                              placeholder="Aadhar Number"
                              aria-label="aadharnum"
                              id="aadharnum"
                              readOnly={hasData == true ? true : false}
                              onChange={(e) => setAadhar(e.target.value)}
                            />
                          </div>
                          <div className="col">
                            <label htmlFor="testdate" className="form-label">
                              Test Drive Date
                            </label>
                            <input
                              value={testdrivedate}
                              type="date"
                              className="form-control"
                              placeholder="Test Drive Date"
                              aria-label="testdate"
                              min={new Date().toISOString().split("T")[0]}
                              onChange={(e) => setTestDriveDate(e.target.value)}
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row g-3">
                          <div className="col">
                            <label htmlFor="timeslot" className="form-label">
                              Test Drive Timeslot
                            </label>
                            <select
                              id="timeslot"
                              className="form-select"
                              value={timeslot}
                              onChange={(e) => setTimeSlot(e.target.value)}
                            >
                              <option readOnly>Choose a timeslot</option>
                              <option value="11am to 1pm">11am to 1pm</option>
                              <option value="1pm to 3pm">1pm to 3pm</option>
                              <option value="3pm to 5pm">3pm to 5pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-dark"
                          data-bs-dismiss="modal"
                          id="closeModal"
                          onClick={dataclear}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={addenq}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>
            <u>Other Details</u>
          </h3>
          <br />
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-6">Brand</div>
            <div className="col-md-6">{data.manufacture_name}</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Model Name</div>
            <div className="col-md-6">{data.model_name}</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Color</div>
            <div className="col-md-6 d-flex">
              <span
                className="me-2"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: data.Vehicle_color,
                }}
              ></span>
              {data.Vehicle_color.toUpperCase()}
            </div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Number of Owners</div>
            <div className="col-md-6">1</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Engine Number</div>
            <div className="col-md-6">{data.Engine_number.toUpperCase()}</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Chasis Number</div>
            <div className="col-md-6">{data.chasis_number.toUpperCase()}</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Extra fittings</div>
            <div className="col-md-6">{data.extra_fittings.toUpperCase()}</div>
          </div>
          <hr />
          <div className="row mb-2">
            <div className="col-md-6">Tax Valid Upto</div>
            <div className="col-md-6">{data.tax_valid}</div>
          </div>
          <hr />
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Detailpage;
