import "./common/styles/style.css";
import Footer from "./components/footer-component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagenotfound from "./components/404-page/404-page-not-found";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login-section/login";
import Admin from "./pages/Admin/Admin";
import Registration from "./pages/registration-section/registration";
import Detailpage from "./pages/car-detail-page/detailpage";
import Employee from "./pages/Employee/Employee";
import UserEnquiry from "./pages/UserEnquiry/userEnquiry";
import Userupload from "./pages/user-upload/userupload";
import Carlist from "./pages/car-list/carlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/detail/:id" element={<Detailpage />} />
        <Route path="/employee/*" element={<Employee />} />
        <Route path="/myenquiry" element={<UserEnquiry />} />
        <Route path="/sellcars" element={<Userupload />} />
        <Route path="/carlist" element={<Carlist />} />
      </Routes>
    </Router>
  );
}

export default App;
