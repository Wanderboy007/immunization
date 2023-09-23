// MotherDetail.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./motherDetail.css"; // Import your CSS file for styling

function MotherDetail() {
  // States for form inputs
  const [motherName, setMotherName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState("");
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
  const [numPregnancies, setNumPregnancies] = useState("");
  const [lastDeliveryLocation, setLastDeliveryLocation] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/gdp");
    // Handle the form submission or navigation to the next step
    // You can access all the input values here
  };

  return (
    <div className="mother-detail-page">
      <h1>Mother Detail</h1>
      <form>
        <div className="form-group">
          <label>Mother’s Name</label>
          <input
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Contact No</label>
          <input
            type="tel"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="address-group">
          <label>Address</label>
          <div className="address-inputs">
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <input
              type="text"
              placeholder="Taluka"
              value={taluka}
              onChange={(e) => setTaluka(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Aadhaar Number</label>
          <input
            type="text"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Date of last menstrual period</label>
          <input
            type="date"
            value={lastMenstrualPeriod}
            onChange={(e) => setLastMenstrualPeriod(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Expected date of delivery</label>
          <input
            type="date"
            value={expectedDeliveryDate}
            onChange={(e) => setExpectedDeliveryDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>No. of pregnancies / previous live births</label>
          <input
            type="number"
            value={numPregnancies}
            onChange={(e) => setNumPregnancies(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last delivery conducted at</label>
          <input
            type="text"
            value={lastDeliveryLocation}
            onChange={(e) => setLastDeliveryLocation(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleNext} className="next-button">
          Next
        </button>
      </form>
    </div>
  );
}

export default MotherDetail;
