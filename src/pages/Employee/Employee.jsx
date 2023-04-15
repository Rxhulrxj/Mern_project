import React from "react";
import EmployeeSidebar from "../../components/employee/sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/employee/dashboard/dashboard";
import Sellers from "../../components/employee/sellers/Sellers";
import EnquiresEmployee from "../../components/employee/enquires/Enquires";

import EnquirydetailEmployee from "../../components/employee/enquires/enquirydetail";
import Sellerdetails from "../../components/employee/sellers/sellerdetails";

function Employee() {
  return (
    <div>
      <EmployeeSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="enquires" element={<EnquiresEmployee />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="enquires/:id" element={<EnquirydetailEmployee />} />
        <Route path="seller/:id" element={<Sellerdetails />} />
      </Routes>
    </div>
  );
}

export default Employee;
