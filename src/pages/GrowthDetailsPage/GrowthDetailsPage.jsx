// GrowthDetailsPage.js

import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar"; // Import your Sidebar component here
import "./GrowthDetailsPage.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

function GrowthDetailsPage() {
  //navagate
  const navagate = useNavigate();
  // States for height, weight, and HUAC inputs
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [huac, setHUAC] = useState("");

  // States for immunization tabs
  const [delayed, setDelayed] = useState(false);
  const [delayReason, setDelayReason] = useState("");

  //today's date
  const date = new Date();
  let currentDate = date.toJSON();
  const Todaydate = currentDate.slice(0, 10);

  return (
    <>
      <div className="growth-details-page">
        <Sidebar />

        <div className="content">
          <h1>Growth Details</h1>

          {/* Height, Weight, and HUAC inputs */}
          <div className="growth-inputs">
            <label htmlFor="Height">Height</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <label htmlFor="Weight">Weight</label>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label htmlFor="HUAC">HUAC</label>
            <input
              type="text"
              value={huac}
              onChange={(e) => setHUAC(e.target.value)}
            />
          </div>
          <hr></hr>
          {/* Immunization section */}
          <h1>Immunization section</h1>
          <div className="immunization">
            <div className="center">
              <table className="table_table">
                <tr className="table_tr">
                  <th className="table_td">Vaccine</th>
                  <th className="table_td">Date</th>

                  <th className="table_td">Action</th>
                </tr>
                <tr className="table_tr">
                  <td className="table_td">opv1</td>
                  <td className="table_td">{Todaydate}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr className="table_tr">
                  <td className="table_td">opv1</td>
                  <td className="table_td">{Todaydate}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr className="table_tr">
                  <td className="table_td">opv1</td>
                  <td className="table_td">{Todaydate}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* Delay checkbox and reason */}
          <div className="delay-info">
            <label htmlFor="delayed">Delayed</label>
            <input
              type="checkbox"
              checked={delayed}
              onChange={(e) => setDelayed(e.target.checked)}
            />
            <select
              value={delayReason}
              onChange={(e) => setDelayReason(e.target.value)}
            >
              <option value="">Select Delay Reason</option>
              <option value="Reason 1">Reason 1</option>
              <option value="Reason 2">Reason 2</option>
              {/* Add more reasons as needed */}
            </select>
          </div>
          <hr></hr>
          {/* Birth Side Effects */}
          <div className="birth-side-effects">
            <h1>Developmental milestone</h1>
            <input type="checkbox" id="disease" />
            <label htmlFor="disease">Disease at Birth</label>
            <button
              className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
              onClick={() => navagate("/")}
            >
              next
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default GrowthDetailsPage;
