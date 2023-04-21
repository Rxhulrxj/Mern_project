import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserData } from "../../reducers/reducer";
import { useEffect } from "react";
import axios from "axios";
import { baseapiurl } from "../../common/api";

function HeaderComponent({ userData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = () => {
    dispatch(deleteUserData());
    navigate("/")
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="logo"
              src="companylogo.png"
              alt="logo"
              style={{ width: "150px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Buy
                </a>
              </li>
              {userData.isStaff == "False" && userData.isAdmin == "False" ? (
              Object.keys(userData).length && userData.isVerified != 'True'? null : (
               <li className="nav-item">
               <Link to={"/sellcars"} className="nav-link active" >
                 Sell
               </Link>
             </li>
              )
              
               ) : null} 
              {Object.keys(userData).length ? null : (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Log In
                  </Link>
                </li>
              )}
              {Object.keys(userData).length ? (
                <li className="nav-item dropstart">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="profileicon.png"
                      alt="logo"
                      style={{ width: "30px" }}
                    />
                    {userData.name}
                  </button>
                  <ul className="dropdown-menu">
                    {userData.isAdmin == "True" ? (
                      <li>
                        <Link to={`/admin/`} className="dropdown-item">
                          Admin Dashboard
                        </Link>
                      </li>
                    ) : null}
                    {userData.isStaff == "True" ? (
                      <li>
                        <Link className="dropdown-item" to={"/employee/"}>
                          Employee Dashboard
                        </Link>
                      </li>
                    ) : null}
                    {userData.isStaff == "False" &&
                    userData.isAdmin == "False" ? (
                      <li>
                        <Link className="dropdown-item" to={`/myenquiry`}>
                          My Enquires
                        </Link>
                      </li>
                    ) : null}
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="btn btn-sm btn-outline-secondary"
                    to="/register"
                  >
                    <img
                      src="profileicon.png"
                      alt="logo"
                      style={{ width: "30px" }}
                    />
                    Sign Up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
