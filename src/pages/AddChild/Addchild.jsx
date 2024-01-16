import React, { useState } from "react";
import Sidebar from "../Navbar/Sidebar"; // Import your Sidebar component here
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Addchild() {
  const param = useParams();
  const { adhar } = param;
  const [ChildData, setChildData] = useState({
    ChildName: { firstName: "", MiddleName: "", LastName: "" },
    MotherAdhar: adhar,
    DateOfBirth: "",
    ChildAdhar: "",
    ChildNumber: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(ChildData);
  };

  return (
    <>
      <div className="growth-details-page">
        <Sidebar />

        <div className="content">
          <h1>Add child</h1>

          {/* Name, child adher,real adhar,dob,fathername, and HUAC inputs */}
          <div className="growth-inputs">
            <label htmlFor="ChildName">ChildName</label>
            <input
              type="text"
              value={ChildData.ChildName.firstName}
              onChange={(e) =>
                setChildData({
                  ...ChildData,
                  ChildName: {
                    ...ChildData.firstName,
                    firstName: e.target.value,
                  },
                })
              }
            />
            <label htmlFor="DateOfBirth">DOB</label>
            <input
              type="date"
              value={ChildData.DateOfBirth}
              onChange={(e) =>
                setChildData({ ...ChildData, DateOfBirth: e.target.value })
              }
            />
            <div>
              <label htmlFor="mother adhar">Mother Adhar</label>
              <input
                type="number"
                value={adhar}
                onChange={(e) =>
                  setChildData({ ...ChildData, MotherAdhar: e.target.value })
                }
              />
              <label htmlFor="ChildNumber">ChildNumber</label>
              <input
                type="number"
                value={ChildData.ChildNumber}
                onChange={(e) =>
                  setChildData({ ...ChildData, ChildNumber: e.target.value })
                }
              />
            </div>
            <label htmlFor="Adher">Child Adhar if created</label>
            <input
              type="number"
              value={ChildData.ChildAdhar}
              onChange={(e) =>
                setChildData({ ...ChildData, ChildAdhar: e.target.value })
              }
            />
          </div>
          <hr></hr>
          <button
            className=" block text-3xl bg-red-500 rounded-lg m-10 px-10 py-5 text-center"
            onClick={HandleSubmit}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default Addchild;
