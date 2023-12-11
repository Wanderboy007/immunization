import React, { useEffect, useState } from "react";
import Sidebar from "../Navbar/Sidebar"; // Import your Sidebar component here
import { useNavigate, useParams } from "react-router-dom";

import "./detail.css";
import axios from "axios";

function DetailsPage() {
  const [motherData, setMotherData] = useState({});
  const [tableData, setTableData] = useState([{}]);
  const navigate = useNavigate();
  const param = useParams();
  const { adhar } = param;
  console.log(adhar);

  useEffect(() => {
    const fetchdata = async () => {
      const a = await axios.get(
        `http://localhost:5000/api/motherdetails?adhar=${adhar}`
      );
      setMotherData(a.data[0]);
      const b = await axios.get(
        `http://localhost:5000/api/addchild?MotherAdhar=${adhar}`
      );
      setTableData(b.data);
    };

    fetchdata();
  }, [adhar]);

  return (
    <>
      <div className="details-page">
        {/* Render the Sidebar component */}
        <Sidebar MotherName={motherData.MotherName} />

        {/* Main content section */}
        <div className="content">
          <h1>Details</h1>
          <section className="mother-details">
            <h2>Mother Name: {motherData.MotherName}</h2>
            <p>Aadhar Card: {adhar}</p>
          </section>

          {/* Table */}
          <table className="child-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date of Registration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.ChildName}</td>
                  <td>{row.DateOfBirth
                  +}</td>
                  <td>{row.DateOfRegirestion}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => navigate("/gdp")}
                    >
                      Edit
                    </button>
                    <button
                      className="summary-button"
                      onClick={() => navigate("/summary")}
                    >
                      Summary
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between  items-center ">
            <button
              className="block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
              onClick={() => navigate(`/addchild/${adhar}`)}
            >
              Add Child
            </button>
            <button
              className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
              onClick={() => navigate("/gdp")}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
