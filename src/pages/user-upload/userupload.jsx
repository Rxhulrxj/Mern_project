import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header-component/header";
import { useSelector } from "react-redux";
import Footer from "../../components/footer-component/footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import { baseapiurl } from "../../common/api";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

function Userupload() {
  const { userData } = useSelector((state) => state.MainApp);
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const years = Array.from(new Array(10), (val, index) => year - index);
  const getUserProfile = async() =>{
    await axios.post(baseapiurl + "/users/getprofile",{
      token:userData.token
    }).then((res)=>{
      setValue("full_Name",res.data.response.Full_Name)
      setValue("phoneNumber",res.data.response.Phone_number)
      setValue("address",res.data.response.Address)
      setValue("Aadhar",res.data.response.aadhar_no)
      setValue("email",res.data.response.Email_address)
    })
  }
 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_Name:"",
      phoneNumber:"",
      address:"",
      Aadhar:"",
      email:""
    }
  });
  const onSubmit = async(data) =>{
    console.log(data)
    data.token = userData.token
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (
        key == "front_view" ||
        key == "rear_left_view" ||
        key == "rear_view" ||
        key == "pucc_image" ||
        key == "rc_book" ||
        key == "left_view"
      ) { 
          formData.append(key, value[0]);    
      }  else {
        formData.append(key, value);
      }
    }
    await uploaddata(formData)
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  
  const uploaddata = async(formData) => {
    await axios.post(baseapiurl + "/sellers/seller-upload",formData).then((res)=>{
      if(res.data.status == true){
        navigate('/myenquiry')
      }
    }).catch((err)=>{
      console.log(err)
      toast.error(err.response.data.response)
    })
  }
  
  return (
    <>
      <HeaderComponent userData={userData} />
      <div>
        <div className="container-fluid">
          <div className="row">
            <span>
              <Link to={"/"} className="btn logout">
                <img
                  src="backbtn.png"
                  alt="Logout Icon"
                  className="img-fluid mx-auto my-1"
                  width="30"
                />
                Back to Home
              </Link>
            </span>
          </div>
          <div className="container">
            <h5 className="display-5">Sell Your Car</h5>
            <form  onSubmit={handleSubmit(onSubmit)}
            
            noValidate
            encType="multipart/form-data">
            <div className="card c1 m-5">
              <div className="card-body">
                <h5 className="card-title">
                  <u>Customer Personal Details</u>
                </h5>
                
                  <div className="row ">
                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="fullName">Full Name</label>
                        <input
                          type="text"
                        
                          className="form-control form-control-lg"
                          id="fullName"

                          {...register("full_Name", {
                            required: "Full Name is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input
                          type="tel"
                          
                          className="form-control form-control-lg"
                          id="phoneNumber"
                        
                          {...register("phoneNumber", {
                            required: "Phone Number is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="address">Address</label>
                        <textarea
                        
                          className="form-control form-control-lg"
                          id="address"
                          rows="4"
                          
                          {...register("address", {
                            required: "Address is required",
                          })}
                        ></textarea>
                      </div>
                      <br />
                    </div>

                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          
                          className="form-control form-control-lg"
                          id="email"
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="Aadhar">Aadhar Number</label>
                        <input
                          type="text"
                         
                          className="form-control form-control-lg"
                          id="Aadhar"
                          {...register("Aadhar", {
                            required: "Aadhar Number is required",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>

            <div className="card c2 m-5 ">
              <div className="card-body">
                <h5 className="card-title">
                  <u>Vehicle Details</u>{" "}
                </h5>
               
                  <div className="row ">
                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="bmName">Brand/Manufacture Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="bmName"
                          {...register("Manufacturename", {
                            required: "Brand/Manufacture Name is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="modelyear">Model Year</label>
                        <select id="modelyear" {...register("modelyear", {
                            required: "Model Year is required",
                          })}  className="form-select">

                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="engineNumber">Engine Number</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="engineNumber"
                          {...register("engineNumber", {
                            required: "Engine Number is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="ChasisNumber">Chasis Number</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="ChasisNumber"
                          {...register("ChasisNumber", {
                            required: "Chasis Number is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="transmission">Transmission</label>
                        <select id="transmission" {...register("transmission", {
                            required: "Transmission is required",
                          })} className="form-select">
                          <option value="Automatic">Automatic</option>
                          <option value="Manual">Manual</option>
                        </select>
                        
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="taxvalid">Tax Valid Upto</label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="taxvalid"
                          {...register("taxvalid", {
                            required: "Tax Valid Upto is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="Extrafitting" className="form-label">
                          Extra Fittings
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="Extrafitting"
                          name="Extrafitting"
                          {...register("Extrafitting", {
                            required: "Extra Fittings is required",
                          })}
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="left_view" className="form-label">
                          Left Side View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="left_view"
                          {...register("left_view", {
                            required: "Left Side View is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="rear_view" className="form-label">
                          Rear View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="rear_view"
                          {...register("rear_view", {
                            required: "Rear View is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="pucc" className="form-label">
                          Pucc
                        </label>
                        <input className="form-control" type="file" id="pucc" 
                         {...register("pucc_image", {
                          required: "Rear View is required",
                        })}
                        />
                      </div>
                      <br />
                    </div>

                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="ModelName">Model Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="ModelName"
                          {...register("ModelName", {
                            required: "Model Name is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="vehicleColor">Vehicle Color</label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="altPhoneNumber"
                          {...register("vehicleColor", {
                            required: "Vehicle Color is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="kmdriven">Total K/M Driven</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="kmdriven"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          {...register("kmdriven", {
                            required: "Total K/M Driven is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="fuelType">Fuel Type</label>
                        <select  id="fuelType" {...register("fuelType", {
                            required: "Fuel Type is required",
                          })} className="form-select">
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="other">Other</option>
                          </select>
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="vlocation">Vehicle Location</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="vlocation"
                          {...register("vlocation", {
                            required: "Vehicle Location is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="vehicle_registration_number">
                          Vehicle Registration Number
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="vehicle_registration_number"
                          {...register("vehicle_registration_number", {
                            required: "Vehicle Registration Number is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="front_view" className="form-label">
                          Front View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="front_view"
                          {...register("front_view", {
                            required: "Front View is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="rear_left_view" className="form-label">
                          Rear Left View
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="rear_left_view"
                          {...register("rear_left_view", {
                            required: "Rear Left View is required",
                          })}
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label for="rc_book" className="form-label">
                          Vehicle Rc Book
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="rc_book"
                          {...register("rc_book", {
                            required: "Vehicle Rc Book is required",
                          })}
                        />
                      </div>
                      <br />
                    </div>
                  </div>
              
              </div>
            </div>

            <div className="card c3 m-5 ">
              <div className="card-body">
                <h5 className="card-title">
                  <u>Vehicle Price Quote</u>{" "}
                </h5>
              
                  <div className="row ">
                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="price">Price</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="price"
                          {...register("price", {
                            required: "Price is required",
                          })}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                      </div>
                      <br />
                    </div>

                    <div className="col-md-5 p-5 ">
                      <div className="form-group">
                        <label for="cmt">Comments(if any)</label>
                        <textarea
                          className="form-control form-control-lg"
                          id="cmt"
                          rows="3"
                          {...register("Comments", {
                            required: false,
                          })}
                        ></textarea>
                      </div>
                      <br />
                    </div>
                  </div>
              
              </div>
            </div>
            <div className="row m-5">
              <div className="d-flex justify-content-between ">
                <div>
                  <p className="text-muted">
                    By clicking the submit button, I hereby agree to and accept
                    the following terms and conditions.
                  </p>
                </div>
                <div>
                  <button className="btn btn-warning border border-dark ps-3 pe-3" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Userupload;
