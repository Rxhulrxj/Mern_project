import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header-component/header";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../components/footer-component/footer";
import "./registration.css";
import axios from "axios";
import { baseapiurl } from "../../common/api";
import { Navigate, useNavigate } from "react-router-dom";

function Registration() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setaddress] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [otp, setOTP] = useState("");
  const [userId,setUserId] = useState("")
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { userData } = useSelector((state) => state.MainApp);
  const toasterror = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };
  useEffect(() => {
    if (Object.keys(userData).length) {
      setIsLogin(true);
    }
  }, []);
  const handleSubmit = async(e) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    e.preventDefault();
    if (fullName == "") {
      toasterror("Please Provide Full Name");
    } else if (email == "") {
      toasterror("Please Provide Email Address");
    } else if (!reg.test(email)) {
      toasterror("Please provide a Valid Email Address");
    } else if (phonenumber == "" || phonenumber.length < 10) {
      toasterror("Please Provide valid Phone Number");
    } else if (address == "" || state == "") {
      toasterror("Please Provide Address And State");
    } else if (password == "" || confpassword == "") {
      toasterror("Please Provide Password");
    } else if (password != confpassword) {
      toasterror("Password not Matching");
    } else {
      await registeruser()
    }
  };
  const registeruser = async () => {
    var data = {
      fullname: fullName,
      emailaddress: email,
      phonenumber: phonenumber,
      address: address + state,
      password: password,
      dob: dob,
    };
    await axios
      .post(`${baseapiurl}/auth/register`, data)
      .catch((err) => {
        if (err.response.data.response == "Email Address Already Exists") {
          toasterror("Email Address Already Exists");
          setIsSubmitted(false);
        }
      })
      .then((result) => {
        if (result.data.status) {
          console.log(result.data);
          toast.success("User Registered Successfully.Please Check your Email");
          setOTP(result.data.otp);
          setUserId(result.data.user_id)
          setIsSubmitted(true);
        }
      });
  };
  const verifyotp = async() =>{
    var data ={
      userid:userId,
      otp:otp
    }
    await axios.post(`${baseapiurl}/auth/verifyotp`,data).then((result)=>{
      if(result.data.status){
        console.log(result.data);
        toast.success("OTP Verified Successfully");
        navigation('/login')
      }
    }).catch((err)=>{
      console.log(err.response.data.response)
      if(err.response.data.response=="Otp Not Matching"){
        toast.error("Invalid OTP");
      }
    })
  }
  return (
    <>
      {isLogin == true ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <HeaderComponent userData={userData} />
          <div className="container border box-shadow rounded  mt-5 d-flex register-main-container ">
            <div className="row">
              <img
                src="register.jpg"
                alt="loginimage"
                width="300px"
                height="300px"
                style={{ objectFit: "contain" }}
              />
               <h1 className="text-center">Register with Us</h1>
               <br /><br />
              {isSubmitted == false ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          aria-label="Full Name"
                          id="fullname"
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="fullname">
                          Full Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Email Address"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="email">
                          Email Address
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row g-3">
                    <div className=" col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone number"
                          aria-label="Phone number"
                          id="phone_num"
                          maxLength="10"
                          required
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          onChange={(e) => setPhonenumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="phone_num">
                          Phone number
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="dob">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date of Birth"
                        id="dob"
                        required
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-label="password"
                          id="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          aria-label="Confirm Password"
                          id="confpass"
                          required
                          onChange={(e) => setConfPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="confpass">
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          aria-label="Address"
                          id="address"
                          rows="1"
                          required
                          onChange={(e) => setaddress(e.target.value)}
                        />
                        <label className="form-label" htmlFor="address">
                          Address
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State"
                          aria-label="State"
                          id="State"
                          required
                          onChange={(e) => setState(e.target.value)}
                        />
                        <label className="form-label" htmlFor="State">
                          State
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />

                  <br />
                  <br />
                  <p
                    className="text-muted text-center"
                    style={{ fontSize: "12px" }}
                  >
                    By clicking register, you agree to our Terms of Use, our
                    Privacy Policy and our Disclaimer
                  </p>
                  <br />
                  <div className="d-flex justify-content-center">
                    <button
                      className=" login-btn"
                      style={{
                        fontSize: "20px",
                        height: "50px",
                        width: "100px",
                      }}
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              ) : (
                <div className="container">
                  <div className="row g-3">
                    <div className="d-flex justify-content-center">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Otp"
                          aria-label="Enter Otp"
                          id="otp"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength="4"
                          onChange={(e) => setOTP(e.target.value)}
                        />
                        <label className="form-label" htmlFor="otp">
                          Enter Otp
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <button
                      className=" login-btn"
                      style={{
                        fontSize: "20px",
                        height: "50px",
                        width: "100px",
                      }}
                      type="button"
                      onClick={async() => await verifyotp()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
            <ToastContainer />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Registration;
