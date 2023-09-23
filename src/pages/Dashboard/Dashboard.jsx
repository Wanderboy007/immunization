import React from "react";
import Navbar from "../Navbar/Navbar";
import "./dashbord.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <form action="" className="form">
        <input type="text" placeholder="search" />
        <button>Search</button>
        <button onClick={() => navigate("/Motherdetail")}>Add</button>
      </form>

      <table className="table_table">
        <tr className="table_tr">
          <th className="table_td">Aadhar</th>
          <th className="table_td">Mother</th>
          <th className="table_td">Children</th>
          <th className="table_td">Action</th>
        </tr>
        <tr className="table_tr">
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
        </tr>
      </table>
    </>
  );
};

export default Dashboard;
