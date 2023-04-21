import React, { useEffect, useState } from "react";
import EmployeeSidebar from "../../components/employee/sidebar/sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../components/employee/dashboard/dashboard";
import Sellers from "../../components/employee/sellers/Sellers";
import EnquiresEmployee from "../../components/employee/enquires/Enquires";

import EnquirydetailEmployee from "../../components/employee/enquires/enquirydetail";
import Sellerdetails from "../../components/employee/sellers/sellerdetails";
import { useSelector } from "react-redux";

function Employee() {
  const [isLogin, setIsLogin] = useState(true);
  const { userData } = useSelector((state) => state.MainApp);
  console.log(userData)
  useEffect(() => {
    if (Object.keys(userData).length) {
      
      setIsLogin(true);
    }
  }, []);
  return (
    <div>
      {isLogin == false ? <Navigate to={`/`} />:
      <>
      <EmployeeSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="enquires" element={<EnquiresEmployee />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="enquires/:id" element={<EnquirydetailEmployee />} />
        <Route path="seller/:id" element={<Sellerdetails />} />
      </Routes>
      </>}
    </div>
  );
}

export default Employee;
