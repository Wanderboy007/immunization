import React, { useEffect, useState } from "react";
import Sidebar from "../Navbar/Sidebar"; // Import your Sidebar component here
import { useNavigate, useParams } from "react-router-dom";
import "./detail.css";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { SetInitialState } from "../../reduxxx/featurs/MotherDataSlice/MotherDataSlice";

function DetailsPage() {
  const [motherData, setMotherData] = useState({});
  const [tableData, setTableData] = useState([{}]);
  const navigate = useNavigate();
  const param = useParams();
  const { adhar } = param;

  console.log(tableData);

  useEffect(() => {
    const fetchdata = async () => {
      const a = await axios.get(
        `http://localhost:5000/api/getchild?MotherAdhar=${adhar}`
      );
      console.log(a.data);
      setTableData(a.data);
      const b = await axios.get(
        `http://localhost:5000/api/motherSingledetails?MotherAdhar=${adhar}`
      );
      console.log(b);
      setMotherData(b.data[0]);
    };
    fetchdata();
  }, [adhar]);

  function calculateAgeWithDOB(birthdate) {
    var birthdateObj = new Date(birthdate);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthdateObj.getFullYear();

    if (
      currentDate.getMonth() < birthdateObj.getMonth() ||
      (currentDate.getMonth() === birthdateObj.getMonth() &&
        currentDate.getDate() < birthdateObj.getDate())
    ) {
      age--;
    }

    // Extract month and day from the birthdate
    var birthMonth = birthdateObj.getMonth() + 1; // Adding 1 to convert from zero-based to one-based indexing
    var birthDay = birthdateObj.getDate();

    return `day:-${birthDay} months:-${birthMonth} year:-${age}`;
  }
  //get age of the child

  return (
    <>
      <div className="details-page">
        <Sidebar />

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
                  <td>
                    {row.name} {row.Middlename} {row.Lastname}
                  </td>
                  <td>{calculateAgeWithDOB(row.DateOfBirth)}</td>
                  <td>{row.DateOfRegirestion}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() =>
                        navigate(
                          `/${row.GrowthStatus.replace(/\s/g, "")}/${
                            row.ChildUID
                          }`
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="summary-button"
                      onClick={() => navigate(`/summary/${row.ChildUID}`)}
                    >
                      Summary
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center ">
            <button
              className="block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
              onClick={() => navigate(`/personal`)}
            >
              Add Child
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
