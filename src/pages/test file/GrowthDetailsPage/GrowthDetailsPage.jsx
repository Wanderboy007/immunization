import React, { useState } from "react";
import Sidebar from "../../Navbar/Sidebar.jsx"; // Import your Sidebar component here
import "./GrowthDetailsPage.css"; // Import your CSS file for styling
// import TabComponent from "../test file/Tabs";
import { useNavigate } from "react-router-dom";
import Tabs from "./components/Tabs.jsx";
// import axios from "axios";

function GrowthDetailsPage() {
  const navigate = useNavigate();
  // States for height, weight, and HUAC inputs
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [huac, setHUAC] = useState("");
  const [Growthstatus, setGrowthstatus] = useState("Birth");

  const [checkboxOptions23Months] = useState([
    "Begin to recognize the mother's face",
    "Develop social smile",
    "Make eye contact",
    "Raise head at times, when on tummy",
    "Move both arms and both legs, when excited",
    "Keep hands open and relaxed",
  ]);
  const [checkboxOptions46Months] = useState([
    "Keep head steady when held upright and can sit with support",
    "Turn head towards direction of sound",
    "Attempt to reach and grasp an object",
    "Laugh aloud or make squealing sounds",
    "Begin to babble “ah, ee, oo” other than when crying",
    "Like to look at self in a mirror",
  ]);
  const [checkboxOptions79Months] = useState([
    "Roll over in both directions",
    "Grasp a toy by using all fingers",
    "Turn head to visually follow familiar faces or toys",
    "Look for toys that have been hidden in front of them",
    "Respond to name being called",
  ]);

  const [checkboxOptions1012Months] = useState([
    "Sit without support and reach for toys without falling",
    "Raise arms to be picked up",
    "Crawl to get desired toys without bumping into any objects",
    "Use one or two commonwords in mother tongue",
    "Respond to simple requests like “no/ come here”",
  ]);
  const [checkboxOptions18Months] = useState([
    "Stand and take several independent steps",
    "Use a variety of familiar gestures like waving, clapping, etc.",
    "Put pebbles/ small objects in a container",
    "Name and identify common objects and their pictures in a book",
  ]);
  const [checkboxOptions24Months] = useState([
    "Walk steadily, even while pulling a toy",
    "Imitate household chores",
    "Correctly point out and name one or more body parts in person or in books",
  ]);
  const [checkboxOptions3Years] = useState([
    "Drink from a cup without spilling",
    "Name most familiar things consistently. Identify colours, shapes, etc.",
    "Make a sentence by joining 3 or more words",
    "Climb up and down the stairs",
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
  const [vaccineDataBirth, setVaccineDataBirth] = useState([
    {
      vaccine: "OPV-0",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Hep B",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "BCG",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData1Months, setVaccineData1Months] = useState([
    {
      vaccine: "OPV-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Penta-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Rota-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "PCV-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "IPV-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData2Months, setVaccineData2Months] = useState([
    {
      vaccine: "OPV-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Penta-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Rota-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData3Months, setVaccineData3Months] = useState([
    {
      vaccine: "OPV-3",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Penta-3",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Rota-3",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "PCV-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "IPV-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData9Months, setVaccineData9Months] = useState([
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
    // Add more initial data objects as needed
  ]);
  const [vaccineData1624Months, setVaccineData1624Months] = useState([
    {
      vaccine: "DPT Booster-1",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "Vitamin A-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "MR-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "JE-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    {
      vaccine: "OPV Booster",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData56Years, setVaccineData56Years] = useState([
    {
      vaccine: "DPT Booster-2",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData10Years, setVaccineData10Years] = useState([
    {
      vaccine: "TT",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);
  const [vaccineData16years, setVaccineData16Years] = useState([
    {
      vaccine: "TT",
      date: "11-12-2022" || getTodayDate(),
      checked: false,
      delayReason: "",
    },
    // Add more initial data objects as needed
  ]);

  const handleCheckboxChangeTable = (index) => {
    // const updatedVaccineData = [...vaccineData];
    // updatedVaccineData[index].checked = !updatedVaccineData[index].checked;
    // setVaccineData(updatedVaccineData);
  };

  const handleSelectChange = (index, value) => {
    // const updatedVaccineData = [...vaccineData];
    // updatedVaccineData[index].delayReason = value;
    // setVaccineData(updatedVaccineData);
  };
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const sendObject = {
    height,
    huac,
    weight,
    Growthstatus,
    selectedCheckboxes,
    // vaccineData,
  };

  async function handleSubmit() {
    console.log(sendObject);
    // navigate("/details");
    // await axios.post(``, sendObject);
  }

  return (
    <>
      <div className="growth-details-page">
        <Sidebar />

        <div className="content">
          {/* <h1>Growth Details</h1>

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
          </div> */}
          {/* Immunization section */}
          {/* <h1>Immunization Section</h1> */}
          {/* <TabComponent /> */}
          <Tabs>
            <div label="BIRTH">
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
              <h1>Immunization Section</h1>
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
                      {vaccineDataBirth.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions23Months.map((option, index) => (
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

            <div label="1½ Months">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData1Months.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions23Months.map((option, index) => (
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

            <div label="2½ Months">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData2Months.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions23Months.map((option, index) => (
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

            <div label="3½ Months">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData3Months.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions23Months.map((option, index) => (
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

            <div label="9 Months">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData9Months.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions46Months.map((option, index) => (
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
                <div>
                  {checkboxOptions79Months.map((option, index) => (
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
                <div>
                  {checkboxOptions1012Months.map((option, index) => (
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

            <div label="16-24 Months">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData1624Months.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions18Months.map((option, index) => (
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

            <div label="5-6 Years">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData56Years.map((data, index) => (
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
              <div className="birth-side-effects">
                <h1>Developmental Milestone</h1>
                <div>
                  {checkboxOptions24Months.map((option, index) => (
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
                <div>
                  {checkboxOptions3Years.map((option, index) => (
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

            <div label="10 Years">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData10Years.map((data, index) => (
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
              <div className="birth-side-effects">
                {/* <h1>Developmental Milestone</h1>
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
                </div> */}
                <button
                  className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
                  onClick={handleSubmit}
                >
                  next
                </button>
              </div>
            </div>

            <div label="16 Years">
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
              <h1>Immunization Section</h1>
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
                      {vaccineData16years.map((data, index) => (
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
              <div className="birth-side-effects">
                {/* <h1>Developmental Milestone</h1>
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
                </div> */}
                <button
                  className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
                  onClick={handleSubmit}
                >
                  next
                </button>
              </div>
            </div>
          </Tabs>
          <hr></hr>
          {/* Birth Side Effects */}
          {/* <div className="birth-side-effects">
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
          </div> */}
        </div>
      </div>
      ;
    </>
  );
}

export default GrowthDetailsPage;
