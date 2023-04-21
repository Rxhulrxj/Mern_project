import React, { useEffect, useState } from "react";
import Homepagesection1 from "../../components/homepage/Homepage-section1";
import Homepagesection2 from "../../components/homepage/Homepage-section2";
import Homepagesection3 from "../../components/homepage/Homepage-section3";
import "./homepage.css";
import axios from "axios";
import Loader from "../../components/loader/loader";
import { baseapiurl } from "../../common/api";
import HeaderComponent from "../../components/header-component/header";
import { useSelector } from "react-redux";
import Footer from "../../components/footer-component/footer";

function Homepage() {
  const [loadstatus, setLoadstatus] = useState(true);
  const [branddata, setBranddata] = useState([]);
  const [modeldata, setModeldata] = useState([]);
  const [topVehicles, setTopVehicles] = useState([]);
  useEffect(() => {
    const fetchBrand = async () => {
      const data = await axios.get(`${baseapiurl}/vehicle/get-brand`);
      setBranddata(data.data.response);
    };
    const fetchModel = async () => {
      const data = await axios.get(`${baseapiurl}/vehicle/get-model`);
      setModeldata(data.data.response);
    };
    const TopVehicles = async () => {
      const data = await axios.get(`${baseapiurl}/vehicle/getTopVehicle`);
      setTopVehicles(data.data.response);
    };
    fetchBrand();
    fetchModel();
    TopVehicles();
    setLoadstatus(false);
  }, []);
  console.log(topVehicles);
  const { userData } = useSelector((state) => state.MainApp);
  console.log(userData);
  return (
    <div>
      {loadstatus === true ? (
        <Loader />
      ) : (
        <>
          <HeaderComponent userData={userData} />
          <Homepagesection1 branddata={branddata} modeldata={modeldata} />
          <Homepagesection2 topVehicles={topVehicles}/>
          <Homepagesection3 />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Homepage;
