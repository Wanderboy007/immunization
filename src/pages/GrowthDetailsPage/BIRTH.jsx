import React, { useState, useEffect } from "react";
import Sidebar from "../Navbar/Sidebar";
import "./GrowthDetailsPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

function BIRTH() {
  const navigate = useNavigate();
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [huac, setHUAC] = useState(0);
  const [activeTab] = useState("BIRTH");
  const PUID = useSelector((store) => store.PractitionerUID);
  const MotherID = useSelector((store) => store.MotherData.motherAdhar);
  const param = useParams();
  const { childdata } = param;

  useEffect(() => {
    const a = async () => {
      const getData = await axios.get("");
    };
  });

  const tabItems = [
    "BIRTH",
    "ONE MONTH",
    "TWO MONTHS",
    "THREE MONTHS",
    "NINE MONTHS",
    "SIXTEEN MONTHS",
    "Vitamin A",
    "SIX YEARS",
  ];

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
      vaccine: "OPV-0",
      date: getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Hep B",
      date: getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "BCG",
      date: getTodayDate(),
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
    // console.log(sendObject);
    navigate(`/details/${MotherID}`);
    const a = await axios.post(
      `http://localhost:5000/vaccin/birth`,
      sendObject
    );
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
          {/* developement milestone */}
          <div className="birth-side-effects">
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

export default BIRTH;
