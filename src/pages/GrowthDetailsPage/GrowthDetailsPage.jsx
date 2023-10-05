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
  const [activeTab, setActiveTab] = useState("birth");
  const [vaccineInputs, setVaccineInputs] = useState(["OPV", "BCG", "Sdfs"]);
  const [delayed, setDelayed] = useState(false);
  const [delayReason, setDelayReason] = useState("");

  //today's date
  const date = new Date();
  // calling a constructor, can use other methods to extract info from returned value

  let currentDate = date.toJSON();
  const Todaydate = currentDate.slice(0, 10);

  // Function to handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // setVaccineInputs(["sdsdcs", "sdsdcsd", "Sdfs"]);
    // Reset vaccine inputs and delay info when changing tabs
    switch (tab) {
      case "birth":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "1 and half month":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "2 and half month":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "3 and half month":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "9 month":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "16-24 month":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "Vitamin A":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
      case "5-6 Year":
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;

      default:
        setVaccineInputs(["OPV", "BCG", "Sdfs"]);
        break;
    }

    setDelayed(false);
    setDelayReason("");
  };

  // Function to handle adding vaccine inputs
  // const handleAddVaccineInput = () => {
  //   setVaccineInputs([...vaccineInputs, `vaccine-${vaccineInputs.length + 1}`]);
  // };

  return (
    <div className="growth-details-page">
      <Sidebar />

      <div className="content">
        <h1>Growth Details</h1>

        {/* Height, Weight, and HUAC inputs */}
        <div className="growth-inputs">
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="HUAC"
            value={huac}
            onChange={(e) => setHUAC(e.target.value)}
          />
        </div>
        {/* Immunization section */}
        <h1>Immunization section</h1>
        <div className="immunization">
          {/* Navigation tabs */}
          <div className="tabs">
            <button
              onClick={() => handleTabChange("birth")}
              className={activeTab === "birth" ? "active" : ""}
            >
              Birth
            </button>
            <button
              onClick={() => handleTabChange("1 and half month")}
              className={activeTab === "1 and half month" ? "active" : ""}
            >
              1 and half month
            </button>
            <button
              onClick={() => handleTabChange("2 and half month")}
              className={activeTab === "2 and half month" ? "active" : ""}
            >
              2 and half month
            </button>
            <button
              onClick={() => handleTabChange("3 and half month")}
              className={activeTab === "3 and half month" ? "active" : ""}
            >
              3 and half month
            </button>
            <button
              onClick={() => handleTabChange("9 months")}
              className={activeTab === "9 months" ? "active" : ""}
            >
              9 months
            </button>
            <button
              onClick={() => handleTabChange("16 - 24 months")}
              className={activeTab === "16 - 24 months" ? "active" : ""}
            >
              16 - 24 months
            </button>
            <button
              onClick={() => handleTabChange("Vitamin A")}
              className={activeTab === "Vitamin A" ? "active" : ""}
            >
              Vitamin A
            </button>
            <button
              onClick={() => handleTabChange("5-6 Year")}
              className={activeTab === "5-6 Year" ? "active" : ""}
            >
              5-6 years
            </button>
            {/* Add more tabs as needed */}
          </div>

          {/* Vaccine inputs */}
          <div className="vaccine-inputs">
            {vaccineInputs.map((input, index) => (
              <div className="vaccine-input">
                <div>
                  <label for={`${input} 1`}>{`${input} 1 :-`}</label>
                  <input
                    key={index}
                    type="checkbox"
                    placeholder={`${input} 1`}
                  />
                </div>
                <p>{Todaydate} </p>
              </div>
            ))}
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
        </div>

        {/* Birth Side Effects */}
        <div className="birth-side-effects">
          <h1>Developmental milestone</h1>
          <input type="checkbox" id="disease" />
          <label htmlFor="disease">Disease at Birth</label>
        </div>
        <button
          className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
          onClick={() => navagate("/")}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default GrowthDetailsPage;
