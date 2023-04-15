import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header-component/header";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../components/footer-component/footer";
import "./registration.css";

function Registration() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [alternatephone, setAlternatephone] = useState("");
  const [address, setaddress] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const dispatch = useDispatch();
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
  const handleSubmit = (e) => {
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
    }
  };
  return (
    <>
      {isLogin == true ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <HeaderComponent userData={userData} />
          <div className="container border box-shadow rounded text-center mt-5 d-flex register-main-container ">
            <div className="row">
              <img
                src="register.jpg"
                alt="loginimage"
                width="300px"
                height="300px"
                style={{ objectFit: "contain" }}
              />
              <form onSubmit={handleSubmit} noValidate>
                <h1>Register with Us</h1>
                <br />
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      aria-label="Full Name"
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      aria-label="Phone number"
                      maxLength="10"
                      required
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={(e) => setPhonenumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Alternative Phone number"
                      aria-label="Alternative Phone number"
                      maxLength="10"
                      minLength="10"
                      required
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      onChange={(e) => setAlternatephone(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      required
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="row g-3">
                  <div className="col-md-6">
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      aria-label="Address"
                      rows="1"
                      required
                      onChange={(e) => setaddress(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      aria-label="State"
                      required
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <br />
                <p className="text-muted" style={{ fontSize: "12px" }}>
                  By clicking register, you agree to our Terms of Use, our
                  Privacy Policy and our Disclaimer
                </p>
                <br />

                <button
                  className=" login-btn"
                  style={{ fontSize: "20px", height: "50px", width: "100px" }}
                  type="submit"
                >
                  Register
                </button>
              </form>
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
