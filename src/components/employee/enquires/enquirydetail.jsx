import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function EnquirydetailEmployee() {
  const [slotselected, setSlotSelected] = useState(false);
  const location = useLocation();
  const data = location.state;
  return (
    <div className="admin-main-div">
      <div className="container-fluid">
        <div className="row">
          <span>
            <Link to={"/employee/enquires"} className="btn logout">
              <img
                src="backbtn.png"
                alt="Logout Icon"
                className="img-fluid mx-auto my-1"
                width="30"
              />
              Enquiry
            </Link>
          </span>
        </div>
        <div className="container">
          <h5>Enquiry</h5>

          <div className="card c1 m-5 box-shadow">
            <div className="card-body">
              <h5 className="card-title">
                <u>Customer Personal Details</u>{" "}
              </h5>
              <form>
                <div className="row ">
                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fullName"
                        value={data.Full_Name}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phoneNumber"
                        value={data.Phone_number}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="address">Address</label>
                      <textarea
                        className="form-control form-control-lg"
                        id="address"
                        rows="3"
                        value={data.Address}
                        disabled
                      ></textarea>
                    </div>
                    <br />
                  </div>

                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        value={data.Email_address}
                        disabled
                      />
                    </div>

                    <br />
                    <div className="form-group">
                      <label for="licenseNumber">License Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="licenseNumber"
                        value={data.license_no}
                        disabled
                      />
                    </div>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card c2 m-5 box-shadow">
            <div className="card-body">
              <h5 className="card-title">
                <u>Vehicle Details</u>
              </h5>
              <form>
                <div className="row ">
                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="bmName">Brand/Manufacture Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="bmName"
                        value={data.manufacture_name}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="modelyear">Model Year</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="modelyear"
                        value={data.model_year}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="engineNumber">Engine Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="engineNumber"
                        value={data.Engine_number}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="ChasisNumber">Chasis Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="ChasisNumber"
                        value={data.chasis_number}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="transmission">Transmission</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="transmission"
                        value={data.transmission}
                        disabled
                      />
                    </div>
                    <br />
                  </div>

                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="ModelName">Model Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="ModelName"
                        value={data.model_name}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="vehicleColor">Vehicle Color</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="altPhoneNumber"
                        value={data.Vehicle_color}
                        disabled
                      />
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="fuelType">Vehicle Registration Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fuelType"
                        value={data.vehicle_registration_number}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="fuelType">Fuel Type</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fuelType"
                        value={data.fuel_type}
                        disabled
                      />
                    </div>
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card c3 m-5 box-shadow">
            <div className="card-body">
              <h5 className="card-title">
                <u>Status</u>
              </h5>
              <form>
                <div className="row ">
                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="assignedTo">Assigned To</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="assignedTo"
                        value={data.assigned_to}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="slot-availability" className="form-label">
                        Slot Availability
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="slot-availability"
                        name="slot-availability"
                        // value={data.slot_available}
                        onChange={() => setSlotSelected(!slotselected)}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <br />
                    {slotselected && (
                      <div className="form-group">
                        <label for="availabledate" className="form-label">
                          Available Test Drive Date
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="availabledate"
                        />
                      </div>
                    )}
                  </div>

                  <div className="col-md-5 p-5 ">
                    <div className="form-group">
                      <label for="tdDate">Test Drive Date</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="tdDate"
                        value={data.test_drive_date}
                        disabled
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label for="tdtSlot">Test Drive Time Slot </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="tdtSlot"
                        value={data.test_drive_timeslot}
                        disabled
                      />
                    </div>
                    <br />
                    {slotselected && (
                      <div className="form-group">
                        <label for="availabletdtSlot">
                          Available Test Drive Time Slot
                        </label>
                        <select
                          type="text"
                          className="form-select form-control-lg"
                          id="availabletdtSlot"
                        >
                          <option disabled>Choose a timeslot</option>
                          <option value="11am to 1pm">11am to 1pm</option>
                          <option value="1pm to 3pm">1pm to 3pm</option>
                          <option value="3pm to 5pm">3pm to 5pm</option>
                        </select>
                      </div>
                    )}
                    <br />
                    {slotselected && (
                      <div className="form-group">
                        <label for="status">Status</label>
                        <select
                          className="form-select form-control-lg"
                          id="status"
                        >
                          <option value="InProgress">InProgress</option>
                          <option value="Completed">Completed</option>
                          <option value="Purchased">
                            Completed(Purchased)
                          </option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        <br />
                      </div>
                    )}
                    <br />
                  </div>
                </div>
                {slotselected && (
                  <div className="row float-end me-5">
                    <button className="btn btn-primary">Update Schedule</button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquirydetailEmployee;
