import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar"; // Import your Sidebar component here
import "./GrowthDetailsPage.css"; // Import your CSS file for styling
import TabComponent from "../test file/Tabs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GrowthDetailsPage() {
  const navigate = useNavigate();
  // States for height, weight, and HUAC inputs
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [huac, setHUAC] = useState("");

  const [checkboxOptions] = useState([
    "Face recognition (mother)",
    "Face recognition (known person)",
    "Holding Eye contact",
    "Raising head while lying on the stomach",
    "When excited, both hands and to shake feet",
    "Keep the hand open and loose",
  ]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedCheckboxes.includes(option)) {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, option]);
    }
  };

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const getTodayDate = () => {
    console.log("hi");
  };
  const [vaccineData, setVaccineData] = useState([
    {
      vaccine: "opv1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "opv2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "opv3",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);

  const handleCheckboxChangeTable = (index) => {
    const updatedVaccineData = [...vaccineData];
    updatedVaccineData[index].checked = !updatedVaccineData[index].checked;
    setVaccineData(updatedVaccineData);
  };

  const handleSelectChange = (index, value) => {
    const updatedVaccineData = [...vaccineData];
    updatedVaccineData[index].delayReason = value;
    setVaccineData(updatedVaccineData);
  };
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const sendObject = {
    height,
    huac,
    weight,
    selectedCheckboxes,
    vaccineData,
  };

  async function handleSubmit() {
    console.log(sendObject);
    navigate("/details");
    await axios.post(``, sendObject);
  }

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
          <h1>Immunization Section</h1>
          <TabComponent />

          <div className="immunization">
            <div className="center">
              <table className="table_table">
                <thead>
                  <tr className="table_tr">
                    <th className="table_td">Vaccine</th>
                    <th className="table_td">Date</th>
                    <th className="table_td">Action</th>
                    <th className="table_td">Delay</th>
                  </tr>
                </thead>
                <tbody>
                  {vaccineData.map((data, index) => (
                    <tr className="table_tr" key={index}>
                      <td className="table_td">{data.vaccine}</td>
                      <td className="table_td">{data.date}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={data.checked}
                          onChange={() => handleCheckboxChangeTable(index)}
                        />
                      </td>
                      <td className="table_td">
                        <select
                          value={data.delayReason}
                          onChange={(e) =>
                            handleSelectChange(index, e.target.value)
                          }
                        >
                          <option value="">Select Delay Reason</option>
                          <option value="Reason 1">Reason 1</option>
                          <option value="Reason 2">Reason 2</option>
                          {/* Add more reasons as needed */}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <hr></hr>
          {/* Birth Side Effects */}
          <div className="birth-side-effects">
            <h1>Developmental Milestone</h1>
            <div>
              {checkboxOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2 mx-[80px]
                  "
                >
                  <label htmlFor={`checkbox-${index}`}>{option}</label>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={`checkbox-${index}`}
                    checked={selectedCheckboxes.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="mr-2 h-5 w-5"
                  />
                </div>
              ))}
            </div>
            <button
              className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
              onClick={handleSubmit}
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
