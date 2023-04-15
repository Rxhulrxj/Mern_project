import React from "react";
import Sidebar from "../../components/admin/sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/admin/dashboard/dashboard";
import Managecustomers from "../../components/admin/managecustomers/managecustomers";
import Managecars from "../../components/admin/managecars/managecars";
import Manageenquires from "../../components/admin/manageenquires/manageenquires";
import Managesellers from "../../components/admin/managesellers/managesellers";
import Manageteam from "../../components/admin/manageteam/manageteam";
import Customerdetail from "../../components/admin/managecustomers/customerdetail";
import Addcar from "../../components/admin/managecars/addcar";
import AddUpdateTeam from "../../components/admin/manageteam/addupdateteam";
import Teamdetail from "../../components/admin/manageteam/teamdetail";
import Enquirydetail from "../../components/admin/manageenquires/enquirydetail";
import Sellerdetail from "../../components/admin/managesellers/sellerdetail";
function Admin() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="managecustomers" element={<Managecustomers />} />
        <Route path="managecars" element={<Managecars />} />
        <Route path="manageenquires" element={<Manageenquires />} />
        <Route path="managesellers" element={<Managesellers />} />
        <Route path="manageteam" element={<Manageteam />} />
        <Route path="customers/:id" element={<Customerdetail />} />
        <Route path="cars/add" element={<Addcar edit={false} />} />
        <Route path="cars/edit/:id" element={<Addcar edit={true} />} />
        <Route path="team/add" element={<AddUpdateTeam />} />
        <Route path="team/edit/:id" element={<AddUpdateTeam edit={true} />} />
        <Route path="team/:id" element={<Teamdetail />} />
        <Route path="enquires/:id" element={<Enquirydetail />} />
        <Route path="seller/:id" element={<Sellerdetail />} />
      </Routes>
    </div>
  );
}

export default Admin;
