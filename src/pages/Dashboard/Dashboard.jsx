import React, { useState } from "react";
import "./dashbord.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchMother, setSearchMother] = useState("");
  const [displayData, setDisplayData] = useState([
    {
      MotherID: "1",
      MotherName: "asghuj s prabhashanker",
      Adhar: "123456789987456",
      NumberOfChild: 5,
    },
    {
      MotherID: "2s",
      MotherName: "asghuj s prabhashanker",
      Adhar: "123456789987456",
      NumberOfChild: 5,
    },
  ]);

  async function getmotherdata(e) {
    e.preventDefault();
    const mothersDetails = await axios.get(
      `http://localhost:5000/api/motherdetails?adhar=${searchMother}`
    );
    // console.log(mothersDetails);
    setDisplayData(mothersDetails.data);
  }

  // useEffect(() => {}, []);
  return (
    <>
      <form action="" className="form">
        <input
          type="text"
          value={searchMother}
          onChange={(e) => {
            setSearchMother(e.target.value);
          }}
          placeholder="search"
        />
        <button onClick={getmotherdata}>Search</button>
        <button>Add</button>
      </form>
      <div className="center">
        <table className="table_table">
          <thead className="tablethead">
            <tr>
              <th className="table_td">Adhar</th>
              <th className="table_td">Mother</th>
              <th className="table_td">Children</th>
              <th className="table_td">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((data) => {
              return (
                <tr className=" text-center" key={data.MotherID}>
                  <td className="table_td">{data.Adhar}</td>
                  <td className="table_td">{data.MotherName}</td>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
