import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import "./GrowthDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function NINEMONTHS() {
  const navigate = useNavigate();
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [huac, setHUAC] = useState(0);
  const PUID = useSelector((store) => store.PractitionerUID);
  const [activeTab] = useState("NINE MONTHS");
  const param = useParams();
  const { childdata } = param;

  const tabItems = [
    "BIRTH",
    "ONE MONTH",
    "TWO MONTHS",
    "THREE MONTHS",
    "NINE MONTHS",
    "SIXTEEN MONTHS",
    "VITAMIN A",
    "SIX YEARS",
  ];

  const [checkboxOptions, setCheckboxOptions] = useState([
    "Keep head steady when held upright and can sit with support",
    "Turn head towards direction of sound",
    "Attempt to reach and grasp an object",
    "Laugh aloud or make squealing sounds",
    "Begin to babble “ah, ee, oo” other than when crying",
    "Like to look at self in a mirror",
    "Roll over in both directions",
    "Grasp a toy by using all fingers",
    "Turn head to visually follow familiar faces or toys",
    "Look for toys that have been hidden in front of them",
    "Respond to name being called",
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

  const getTodayDate = () => {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var formattedDate =
      year +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (day < 10 ? "0" : "") +
      day;

    return formattedDate;
  };

  const [vaccineData, setVaccineData] = useState([
    {
      vaccine: "MR-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "JE-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Vitamin A-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "PCV-3",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
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
    ChildUID: childdata,
    height,
    huac,
    weight,
    Growthstatus: childdata,
    selectedCheckboxes,
    vaccineData,
    PractitionerUID: PUID.PractitionerUID,
  };

  async function handleSubmit() {
    console.log(sendObject);
    // navigate("/details");
    // const a = await axios.post(
    //   `http://localhost:5000/api/vaccinBirth`,
    //   sendObject
    // );
    // console.log(a);
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
          {tabItems.map((tab, index) => (
            <button
              key={index}
              onClick={() =>
                navigate(`/${tab.replace(/\s/g, "")}/${childdata}`)
              }
              className={`py-2 mx-2 px-4 border border-gray-300 focus:outline-none ${
                activeTab === tab ? "bg-blue-500 text-white" : ""
              }`}
            >
              {tab}
            </button>
          ))}

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
          {/* developement milestone */}
          <div className="birth-side-effects">
            {/* <h1>Developmental Milestone</h1> */}
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

export default NINEMONTHS;