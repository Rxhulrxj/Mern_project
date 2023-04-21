import React from "react";
// import { employees } from "../../../dummydata/datas";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseapiurl } from "../../../common/api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/loader";
import { useSelector } from "react-redux";

function Manageteam() {
  const { userData } = useSelector((state) => state.MainApp);
  const getEmployeeData = async () => {
    const { data } = await axios.post(`${baseapiurl}/employee/get-employees`,{
      token:userData.token
    });
    
    return data;
  };
  const { data, error, isLoading } = useQuery(["getEmployee"], getEmployeeData, {
    enabled: true,
  });
  
  if (isLoading || error) return <Loader />;
  
  return (
    <div className="admin-main-div">
      <div className="container mt-4 mb-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 h3">
            <p>Teams</p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/admin/team/add" className="btn btn-warning">
              Add Employee
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="table-responsive">
        {/* {console.log(Object.keys(employees).length === 0)} */}
        {/* {employees !=undefined ? */}
          <table className="table table-bordered text-center mb-0 mt-2 ">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Employee Name</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Email Address</th>
                <th>Phone No</th>
                <th>Date Joined</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {data && data.response.map((dat, index) => (
                
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{dat.Full_Name}</td>
                  <td>{dat.role}</td>
                  <td>{dat.branch}</td>
                  <td>{dat.Email_address}</td>
                  <td>{dat.Phone_number}</td>
                  <td>
                    <Moment format="YYYY/MM/DD">{dat.created_date}</Moment>
                  </td>
                  <td>
                    <Link
                      to={`/admin/team/edit/${dat.user_id}`}
                      state={dat}
                      type="button"
                      className="btn btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/admin/team/${dat.user_id}`}
                      state={dat}
                      type="button"
                      className="btn btn-warning"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* :<div className="text-center">
                <span>No Employees Found</span></div>} */}
        </div>
      </div>
    </div>
  );
}

export default Manageteam;
