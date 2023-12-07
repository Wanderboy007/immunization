import React from "react";
import Navbar from "../Navbar/Navbar";
import "./dashbord.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const displayData = [
    {
      MotherID: "1",
      MotherName: "asghuj s prabhashanker",
      AadharID: "123456789987456",
      NumberOfChild: 5,
    },
    {
      MotherID: "1",
      MotherName: "asghuj s prabhashanker",
      AadharID: "123456789987456",
      NumberOfChild: 5,
    },
    {
      MotherID: "1",
      MotherName: "asghuj s prabhashanker",
      AadharID: "123456789987456",
      NumberOfChild: 5,
    },
    {
      MotherID: "1",
      MotherName: "asghuj s prabhashanker",
      AadharID: "123456789987456",
      NumberOfChild: 5,
    },
    {
      MotherID: "1",
      MotherName: "asghuj s prabhashanker",
      AadharID: "123456789987456",
      NumberOfChild: 5,
    },
  ];
  return (
    <>
      <Navbar />
      <form action="" className="form">
        <input type="text" placeholder="search" />
        <button>Search</button>
        <button onClick={() => navigate("/Motherdetail")}>Add</button>
      </form>
      <div className="center">
        <table className="table_table">
          <tr className="table_tr">
            <th className="table_td">Aadhar</th>
            <th className="table_td">Mother</th>
            <th className="table_td">Children</th>
            <th className="table_td">Action</th>
          </tr>
          {displayData.map((data) => {
            return (
              <tr className=" text-center" key={data.MotherID}>
                <td className="table_td">{data.AadharID}</td>
                <td className="table_td">{data.MotherID}</td>
                <td className="table_td">{data.NumberOfChild}</td>
                <td className="table_td">
                  <button
                    className="edit-button"
                    onClick={() => navigate("/details")}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}

          {/* <tr className="table_tr">
            <td className="table_td">123456789987456</td>
            <td className="table_td">asghuj s prabhashanker</td>
            <td className="table_td">99</td>
            <td>
              <button
                className="edit-button"
                onClick={() => navigate("/details")}
              >
                Edit
              </button>
            </td>
          </tr> */}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
