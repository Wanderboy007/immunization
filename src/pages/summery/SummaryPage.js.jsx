// SummaryPage.js

import React, { useEffect, useState } from "react";
import "./SummaryPage.css";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";

function SummaryPage() {
  const param = useParams();
  const { childdata } = param;
  // console.log(childdata)
  const navigate = useNavigate();
  const [childInfo, setChildInfo] = useState({
    // name: "Child Name",
    // age: "3 years",
    // dob: "January 1, 2020",
    // motherName: "Mother Name",
    // aadharCard: "XXXX-XXXX-XXXX",
    // BirthWeight: "1",
    // CSection: 1,
    // ClinicalDelivery: 1,
    // DateOfBirth: "2004-02-16",
    // HomeDelivery: 1,
    // Lastname: "palli",
    // Middlename: "anand",
    // MotherAdhar: 111,
    // PerTerm: 0,
    // PlaceOfBirth: "dscsdcs",
    // name: "tejas",
    // ChildUID: "11101",
    // GrowthStatus: "TWO MONTHS",
  });

  const [databirth, setDatabirth] = useState({});

  const milestones = {
    sentence: "Child can say their first words.",
    checked: true,
  };

  useEffect(() => {
    async function getchilddata() {
      const getchild = await axios.get(
        `http://localhost:5000/api/getchildbyuid?childuid=${childdata}`
      );
      setChildInfo(getchild.data[0]);
      const getbirth = await axios.get(
        `http://localhost:5000/vaccin/birth?childuid=${childdata}`
      );
      console.log(getbirth);

      setDatabirth(getbirth.data[0]);
      // console.log(getchild);
    }
    getchilddata();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="summary-page">
        <h1>SUMMARY</h1>

        {/* Child Information section */}
        <section className="child-information">
          <h2>CHILD INFO</h2>
          <div className="info-item">
            <span>Name:</span> {childInfo.name}
          </div>
          <div className="info-item">
            <span>Age:</span> {childInfo.DateOfBirth}
          </div>
          <div className="info-item">
            <span>Date of Birth:</span> {childInfo.DateOfBirth}
          </div>
          <div className="info-item">
            <span>Mother Name:</span> {childInfo.motherName}
          </div>
          <div className="info-item">
            <span>Child UID:</span> {childInfo.ChildUID}
          </div>
        </section>

        <div className="block-summary">
          {/* Vaccination Summary section */}
          <section className="vaccination-summary">
            <div className="vaccine-info">
              {/* <span>Height:</span> {databirth.height}
              <span>Weight:</span> {databirth.weight}
              <span>HAUC:</span> {databirth.HUAC} */}
            </div>
            <div className="immunizations">
              <h2>IMMUNIZATIONS</h2>
              <ul>
                {Object.entries(databirth).map(([key, value], index) => (
                  <li key={index}>
                    {key} : {value === "" ? "Vaccin Given" : value}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Development Milestones section */}
          <section className="development-milestones">
            <h2>DEVELOPMENT MILESTONES</h2>
            <div
              className={`milestone-item ${
                milestones.checked ? "checked" : "crossed"
              }`}
            >
              {milestones.sentence}
            </div>
          </section>
          <button
            className="next-button"
            onClick={() => navigate("/dashboard")}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;
