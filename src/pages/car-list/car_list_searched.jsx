import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../components/header-component/header";
import Footer from "../../components/footer-component/footer";
import axios from "axios";
import { baseapiurl } from "../../common/api";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
function CarlistSearched() {
  const [searcheddata,setSearchedData] = useState([])
  const { userData } = useSelector((state) => state.MainApp);
  const year = new Date().getFullYear();
  const location = useLocation();
  const datas = location.state;
  const searchfn = async() =>{
    await axios.post(baseapiurl + "/vehicle/search-vehicle",{
      searchkeyword:""
    }).then((result)=>{
      setSearchedData(result.data.response)
    })
  }

  useEffect(() => {
    if(datas){
        searchfn()
      var data=[]
      for(var i=0;i<searcheddata.length;i++){
        if(searcheddata[i].manufacture_name == datas[0].selectedbrand && searcheddata[i].model_name == datas[0].selectedModel && searcheddata[i].model_year == datas[0].selectedYear){
          data.push(searcheddata[i])
        }
      }
      setSearchedData(data)
    }
  }, [])

  return (
    <>
      <HeaderComponent userData={userData} />
      <div className="mt-5">
        <center>
          <h1>FIND THE CAR YOU WANT,</h1>
        </center>
        <center>
          <h1 className="yellow">YOUR WAY</h1>
        </center>
      </div>
      <div className="col-md-10 mx-auto">
        <h4>
          <b>Vehicles Found</b>
        </h4>
      </div>
      <br />
      <br />
      <br />
                      
      {searcheddata.length == 0 ? <div className="d-flex justify-content-center align-items-center">No Vehicles Found</div>:
      searcheddata.filter((data)=>data.manufacture_name == datas[0].selectedbrand).filter((data) => data.model_name == datas[0].selectedModel).filter((data)=>data.model_year == datas[0].selectedYear).map((data,index)=>
      <div key={index}>
      <div className="container container-carlist">
        <div className="card col-md-10 col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 border-end">
                <img src={baseapiurl+"/"+data.thumbnail} className="img-fluid" alt="" />
                <p className="color-white">Starting From {data.price.toLocaleString("en-US")}</p>
              </div>

              <div className="col-md-6">
                <h4 className="color-white text-capitalize">{data.manufacture_name + " " + data.model_name}</h4>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="meter.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    {data.total_km_driven.toLocaleString("en-US")} km
                  </div>
                  <div className="col-md-6 c text-capitalize">
                    <img
                      src="spray-gun.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    {data.Vehicle_color}
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-md-6 c text-capitalize">
                    <img
                      src="gear-shift.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    {data.transmission}
                  </div>
                  <div className="col-md-6 c text-capitalize">
                    <img
                      src="placeholder.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Trivandram
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="booking.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    {data.model_year}
                  </div>
                  <div className="col-md-6 c text-capitalize">
                    <img
                      src="fuel-pump.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    {data.fuel_type}
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="buttons float-end d-flex justify-content-end">
              <button className="btn btn-light m-lg-3">
                <img src="complain.png" width="30" height="30" alt="" />
                Contact Dealer
              </button>
              <Link to={`/detail/${data.id}`} state={data} className="btn btn-warning m-lg-3">
                <img src="booking.png" width="30" height="30" alt="" />
                Book A Test Drive
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      </div>
      )
}
      <Footer />
    </>
  );
}

export default CarlistSearched;
