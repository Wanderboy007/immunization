// MotherDetail.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./motherDetail.css"; // Import your CSS file for styling

function MotherDetail() {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;

  const [sendData, setSendData] = useState({
    motherName: "",
    contactNumber: "",
    MotherAge: "",
    Address: { country: "", state: "", district: "", taluka: "" },
    aadhaarNumber: id,
    lastMenstrualPeriod: "",
    expectedDeliveryDate: "",
    NumberOfPregnancies: 1,
  });

  useEffect(() => {
    setSendData({ ...sendData, aadhaarNumber: id });
  }, [id, sendData]);

  async function handleRegister() {
    console.log(sendData);
    try {
      await axios.post(
        `http://localhost:5000/api/registerMotherdetails`,
        sendData
      );
      navigate("/details");
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error.response.data.message);
    }
  }

  // const handleNext = () => {
  //   navigate("/gdp");
  //   // Handle the form submission or navigation to the next step
  //   // You can access all the input values here
  // };

  return (
    <div className="mother-detail-page">
      <h1>Mother Detail</h1>
      <form>
        <div className="form-group">
          <label>Mother Name</label>
          <input
            type="text"
            value={sendData.motherName}
            onChange={(e) =>
              setSendData({ ...sendData, motherName: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Contact No</label>
          <input
            type="tel"
            value={sendData.contactNumber}
            onChange={(e) =>
              setSendData({ ...sendData, contactNumber: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={sendData.MotherAge}
            onChange={(e) =>
              setSendData({ ...sendData, MotherAge: e.target.value })
            }
          />
        </div>

        <div className="address-group">
          <label>Address</label>
          <div className="address-inputs">
            <input
              type="text"
              placeholder="Country"
              value={sendData.Address.country}
              onChange={(e) =>
                setSendData({
                  ...sendData,
                  Address: { ...sendData.Address, country: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="State"
              value={sendData.Address.state}
              onChange={(e) =>
                setSendData({
                  ...sendData,
                  Address: { ...sendData.Address, state: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="District"
              value={sendData.Address.district}
              onChange={(e) =>
                setSendData({
                  ...sendData,
                  Address: { ...sendData.Address, district: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Taluka"
              value={sendData.Address.taluka}
              onChange={(e) =>
                setSendData({
                  ...sendData,
                  Address: { ...sendData.Address, taluka: e.target.value },
                })
              }
            />
          </div>
        </div>

        {/* <div className="form-group"> */}
        <label>Aadhaar Number</label>
        <div>
          {id ? (
            <input
              type="text"
              value={sendData.aadhaarNumber}
              onChange={(e) =>
                setSendData({ ...sendData, aadhaarNumber: e.target.value })
              }
            />
          ) : (
            <input
              type="text"
              value={sendData.aadhaarNumber}
              disabled
              onChange={(e) =>
                setSendData({
                  ...sendData,
                  aadhaarNumber: e.target.value,
                })
              }
            />
          )}
        </div>

        {/* <div className="form-group">
          <label>Date of last menstrual period</label>
          <input
            type="date"
            value={lastMenstrualPeriod}
            onChange={(e) => setLastMenstrualPeriod(e.target.value)}
          />
        </div> */}

        {/* <div className="form-group">
          <label>Expected date of delivery</label>
          <input
            type="date"
            value={expectedDeliveryDate}
            onChange={(e) => setExpectedDeliveryDate(e.target.value)}
          />
        </div> */}

        <div className="form-group">
          <label>No. of pregnancies / previous live births</label>
          <input
            type="number"
            value={sendData.NumberOfPregnancies}
            onChange={(e) =>
              setSendData({ ...sendData, NumberOfPregnancies: e.target.value })
            }
          />
        </div>

        {/* <div className="form-group">
          <label>Last delivery conducted at</label>
          <input
            type="text"
            value={lastDeliveryLocation}
            onChange={(e) => setLastDeliveryLocation(e.target.value)}
        />
        </div> */}

        <button type="button" onClick={handleRegister} className="next-button">
          Next
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default MotherDetail;
