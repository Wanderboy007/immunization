import React from "react";
import Sidebar from "../Navbar/Sidebar"; // Import your Sidebar component here
import { useNavigate } from "react-router-dom";
import "./detail.css";

function DetailsPage() {
  const navigate = useNavigate();
  // Sample data for the table
  const tableData = [
    { name: "Child 1", age: 5, dateOfRegistration: "2023-01-15" },
    { name: "Child 2", age: 6, dateOfRegistration: "2022-11-20" },
    { name: "Child 3", age: 4, dateOfRegistration: "2023-03-05" },
    // Add more rows as needed
  ];

  return (
    <>
      <div className="details-page">
        {/* Render the Sidebar component */}
        <Sidebar />

        {/* Main content section */}
        <div className="content">
          <h1>Details</h1>
          <section className="mother-details">
            <h2>Mother Name</h2>
            <p>Aadhar Card: XXXX-XXXX-XXXX</p>
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
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.dateOfRegistration}</td>
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
          <button
            className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
            onClick={() => navigate("/gdp")}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
