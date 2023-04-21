import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../../../reducers/reducer";
function Sidebar() {
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
                  to="/admin/"
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
              <div className="container-fluid p-0">
                <NavLink
                  to="/admin/managecustomers"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffa800" : "white",
                  })}
                  className="btn btn-ooi btn-ooi-parent my-2 d-flex justify-content-between"
                  id="AddBook"
                >
                  <span>Customers</span>
                  <img
                    src="rating (1).png"
                    style={{ width: "30px", marginLeft: "64px" }}
                  />
                </NavLink>
              </div>
              <div className="container-fluid p-0 ">
                <NavLink
                  to="/admin/managecars"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffa800" : "white",
                  })}
                  className="btn btn-ooi btn-ooi-parent my-2 d-flex justify-content-between"
                  id="AddBook"
                >
                  <span>Manage Cars</span>
                  <img
                    src="management-service.png"
                    style={{ width: "29px", marginLeft: "40px" }}
                  />
                </NavLink>
              </div>
              <div className="container-fluid p-0 ">
                <NavLink
                  to="/admin/manageenquires"
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
                  to="/admin/managesellers"
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
              <div className="container-fluid p-0 ">
                <NavLink
                  to="/admin/manageteam"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#ffa800" : "white",
                  })}
                  className="btn btn-ooi btn-ooi-parent my-2 d-flex justify-content-between"
                  id="AddBook"
                >
                  <span>Manage Team</span>
                  <img
                    src="people.png"
                    style={{ width: "30px", marginLeft: "39px" }}
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

export default Sidebar;
