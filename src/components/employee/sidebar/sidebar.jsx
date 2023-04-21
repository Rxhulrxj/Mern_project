import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../admin/sidebar/sidebar.css";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../../../reducers/reducer";
function EmployeeSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(deleteUserData());
    navigate('/')
  };
  return (
    <div className="mask scroll--simple h-100 p-0" style={{ overflow: "auto" }}>
      <div className="m-0 p-0 ">
        <div className="container-fluid admin-body-container-fluid m-0 p-0">
          <nav className=" scroll--simple  d-lg-block sidebar-sticky">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="companylogo-nobg.png"
                style={{ width: "170px", objectFit: "cover" }}
              />

              <div className="container-fluid p-0">
                <NavLink
                  to="/employee/"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffa800" : "white",
                  })}
                  className="btn btn-ooi btn-ooi-parent my-2 d-flex justify-content-between"
                  id="AddBook"
                >
                  <span>Dashboard</span>
                  <img
                    src="home.png"
                    style={{ width: "25px", marginLeft: "64px" }}
                  />
                </NavLink>
              </div>

              <div className="container-fluid p-0 ">
                <NavLink
                  to="/employee/enquires"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffa800" : "white",
                  })}
                  className="btn btn-ooi btn-ooi-parent my-2 d-flex justify-content-between"
                  id="AddBook"
                >
                  <span>Enquries</span>
                  <img
                    src="files.png"
                    style={{ width: "29px", marginLeft: "76px" }}
                  />
                </NavLink>
              </div>
              <div className="container-fluid p-0 ">
                <NavLink
                  to="/employee/sellers"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffa800" : "white",
                  })}
                  className="btn btn-ooi btn-ooi-parent my-2 d-flex justify-content-between"
                  id="AddBook"
                >
                  <span>Sellers</span>
                  <img
                    src="seller.png"
                    style={{ width: "30px", marginLeft: "86px" }}
                  />
                </NavLink>
              </div>
            </div>
          </nav>
          <div>
            <nav className="navbar py-2" style={{ backgroundColor: "black" }}>
              <div className="container-fluid">
                <a className="navbar-brand"></a>
                <div className="dropstart">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="profileicon.png"
                      alt="Logout Icon"
                      className="img-fluid"
                      width="30"
                    />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button className="dropdown-item" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSidebar;
