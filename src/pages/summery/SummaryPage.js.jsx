// SummaryPage.js

import React from "react";
import "./SummaryPage.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
import Sidebar from "../Navbar/Sidebar";

function SummaryPage() {
  const navigate = useNavigate();
  // Sample data for child information
  const childInfo = {
    name: "Child Name",
    age: "3 years",
    dob: "January 1, 2020",
    motherName: "Mother Name",
    aadharCard: "XXXX-XXXX-XXXX",
  };

  // Sample data for child vaccination summary
  const vaccinationInfo = {
    height: "90cm",
    weight: "12kg",
    HUAC: "1234567890",
    immunizations: [
      { vaccine: "Vaccine 1", date: "January 15, 2023" },
      { vaccine: "Vaccine 2", date: "February 20, 2023" },
      { vaccine: "Vaccine 3", date: "March 5, 2023" },
      // Add more vaccine summary data as needed
    ],
  };

  // Sample data for development milestones
  const milestones = {
    sentence: "Child can say their first words.",
    checked: true, // Change to false to display a crossed checkbox
  };

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

            <span>Age:</span> {childInfo.age}
          </div>
          <div className="info-item">
            <span>Date of Birth:</span> {childInfo.dob}
          </div>
          <div className="info-item">
            <span>Mother Name:</span> {childInfo.motherName}
          </div>
          <div className="info-item">
            <span>Aadhaar Card:</span> {childInfo.aadharCard}
          </div>
        </section>

<div className="block-summary">
        {/* Vaccination Summary section */}
        <section className="vaccination-summary">
          <div className="vaccine-info">
              <span>Height:</span> {vaccinationInfo.height}
              <span>Weight:</span> {vaccinationInfo.weight}
              <span>HAUC:</span> {vaccinationInfo.HUAC}
          </div>
          <div className="immunizations">
            <h2>IMMUNIZATIONS</h2>
            <ul>
              {vaccinationInfo.immunizations.map((immunization, index) => (
               
                <li key={index}>
                  <b>{immunization.vaccine} -</b> <span>Given on {immunization.date}</span>
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
          onClick={() => navigate("/details")} >
         NEXT
        </button></div>
      </div>
    </div>
  );
}

export default SummaryPage;
