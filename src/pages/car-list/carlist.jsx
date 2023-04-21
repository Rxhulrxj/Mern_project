import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "../../components/header-component/header";
import Footer from "../../components/footer-component/footer";
import axios from "axios";
import { baseapiurl } from "../../common/api";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
function Carlist() {
  const [advancedsearch, setAdvancedSearch] = useState(false);
  const [searchkeyword,setSearchKeyword] = useState("");
  const [searcheddata,setSearchedData] = useState([])
  const [model,setModel] = useState([])
  const [brand,setBrand] = useState([])
  const { userData } = useSelector((state) => state.MainApp);
  const [selectedbrand,setSelectedBrand] = useState("")
  const [selectedModel,setSelectedModel] = useState("");
  const [selectedYear,setSelectedYear] = useState("");
  const [selectedPrice,setSelectedPrice] = useState("")
  const year = new Date().getFullYear();
  const location = useLocation();
  const datas = location.state;
  const years = Array.from(new Array(10), (val, index) => year - index);
  const searchfn = async() =>{
    await axios.post(baseapiurl + "/vehicle/search-vehicle",{
      searchkeyword:searchkeyword
    }).then((result)=>{
      setSearchedData(result.data.response)
    })
  }
  const getModelBrand = async() =>{
    await axios.get(baseapiurl + "/vehicle/get-model").then((result)=>{
      setModel(result.data.response)
    })
    await axios.get(baseapiurl + "/vehicle/get-brand").then((result)=>{
      setBrand(result.data.response)
    })
  }
  useEffect(() => {
    getModelBrand();
    searchfn()
  }, [])
  useEffect(() => {
    searchfn()
  }, [searchkeyword])
  const advsearch = async() =>{
    if(selectedYear == ""){
      toast.error("please choose a year to search");
    }else if(selectedModel == ""){
      toast.error("please choose a model to search");
    }else if(selectedPrice == ""){
      toast.error("please choose a price to search");
    }else if(selectedbrand == ""){
      toast.error("please choose a brand to search");
    }else{
      var data={
        brand: selectedbrand,
      model:selectedModel,
      year:selectedYear,
      price: selectedPrice
      }
      await axios.post(baseapiurl + "/vehicle/advance-search",data).then((result)=>{
        setSearchedData(result.data.response)
      })
    }
  }

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
      <br />
      <br />
      <div className="col-md-9 mx-auto">
        <div className="input-group">
          <input
            className="form-control border-end-0 border border-dark"
            type="search"
            placeholder="Search from our huge collection of cars"
            id="example-search-input"
            title="searchbox"
            
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
            readOnly={advancedsearch == false ? false:true}
          />
          <button className="btn btn-warning">Search</button>
        </div>
        <p className="float-end pe-5">
          Wanted to search more customized?
          <span
            className="text-warning text-decoration-underline"
            style={{ cursor: "pointer" }}
            onClick={() => setAdvancedSearch(!advancedsearch)}
          >
            Advanced Search
          </span>
        </p>
      </div>
      <br />
      <br />
      <br />
      {advancedsearch ? (
        <>
          <div className="col-md-10 mx-auto">
            <h5 className="fw-bold">
              <u>Adavanced Search</u>
            </h5>
          </div>
          <br />
          <br />
          <br />
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="row">
                <div className="col-md-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e)=>{
                      setSelectedBrand(e.target.value)
                    }}
                  >
                    <option disabled defaultValue selected>
                Brand
              </option>
              {brand.map((e, index) => (
                <option key={index} value={e.manufacture_name}>
                  {e.manufacture_name}
                </option>
              ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e)=>{
                      setSelectedModel(e.target.value)
                    }}
                  >
                    <option defaultValue disabled selected>
                Model
              </option>
              {selectedbrand !="" && (
              model.map((e, index) => (
                e.manufacture_name == selectedbrand ?
                <option key={index} value={e.model_name}>
                  {e.model_name}
                </option>:null
              )))}
                  </select>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e)=>{
                      setSelectedYear(e.target.value)
                    }}
                  >
                    <option selected defaultValue disabled>Year</option>
                    {selectedbrand !="" && (
                    years.map((year, index) => {
                return (
                  <option key={`year${index}`} value={year}>
                    {year}
                  </option>
                );
              }))}
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col-md-4 ">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e)=>{
                        setSelectedPrice(e.target.value)
                      }}
                    >
                      <option selected>Price Range</option>
                      <option value="<100000">less than 1 lakh</option>
                      <option value="BETWEEN 100000 AND 300000">Range From 1 to 3 lakhs</option>
                      <option value=">300000">3 lakh and above</option>
                    </select>
                  </div>
                  <div className="offset-md-4 col-md-3">
                    <button className="btn btn-warning w-100" type="button" onClick={advsearch} id="advsearchbtn">
                      Search Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </>
      ) : null}

      <div className="col-md-10 mx-auto">
        <h4>
          <b>Vehicles Found</b>
        </h4>
      </div>
      <br />
      <br />
      <br />
      {console.log(searcheddata)}             
      {searcheddata.length == 0 ? <div className="d-flex justify-content-center align-items-center">No Vehicles Found</div>:
       searcheddata && searcheddata.map((data,index)=>
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
      {/* <div className="container container-carlist">
        <div className="card col-md-10 col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 border-end">
                <img src="suvcar1.png" className="img-fluid" alt="" />
                <p className="color-white">Starting From 25,000,000</p>
              </div>

              <div className="col-md-6">
                <h4 className="color-white">BMW X1</h4>
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
                    20,000 km
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="spray-gun.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    White
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="gear-shift.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Automatic
                  </div>
                  <div className="col-md-6 c">
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
                    2021
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="fuel-pump.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Diesel
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
              <button className="btn btn-warning m-lg-3">
                <img src="booking.png" width="30" height="30" alt="" />
                Book A Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br /> */}

      {/* <div className="container container-carlist">
        <div className="card col-md-10 col-sm-12">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 border-end">
                <img src="suvcar1.png" className="img-fluid" alt="" />
                <p className="color-white">Starting From 25,000,000</p>
              </div>

              <div className="col-md-6">
                <h4 className="color-white">BMW X1</h4>
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
                    20,000 km
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="spray-gun.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    White
                  </div>
                </div>
                <br />

                <div className="row">
                  <div className="col-md-6 c">
                    <img
                      src="gear-shift.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Automatic
                  </div>
                  <div className="col-md-6 c">
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
                    2021
                  </div>
                  <div className="col-md-6 c">
                    <img
                      src="fuel-pump.png"
                      className="img-fluid"
                      width="30"
                      height="30"
                      alt=""
                    />
                    Diesel
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
              <button className="btn btn-warning m-lg-3">
                <img src="booking.png" width="30" height="30" alt="" />
                Book A Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br /> */}
      <Footer />
    </>
  );
}

export default Carlist;
