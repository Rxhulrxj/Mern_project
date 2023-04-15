import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseapiurl } from "../../common/api";
import { addUserData } from "../../reducers/reducer";
import { Navigate } from "react-router-dom";
import HeaderComponent from "../../components/header-component/header";
import Footer from "../../components/footer-component/footer";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.MainApp);

  useEffect(() => {
    if (Object.keys(userData).length) {
      setIsLogin(true);
    }
  }, []);
  console.log(isLogin);
  function handleusername(e) {
    setUsername(e.target.value);
  }
  function handlepassword(e) {
    setPassword(e.target.value);
  }
  const handleSubmit = async () => {
    toast.info("Please Wait...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    if (username == "" && password == "") {
      toast.error("Username and password is Required", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      await axios
        .post(`${baseapiurl}/auth/login`, {
          email: username,
          password: password,
        })
        .catch((err) => {
          console.log(err.response.data.response);
          toast.error(err.response.data.response, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setIsLogin(false);
        })
        .then((res) => {
          console.log(res);
          dispatch(addUserData({ userdata: res.data }));
          setIsLogin(true);
        });
    }
  };
  return (
    <>
      {isLogin == true ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <HeaderComponent userData={userData} />
          <div className="container border box-shadow rounded text-center mt-5 d-flex login-main-container ">
            <div className="row">
              <img
                src="login.jpg"
                alt="loginimage"
                width="300px"
                height="300px"
                style={{ objectFit: "contain" }}
              />
              <div>
                <h1>Login with Us</h1>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={handleusername}
                  />
                  <label htmlFor="username" className="ms-2">
                    Email address
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handlepassword}
                  />
                  <label htmlFor="password" className="ms-2">
                    Password
                  </label>
                </div>
                <button
                  className=" login-btn"
                  style={{ fontSize: "20px", height: "50px", width: "100%" }}
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
            <ToastContainer />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Login;
